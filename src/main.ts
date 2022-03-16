import * as core from '@actions/core'
import * as path from 'path'

import * as table from './table'
import * as data from './data'

async function run(): Promise<void> {
  try {
    // Parse parameters
    const fileInput = core.getInput('file')
    const yamlFile = core.getInput('yaml-file')

    const filePath = path.join(process.env.GITHUB_WORKSPACE ?? '', fileInput)
    core.info(`Reading file from ${filePath}`)

    let list = []
    if (filePath.endsWith('.json')) {
      list = data.readJsonFile(filePath)
    } else if (filePath.endsWith('.yaml') || filePath.endsWith('.yml')) {
      list = data.readYamlFile(filePath)
    } else {
      core.setFailed('No input file found')
    }

    core.info(`Found list with ${list.length} rows`)

    // Take first object in source list and use as table template object
    const templeteObject = list[0]

    // Generate header and corresponding divider
    const header = table.generateHeader(templeteObject)
    const divider = table.generateDivider(templeteObject)
    core.debug('Built header: ' + header)

    // Generate table rows
    const rows = table.generateRows(list)

    // Put them all together
    const content = header + '\n' + divider + '\n' + rows
    core.setOutput('table', content)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
