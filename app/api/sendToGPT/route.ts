import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  const { messages } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    temperature: 0.8,
    n: 1,
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      ...messages,
    ],
  });

  const { data } = response;
  //console.log(data.choices[0].message)

  return NextResponse.json(data.choices[0].message);
}
