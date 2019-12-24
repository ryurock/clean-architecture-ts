const yaml = require('js-yaml')
const fs   = require('fs')

import { ISecretDriver } from './i-secret-driver'

export interface SecretYaml {
  Description: string
  Parameters: any
}

export class SecretDriver implements ISecretDriver {
  private readonly _secret: SecretYaml

  constructor(yamlPath: string) {
    this._secret = yaml.safeLoad(fs.readFileSync(yamlPath, 'utf8'))
  }

  get secret():any {
    return this._secret.Parameters
  }
}