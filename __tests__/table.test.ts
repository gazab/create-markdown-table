import {expect, test} from '@jest/globals'

import * as table from '../src/table'

const headerListAsString = '["Column1", "Column2"]'
const headerList = ['Column1', 'Column2']
const headerObject = {Column1: 'value 1', Column2: 'value 2'}
const headerResult = '| Column1 | Column2 |'
const dividerResult = '| --- | --- |'
const rowResult = '| value 1 | value 2 |\n| value 1 | value 2 |\n'

test('Test generate header with specified keys', () => {
  const result = table.generateHeader(headerList)
  expect(result).toEqual(headerResult)
})

test('Test generate header from object', () => {
  const result = table.generateHeader(headerObject)
  expect(result).toEqual(headerResult)
})

test('Test generate divider from object', () => {
  const result = table.generateDivider(headerObject)
  expect(result).toEqual(dividerResult)
})

test('Test generate rows from object list', () => {
  const result = table.generateRows([headerObject, headerObject], headerObject)
  expect(result).toEqual(rowResult)
})

test('Test generate template object from string', () => {
  const templateObject = JSON.parse(headerListAsString)
  const result = table.generateHeader(templateObject)
  expect(result).toEqual(headerResult)
})

test('Test generate rows with reduced columns', () => {
  const templateObject = ['Column1']
  const rowResult = '| value 1 |\n'

  const result = table.generateRows([headerObject], templateObject)
  expect(result).toEqual(rowResult)
})

test('Test generate rows with different column order', () => {
  const templateObject = ['Column2', 'Column1']
  const rowResult = '| value 2 | value 1 |\n'

  const result = table.generateRows([headerObject], templateObject)
  expect(result).toEqual(rowResult)
})
