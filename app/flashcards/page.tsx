import FlashcardTimer from "@/FlashcardTimer";
import { flashcards } from "@/flashcards";

export default function FlashcardsPage() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {flashcards.map((card) => (
        <FlashcardTimer
          key={card.id}
          question={card.question}
          answer={card.answer}
          initialTime={10}
        />
      ))}
    </main>
  );
}
