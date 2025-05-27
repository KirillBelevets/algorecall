"use client";

import { useState, useRef, useEffect } from "react";

type Task = {
  id: number;
  type: "callstack" | "microtask" | "macrotask";
  label: string;
};

let globalId = 0;

const microtaskOptions = [
  { label: "Promise.then()", value: "Promise.then()" },
  { label: "queueMicrotask()", value: "queueMicrotask()" },
  { label: "MutationObserver", value: "MutationObserver" },
];

const macrotaskOptions = [
  { label: "setTimeout()", value: "setTimeout()" },
  { label: "setInterval()", value: "setInterval()" },
  { label: "requestAnimationFrame()", value: "requestAnimationFrame()" },
];

export default function EventLoopVisualizer() {
  const [callStack, setCallStack] = useState<Task[]>([]);
  const [microtasks, setMicrotasks] = useState<Task[]>([]);
  const [macrotasks, setMacrotasks] = useState<Task[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const processingRef = useRef(false);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTask, setActiveTask] = useState<{
    type: "callStack" | "microtasks" | "macrotasks";
    index: number;
  } | null>(null);
  const [selectedMicrotask, setSelectedMicrotask] = useState(
    microtaskOptions[0].value
  );
  const [selectedMacrotask, setSelectedMacrotask] = useState(
    macrotaskOptions[0].value
  );

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      processTick();
    }, 1200);

    return () => clearInterval(interval);
  }, [isRunning, callStack, microtasks, macrotasks]);

  const enqueue = (type: Task["type"], label: string) => {
    const newTask: Task = { id: globalId++, type, label };
    if (type === "callstack") setCallStack((prev) => [...prev, newTask]);
    if (type === "microtask") setMicrotasks((prev) => [...prev, newTask]);
    if (type === "macrotask") setMacrotasks((prev) => [...prev, newTask]);
  };

  const tick = async () => {
    if (processingRef.current) return;
    processingRef.current = true;

    // 1. Call Stack
    if (callStack.length > 0) {
      const [task, ...rest] = callStack;
      setCallStack(rest);
      setLog((prev) => [`Execute CallStack: ${task.label}`, ...prev]);
      await sleep(500);
      processingRef.current = false;
      return;
    }

    // 2. Microtasks
    if (microtasks.length > 0) {
      const [task, ...rest] = microtasks;
      setMicrotasks(rest);
      setLog((prev) => [`Execute Microtask: ${task}`, ...prev]);
      await sleep(500);
      processingRef.current = false;
      return;
    }

    // 3. Macrotasks
    if (macrotasks.length > 0) {
      const [task, ...rest] = macrotasks;
      setMacrotasks(rest);
      setLog((prev) => [`🕓 Macrotask: ${task.label}`, ...prev]);
      await sleep(500);
      processingRef.current = false;
      return;
    }

    setLog((prev) => ["✅ Tick complete - queues empty", ...prev]);
    processingRef.current = false;
  };

  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const processTick = () => {
    if (callStack.length > 0) {
      const task = callStack[0];
      setCallStack((prev) => prev.slice(1));
      setActiveTask({ type: "callStack", index: 0 });
      setLog((prev) => [`Execute CallStack: ${task.label}`, ...prev]);
    } else if (microtasks.length > 0) {
      const task = microtasks[0];
      setMicrotasks((prev) => prev.slice(1));
      setActiveTask({ type: "microtasks", index: 0 });
      setLog((prev) => [`Execute Microtask: ${task.label}`, ...prev]);
    } else if (macrotasks.length > 0) {
      const task = macrotasks[0];
      setMacrotasks((prev) => prev.slice(1));
      setActiveTask({ type: "macrotasks", index: 0 });
      setLog((prev) => [`Execute Macrotask: ${task.label}`, ...prev]);
    } else {
      setLog((prev) => ["✅ Tick complete - queues empty", ...prev]);
      setIsRunning(false);
      processingRef.current = false;
    }

    setTimeout(() => setActiveTask(null), 600);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">🔁 Event Loop Visualizer</h1>
      <p className="text-sm text-gray-400 mb-4 text-center max-w-xl">
        Add tasks to different queues and simulate how JavaScript's event loop
        handles them in order.
      </p>

      <section className="bg-gray-800 p-4 rounded shadow max-w-xl mb-6 text-sm text-gray-200">
        <h3 className="font-semibold text-white mb-2">🧠 Event Loop Basics</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="text-purple-300 font-medium">Microtasks</span>{" "}
            (e.g. <code>Promise.then</code>) run <strong>right after</strong>{" "}
            the current call stack clears, before any macrotasks.
          </li>
          <li>
            <span className="text-yellow-300 font-medium">Macrotasks</span>{" "}
            (e.g. <code>setTimeout</code>) are scheduled after microtasks and
            executed on the next tick.
          </li>
          <li>
            The event loop always processes the{" "}
            <span className="text-purple-300">microtask queue</span> before the{" "}
            <span className="text-yellow-300">macrotask queue</span>.
          </li>
        </ul>
      </section>

      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-start mb-8">
        <button
          onClick={() => setIsRunning((r) => !r)}
          className={`${
            isRunning
              ? "bg-red-600 hover:bg-red-500"
              : "bg-green-600 hover:bg-green-500"
          } text-white px-4 py-2 rounded mb-4`}
        >
          {isRunning ? "⏹ Stop Auto Tick" : "▶️ Start Auto Tick"}
        </button>

        <button
          onClick={() => enqueue("callstack", "fn()")}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add CallStack
        </button>

        <div className="bg-gray-800 p-4 rounded w-full sm:w-auto">
          <h3 className="text-white text-sm font-semibold mb-2 text-center sm:text-left">
            ⚡ Add Microtask
          </h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              value={selectedMicrotask}
              onChange={(e) => setSelectedMicrotask(e.target.value)}
              className="bg-gray-900 text-white px-3 py-2 rounded border border-gray-600 w-full sm:w-auto"
            >
              {microtaskOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => enqueue("microtask", selectedMicrotask)}
              className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded"
            >
              ➕ Add
            </button>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded w-full sm:w-auto">
          <h3 className="text-white text-sm font-semibold mb-2 text-center sm:text-left">
            🕓 Add Macrotask
          </h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              value={selectedMacrotask}
              onChange={(e) => setSelectedMacrotask(e.target.value)}
              className="bg-gray-900 text-white px-3 py-2 rounded border border-gray-600 w-full sm:w-auto"
            >
              {macrotaskOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => enqueue("macrotask", selectedMacrotask)}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded"
            >
              ➕ Add
            </button>
          </div>
        </div>

        <button
          disabled={isRunning}
          onClick={tick}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
        >
          ▶️ Tick
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-sm w-full max-w-4xl text-center">
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
            📞 Call Stack
          </h2>
          <ul className="space-y-1">
            {callStack.map((t, i) => (
              <div
                key={i}
                className={`px-3 py-1 rounded shadow text-sm ${
                  activeTask?.type === "callStack" && activeTask.index === i
                    ? "bg-blue-400 text-black"
                    : "bg-gray-800 text-white"
                }`}
              >
                {t.label}
              </div>
            ))}

            {callStack.length === 0 && (
              <li className="text-gray-600 italic">Empty</li>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
            ⚡ Microtasks
          </h2>
          <ul className="space-y-1">
            {microtasks.map((t, i) => (
              <div
                key={i}
                className={`px-3 py-1 rounded shadow text-sm ${
                  activeTask?.type === "microtasks" && activeTask.index === i
                    ? "bg-purple-400 text-black"
                    : "bg-gray-800 text-white"
                }`}
              >
                {t.label}
              </div>
            ))}
            {microtasks.length === 0 && (
              <li className="text-gray-600 italic">Empty</li>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
            🕓 Macrotasks
          </h2>
          <ul className="space-y-1">
            {macrotasks.map((t, i) => (
              <div
                key={i}
                className={`px-3 py-1 rounded shadow text-sm ${
                  activeTask?.type === "macrotasks" && activeTask.index === i
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-white"
                }`}
              >
                {t.label}
              </div>
            ))}
            {macrotasks.length === 0 && (
              <li className="text-gray-600 italic">Empty</li>
            )}
          </ul>
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-2">📋 Execution Log</h2>
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
