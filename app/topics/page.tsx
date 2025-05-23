"use client";

import { useEffect, useState } from "react";
import { flashcards } from "@/flashcards";
import FlashcardReveal from "@/FlashcardReveal";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function FlashcardTopicsPage() {
  const [topic, setTopic] = useState("react");
  const [shuffledCards, setShuffledCards] = useState<typeof flashcards>([]);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const topicCards = flashcards.filter((f) => f.topic === topic);
    const shuffled = shuffle(topicCards);
    setShuffledCards(shuffled);
    setVisibleCount(5);
  }, [topic]);

  const topics = [...new Set(flashcards.map((f) => f.topic))];
  const visibleCards = shuffledCards.slice(0, visibleCount);

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <Select value={topic} onValueChange={setTopic}>
        <SelectTrigger className="w-full sm:w-64">
          <SelectValue placeholder="Choose topic" />
        </SelectTrigger>
        <SelectContent>
          {topics.map((t) => (
            <SelectItem key={t} value={t}>
              {t}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="space-y-4">
        {visibleCards.map((card) => (
          <FlashcardReveal
            key={card.id}
            question={card.question}
            answer={card.answer}
          />
        ))}
      </div>

      {visibleCount < shuffledCards.length && (
        <div className="flex justify-center">
          <Button onClick={() => setVisibleCount((c) => c + 5)}>
            Load More
          </Button>
        </div>
      )}
    </main>
  );
}
