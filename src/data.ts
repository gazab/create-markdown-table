import * as fs from 'fs'
import * as yaml from 'js-yaml'
import path from 'path'

export const readJsonFile = (filePath: string): any[] => {
  const data = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(data) as any[]
}

export const readYamlFile = (filePath: string): any[] => {
  const data = fs.readFileSync(filePath, 'utf8')
  return yaml.load(data) as any[]
}
