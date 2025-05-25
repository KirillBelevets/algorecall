"use client";

import { useState } from "react";

export default function SetVisualizer() {
  const [setData, setSetData] = useState<Set<number>>(new Set());
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const animateHighlight = (val: number) => {
    setHighlighted(val);
    setTimeout(() => setHighlighted(null), 500);
  };

  const handleAdd = () => {
    const val = parseInt(input);
    if (!isNaN(val)) {
      setSetData((prev) => new Set(prev).add(val));
      setLog((prev) => [`added: ${val}`, ...prev]);
      animateHighlight(val);
      setInput("");
    }
  };

  const handleDelete = () => {
    const val = parseInt(input);
    if (!isNaN(val)) {
      setSetData((prev) => {
        const newSet = new Set(prev);
        newSet.delete(val);
        return newSet;
      });
      setLog((prev) => [`deleted: ${JSON.stringify(val)}`, ...prev]);
      animateHighlight(val);
      setInput("");
    }
  };

  const handleHas = () => {
    const val = parseInt(input);
    if (!isNaN(val)) {
      const result = setData.has(val);
      setLog((prev) => [`has(${val}) → ${result}`, ...prev]);
      setInput("");
    }
  };

  const handleClear = () => {
    setSetData(new Set());
    setLog((prev) => [`clear()`, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🧮 Set Visualizer</h1>
      <p className="text-sm text-gray-400 mb-4 text-center max-w-xl">
        This visualizes the JavaScript <code>Set</code> data structure with
        <strong> O(1) </strong> average complexity for add, delete, has, and
        clear.
      </p>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Value"
          className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 w-32"
        />

        <button
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded relative group"
        >
          Add
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-xs px-2 py-1 rounded bg-gray-700 opacity-0 group-hover:opacity-100 pointer-events-none">
            🧠 O(1)
          </span>
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded relative group"
        >
          Delete
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-xs px-2 py-1 rounded bg-gray-700 opacity-0 group-hover:opacity-100 pointer-events-none">
            🧠 O(1)
          </span>
        </button>

        <button
          onClick={handleHas}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded relative group"
        >
          Has
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-xs px-2 py-1 rounded bg-gray-700 opacity-0 group-hover:opacity-100 pointer-events-none">
            🧠 O(1)
          </span>
        </button>

        <button
          onClick={handleClear}
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded relative group"
        >
          Clear
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-xs px-2 py-1 rounded bg-gray-700 opacity-0 group-hover:opacity-100 pointer-events-none">
            🧠 O(n)
          </span>
        </button>
      </div>
      <div className="flex gap-2 flex-wrap justify-center mb-8">
        {[...setData].map((val) => (
          <div
            key={val}
            className={`px-4 py-2 rounded text-center w-16 shadow ${
              highlighted === val
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            {val}
          </div>
        ))}
      </div>
      <h2 className="text-lg font-semibold mb-2">📊 Operations Log</h2>
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
