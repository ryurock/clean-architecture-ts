import { ChatPostMessageArguments } from '@slack/web-api'

export interface IChatMessageRepository {
  postMessage(messageOptions: ChatPostMessageArguments): void
}