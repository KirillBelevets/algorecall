"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  question: string;
  answer: string;
  onReveal?: () => void;
};

export default function FlashcardDisplay({
  question,
  answer,
  onReveal,
}: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleReveal = () => {
    if (!showAnswer) {
      setShowAnswer(true);
      onReveal?.();
    }
  };

  return (
    <Card
      onClick={handleReveal}
      className={`cursor-pointer select-none transition shadow-lg max-w-xl w-full ${
        showAnswer ? "bg-green-100" : "bg-white"
      }`}
    >
      <CardContent className="p-6 text-center">
        <p className="text-lg font-medium">{showAnswer ? answer : question}</p>
      </CardContent>
    </Card>
  );
}
