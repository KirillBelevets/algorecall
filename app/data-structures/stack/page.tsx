"use client";

import { useState } from "react";

export default function StackVisualizer() {
  const [stack, setStack] = useState<number[]>([]);
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const push = () => {
    const val = parseInt(input);
    if (isNaN(val)) return;
    setStack((prev) => [...prev, val]);
    setLog((prev) => [`push(${val})`, ...prev]);
    setInput("");
  };

  const pop = () => {
    if (stack.length === 0) return;
    const val = stack[stack.length - 1];
    setStack((prev) => prev.slice(0, -1));
    setLog((prev) => [`pop() → ${val}`, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">📦 Stack Visualizer (LIFO)</h1>
      <p className="text-sm text-gray-400 mb-2">
        This is LIFO: Last-In, First-Out
      </p>

      <div className="flex gap-2 mb-6">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter number"
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
        />
        <button
          onClick={push}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded"
        >
          Push
        </button>
        <button
          onClick={pop}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded"
        >
          Pop
        </button>
      </div>

      <div className="flex flex-col-reverse gap-2 items-center mt-8">
        {stack.map((item, idx) => (
          <div
            key={idx}
            className="w-32 py-2 text-center bg-blue-600 rounded shadow-md"
          >
            {item}
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-400">
        Top of stack is at the bottom ⬇️ (LIFO)
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">📊 Operations Log</h2>
      <ul className="w-full max-w-xl text-sm text-gray-400 space-y-1">
        {log.slice(0, 6).map((entry, idx) => (
          <li key={idx} className="border-b border-gray-700 pb-1">
            {entry}
          </li>
        ))}
      </ul>
    </main>
  );
}
