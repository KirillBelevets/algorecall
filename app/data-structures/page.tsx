"use client";

import Link from "next/link";

const structures = [
  { name: "Stack", href: "/data-structures/stack" },
  { name: "Array", href: "/data-structures/array" },
  { name: "Queue", href: "/data-structures/queue" },
  { name: "Linked List", href: "/data-structures/linked-list" },
  { name: "Binary Tree", href: "/data-structures/binary-tree" },
  { name: "HashMap", href: "/data-structures/hashmap" },
  { name: "Map", href: "/data-structures/map" },
  { name: "Tree", href: "/data-structures/tree-visualiser" },
  { name: "MinHeap", href: "/data-structures/min-heap" },
  { name: "Deque", href: "/data-structures/deque-visualizer" },
  { name: "LRU Cache", href: "/data-structures/lru-cache" },
  { name: "GraphBFS", href: "/data-structures/graph-bfs" },
  { name: "Set", href: "/data-structures/set" },
  { name: "Bloom", href: "/data-structures/bloom" },
  { name: "Union Find", href: "/data-structures/union-find" },
];

export default function DataStructuresHub() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-white">
        🧠 Data Structures Hub
      </h1>
      <p className="text-gray-400 mb-6 max-w-2xl">
        Explore interactive visualizations of core data structures to understand
        how they work and when to use them.
      </p>

      <section>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {structures.map(({ name, href }) => (
            <li key={`${name}-${href}`}>
              <Link
                href={href}
                className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition shadow"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        Built to clarify the fundamentals 📘
      </footer>
    </main>
  );
}
