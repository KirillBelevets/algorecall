"use client";

import { useRef, useEffect, useState } from "react";

// Doubly Linked List Node
class Node {
  key: string;
  value: string;
  prev: Node | null = null;
  next: Node | null = null;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  private capacity: number;
  private map: Map<string, Node>;
  private head: Node;
  private tail: Node;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();

    // Dummy head/tail
    this.head = new Node("HEAD", "");
    this.tail = new Node("TAIL", "");
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private remove(node: Node) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private insertToFront(node: Node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  get(key: string): string | null {
    if (!this.map.has(key)) return null;

    const node = this.map.get(key)!;
    this.remove(node);
    this.insertToFront(node);
    return node.value;
  }

  set(key: string, value: string) {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;
      node.value = value;
      this.remove(node);
      this.insertToFront(node);
      return;
    }

    if (this.map.size >= this.capacity) {
      const lru = this.tail.prev!;
      this.remove(lru);
      this.map.delete(lru.key);
    }

    const newNode = new Node(key, value);
    this.insertToFront(newNode);
    this.map.set(key, newNode);
  }

  entries(): [string, string][] {
    const result: [string, string][] = [];
    let curr = this.head.next;
    while (curr && curr !== this.tail) {
      result.push([curr.key, curr.value]);
      curr = curr.next;
    }
    return result;
  }
}

export default function LRUCacheVisualizer() {
  const cacheRef = useRef(new LRUCache(5)); // Capacity: 5
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [entries, setEntries] = useState<[string, string][]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [recentKey, setRecentKey] = useState<string | null>(null);

  useEffect(() => {
    if (recentKey) {
      const timeout = setTimeout(() => setRecentKey(null), 800);
      return () => clearTimeout(timeout);
    }
  }, [recentKey]);

  const refresh = () => {
    setEntries(cacheRef.current.entries());
  };

  const handleSet = () => {
    if (!key || !value) return;
    cacheRef.current.set(key, value);
    setLog((prev) => [`set(${key}, ${value})`, ...prev]);
    setRecentKey(key);
    refresh();
    setKey("");
    setValue("");
  };

  const handleGet = () => {
    if (!key) return;
    const result = cacheRef.current.get(key);
    setLog((prev) => [`get(${key}) → ${result ?? "null"}`, ...prev]);
    setRecentKey(key);
    refresh();
    setKey("");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">📦 LRU Cache Visualizer</h1>
      <p className="text-sm text-gray-400 mb-6 text-center max-w-xl">
        O(1) <code>get</code> and <code>set</code> using Doubly Linked List +
        Map. Most recently used items appear first.
      </p>

      <div className="flex flex-wrap gap-2 mb-6 items-center justify-center w-full">
        <input
          type="text"
          placeholder="Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
        />
        <input
          type="text"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
        />
        <div className="relative group text-white py-2 rounded">
          <button
            onClick={handleSet}
            className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
          >
            Set
          </button>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1)
          </span>
        </div>

        <div className="relative group text-white py-2 rounded">
          <button
            onClick={handleGet}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
          >
            Get
          </button>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 bg-gray-700 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            🧠 O(1)
          </span>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap justify-center mb-8 transition-all">
        {entries.map(([k, v], idx) => {
          const isRecent = recentKey === k;
          return (
            <div
              key={k}
              className={`relative px-4 py-2 rounded shadow text-sm ${
                isRecent ? "bg-yellow-500 text-black" : "bg-gray-800 text-white"
              }`}
            >
              <span className="font-semibold">{k}</span>: {v}
            </div>
          );
        })}
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
