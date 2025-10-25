"use client";

import React, { FC, useState } from "react";
import TypingPanel from "./TypingPanel/TypingPanel";
import MessageBox from "./MessageBox/MessageBox";

type Props = {};

const GigaChat: FC<Props> = ({}) => {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="flex flex-col align-end w-full h-full bg-neutral-700 text-white grow border-red-600 border-solid border-2">
      <MessageBox messages={messages} />
      <TypingPanel
        onFinishTyping={(msg) => {
          console.log(msg);
          setMessages((prev) => [...prev, msg]);
        }}
      />
    </div>
  );
};

export default GigaChat;
