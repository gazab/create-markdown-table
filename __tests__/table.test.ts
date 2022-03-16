import {expect, test} from '@jest/globals'

import * as table from '../src/table'

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
  const result = table.generateRows([headerObject, headerObject])
  expect(result).toEqual(rowResult)
})
