"use client";

import { useState } from "react";

type Color = "green" | "red" | "purple" | "yellow";

const colorMap: Record<Color, string> = {
  green: "bg-green-600 hover:bg-green-500",
  red: "bg-red-600 hover:bg-red-500",
  purple: "bg-purple-600 hover:bg-purple-500",
  yellow: "bg-yellow-600 hover:bg-yellow-500",
};

export default function ArrayVisualizer() {
  const [array, setArray] = useState<number[]>([]);
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  const clearHighlightAfterDelay = () =>
    setTimeout(() => setHighlightIndex(null), 600);

  const handlePush = () => {
    const val = parseInt(input);
    if (isNaN(val)) return;
    setArray((prev) => [...prev, val]);
    setLog((prev) => [`push(${val})`, ...prev]);
    setInput("");
    setHighlightIndex(array.length); // last index
    clearHighlightAfterDelay();
  };

  const handlePop = () => {
    if (array.length === 0) return;
    const removed = array[array.length - 1];
    setArray((prev) => prev.slice(0, -1));
    setLog((prev) => [`pop() → ${removed}`, ...prev]);
    setHighlightIndex(array.length - 1);
    clearHighlightAfterDelay();
  };

  const handleUnshift = () => {
    console.log("CLike");

    const val = parseInt(input);
    if (isNaN(val)) return;
    setArray((prev) => [val, ...prev]);
    setLog((prev) => [`unshift(${val})`, ...prev]);
    setInput("");
    setHighlightIndex(0);
    clearHighlightAfterDelay();
  };

  const handleShift = () => {
    console.log("CLike2");

    if (array.length === 0) return;
    const removed = array[0];
    setArray((prev) => prev.slice(1));
    setLog((prev) => [`shift() → ${removed}`, ...prev]);
    setHighlightIndex(0);
    clearHighlightAfterDelay();
  };

  const buttons: {
    label: string;
    onClick: () => void;
    color: Color;
    hint: string;
    textColor?: string;
  }[] = [
    {
      label: "Push",
      onClick: handlePush,
      color: "green",
      hint: "O(1)",
    },
    {
      label: "Pop",
      onClick: handlePop,
      color: "red",
      hint: "O(1)",
    },
    {
      label: "Unshift",
      onClick: handleUnshift,
      color: "purple",
      hint: "O(n)",
    },
    {
      label: "Shift",
      onClick: handleShift,
      color: "yellow",
      hint: "O(n)",
      textColor: "text-white",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🔢 Array Visualizer</h1>
      <p className="text-sm text-gray-400 mb-6 text-center max-w-xl">
        Visualize basic array operations. Arrays are indexed collections with
        fast access.
      </p>

      <div className="flex flex-wrap gap-2 justify-center mb-6 w-full sm:w-auto">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Value"
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700 w-32"
        />

        {buttons.map(
          ({ label, onClick, color, hint, textColor = "text-white" }) => (
            <button
              key={label}
              onClick={onClick}
              className={`relative group ${colorMap[color]} ${textColor} px-4 py-2 rounded shadow`}
            >
              {label}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 text-xs px-2 py-1 rounded bg-gray-800 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                🧠 {hint}
              </span>
            </button>
          )
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {array.map((val, idx) => (
          <div
            key={idx}
            className={`w-16 h-16 rounded flex items-center justify-center font-bold shadow transition-all duration-300 ${
              highlightIndex === idx
                ? "bg-yellow-400 text-black"
                : "bg-blue-600 text-white"
            }`}
          >
            {val}
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-2">📊 Operations Log</h2>
      <ul className="text-sm text-gray-400 space-y-1 max-w-xl text-left">
        {log.slice(0, 8).map((entry, idx) => (
          <li key={idx} className="border-b border-gray-700 pb-1">
            {entry}
          </li>
        ))}
      </ul>
    </main>
  );
}
