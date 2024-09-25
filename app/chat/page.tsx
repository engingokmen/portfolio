"use client";
import ChatApp from "@engingokmen/library";
import { IMessage } from "@engingokmen/library/dist/types";

export default function Chat() {
  return <ChatApp messages={messages} onSentMessage={onSentMessage} />;
}

const messages = [
  { direction: 0, value: "Received1" },
  { direction: 1, value: "Sent2" },
  { direction: 0, value: "Received2" },
  { direction: 1, value: "Sent3" },
  { direction: 0, value: "Received3" },
];

const onSentMessage = (message: IMessage) => {
  console.log(message);
};
