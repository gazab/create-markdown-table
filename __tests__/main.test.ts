import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

test('test full JSON run', () => {
  runAction('./test-data/example1.json', 'JSON 1')
})

test('test full YAML run', () => {
  runAction('./test-data/example1.yaml', 'YAML 1')
})

const runAction = (file: string, expectedContent: string) => {
  process.env['INPUT_FILE'] = path.join(__dirname, file)
  process.env['GITHUB_WORKSPACE'] = './'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }

  const result = cp.execFileSync(np, [ip], options).toString()
  expect(result).toContain(expectedContent)
}
