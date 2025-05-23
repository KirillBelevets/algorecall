"use client";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export default function Flashcard({ question, answer }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      onClick={() => setRevealed(!revealed)}
      className="cursor-pointer bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition duration-200 ease-in-out text-left break-words"
    >
      <p className="text-lg font-medium text-white mb-2 leading-relaxed">
        {question}
      </p>

      {revealed && (
        <p className="text-base text-gray-300 mt-4 border-t border-gray-600 pt-4 leading-relaxed">
          {answer}
        </p>
      )}

      {!revealed && (
        <p className="text-sm text-gray-500 mt-4 italic">
          Click to reveal answer
        </p>
      )}
    </div>
  );
}
