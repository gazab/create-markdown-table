export const generateHeader = (template: Object) => {
  return ('| ' + createTemplate(template).join(' | ') + ' |').trim()
}

export const createTemplate = (templateObject: Object) => {
  if (!Array.isArray(templateObject)) {
    return Object.keys(templateObject)
  }
  return templateObject
}

export const generateDivider = (template: Object) => {
  return (
    '| ' +
    createTemplate(template)
      .map(() => '--- | ')
      .join('')
      .trim()
  )
}

export const generateRow = (row: Object) => {
  return '| ' + Object.values(row).join(' | ') + ' |' + '\n'
}

export const generateRows = (rows: Object[]) => {
  return rows.map(row => generateRow(row)).join('')
}
