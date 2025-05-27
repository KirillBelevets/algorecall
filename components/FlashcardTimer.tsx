"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  question: string;
  answer: string;
  initialTime?: number; // in seconds
  onReveal?: () => void;
};

export default function FlashcardTimer({
  question,
  answer,
  initialTime = 10,
  onReveal,
}: Props) {
  const [progress, setProgress] = useState(100); // 100% width
  const [showAnswer, setShowAnswer] = useState(false);

  const revealNow = () => {
    setShowAnswer(true);
    // Defer parent state update to avoid React warning
    setTimeout(() => {
      onReveal?.();
    }, 0);
  };

  useEffect(() => {
    if (showAnswer) return;

    const interval = 100; // ms
    const decrement = 100 / ((initialTime * 1000) / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev - decrement;
        if (next <= 0) {
          clearInterval(timer);
          revealNow();
          return 0;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [initialTime, showAnswer, revealNow]);

  return (
    <Card
      onClick={() => !showAnswer && revealNow()}
      className={`relative cursor-pointer select-none transition shadow-lg max-w-xl w-full overflow-hidden ${
        showAnswer ? "bg-green-100" : "bg-white"
      }`}
    >
      {/* Progress Bar */}
      {!showAnswer && (
        <div
          className="absolute top-0 left-0 h-1 bg-blue-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      )}

      {/* Content */}
      <CardContent className="p-6 text-center transition-all duration-300">
        <p className="text-lg font-medium animate-fade-in">
          {showAnswer ? answer : question}
        </p>
      </CardContent>
    </Card>
  );
}
