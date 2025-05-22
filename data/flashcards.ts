export type Flashcard = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export const flashcards: Flashcard[] = [
  {
    id: "array-vs-set",
    question: "When would you use a Set instead of an Array?",
    answer:
      "When you need to ensure uniqueness and care about fast lookups (O(1) with Set vs O(n) with Array).",
    category: "Data Structures",
  },
  {
    id: "map-vs-object",
    question: "Why is Map preferred over plain Object for key-value?",
    answer:
      "Map preserves key insertion order, allows any key type, and provides better performance for frequent additions/removals.",
    category: "Data Structures",
  },
];
