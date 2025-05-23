"use client";

import { useRef, useState } from "react";

type KeyType = "string" | "number" | "object";
type Key = string | number | object;

export default function MapVisualizer() {
  const [map] = useState<Map<Key, string>>(new Map());
  const [renderedMap, setRenderedMap] = useState<[Key, string][]>([]);
  const [keyType, setKeyType] = useState<KeyType>("string");
  const [keyInput, setKeyInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [log, setLog] = useState<string[]>([]);

  // 🔒 Persist object references and their labels across renders
  const objectKeyRegistry = useRef<Map<string, object>>(new Map());
  const objectLabels = useRef<WeakMap<object, string>>(new WeakMap());
  const objectIdCounter = useRef(1);

  const getOrCreateObjectKey = (input: string): object => {
    if (!objectKeyRegistry.current.has(input)) {
      const newObj = { key: input };
      objectKeyRegistry.current.set(input, newObj);
      objectLabels.current.set(newObj, `Object #${objectIdCounter.current++}`);
    }
    return objectKeyRegistry.current.get(input)!;
  };

  const getKeyLabel = (key: Key): string => {
    if (typeof key === "string" || typeof key === "number") return String(key);
    if (typeof key === "object")
      return objectLabels.current.get(key) ?? "[object Object]";
    return String(key);
  };

  const parseKey = (): Key => {
    switch (keyType) {
      case "number":
        return Number(keyInput);
      case "object":
        return getOrCreateObjectKey(keyInput);
      default:
        return keyInput;
    }
  };

  const updateMapView = () => {
    setRenderedMap(Array.from(map.entries()));
  };

  const handleSet = () => {
    const key = parseKey();
    map.set(key, valueInput);
    updateMapView();
    setLog((prev) => [`set(${getKeyLabel(key)}, ${valueInput})`, ...prev]);
    setKeyInput("");
    setValueInput("");
  };

  const handleGet = () => {
    const key = parseKey();
    const result = map.get(key);
    setLog((prev) => [
      `get(${getKeyLabel(key)}) → ${result ?? "undefined"}`,
      ...prev,
    ]);
    setKeyInput("");
  };

  const handleHas = () => {
    const key = parseKey();
    const result = map.has(key);
    setLog((prev) => [`has(${getKeyLabel(key)}) → ${result}`, ...prev]);
    setKeyInput("");
  };

  const handleDelete = () => {
    const key = parseKey();
    const result = map.delete(key);
    updateMapView();
    setLog((prev) => [`delete(${getKeyLabel(key)}) → ${result}`, ...prev]);
    setKeyInput("");
  };

  const handleClear = () => {
    map.clear();
    updateMapView();
    setLog((prev) => [`clear()`, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🗺️ Map Visualizer</h1>

      <p className="text-sm text-gray-400 mb-2 text-center max-w-2xl">
        A <code>Map</code> stores key–value pairs where keys can be any type
        (including objects). It preserves insertion order and provides fast
        lookups, making it ideal for cases where you need flexible keys or want
        to track identity across references.
      </p>

      <p className="text-sm text-gray-400 mb-4 max-w-xl text-center">
        Supports key types: <code>string</code>, <code>number</code>, and{" "}
        <code>object</code>. All operations use identity and maintain insertion
        order.
      </p>

      <div className="flex flex-wrap gap-2 mb-1 items-center justify-center">
        <select
          value={keyType}
          onChange={(e) => setKeyType(e.target.value as KeyType)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
        >
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="object">Object</option>
        </select>

        <input
          type="text"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Key"
        />

        <input
          type="text"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Value"
        />
      </div>

      <p
        className={`text-xs text-gray-400 mb-3 h-4 transition-opacity duration-200 ${
          keyType === "object" && keyInput ? "opacity-100" : "opacity-0"
        }`}
      >
        {keyType === "object" && keyInput && (
          <>
            Will use
            <strong>{getKeyLabel(getOrCreateObjectKey(keyInput))}</strong> as
            key
          </>
        )}
      </p>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {[
          { label: "Set", onClick: handleSet, className: "bg-green-500" },
          { label: "Get", onClick: handleGet, className: "bg-blue-500" },
          {
            label: "Has",
            onClick: handleHas,
            className: "bg-yellow-500 text-black",
          },
          { label: "Delete", onClick: handleDelete, className: "bg-red-600" },
          { label: "Clear", onClick: handleClear, className: "bg-gray-600" },
        ].map(({ label, onClick, className }) => (
          <button
            key={label}
            onClick={onClick}
            className={`relative group ${className} hover:brightness-110 text-white px-4 py-2 rounded shadow-md`}
          >
            {label}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-gray-800 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
              🧠 {label === "Clear" ? "O(n)" : "O(1)"}
            </span>
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl mb-6">
        <h3 className="text-sm text-gray-400 mb-1 font-medium">
          🗂 Stored Entries
        </h3>
        <div className="border border-gray-700 rounded divide-y divide-gray-700">
          {renderedMap.length === 0 ? (
            <p className="text-sm text-gray-500 italic p-3">Map is empty.</p>
          ) : (
            renderedMap.map(([k, v], idx) => (
              <div key={idx} className="p-3 flex justify-between items-center">
                <span className="text-gray-300">
                  <span className="font-semibold text-white">
                    [{getKeyLabel(k)}]
                  </span>{" "}
                  → {v}
                </span>
              </div>
            ))
          )}
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
