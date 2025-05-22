"use client";

import { useState } from "react";
import { flashcards as originalCards } from "@/flashcards";
import FlashcardTimer from "@/FlashcardTimer";
import { Button } from "@/components/ui/button";
import { shuffleArray } from "@/shuffle";

export default function FlashcardsSequentialPage() {
  const [cards] = useState(() => shuffleArray(originalCards));
  const [index, setIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);

  const current = cards[index];
  const isLast = index === cards.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setIndex((prev) => prev + 1);
      setShowNext(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4 gap-4">
      <p className="text-sm text-muted-foreground">
        Card {index + 1} of {originalCards.length}
      </p>

      <FlashcardTimer
        key={current.id}
        question={current.question}
        answer={current.answer}
        initialTime={10}
        onReveal={() => setShowNext(true)}
      />

      {showNext && !isLast && (
        <Button onClick={handleNext} className="mt-4">
          Next
        </Button>
      )}

      {showNext && isLast && (
        <p className="text-green-600 font-semibold mt-4">
          ✅ You’ve completed all cards!
        </p>
      )}
    </main>
  );
}
