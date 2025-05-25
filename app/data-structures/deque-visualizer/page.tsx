"use client";

import { useState } from "react";
import { nanoid } from "nanoid";

interface DequeItem {
  id: string;
  value: number;
}

export default function DequeVisualizer() {
  const [deque, setDeque] = useState<DequeItem[]>([]);
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const pushFront = () => {
    const val = parseInt(input);
    if (isNaN(val)) return;
    setDeque((prev) => [{ id: nanoid(), value: val }, ...prev]);
    setLog((prev) => [`pushFront(${val})`, ...prev]);
    setInput("");
  };

  const pushBack = () => {
    const val = parseInt(input);
    if (isNaN(val)) return;
    setDeque((prev) => [...prev, { id: nanoid(), value: val }]);
    setLog((prev) => [`pushBack(${val})`, ...prev]);
    setInput("");
  };

  const popFront = () => {
    if (deque.length === 0) return;
    const val = deque[0].value;
    setDeque((prev) => prev.slice(1));
    setLog((prev) => [`popFront() → ${val}`, ...prev]);
  };

  const popBack = () => {
    if (deque.length === 0) return;
    const val = deque[deque.length - 1].value;
    setDeque((prev) => prev.slice(0, -1));
    setLog((prev) => [`popBack() → ${val}`, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🔃 Deque Visualizer</h1>

      <div className="flex flex-wrap gap-2 w-full justify-center items-center mb-6">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Value"
          className="w-full sm:w-40 px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
        />

        <button
          onClick={pushFront}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded relative group"
        >
          Push Front
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1)
          </span>
        </button>

        <button
          onClick={pushBack}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded relative group"
        >
          Push Back
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1)
          </span>
        </button>

        <button
          onClick={popFront}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded relative group"
        >
          Pop Front
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1)
          </span>
        </button>

        <button
          onClick={popBack}
          className="bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded relative group"
        >
          Pop Back
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1)
          </span>
        </button>
      </div>

      <div className="flex gap-2 flex-wrap justify-center mb-8 transition-all">
        {deque.map((item) => (
          <div
            key={item.id}
            className="px-4 py-2 bg-gray-800 text-white rounded shadow highlight"
          >
            {item.value}
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-2">📊 Operation Log</h2>
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
