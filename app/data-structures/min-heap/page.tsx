"use client";

import { JSX, useState } from "react";

function swap(arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function MinHeapVisualizer() {
  const [heap, setHeap] = useState<number[]>([]);
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [highlighted, setHighlighted] = useState<[number, number] | null>(null);

  const [heapifyInput, setHeapifyInput] = useState("");

  const peekMin = () => {
    if (heap.length === 0) return;
    setLog((prev) => [`peekMin() → ${heap[0]}`, ...prev]);
  };

  const handleHeapify = () => {
    const rawValues = heapifyInput
      .split(",")
      .map((s) => parseInt(s.trim()))
      .filter((v) => !isNaN(v));

    const arr = [...rawValues];

    // Bottom-up heapify
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      bubbleDownSync(arr, i); // Synchronous bubble down
    }

    setHeap(arr);
    setLog(() => [`heapify([${arr.join(", ")}])`]);
  };

  const bubbleDownSync = (arr: number[], index: number) => {
    const length = arr.length;
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < length && arr[left] < arr[smallest]) smallest = left;
      if (right < length && arr[right] < arr[smallest]) smallest = right;

      if (smallest === index) break;
      swap(arr, index, smallest);
      index = smallest;
    }
  };

  const highlightSwap = async (i: number, j: number) => {
    setHighlighted([i, j]);
    await sleep(300);
    setHighlighted(null);
    await sleep(100);
  };

  const bubbleUp = async (arr: number[], index: number) => {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (arr[parent] <= arr[index]) break;
      await highlightSwap(index, parent);
      swap(arr, index, parent);
      setLog((prev) => [`swap(${arr[parent]}, ${arr[index]})`, ...prev]);
      setHeap([...arr]);
      index = parent;
    }
  };

  const bubbleDown = async (arr: number[], index: number) => {
    const length = arr.length;
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < length && arr[left] < arr[smallest]) smallest = left;
      if (right < length && arr[right] < arr[smallest]) smallest = right;

      if (smallest === index) break;
      await highlightSwap(index, smallest);
      swap(arr, index, smallest);
      setLog((prev) => [`swap(${arr[smallest]}, ${arr[index]})`, ...prev]);
      setHeap([...arr]);
      index = smallest;
    }
  };

  const insert = async (val: number) => {
    const newHeap = [...heap, val];
    setHeap(newHeap);
    await bubbleUp(newHeap, newHeap.length - 1);
    setLog((prev) => [`insert(${val})`, ...prev]);
  };

  const extractMin = async () => {
    if (heap.length === 0) return;
    const newHeap = [...heap];
    const min = newHeap[0];
    const last = newHeap.pop();
    if (newHeap.length > 0 && last !== undefined) {
      newHeap[0] = last;
      setHeap([...newHeap]);
      await bubbleDown(newHeap, 0);
    }
    setHeap([...newHeap]);
    setLog((prev) => [`extractMin() → ${min}`, ...prev]);
  };

  const renderTree = (index: number): JSX.Element | null => {
    if (index >= heap.length) return null;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    const isHighlighted = highlighted?.includes(index) && highlighted !== null;

    return (
      <div className="flex flex-col items-center relative">
        <div
          className={`w-14 py-2 text-center rounded shadow mb-2 z-10 transition ${
            isHighlighted
              ? "bg-yellow-400 text-black"
              : "bg-blue-600 text-white"
          }`}
        >
          {heap[index]}
        </div>
        <div className="flex justify-between w-full px-4 relative">
          {left < heap.length && (
            <div className="absolute left-1/4 top-0 w-1/2 h-6">
              <svg width="100%" height="100%">
                <line
                  x1="50%"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="#888"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
          {right < heap.length && (
            <div className="absolute right-1/4 top-0 w-1/2 h-6">
              <svg width="100%" height="100%">
                <line
                  x1="50%"
                  y1="0"
                  x2="100%"
                  y2="100%"
                  stroke="#888"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex gap-4">
          {renderTree(left)}
          {renderTree(right)}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">📉 MinHeap Visualizer</h1>
      <p className="text-sm text-gray-400 mb-4 text-center max-w-xl">
        Inserts and extractions visually swap nodes to maintain the heap
        property. Watch the bubbling up/down in action!
      </p>

      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={heapifyInput}
          placeholder="Heapify: 5,1,4,8"
          onChange={(e) => setHeapifyInput(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700 w-64"
        />
        <button
          onClick={handleHeapify}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-1 rounded"
        >
          Heapify Array
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Enter number"
        />
        <button
          onClick={() => {
            if (input) insert(parseInt(input));
            setInput("");
          }}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded relative group"
        >
          Insert
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(log n)
          </span>
        </button>
        <button
          onClick={extractMin}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded relative group"
        >
          Extract Min
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(log n)
          </span>
        </button>

        <button
          onClick={peekMin}
          className="bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-1 rounded relative group"
        >
          Peek Min
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1)
          </span>
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 mb-6">
        {renderTree(0)}
      </div>

      <div className="w-full max-w-2xl text-sm mb-6">
        <h2 className="text-gray-400 mb-2 font-medium">🧮 Heap as Array</h2>
        <div className="flex flex-wrap gap-2">
          {heap.map((val, idx) => (
            <div
              key={idx}
              className={`px-3 py-2 rounded text-center w-12 shadow ${
                highlighted?.includes(idx)
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white"
              }`}
            >
              {val}
            </div>
          ))}
        </div>
      </div>

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
