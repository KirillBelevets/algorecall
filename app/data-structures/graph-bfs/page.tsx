"use client";

import { useState } from "react";

type Node = {
  id: number;
  label: string;
  x: number;
  y: number;
};

type Edge = {
  from: number;
  to: number;
};

export default function GraphVisualizer() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [visited, setVisited] = useState<Set<number>>(new Set());
  const [log, setLog] = useState<string[]>([]);
  const [startNode, setStartNode] = useState("");
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");

  const adjacencyList = new Map<number, number[]>();
  nodes.forEach((node) => adjacencyList.set(node.id, []));
  edges.forEach(({ from, to }) => {
    adjacencyList.get(from)?.push(to);
  });

  const startBFS = async (startId: number) => {
    const seen = new Set<number>();
    const queue: number[] = [];

    seen.add(startId);
    queue.push(startId);
    setVisited(new Set(seen));
    setLog((prev) => [`Start BFS at ${startId}`, ...prev]);

    while (queue.length > 0) {
      const current = queue.shift()!;
      setLog((prev) => [`Visit ${current}`, ...prev]);
      await new Promise((res) => setTimeout(res, 600));
      const neighbors = adjacencyList.get(current) || [];
      for (const neighbor of neighbors) {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          queue.push(neighbor);
          setVisited(new Set(seen));
        }
      }
    }
  };

  return (
    <main className="p-6 text-gray-100 bg-gray-950 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🌐 Graph Traversal Visualizer</h1>

      <section className="max-w-xl text-center mb-6">
        <p className="text-gray-400 text-sm">
          This visualizer lets you build a graph by adding nodes and directed
          edges. Then you can run a BFS traversal from any node and watch the
          visit order unfold.
        </p>
      </section>

      <div className="flex gap-2 flex-wrap justify-center mb-4">
        <input
          type="number"
          value={startNode}
          onChange={(e) => setStartNode(e.target.value)}
          placeholder="Start Node ID"
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600"
        />
        <button
          onClick={() => startBFS(Number(startNode))}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded"
        >
          Start BFS
        </button>
      </div>

      <div className="flex gap-2 flex-wrap justify-center mb-4">
        <button
          onClick={() =>
            setNodes([
              ...nodes,
              {
                id: nodes.length,
                label: `Node ${nodes.length}`,
                x: Math.random() * 600,
                y: Math.random() * 400,
              },
            ])
          }
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded"
        >
          ➕ Add Node
        </button>

        <input
          type="number"
          value={fromId}
          onChange={(e) => setFromId(e.target.value)}
          placeholder="From ID"
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600 w-24"
        />
        <input
          type="number"
          value={toId}
          onChange={(e) => setToId(e.target.value)}
          placeholder="To ID"
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600 w-24"
        />
        <button
          onClick={() => {
            if (fromId !== "" && toId !== "") {
              setEdges([...edges, { from: Number(fromId), to: Number(toId) }]);
              setLog((prev) => [`edge(${fromId} → ${toId})`, ...prev]);
              setFromId("");
              setToId("");
            }
          }}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-1 rounded"
        >
          ➕ Add Edge
        </button>
      </div>

      <div className="relative w-full h-[500px] mb-8">
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="10"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
            </marker>
          </defs>
          {edges.map((edge, idx) => {
            const fromNode = nodes.find((n) => n.id === edge.from);
            const toNode = nodes.find((n) => n.id === edge.to);
            if (!fromNode || !toNode) return null;

            return (
              <line
                key={idx}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="white"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />
            );
          })}
        </svg>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`absolute px-4 py-2 rounded shadow text-sm transition-all duration-300 ${
                visited.has(node.id)
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-700 text-white"
              }`}
              style={{ left: node.x, top: node.y }}
            >
              {node.label}
            </div>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-300 mb-6 max-w-lg">
        {edges.length > 0 && (
          <div className="text-left">
            <h3 className="text-white mb-2 font-medium">📡 Edges:</h3>
            <ul className="space-y-1">
              {edges.map((e, i) => (
                <li key={i}>
                  {e.from} → {e.to}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <h2 className="text-lg font-semibold mb-2">📊 Traversal Log</h2>
      <ul className="text-sm text-gray-400 space-y-1 max-w-xl text-left">
        {log.slice(0, 10).map((entry, idx) => (
          <li key={idx} className="border-b border-gray-700 pb-1">
            {entry}
          </li>
        ))}
      </ul>
    </main>
  );
}
