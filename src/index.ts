// import { WebClient, WebAPICallResult } from '@slack/web-api'
// const yaml = require('js-yaml')
// const fs   = require('fs')
import { SecretDriver } from './drivers/secret-driver'
import { ChatMessageRepository } from './repository/chat-mesasge-respository'


export const helloWorld = (req: any, res: any) => {
  const secretDriver = new SecretDriver('./secret.yaml')
  const repository = new ChatMessageRepository(secretDriver)
  repository.postMessage({
    text: 'test',
    channel: '#slack-ts-bot'
  })
  res.send('Hello, World');
};