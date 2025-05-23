"use client";

import { JSX, useState } from "react";

interface TreeNode {
  id: number;
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function insertNode(
  root: TreeNode | null,
  value: number,
  id: number
): TreeNode {
  if (!root) return { id, value, left: null, right: null };
  if (value < root.value) {
    return { ...root, left: insertNode(root.left, value, id) };
  } else {
    return { ...root, right: insertNode(root.right, value, id) };
  }
}

export default function BinaryTreeVisualizer() {
  const [root, setRoot] = useState<TreeNode | null>(null);
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [nextId, setNextId] = useState(1);

  const insert = () => {
    if (input === "") return;
    const value = parseInt(input);
    setRoot((prev) => insertNode(prev, value, nextId));
    setLog((prev) => [`insert(${value})`, ...prev]);
    setInput("");
    setNextId((id) => id + 1);
  };

  const renderTree = (node: TreeNode | null): JSX.Element | null => {
    if (!node) return null;
    return (
      <div className="flex flex-col items-center relative">
        <div className="w-14 py-2 text-center bg-green-600 rounded shadow mb-2 z-10">
          {node.value}
        </div>
        <div className="flex justify-between w-full px-4 relative">
          {node.left && (
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
          {node.right && (
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
          {renderTree(node.left)}
          {renderTree(node.right)}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">
        🌳 Binary Search Tree Visualizer
      </h1>
      <p className="text-sm text-gray-400 mb-4">
        Inserts values into a BST structure with left {"<"} right rule.
      </p>

      <div className="flex gap-2 mb-6 items-center">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Enter number"
        />
        <button
          onClick={insert}
          className="relative group bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded"
        >
          Insert
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(log n) average, O(n) worst case
          </span>
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 mb-6">
        {renderTree(root)}
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
