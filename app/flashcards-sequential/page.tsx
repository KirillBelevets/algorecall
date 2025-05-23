"use client";

import { useState, useEffect } from "react";
import { Flashcard, flashcards as originalCards } from "@/flashcards";
import FlashcardTimer from "@/FlashcardTimer";
import { Button } from "@/components/ui/button";
import { shuffleArray } from "@/shuffle";

export default function FlashcardsSequentialPage() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [index, setIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setCards(shuffleArray(originalCards));
  }, []);

  const current = cards[index];
  const isLast = index === cards.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setIndex((prev) => prev + 1);
      setShowNext(false);
    }
  };

  if (!cards.length) return <p className="text-white">Loading...</p>;

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4 gap-4">
      <p className="text-sm text-muted-foreground">
        Card {index + 1} of {cards.length}
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
        <p className="text-green-500 font-semibold mt-4">
          ✅ You’ve completed all cards!
        </p>
      )}
    </main>
  );
}
