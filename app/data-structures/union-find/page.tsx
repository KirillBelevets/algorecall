"use client";

import { useState } from "react";

export default function UnionFindVisualizer() {
  const [elements, setElements] = useState<number[]>([]);
  const [parents, setParents] = useState<number[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [findTarget, setFindTarget] = useState("");
  const [highlightedRoot, setHighlightedRoot] = useState<number | null>(null);

  const addElement = () => {
    const newId = elements.length;
    setElements((prev) => [...prev, newId]);
    setParents((prev) => [...prev, newId]);
    setLog((prev) => [`add(${newId})`, ...prev]);
  };

  const reset = () => {
    setElements([]);
    setParents([]);
    setLog(["reset()"]);
    setX("");
    setY("");
  };

  const findWithCompression = (
    x: number,
    parentArr: number[]
  ): [number, number[]] => {
    if (parentArr[x] !== x) {
      const [root] = findWithCompression(parentArr[x], parentArr);
      parentArr[x] = root;
      return [root, parentArr];
    }
    return [x, parentArr];
  };

  const handleFind = () => {
    const target = parseInt(findTarget);
    if (isNaN(target)) return;

    const [root, updatedParents] = findWithCompression(target, [...parents]);
    setParents(updatedParents);
    setHighlightedRoot(root);
    setLog((prev) => [`find(${target}) → ${root}`, ...prev]);

    setTimeout(() => setHighlightedRoot(null), 1500);
  };

  const union = () => {
    const a = parseInt(x);
    const b = parseInt(y);
    if (isNaN(a) || isNaN(b) || a === b) return;

    const [rootA, afterA] = findWithCompression(a, [...parents]);
    const [rootB, afterB] = findWithCompression(b, [...afterA]);

    if (rootA === rootB) {
      setLog((prev) => [`union(${a}, ${b}) → already connected`, ...prev]);
      return;
    }

    const finalParents = [...afterB];
    finalParents[rootB] = rootA;

    setParents(finalParents);
    setLog((prev) => [`union(${a}, ${b})`, ...prev]);
  };

  const getGroups = () => {
    const groups: { [root: number]: number[] } = {};
    let updatedParents = [...parents];

    elements.forEach((el) => {
      const [root, newParents] = findWithCompression(el, updatedParents);
      updatedParents = newParents;

      if (!groups[root]) groups[root] = [];
      groups[root].push(el);
    });

    // Optionally update parents with compressed paths once per render
    if (JSON.stringify(updatedParents) !== JSON.stringify(parents)) {
      setParents(updatedParents);
    }

    return Object.values(groups);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🕸️ Union-Find Visualizer</h1>
      <p className="text-sm text-gray-400 mb-4 text-center max-w-xl">
        Build and merge sets. Path compression is applied during find
        operations.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          onClick={addElement}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
        >
          ➕ Add Element
        </button>
        <button
          onClick={reset}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"
        >
          🔄 Reset
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <select
          value={x}
          onChange={(e) => setX(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600"
        >
          <option value="">Select X</option>
          {elements.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
        <select
          value={y}
          onChange={(e) => setY(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600"
        >
          <option value="">Select Y</option>
          {elements.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
        <button
          onClick={union}
          className="relative group bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
        >
          Union(x, y)
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(α(n))
          </span>
        </button>
      </div>

      {elements.length > 0 && (
        <div className="flex gap-2 items-center mb-6">
          <select
            value={findTarget}
            onChange={(e) => setFindTarget(e.target.value)}
            className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600"
          >
            <option value="">Find root of...</option>
            {elements.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <button
            onClick={handleFind}
            className="relative group bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded"
          >
            Find(x)
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
              🧠 O(α(n))
            </span>
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {getGroups().map((group, idx) => (
          <div key={idx} className="bg-gray-800 rounded px-3 py-2 shadow">
            <p className="text-sm text-yellow-400 font-semibold mb-1">
              Group {idx + 1}
            </p>
            <div className="flex gap-2">
              {group.map((el) => (
                <div
                  key={el}
                  className={`w-10 h-10 rounded flex items-center justify-center font-bold ${
                    el === highlightedRoot
                      ? "bg-yellow-400 text-black"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-2">📊 Operations Log</h2>
      <ul className="text-sm text-gray-400 space-y-1 max-w-xl text-left">
        {log.slice(0, 6).map((entry, idx) => (
          <li key={idx} className="border-b border-gray-700 pb-1">
            {entry}
          </li>
        ))}
      </ul>
    </main>
  );
}
