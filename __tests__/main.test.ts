import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

test('test full JSON run', () => {
  runAction('JSON 1', './test-data/example1.json', '', '')
})

test('test full YAML run', () => {
  runAction('YAML 1', './test-data/example1.yaml', '', '')
})

test('test full run with columns parameter', () => {
  runAction('Java', './test-data/example1.json', '["Url", "Language"]', '')
})

test('test full run with capitalize parameter = false', () => {
  runAction('field', './test-data/example2.json', '', 'false')
})

test('test full run with capitalize parameter undefined', () => {
  runAction('Field', './test-data/example2.json', '', '')
})

const runAction = (
  expectedContent: string,
  file: string,
  columns: string,
  capitalize: string
) => {
  process.env['INPUT_FILE'] = file
  process.env['INPUT_COLUMNS'] = columns
  process.env['INPUT_CAPITALIZE'] = capitalize

  process.env['GITHUB_WORKSPACE'] = __dirname

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }

  const result = cp.execFileSync(np, [ip], options).toString()
  expect(result).toContain(expectedContent)
}
