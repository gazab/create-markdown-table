import * as data from '../src/data'
import {expect, test, it} from '@jest/globals'
import path from 'path'

const example1jsonPath = './test-data/example1.json'
const example1yamlPath = './test-data/example1.yaml'

const fullExample1jsonPath = path.join(__dirname, example1jsonPath)
const fullExample1yamlPath = path.join(__dirname, example1yamlPath)

test('Test read JSON file', () => {
  const result = data.readJsonFile(fullExample1jsonPath)
  expect(result.length).toBe(2)
  expect(result[0].Name).toBe('JSON 1')
})

test('Test read YAML file', () => {
  const result = data.readYamlFile(fullExample1yamlPath)
  expect(result.length).toBe(2)
  expect(result[0].Name).toBe('YAML 1')
})

test.each([
  [null, example1jsonPath, null, path.join(example1jsonPath)],
  [null, null, example1yamlPath, path.join(example1yamlPath)],
  ['./', null, example1yamlPath, path.join(example1yamlPath)]
])(
  'getFilePath should, when basepath is %s, jsonFile is %s and yamlFile is %s, return %s',
  (basePath, jsonFile, yamlFile, expected) => {
    const result = data.getFilePath(basePath, jsonFile, yamlFile)
    expect(result).toBe(expected)
  }
)

test('getFilePath should throw Error when no file name is supplied', () => {
  expect(() => data.getFilePath(undefined, undefined, undefined)).toThrowError()
})
