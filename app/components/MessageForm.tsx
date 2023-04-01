"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function MessageForm() {
  const [messages, setMessages] = useState<Message[]>([]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget[0] as HTMLInputElement;

    setMessages([...messages, { role: "user", content: input.value }]);

    const res = await fetch("api/sendToGPT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });
    input.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text " placeholder="enter your message..." />
      <button type="submit"> Send </button>
    </form>
  );
}

export default MessageForm;
