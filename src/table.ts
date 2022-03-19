interface Row {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  [key: string]: any
}

export const generateHeader = (template: Object): string => {
  return `| ${getColumnsFromTemplateObject(template).join(' | ')} |`.trim()
}

export const getColumnsFromTemplateObject = (
  templateObject: Object
): string[] => {
  if (!Array.isArray(templateObject)) {
    return Object.keys(templateObject)
  }
  return templateObject
}

export const generateDivider = (template: Object): string => {
  return `| ${getColumnsFromTemplateObject(template)
    .map(() => '--- | ')
    .join('')
    .trim()}`
}

export const generateRow = (row: Row, columns: string[]): string => {
  return `| ${columns.map(column => row[column as keyof Row]).join(' | ')} |\n`
}

export const generateRows = (rows: Row[], templateObject: Object): string => {
  return rows
    .map(row => generateRow(row, getColumnsFromTemplateObject(templateObject)))
    .join('')
}
