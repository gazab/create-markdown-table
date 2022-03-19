import * as fs from 'fs'
import * as yaml from 'js-yaml'

export const readJsonFile = (filePath: string): Object[] => {
  const data = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(data) as Object[]
}

export const readYamlFile = (filePath: string): Object[] => {
  const data = fs.readFileSync(filePath, 'utf8')
  return yaml.load(data) as Object[]
}
