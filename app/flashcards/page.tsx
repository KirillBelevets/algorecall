import Flashcard from "@/Flashcard";
import { flashcards } from "@/flashcards";
import { shuffleArray } from "@/shuffle";

export default function FlashcardsPage() {
  const shuffled = shuffleArray(flashcards);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">🧠 Flashcards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shuffled.map((card) => (
          <Flashcard
            key={card.id}
            question={card.question}
            answer={card.answer}
          />
        ))}
      </div>
    </main>
  );
}
