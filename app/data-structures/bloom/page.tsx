"use client";

import { useState, useEffect } from "react";

const BIT_ARRAY_SIZE = 32;

function hash1(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash + str.charCodeAt(i) * 31) % BIT_ARRAY_SIZE;
  }
  return hash;
}

function hash2(str: string) {
  let hash = 7;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 17 + str.charCodeAt(i)) % BIT_ARRAY_SIZE;
  }
  return hash;
}

function hash3(str: string) {
  let hash = 3;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash * 13) ^ str.charCodeAt(i)) % BIT_ARRAY_SIZE;
  }
  return Math.abs(hash);
}

export default function BloomFilterVisualizer() {
  const [bits, setBits] = useState(Array(BIT_ARRAY_SIZE).fill(0));
  const [highlighted, setHighlighted] = useState<number[]>([]);
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [inserted, setInserted] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (highlighted.length > 0) {
      const timeout = setTimeout(() => setHighlighted([]), 800);
      return () => clearTimeout(timeout);
    }
  }, [highlighted]);

  const insert = () => {
    if (!input) return;
    const indexes = [hash1(input), hash2(input), hash3(input)];
    const newBits = [...bits];
    indexes.forEach((idx) => (newBits[idx] = 1));
    setBits(newBits);
    setInserted((prev) => new Set(prev).add(input));
    setHighlighted(indexes);
    setLog((prev) => [`insert(${input}) → [${indexes.join(", ")}]`, ...prev]);
    setInput("");
  };

  const check = () => {
    if (!input) return;
    const indexes = [hash1(input), hash2(input), hash3(input)];
    const exists = indexes.every((i) => bits[i] === 1);
    setHighlighted(indexes);
    setLog((prev) => [
      `check(${input}) → ${exists ? "maybe" : "definitely not"}`,
      ...prev,
    ]);
    setInput("");
  };

  const checkFalsePositive = () => {
    let candidate = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    do {
      candidate = "";
      for (let i = 0; i < 5; i++) {
        candidate += alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    } while (inserted.has(candidate));

    const indexes = [hash1(candidate), hash2(candidate), hash3(candidate)];
    const exists = indexes.every((i) => bits[i] === 1);
    setHighlighted(indexes);
    setLog((prev) => [
      `check(${candidate}) → ${
        exists ? "maybe (false positive?)" : "definitely not"
      }`,
      ...prev,
    ]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">📦 Bloom Filter Visualizer</h1>
      <p className="text-sm text-gray-400 mb-6 max-w-xl text-center">
        A Bloom Filter is a probabilistic data structure used to test set
        membership efficiently. It supports insert and check operations with
        space efficiency and allows false positives.
      </p>

      <div className="flex flex-wrap gap-2 mb-6 justify-center items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter string"
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
        />
        <button
          onClick={insert}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded relative group"
        >
          Insert
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(k) where k = # of hash functions
          </span>
        </button>
        <button
          onClick={check}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded relative group"
        >
          Check
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(k)
          </span>
        </button>
        <button
          onClick={checkFalsePositive}
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-1 rounded relative group"
        >
          Test False Positive
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 Check unseen input
          </span>
        </button>
      </div>

      <div className="grid grid-cols-8 gap-2 justify-center">
        {bits.map((bit, i) => (
          <div
            key={i}
            className={`w-10 h-10 flex items-center justify-center text-sm font-bold rounded relative group transition-all ${
              highlighted.includes(i)
                ? "bg-yellow-300 text-black"
                : bit
                ? "bg-yellow-500 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            {bit}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
              Bit #{i}
            </span>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-2">📊 Operations Log</h2>
      <ul className="text-sm text-gray-400 space-y-1 max-w-xl">
        {log.slice(0, 8).map((entry, idx) => (
          <li key={idx} className="border-b border-gray-700 pb-1">
            {entry}
          </li>
        ))}
      </ul>
    </main>
  );
}
