"use client";

import { useState } from "react";

interface Node {
  id: number;
  value: number;
}

export default function LinkedListVisualizer() {
  const [list, setList] = useState<Node[]>([]);
  const [input, setInput] = useState("");
  const [indexInput, setIndexInput] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [nextId, setNextId] = useState(1);

  const insert = () => {
    if (input === "") return;
    const value = parseInt(input);
    const newNode = { id: nextId, value };
    setNextId((id) => id + 1);
    setList((prev) => [...prev, newNode]);
    setLog((prev) => [`insert(${value}) at tail`, ...prev]);
    setInput("");
  };

  const insertAtIndex = () => {
    if (input === "" || indexInput === "") return;
    const value = parseInt(input);
    const index = parseInt(indexInput);
    const newNode = { id: nextId, value };
    setNextId((id) => id + 1);
    setList((prev) => {
      const newList = [...prev];
      newList.splice(index, 0, newNode);
      return newList;
    });
    setLog((prev) => [`insert(${value}) at index ${index}`, ...prev]);
    setInput("");
    setIndexInput("");
  };

  const removeFirst = () => {
    if (list.length === 0) return;
    const removed = list[0].value;
    setList((prev) => prev.slice(1));
    setLog((prev) => [`removeFirst() → ${removed}`, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🔗 Linked List Visualizer</h1>
      <p className="text-sm text-gray-400 mb-2">
        This is a singly linked list: Nodes are connected in order.
      </p>

      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Value"
        />
        <input
          type="number"
          value={indexInput}
          onChange={(e) => setIndexInput(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Index (optional)"
        />

        <button
          onClick={insert}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded relative group"
        >
          Insert at Tail
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-3 py-2 rounded-md max-w-xs text-center whitespace-normal opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1) if tail reference exists, else O(n)
          </div>
        </button>

        <button
          onClick={insertAtIndex}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded relative group"
        >
          Insert at Index
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 z-10 bg-gray-700 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(n)
          </span>
        </button>

        <button
          onClick={removeFirst}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded relative group"
        >
          Remove First
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 z-10 bg-gray-700 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1)
          </span>
        </button>
      </div>

      <div className="flex items-center gap-3 mb-8 flex-wrap justify-center">
        {list.map((node, idx) => (
          <div key={node.id} className="flex items-center gap-1">
            <div className="w-16 py-2 text-center bg-blue-600 rounded shadow-md">
              {node.value}
            </div>
            {idx !== list.length - 1 && <span className="text-lg">→</span>}
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
