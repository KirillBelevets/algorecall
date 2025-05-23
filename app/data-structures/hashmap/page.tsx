"use client";

import { useState } from "react";

interface Entry {
  key: string;
  value: string;
}

const hashFunction = (key: string, size: number): number => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash + key.charCodeAt(i) * i) % size;
  }
  return hash;
};

export default function HashMapSimulator() {
  const [buckets, setBuckets] = useState<Entry[][]>(
    Array(8)
      .fill(null)
      .map(() => [])
  );
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const set = () => {
    if (!key) return;
    setBuckets((prev) => {
      const newBuckets = [...prev];
      const index = hashFunction(key, newBuckets.length);
      const bucket = newBuckets[index].filter((entry) => entry.key !== key);
      bucket.push({ key, value });
      newBuckets[index] = bucket;
      return newBuckets;
    });
    setLog((prev) => [
      `set(${key}, ${value}) → bucket ${hashFunction(key, buckets.length)}`,
      ...prev,
    ]);
    setKey("");
    setValue("");
  };

  const remove = (targetKey: string) => {
    setBuckets((prev) => {
      const newBuckets = [...prev];
      const index = hashFunction(targetKey, newBuckets.length);
      newBuckets[index] = newBuckets[index].filter((e) => e.key !== targetKey);
      return newBuckets;
    });
    setLog((prev) => [`remove(${targetKey})`, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">
        🗃️ HashMap Simulator with Buckets
      </h1>
      <p className="text-sm text-gray-400 mb-4">
        Demonstrates how keys hash into buckets and handle collisions
        (chaining).
      </p>

      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Key"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Value"
        />
        <button
          onClick={set}
          className="relative group bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded"
        >
          Set
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1) average
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 w-full max-w-4xl">
        {buckets.map((bucket, i) => (
          <div
            key={i}
            className="bg-gray-800 border border-gray-700 rounded p-3"
          >
            <p className="text-sm font-semibold text-gray-300 mb-2">
              Bucket {i}
            </p>
            <ul className="space-y-2">
              {bucket.map((entry) => (
                <li
                  key={entry.key}
                  className="relative p-2 bg-gray-700 rounded"
                >
                  <p className="text-xs text-gray-400">
                    {entry.key}:{" "}
                    <span className="text-white">{entry.value}</span>
                  </p>
                  <button
                    onClick={() => remove(entry.key)}
                    className="absolute top-1 right-2 text-red-400 hover:text-red-300 text-xs"
                  >
                    ✕
                  </button>
                </li>
              ))}
              {bucket.length === 0 && (
                <li className="text-xs text-gray-500 italic">(empty)</li>
              )}
            </ul>
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
