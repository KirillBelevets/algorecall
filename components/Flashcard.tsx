"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  question: string;
  answer: string;
};

export default function Flashcard({ question, answer }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card
      onClick={() => setShowAnswer(!showAnswer)}
      className="cursor-pointer select-none hover:shadow-lg transition"
    >
      <CardContent className="p-6 text-center">
        <p className="text-lg font-medium">{showAnswer ? answer : question}</p>
      </CardContent>
    </Card>
  );
}
