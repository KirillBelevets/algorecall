"use client";

import { useState } from "react";

type TrieNode = {
  children: { [key: string]: TrieNode };
  isEndOfWord: boolean;
};

function createNode(): TrieNode {
  return { children: {}, isEndOfWord: false };
}

export default function TrieVisualizer() {
  const [trie] = useState<TrieNode>(() => createNode());
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [highlightedPath, setHighlightedPath] = useState<Set<string>>(
    new Set()
  );
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const insert = (word: string) => {
    let node = trie;
    const path: string[] = [];
    for (const char of word) {
      path.push(char);
      if (!node.children[char]) {
        node.children[char] = createNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
    setLog((prev) => [`Inserted "${word}"`, ...prev]);
    setSuggestions([]);
    setInput("");
  };

  const search = (word: string) => {
    let node = trie;
    const path: string[] = [];
    for (const char of word) {
      if (!node.children[char]) {
        setLog((prev) => [`Search "${word}" → ❌ Not Found`, ...prev]);
        setHighlightedPath(new Set());
        setSuggestions([]);
        return;
      }
      path.push(char);
      node = node.children[char];
    }
    const found = node.isEndOfWord;
    setLog((prev) => [
      `Search "${word}" → ${found ? "✅ Found" : "❌ Prefix Only"}`,
      ...prev,
    ]);
    setHighlightedPath(new Set(path.map((_, i) => word.slice(0, i + 1))));
    setSuggestions([]);
    setInput("");
  };

  const autocomplete = (prefix: string) => {
    let node = trie;
    const path: string[] = [];
    for (const char of prefix) {
      if (!node.children[char]) {
        setLog(() => [`Autocomplete "${prefix}" → ❌ No matches`]);
        setSuggestions([]);
        return;
      }
      path.push(char);
      node = node.children[char];
    }

    const results: string[] = [];
    const dfs = (n: TrieNode, pathSoFar: string) => {
      if (n.isEndOfWord) results.push(pathSoFar);
      for (const [ch, child] of Object.entries(n.children)) {
        dfs(child, pathSoFar + ch);
      }
    };

    dfs(node, prefix);
    setSuggestions(results);
    setLog(() => [`Autocomplete "${prefix}" → ${results.join(", ")}`]);
  };

  const renderNode = (node: TrieNode, prefix: string = "") => (
    <ul className="ml-4 space-y-1">
      {Object.entries(node.children).map(([char, child]) => {
        const nextPrefix = prefix + char;
        const isHighlighted = highlightedPath.has(nextPrefix);
        return (
          <li key={nextPrefix}>
            <span
              className={`inline-block px-2 py-1 rounded text-sm ${
                isHighlighted
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {char}
              {child.isEndOfWord ? "*" : ""}
            </span>
            {renderNode(child, nextPrefix)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🌲 Trie Visualizer</h1>
      <p className="text-sm text-gray-400 mb-4 text-center max-w-xl">
        Insert and search for words in a Trie. Use autocomplete to explore full
        words from a given prefix.
      </p>

      <form
        className="flex flex-wrap gap-2 mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          insert(input);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault();
            autocomplete(input);
          }
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.toLowerCase())}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Enter word"
        />
        {[
          {
            label: "Insert",
            onClick: () => insert(input),
            color: "bg-green-600 hover:bg-green-500",
            tooltip: "🧠 O(L) to insert",
          },
          {
            label: "Search",
            onClick: () => search(input),
            color: "bg-blue-600 hover:bg-blue-500",
            tooltip: "🧠 O(L) to search",
          },
          {
            label: "Autocomplete",
            onClick: () => autocomplete(input),
            color: "bg-yellow-600 hover:bg-yellow-500",
            tooltip: "🧠 O(L + total matches)",
          },
        ].map(({ label, onClick, color, tooltip }) => (
          <button
            key={label}
            type="button"
            onClick={onClick}
            className={`relative group ${color} text-white px-4 py-1 rounded`}
          >
            {label}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
              {tooltip}
            </span>
          </button>
        ))}
      </form>

      <div className="w-full max-w-md text-left mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-1">📚 Trie Tree</h3>
        <div className="border border-gray-700 rounded p-4 bg-gray-900">
          {renderNode(trie)}
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="mb-6 w-full max-w-md">
          <h3 className="text-sm font-medium text-gray-400 mb-1">
            ✨ Autocomplete Suggestions
          </h3>
          <div className="border border-gray-700 rounded p-3 bg-gray-800 text-sm text-gray-200 space-y-1">
            {suggestions.map((word, idx) => (
              <div key={idx}>{word}</div>
            ))}
          </div>
        </div>
      )}

      <h2 className="text-lg font-semibold mt-4 mb-2">📊 Operations Log</h2>
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
