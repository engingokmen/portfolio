"use client";
import { ChatApp } from "@engingokmen/library";
import { IMessage } from "@engingokmen/library/dist/types";
import styles from "./styles.module.css";

export default function Chat() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ChatApp messages={messages} onSentMessage={onSentMessage} />
      </div>
      <div className={styles.actions}>
        <p>Some actions that you may take:</p>
        <ul>
          <li>
            <code>/select</code> : to display combobox
          </li>
          <li>
            <code>/image 10</code> : to retreieve image from{" "}
            <a href="https://picsum.photos" target="__blank">
              picsum.photos
            </a>{" "}
            API with id
          </li>
          <li>
            <code>hel</code> : that will trigger autocomplete and popup some
            results like "hello"
          </li>
        </ul>
      </div>
    </div>
  );
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
