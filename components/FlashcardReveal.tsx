"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  question: string;
  answer: string;
};

export default function FlashcardReveal({ question, answer }: Props) {
  const [show, setShow] = useState(false);

  return (
    <Card
      onClick={() => setShow((s) => !s)}
      className={`cursor-pointer max-w-xl w-full transition rounded-xl border ${
        show
          ? "bg-zinc-800 text-zinc-100 border-zinc-600"
          : "bg-zinc-100 text-zinc-800 border-zinc-300"
      } hover:shadow-md hover:border-zinc-400`}
    >
      <CardContent className="p-6 text-center space-y-2">
        <p className="text-lg leading-relaxed font-medium tracking-wide">
          {show ? answer : question}
        </p>
        <p className="text-xs text-zinc-400">
          {show ? "Click to hide answer" : "Click to reveal answer"}
        </p>
      </CardContent>
    </Card>
  );
}
