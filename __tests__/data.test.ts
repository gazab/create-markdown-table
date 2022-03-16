import * as data from '../src/data'
import {expect, test, it} from '@jest/globals'
import path from 'path'

const example1jsonPath = './test-data/example1.json'
const example1yamlPath = './test-data/example1.yaml'

const fullExample1jsonPath = path.join(__dirname, example1jsonPath)
const fullExample1yamlPath = path.join(__dirname, example1yamlPath)

test('Test read JSON file', () => {
  const result = data.readJsonFile(fullExample1jsonPath) as any[]
  expect(result.length).toBe(2)
  expect(result[0]['Name']).toBe('JSON 1')
})

test('Test read YAML file', () => {
  const result = data.readYamlFile(fullExample1yamlPath) as any[]
  expect(result.length).toBe(2)
  expect(result[0]['Name']).toBe('YAML 1')
})
