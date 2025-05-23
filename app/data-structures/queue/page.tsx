"use client";

import { useState } from "react";

export default function QueueVisualizer() {
  const [queue, setQueue] = useState<number[]>([]);
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const enqueue = () => {
    if (input === "") return;
    const value = parseInt(input);
    setQueue((prev) => [...prev, value]);
    setLog((prev) => [
      `enqueue(${value}) → [${[...queue, value].join(", ")}]`,
      ...prev,
    ]);
    setInput("");
  };

  const dequeue = () => {
    if (queue.length === 0) return;
    const value = queue[0];
    setQueue((prev) => prev.slice(1));
    setLog((prev) => [
      `dequeue() → ${value} → [${queue.slice(1).join(", ")}]`,
      ...prev,
    ]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">📥 Queue Visualizer (FIFO)</h1>
      <p className="text-sm text-gray-400 mb-2">
        This is FIFO: First-In, First-Out
      </p>

      <div className="flex gap-2 mb-6">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Enter number"
        />
        <button
          onClick={enqueue}
          className="relative group bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded"
        >
          Enqueue
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1) – push to end
          </span>
        </button>

        <button
          onClick={dequeue}
          className="relative group bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded"
        >
          Dequeue
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1) – remove from front
          </span>
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        {queue.map((item, idx) => (
          <div
            key={idx}
            className="w-14 py-2 text-center bg-blue-600 rounded shadow-md"
          >
            {item}
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-2">📊 Operations Log</h2>
      <ul className="w-full max-w-xl text-sm text-gray-400 space-y-1">
        {log.slice(0, 5).map((entry, idx) => (
          <li key={idx} className="border-b border-gray-700 pb-1">
            {entry}
          </li>
        ))}
      </ul>
    </main>
  );
}
