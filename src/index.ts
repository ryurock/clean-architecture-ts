import { Request, Response } from "express";

import { SecretDriver } from './drivers/secret-driver'
import { ChatMessageRepository } from './repository/chat-mesasge-respository'

export const slackbot = async (req: Request, res: Response) => {
  console.log(req.params)
  console.log(req.body)
  console.log(req.path)
  if (req.path == '/event/chalenge') {
    return res.send(req.body.challenge);
  }
  // const secretDriver = new SecretDriver('./secret.yaml')
  // const repository = new ChatMessageRepository(secretDriver)
  // repository.postMessage({
  //   text: 'test',
  //   channel: '#slack-ts-bot'
  // })
  // res.send('Hello, World');
};