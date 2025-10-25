import React, { FC } from "react";

interface Props {
  messages: string[];
}

const MessageBox: FC<Props> = ({ messages }) => {
  return (
    <div className="grow p-3">
      {messages.map((msg) => (
        <div>{msg}</div>
      ))}
    </div>
  );
};

export default MessageBox;
