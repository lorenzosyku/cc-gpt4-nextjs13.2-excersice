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
    const messageToSend: Message = { role: "user", content: input.value };
    const messagesToSend = [...messages, messageToSend]

    const res = await fetch("api/sendToGPT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages:messagesToSend }),
    });
    const data = await res.json();
    const message: Message = data;

    setMessages([...messagesToSend, message]);

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
