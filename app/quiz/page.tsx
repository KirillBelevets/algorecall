"use client";

import { useEffect, useState } from "react";
import { quizQuestions as originalQuestions, quizQuestions } from "@/quiz-bank";
import { shuffleArray } from "@/shuffle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type AnswerRecord = {
  id: string;
  selected: string;
  correct: string;
};

export default function QuizPage() {
  const [score, setScore] = useState(0);

  const [questions, setQuestions] = useState<typeof originalQuestions | null>(
    null
  );

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  useEffect(() => {
    const randomSubset = shuffleArray(originalQuestions).slice(0, 20);

    setQuestions(randomSubset);
  }, []);

  if (!questions) {
    return (
      <main className="flex items-center justify-center min-h-screen p-6">
        <p className="text-muted-foreground">Loading quiz...</p>
      </main>
    );
  }

  const current = questions[index];
  const isCorrect = selected === current.correct;
  const isLast = index === questions.length - 1;

  const handleSelect = (option: string) => {
    setSelected(option);
    setShowExplanation(true);
    if (option === current.correct) {
      setScore((prev) => prev + 1);
    }
    setAnswers((prev) => [
      ...prev,
      {
        id: current.id,
        selected: option,
        correct: current.correct,
      },
    ]);
  };

  const handleNext = () => {
    setIndex((prev) => prev + 1);
    setSelected(null);
    setShowExplanation(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 gap-4">
      <p className="text-sm text-muted-foreground">
        Question {index + 1} of {quizQuestions.length}
      </p>

      <Card className="max-w-xl w-full text-center">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-4">{current.question}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {current.options.map((opt) => (
              <Button
                key={opt}
                variant={
                  selected
                    ? opt === current.correct
                      ? "default"
                      : opt === selected
                      ? "destructive"
                      : "outline"
                    : "outline"
                }
                onClick={() => handleSelect(opt)}
                disabled={!!selected}
              >
                {opt}
              </Button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-6 text-sm text-left">
              <p className={isCorrect ? "text-green-600" : "text-red-600"}>
                {isCorrect
                  ? "✅ Correct!"
                  : `❌ Incorrect. Correct: ${current.correct}`}
              </p>
              <p className="mt-1 text-muted-foreground">
                {current.explanation}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {showExplanation && !isLast && (
        <Button onClick={handleNext} className="mt-4">
          Next
        </Button>
      )}

      {showExplanation && isLast && (
        <div className="text-center mt-6 max-w-2xl w-full">
          <p className="text-green-700 font-semibold text-xl mb-2">
            ✅ Quiz completed!
          </p>
          <p className="text-muted-foreground mb-4">
            You got <strong>{score}</strong> out of{" "}
            <strong>{questions.length}</strong> correct.
          </p>

          <div className="text-left bg-white rounded-lg shadow p-4 space-y-4">
            {questions.map((q, i) => {
              const answer = answers.find((a) => a.id === q.id);
              const isCorrect = answer?.selected === q.correct;

              return (
                <div key={q.id}>
                  <p className="font-semibold">
                    {i + 1}. {q.question}
                  </p>
                  <p className={isCorrect ? "text-green-600" : "text-red-600"}>
                    {isCorrect ? "✔️ Correct" : `❌ Incorrect`}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Your answer: {answer?.selected} — Correct: {q.correct}
                  </p>
                </div>
              );
            })}
          </div>

          <Button className="mt-6" onClick={() => window.location.reload()}>
            🔁 Restart Quiz
          </Button>
        </div>
      )}
    </main>
  );
}
