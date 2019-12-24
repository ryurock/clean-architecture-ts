
import { ChatPostMessageArguments, WebClient } from '@slack/web-api'

import { IChatMessageRepository } from './i-chat-mesasge-respository'
import { ISecretDriver } from '../drivers/i-secret-driver'

export class ChatMessageRepository implements IChatMessageRepository {
  private _secretDriver: ISecretDriver
  constructor(secretDriver: ISecretDriver) {
    this._secretDriver = secretDriver
  }

  postMessage(messageOptions: ChatPostMessageArguments) {
    const accessToken = this._secretDriver.secret.Slack.SlackBot.OAuth.AccessToken
    const slackWebClient = new WebClient(accessToken)
    slackWebClient.chat.postMessage(messageOptions)
  }
}