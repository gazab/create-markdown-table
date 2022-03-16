export const generateHeader = (template: Object): string => {
  return `| ${createTemplate(template).join(' | ')} |`.trim()
}

export const createTemplate = (templateObject: Object): Object[] => {
  if (!Array.isArray(templateObject)) {
    return Object.keys(templateObject)
  }
  return templateObject
}

export const generateDivider = (template: Object): string => {
  return `| ${createTemplate(template)
    .map(() => '--- | ')
    .join('')
    .trim()}`
}

export const generateRow = (row: Object): string => {
  return `| ${Object.values(row).join(' | ')} |\n`
}

export const generateRows = (rows: Object[]): string => {
  return rows.map(row => generateRow(row)).join('')
}
