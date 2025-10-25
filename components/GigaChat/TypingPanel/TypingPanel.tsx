import React, { FC, useState, KeyboardEvent } from "react";

interface Props {
  onFinishTyping: (msg: string) => void;
}

const TypingPanel: FC<Props> = ({ onFinishTyping }) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim() !== "") {
      e.preventDefault();
      onFinishTyping(value.trim());
      setValue("");
    }
  };

  return (
    <div className="flex justify-center p-3 bg-neutral-400 w-full h-16">
      <input
        type="text"
        className="bg-neutral-800 text-white rounded-lg px-2 w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
    </div>
  );
};

export default TypingPanel;
