import * as core from '@actions/core'
import * as path from 'path'

import * as table from './table'
import * as data from './data'

async function run(): Promise<void> {
  try {
    // Parse parameters
    const jsonFile = core.getInput('json-file')
    const yamlFile = core.getInput('yaml-file')

    const filePath = data.getFilePath(
      process.env.GITHUB_WORKSPACE,
      jsonFile,
      yamlFile
    )
    core.info(`Reading file from ${filePath}`)

    let list = []
    if (jsonFile) {
      list = data.readJsonFile(filePath)
    } else if (yamlFile) {
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
