import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

// shows how the runner will run a javascript action with env / stdout protocol
test('test full JSON run', () => {
  process.env['INPUT_YAML-FILE'] = ''
  process.env['INPUT_JSON-FILE'] = path.join(
    __dirname,
    './test-data/example1.json'
  )
  process.env['GITHUB_WORKSPACE'] = './'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }

  const result = cp.execFileSync(np, [ip], options).toString()
  expect(result).toContain('JSON 1')
})

// shows how the runner will run a javascript action with env / stdout protocol
test('test full YAML run', () => {
  process.env['INPUT_JSON-FILE'] = ''
  process.env['INPUT_YAML-FILE'] = path.join(
    __dirname,
    './test-data/example1.yaml'
  )
  process.env['GITHUB_WORKSPACE'] = './'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }

  const result = cp.execFileSync(np, [ip], options).toString()
  expect(result).toContain('YAML 1')
})
