interface Row {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  [key: string]: any
}

export const generateHeader = (template: Object, capitalize = true): string => {
  return `| ${getColumnsFromTemplateObject(template)
    .map(column => (capitalize ? capitalizeString(column) : column))
    .join(' | ')} |`.trim()
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

function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
