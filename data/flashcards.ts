export type Flashcard = {
  id: string;
  question: string;
  answer: string;
  topic: string;
};

export const flashcards: Flashcard[] = [
  {
    id: "1",
    topic: "data-structures",
    question: "What structure guarantees unique values?",
    answer: "Set",
  },
  {
    id: "2",
    topic: "react",
    question: "What hook avoids unnecessary function creation?",
    answer: "useCallback",
  },
  {
    id: "3",
    topic: "typescript",
    question: "What utility type removes `null` and `undefined` from a type?",
    answer: "`NonNullable<T>`",
  },
  {
    id: "4",
    topic: "typescript",
    question:
      "What operator do you use to narrow a discriminated union by key?",
    answer: "`in` operator",
  },
  {
    id: "5",
    topic: "react",
    question: "What hook lets you prevent unnecessary re-renders of functions?",
    answer: "`useCallback`",
  },
  {
    id: "6",
    topic: "react",
    question:
      "What React feature lets you render fallback content while loading?",
    answer: "`<Suspense>`",
  },
  {
    id: "7",
    topic: "react",
    question:
      "What hook gives you a mutable ref that persists between renders?",
    answer: "`useRef`",
  },
  {
    id: "8",
    topic: "async-js",
    question: "Which microtask API runs before `setTimeout`?",
    answer: "`queueMicrotask()` or resolved `Promise.then()`",
  },
  {
    id: "9",
    topic: "async-js",
    question: "What API is used to cancel fetch requests?",
    answer: "`AbortController`",
  },
  {
    id: "10",
    topic: "system-design",
    question:
      "What design pattern isolates failures in a system to avoid cascade failure?",
    answer: "`Bulkhead pattern`",
  },
  {
    id: "11",
    topic: "system-design",
    question: "Which pattern prevents constant retries to a failing service?",
    answer: "`Circuit Breaker`",
  },
  {
    id: "12",
    topic: "browser",
    question: "What API detects when an element enters or exits the viewport?",
    answer: "`IntersectionObserver`",
  },
  {
    id: "13",
    topic: "typescript",
    question:
      "What utility type transforms `A | B` into `never` if both types overlap?",
    answer: "`Exclude<A, B>` removes all B fields from A in a union.",
  },
  {
    id: "14",
    topic: "typescript",
    question: "What type infers a value from within a conditional type?",
    answer: "`infer` keyword",
  },
  {
    id: "15",
    topic: "react",
    question: "What is the main purpose of `useLayoutEffect` over `useEffect`?",
    answer:
      "`useLayoutEffect` runs before paint, blocking visual updates — useful for measurement.",
  },
  {
    id: "16",
    topic: "react",
    question:
      "How does React ensure that effects always reference the latest state?",
    answer:
      "React captures variable closures in each render cycle; dependencies in hooks are required to avoid stale values.",
  },
  {
    id: "17",
    topic: "system-design",
    question:
      "What system design component aggregates logs and metrics for observability?",
    answer:
      "Log aggregator (e.g., ELK, Loki, Datadog, or centralized logging service).",
  },
  {
    id: "18",
    topic: "system-design",
    question: "What’s the difference between vertical and horizontal scaling?",
    answer:
      "Vertical scaling means upgrading machine resources; horizontal means adding more instances.",
  },
  {
    id: "19",
    topic: "browser",
    question:
      "What API lets you observe changes to DOM structure like element removal or insertion?",
    answer: "`MutationObserver`",
  },
  {
    id: "20",
    topic: "browser",
    question:
      "Which storage option persists across sessions and tabs, but is synchronous?",
    answer: "`localStorage`",
  },
  {
    id: "21",
    topic: "auth",
    question: "What client-side storage method is safest for refresh tokens?",
    answer: "`HttpOnly cookies` — inaccessible to JS, prevents XSS leakage.",
  },
  {
    id: "22",
    topic: "auth",
    question: "What OAuth 2.0 grant is recommended for single-page apps?",
    answer: "`Authorization Code Flow with PKCE`",
  },
  {
    id: "23",
    topic: "typescript",
    question:
      "What mapped type transforms all properties in a type to optional and readonly?",
    answer: "`Partial<Readonly<T>>`",
  },
  {
    id: "24",
    topic: "typescript",
    question: "How do you define a recursive type in TypeScript?",
    answer:
      "By referencing the type itself within its definition using `type Tree = { value: string; children: Tree[] }`.",
  },
  {
    id: "25",
    topic: "react",
    question:
      "What React pattern prevents unnecessary re-renders by splitting stateful logic?",
    answer: "Custom hooks",
  },
  {
    id: "26",
    topic: "react",
    question:
      "What React feature batches multiple state updates during concurrent rendering?",
    answer: "`startTransition()`",
  },
  {
    id: "27",
    topic: "system-design",
    question: "What database pattern separates read and write operations?",
    answer: "CQRS — Command Query Responsibility Segregation",
  },
  {
    id: "28",
    topic: "system-design",
    question:
      "Which consistency model allows reading stale data for higher availability?",
    answer: "Eventual consistency",
  },
  {
    id: "29",
    topic: "auth",
    question:
      "What HTTP status code indicates expired JWT in a protected API call?",
    answer: "`401 Unauthorized`",
  },
  {
    id: "30",
    topic: "auth",
    question: "What header is used to pass a bearer token in an HTTP request?",
    answer: "`Authorization: Bearer <token>`",
  },
  {
    id: "31",
    topic: "browser",
    question: "What event is triggered when a page is unloaded or refreshed?",
    answer: "`beforeunload`",
  },
  {
    id: "32",
    topic: "performance",
    question:
      "What browser API helps measure first contentful paint and largest contentful paint?",
    answer: "`PerformanceObserver`",
  },
  {
    id: "33",
    topic: "react",
    question:
      "What React hook lets you defer a value update for smoother UX under load?",
    answer: "`useDeferredValue()`",
  },
  {
    id: "34",
    topic: "react",
    question:
      "What new hook in React 19 lets you fetch async data directly in components?",
    answer:
      "`use()` — part of React’s built-in support for async/await with Suspense.",
  },
  {
    id: "35",
    topic: "typescript",
    question:
      "What type narrows a value to `never` if it's not assignable to another type?",
    answer: "`Extract<T, U>` — opposite of `Exclude`.",
  },
  {
    id: "36",
    topic: "typescript",
    question:
      "How do you ensure a type can only be a subset of certain string values?",
    answer: "Use a union of string literals: `'success' | 'error' | 'loading'`",
  },
  {
    id: "37",
    topic: "browser",
    question:
      "What API provides low-level access to file system operations in supported browsers?",
    answer: "`File System Access API`",
  },
  {
    id: "38",
    topic: "browser",
    question:
      "What API enables persistent, async storage of complex structured data?",
    answer: "`IndexedDB`",
  },
  {
    id: "39",
    topic: "performance",
    question:
      "What strategy breaks long tasks into smaller chunks to avoid blocking the UI thread?",
    answer:
      "Idle chunking or cooperative scheduling (e.g., via `requestIdleCallback`)",
  },
  {
    id: "40",
    topic: "performance",
    question:
      "What Web Vitals metric measures the time to largest visible element render?",
    answer: "`Largest Contentful Paint (LCP)`",
  },
  {
    id: "41",
    topic: "nextjs",
    question:
      "What rendering strategy in Next.js allows static generation but with runtime freshness?",
    answer: "`ISR` — Incremental Static Regeneration",
  },
  {
    id: "42",
    topic: "nextjs",
    question:
      "What Next.js feature allows streaming content into the browser before all data is ready?",
    answer: "`React Server Components + Suspense + Streaming`",
  },
  {
    id: "43",
    topic: "graphql",
    question:
      "What GraphQL directive lets you skip or include fields conditionally?",
    answer: "`@skip(if: ...)` and `@include(if: ...)`",
  },
  {
    id: "44",
    topic: "graphql",
    question: "What makes GraphQL over-fetch-resistant compared to REST?",
    answer:
      "GraphQL clients specify exactly which fields they want — no extra data.",
  },
  {
    id: "45",
    topic: "serverless",
    question: "What limitation is common to most serverless platforms?",
    answer: "Cold starts and short-lived stateless execution environments.",
  },
  {
    id: "46",
    topic: "serverless",
    question: "What pattern helps reduce duplicate serverless function code?",
    answer: "Shared utility layers or monorepo-based shared modules.",
  },
  {
    id: "47",
    topic: "i18n",
    question: "What does `locale` refer to in i18n?",
    answer: "A combination of language and region (e.g., `en-US`, `fr-FR`).",
  },
  {
    id: "48",
    topic: "i18n",
    question:
      "What formatting challenge does i18n introduce with numbers and dates?",
    answer: "Locale-specific rules for grouping, separators, and calendars.",
  },
  {
    id: "49",
    topic: "frontend-architecture",
    question:
      "You want to isolate micro frontends in the same page without conflicts.",
    answer:
      "Use iframe isolation or Webpack Module Federation with unique scopes.",
  },
  {
    id: "50",
    topic: "frontend-architecture",
    question: "How do you avoid global CSS conflicts in large apps?",
    answer:
      "CSS modules, BEM naming, Tailwind, or scoped styles with Shadow DOM.",
  },
  {
    id: "51",
    topic: "resume-prep",
    question:
      "What is the ideal format for listing projects in a senior resume?",
    answer:
      "`Problem → Solution → Measurable Result` (with %/metrics where possible)",
  },
  {
    id: "52",
    topic: "resume-prep",
    question: "What should be avoided in technical resumes for senior roles?",
    answer:
      "Generic statements like 'team player' or tech lists with no outcomes.",
  },
  {
    id: "53",
    topic: "mobile",
    question:
      "What meta tag ensures proper responsive scaling on mobile devices?",
    answer: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
  },
  {
    id: "54",
    topic: "mobile",
    question:
      "What event should you avoid for mobile tap interactions due to 300ms delay?",
    answer:
      "`onclick` — use `touchstart` or passive event listeners for faster response.",
  },
  {
    id: "55",
    topic: "testing",
    question: "What’s the main purpose of a mock in unit testing?",
    answer:
      "To replace real dependencies with controlled stand-ins for predictable behavior.",
  },
  {
    id: "56",
    topic: "testing",
    question:
      "What kind of test verifies integration between backend and frontend APIs?",
    answer: "Contract or integration test using mocks or real environments.",
  },
  {
    id: "57",
    topic: "monorepo",
    question: "What tooling helps enforce dependency boundaries in monorepos?",
    answer: "`nx`, `turborepo`, or `eslint-plugin-boundaries`",
  },
  {
    id: "58",
    topic: "monorepo",
    question: "What’s a downside of polyrepo structures in large teams?",
    answer:
      "Harder to share utilities, coordinate versioning, and enforce consistency.",
  },
  {
    id: "59",
    topic: "ci-cd",
    question: "What strategy minimizes downtime during deployments?",
    answer: "Blue-green deployment or canary rollout.",
  },
  {
    id: "60",
    topic: "ci-cd",
    question:
      "What CI/CD step should run before deployment to avoid shipping bugs?",
    answer: "Automated tests (unit, integration, linting, type checks)",
  },
  {
    id: "61",
    topic: "animation",
    question: "What CSS property should you animate for best performance?",
    answer:
      "`transform` and `opacity` — avoid layout-triggering properties like `top` or `width`.",
  },
  {
    id: "62",
    topic: "state-management",
    question:
      "What’s a key downside of using React Context for deeply nested global state?",
    answer:
      "Every consumer re-renders when the value changes — even if they don’t use all of it.",
  },
  {
    id: "63",
    topic: "security",
    question: "What frontend storage method is vulnerable to XSS attacks?",
    answer:
      "`localStorage` — values are accessible via JavaScript and exposed to XSS.",
  },
  {
    id: "64",
    topic: "security",
    question:
      "What HTTP header prevents browsers from embedding your site in iframes?",
    answer: "`X-Frame-Options: DENY`",
  },
  {
    id: "65",
    topic: "browser-storage",
    question:
      "What browser API should be used for storing large, structured data offline?",
    answer: "`IndexedDB`",
  },
  {
    id: "66",
    topic: "browser-storage",
    question:
      "Which storage option is cleared when the tab or window is closed?",
    answer: "`sessionStorage`",
  },
  {
    id: "67",
    topic: "a11y",
    question:
      "What ARIA attribute should be used to label form inputs for screen readers?",
    answer: "`aria-label` or associating with <label for='id'>",
  },
  {
    id: "68",
    topic: "a11y",
    question:
      "What keyboard key combination should all modal dialogs support for closing?",
    answer: "`Esc` key",
  },
  {
    id: "69",
    topic: "devtools",
    question:
      "What Chrome DevTools tab is used to inspect and debug React component state?",
    answer: "`Components` tab (React Developer Tools extension)",
  },
  {
    id: "70",
    topic: "devtools",
    question: "Which DevTools feature helps find layout shifts and reflows?",
    answer: "`Performance` tab with Layout Shift trace",
  },
  {
    id: "71",
    topic: "data-fetching",
    question:
      "What React Query feature prevents duplicate requests for the same data?",
    answer: "`Query deduplication` and built-in cache keys",
  },
  {
    id: "72",
    topic: "data-fetching",
    question: "What HTTP status code indicates a successful cache hit?",
    answer: "`304 Not Modified`",
  },
  {
    id: "73",
    topic: "css",
    question:
      "What CSS value makes an element ignore pointer events but remain visible?",
    answer: "`pointer-events: none`",
  },
  {
    id: "74",
    topic: "css",
    question:
      "What layout mode is best for building responsive two-column layouts?",
    answer: "`Flexbox` for simple structure, `Grid` for full layout control",
  },
  {
    id: "75",
    topic: "dom",
    question: "What does `document.createDocumentFragment()` help optimize?",
    answer: "Batch DOM manipulations without triggering layout/reflow",
  },
  {
    id: "76",
    topic: "dom",
    question: "What’s the difference between `innerHTML` and `textContent`?",
    answer: "`innerHTML` parses HTML; `textContent` sets plain text only",
  },
  {
    id: "77",
    topic: "events",
    question: "What’s the difference between event bubbling and capturing?",
    answer: "Bubbling goes child → parent; capturing is parent → child",
  },
  {
    id: "78",
    topic: "events",
    question: "What method stops an event from reaching other listeners?",
    answer: "`event.stopPropagation()`",
  },
  {
    id: "79",
    topic: "cdn",
    question: "What’s the main advantage of using a CDN for static assets?",
    answer: "Faster global delivery via edge servers close to the user",
  },
  {
    id: "80",
    topic: "cdn",
    question:
      "What header helps control caching behavior on CDN-delivered content?",
    answer: "`Cache-Control` header",
  },
  {
    id: "81",
    topic: "runtime",
    question:
      "What’s the difference between Node.js and the browser environment?",
    answer: "Node has file system access, no DOM; browser has DOM, no fs",
  },
  {
    id: "82",
    topic: "runtime",
    question: "What global object exists in both browser and Node.js?",
    answer: "`globalThis`",
  },
  {
    id: "83",
    topic: "memory",
    question: "What causes memory leaks in React components?",
    answer: "Uncleared timers, listeners, or subscriptions after unmount.",
  },
  {
    id: "84",
    topic: "memory",
    question: "What DevTools tab helps visualize retained memory over time?",
    answer: "`Memory` tab with heap snapshots",
  },
  {
    id: "85",
    topic: "rendering",
    question: "What causes React to re-render a component unnecessarily?",
    answer:
      "Changing props or state without actual logic change, especially with unstable refs/functions.",
  },
  {
    id: "86",
    topic: "rendering",
    question: "What key mistake breaks React list diffing optimization?",
    answer: "Using array index as `key` in dynamic lists.",
  },
  {
    id: "87",
    topic: "web-workers",
    question: "When should you use Web Workers in a frontend app?",
    answer:
      "To offload heavy computations without blocking the main UI thread.",
  },
  {
    id: "88",
    topic: "web-workers",
    question: "What is the limitation of Web Workers in terms of DOM access?",
    answer: "They can't access the DOM — they run in isolated threads.",
  },
  {
    id: "89",
    topic: "css-in-js",
    question: "What benefit does CSS-in-JS offer over traditional CSS?",
    answer: "Scoped styles, dynamic theming, and co-located styles with logic.",
  },
  {
    id: "90",
    topic: "css-in-js",
    question: "What’s a downside of CSS-in-JS in terms of performance?",
    answer:
      "Runtime style generation can slow down large apps or cause FOUC (flash of unstyled content).",
  },
  {
    id: "91",
    topic: "deployment",
    question:
      "What is the benefit of static site generation (SSG) for performance?",
    answer:
      "Prebuilt HTML served via CDN with minimal runtime work — ultra-fast loads.",
  },
  {
    id: "92",
    topic: "deployment",
    question:
      "What tool is commonly used to reduce JS/CSS bundle size during deployment?",
    answer:
      "`tree-shaking` and `code-splitting` via tools like Webpack or Vite",
  },
  {
    id: "93",
    topic: "data-structures",
    question:
      "What structure gives O(1) average time for insertion, deletion, and lookup?",
    answer: "`Hash Table` (e.g., JavaScript `Map` or `Object` for string keys)",
  },
  {
    id: "94",
    topic: "data-structures",
    question:
      "What structure guarantees order of insertion and uniqueness of values?",
    answer: "`Set`",
  },
  {
    id: "95",
    topic: "data-structures",
    question: "Which structure is most efficient for implementing LRU cache?",
    answer: "`Doubly Linked List + Hash Map` combo",
  },
  {
    id: "96",
    topic: "data-structures",
    question:
      "What’s the optimal structure for fast lookup with ordered traversal?",
    answer: "`Binary Search Tree` (or `Map` if no need for structural control)",
  },
  {
    id: "97",
    topic: "data-structures",
    question: "What is the time complexity to search an unsorted array?",
    answer: "O(n) — linear search",
  },
  {
    id: "98",
    topic: "data-structures",
    question:
      "What structure allows constant-time access to elements by index?",
    answer: "`Array` (contiguous memory access)",
  },
  {
    id: "99",
    topic: "data-structures",
    question: "Which structure supports O(1) insertion/removal at both ends?",
    answer: "`Deque` — Double Ended Queue",
  },
  {
    id: "100",
    topic: "data-structures",
    question: "Which structure is best for recursive call emulation?",
    answer: "`Stack` — LIFO behavior supports recursion tracking",
  },
  {
    id: "101",
    topic: "data-structures",
    question:
      "Which structure is best suited for implementing undo/redo functionality?",
    answer: "`Stack` — LIFO behavior supports reverse history traversal",
  },
  {
    id: "102",
    topic: "data-structures",
    question:
      "What data structure is typically used in BFS (Breadth-First Search)?",
    answer: "`Queue` — ensures level-order traversal by FIFO behavior",
  },
  {
    id: "103",
    topic: "data-structures",
    question: "What’s a key difference between a `Set` and an `Array`?",
    answer:
      "`Set` enforces uniqueness; `Array` allows duplicates and indexed access",
  },
  {
    id: "104",
    topic: "data-structures",
    question:
      "What structure supports efficient range queries (like sum or min in a range)?",
    answer: "`Segment Tree` or `Fenwick Tree` (Binary Indexed Tree)",
  },
  {
    id: "105",
    topic: "data-structures",
    question: "Which structure supports constant-time access to the median?",
    answer: "Two heaps (MaxHeap + MinHeap) — simulate a median priority queue",
  },
  {
    id: "106",
    topic: "data-structures",
    question: "What data structure is typically used in Dijkstra’s algorithm?",
    answer:
      "`Min Heap` (Priority Queue) — for selecting next shortest-path node",
  },
  {
    id: "107",
    topic: "data-structures",
    question: "What structure is ideal for prefix lookups like autocomplete?",
    answer: "`Trie` — tree structure where each path represents a prefix",
  },
  {
    id: "108",
    topic: "data-structures",
    question:
      "What’s the space complexity of an adjacency matrix for a graph with N nodes?",
    answer: "O(N²) — stores edge existence for all pairs",
  },
  {
    id: "109",
    topic: "data-structures",
    question:
      "What structure gives O(log n) insertion and retrieval of sorted data?",
    answer: "`Balanced Binary Search Tree` (e.g., AVL or Red-Black Tree)",
  },
  {
    id: "110",
    topic: "data-structures",
    question: "What structure is used to detect cycles in a directed graph?",
    answer: "DFS with recursion stack or Union-Find with path compression",
  },
  {
    id: "111",
    topic: "react",
    question:
      "What hook helps prevent expensive recalculations on each render?",
    answer: "`useMemo()` — caches computation unless dependencies change",
  },
  {
    id: "112",
    topic: "react",
    question:
      "What hook avoids recreating a function unnecessarily on re-renders?",
    answer: "`useCallback()` — memoizes function reference",
  },
  {
    id: "113",
    topic: "react",
    question:
      "What React optimization skips re-rendering a component if props haven’t changed?",
    answer: "`React.memo()` — shallow compares props and skips if equal",
  },
  {
    id: "114",
    topic: "react",
    question: "What problem does `key` solve in React lists?",
    answer: "Helps React identify which items changed, added, or removed",
  },
  {
    id: "115",
    topic: "react",
    question:
      "What’s the difference between controlled and uncontrolled components?",
    answer:
      "Controlled: React state manages value; Uncontrolled: DOM manages input state",
  },
  {
    id: "116",
    topic: "react",
    question:
      "What hook is used to persist values across renders without re-rendering?",
    answer: "`useRef()` — stores mutable data without triggering updates",
  },
  {
    id: "117",
    topic: "react",
    question:
      "What’s the risk of updating state inside `useEffect()` without a dependency array?",
    answer: "It may cause infinite loops",
  },
  {
    id: "118",
    topic: "react",
    question: "What’s the purpose of `startTransition()` in React 18+?",
    answer: "Allows non-blocking UI updates for deferred or non-urgent state",
  },
  {
    id: "119",
    topic: "react",
    question: "When should you prefer `useLayoutEffect()` over `useEffect()`?",
    answer: "When DOM measurements must be made before paint",
  },
  {
    id: "120",
    topic: "react",
    question: "What’s the purpose of `ErrorBoundary` in React?",
    answer: "Catches and renders fallback UI on component-level render errors",
  },
  {
    id: "121",
    topic: "react19",
    question:
      "What new React hook lets you await a Promise directly inside a component?",
    answer:
      "`use()` — available in React 19+ and supported in Server Components",
  },
  {
    id: "122",
    topic: "react19",
    question:
      "What React 19 feature allows data-fetching in components without `useEffect`?",
    answer:
      "`use()` with async/await in Server Components or React 19+ client components",
  },
  {
    id: "123",
    topic: "react19",
    question:
      "What does React 19 enable with Suspense and streaming on the server?",
    answer: "Partial hydration and progressive rendering of component trees",
  },
  {
    id: "124",
    topic: "react19",
    question: "What is the primary benefit of Server Components in React?",
    answer: "Zero bundle cost for logic/data that never runs in the client",
  },
  {
    id: "125",
    topic: "react19",
    question:
      "Can you use `use()` in a traditional Client Component in React 19?",
    answer:
      "Yes, but only if the value is guaranteed to resolve synchronously or via a Suspense boundary",
  },
  {
    id: "126",
    topic: "react19",
    question: "How does React 19 handle `useEffect` teardown timing?",
    answer:
      "It now delays layout effects cleanup until after commits are flushed",
  },
  {
    id: "127",
    topic: "react19",
    question:
      "What hook lets you track async resource state (loading, error, success) using `use()`?",
    answer:
      "None directly — `use()` suspends until resolution; fallback UI should be wrapped in `<Suspense>`",
  },
  {
    id: "128",
    topic: "react19",
    question:
      "What Next.js file type is compatible with React Server Components by default?",
    answer:
      "`.server.tsx` or any file inside the `/app` directory using `export const dynamic = 'force-dynamic'`",
  },
  {
    id: "129",
    topic: "react19",
    question:
      "What happens if `use()` is called inside a `useEffect()` or callback?",
    answer:
      "`use()` can only be called during rendering — not inside effects or callbacks",
  },
  {
    id: "130",
    topic: "react19",
    question:
      "What’s a new strategy React 19 encourages to reduce loading states?",
    answer:
      "Streaming + nested Suspense boundaries to show parts of the UI as data resolves",
  },
  {
    id: "131",
    topic: "typescript",
    question:
      "What utility type creates a type with only a subset of keys from another type?",
    answer: "`Pick<Type, Keys>`",
  },
  {
    id: "132",
    topic: "typescript",
    question: "What utility type removes a subset of keys from a type?",
    answer: "`Omit<Type, Keys>`",
  },
  {
    id: "133",
    topic: "typescript",
    question:
      "What TypeScript feature lets you create types from object structures at runtime?",
    answer: "`typeof` — gets the static type of a runtime variable",
  },
  {
    id: "134",
    topic: "typescript",
    question: "What does `keyof` return when used on a type?",
    answer: "A union of the keys of the type as string literal types",
  },
  {
    id: "135",
    topic: "typescript",
    question: "What utility type makes all properties in a type required?",
    answer: "`Required<T>`",
  },
  {
    id: "136",
    topic: "typescript",
    question:
      "What utility type removes optionality and `undefined` from properties?",
    answer:
      "`NonNullable<T>` removes `null` and `undefined`; `Required<T>` removes `?`",
  },
  {
    id: "137",
    topic: "typescript",
    question: "What is a discriminated union?",
    answer:
      "A union of types that share a common literal field (like `kind`) used for narrowing",
  },
  {
    id: "138",
    topic: "typescript",
    question: "How do you infer a type from a function’s return value?",
    answer: "`ReturnType<typeof fn>`",
  },
  {
    id: "139",
    topic: "typescript",
    question:
      "What keyword inside a conditional type lets you capture a matched type?",
    answer: "`infer`",
  },
  {
    id: "140",
    topic: "typescript",
    question:
      "What utility type lets you build an object with specific keys and all values of the same type?",
    answer: "`Record<Keys, Type>`",
  },
  {
    id: "141",
    topic: "typescript",
    question: "How do you exclude `undefined` and `null` from a type T?",
    answer: "`NonNullable<T>` — removes both `null` and `undefined` from T",
  },
  {
    id: "142",
    topic: "typescript",
    question:
      "What narrowing technique ensures type safety when checking for object keys?",
    answer:
      "`key in object` combined with `typeof obj === 'object' && obj !== null`",
  },
  {
    id: "143",
    topic: "typescript",
    question: "How do you make all nested properties of a type optional?",
    answer:
      "Use a recursive mapped type with conditional and `Partial<T>` logic",
  },
  {
    id: "144",
    topic: "typescript",
    question: "What type trick converts a union into an intersection?",
    answer:
      "`(T extends any ? (x: T) => any : never) extends (x: infer U) => any ? U : never`",
  },
  {
    id: "145",
    topic: "typescript",
    question:
      "What utility type turns a union of keys into a record with the same value type?",
    answer: "`Record<Union, ValueType>`",
  },
  {
    id: "146",
    topic: "typescript",
    question: "How can you make a type deeply readonly?",
    answer:
      "Create a recursive mapped type: `{ readonly [K in keyof T]: DeepReadonly<T[K]> }`",
  },
  {
    id: "147",
    topic: "typescript",
    question: "What’s the difference between `unknown` and `any`?",
    answer:
      "`unknown` is type-safe; you must narrow it before use. `any` bypasses the type system.",
  },
  {
    id: "148",
    topic: "typescript",
    question:
      "How do you conditionally return one type or another based on a generic constraint?",
    answer: "`T extends U ? A : B` — conditional types",
  },
  {
    id: "149",
    topic: "typescript",
    question:
      "What technique lets you extract parameter types from a function signature?",
    answer: "`Parameters<typeof fn>` — returns a tuple of argument types",
  },
  {
    id: "150",
    topic: "typescript",
    question:
      "What kind of type utility would you use to create a TS-safe route params object from a path like '/post/:id'?",
    answer: "Template literal types with `infer` to extract parameter names",
  },
  {
    id: "151",
    topic: "zod",
    question: "What is Zod primarily used for in a TypeScript project?",
    answer: "Runtime schema validation with compile-time type inference",
  },
  {
    id: "152",
    topic: "zod",
    question: "How do you create a Zod string schema that enforces min length?",
    answer: "`z.string().min(1)`",
  },
  {
    id: "153",
    topic: "zod",
    question: "How do you extract the TypeScript type from a Zod schema?",
    answer: "`z.infer<typeof schema>`",
  },
  {
    id: "154",
    topic: "zod",
    question: "How do you validate a nested object with Zod?",
    answer:
      "Use `z.object({...})` where nested properties are themselves Zod schemas",
  },
  {
    id: "155",
    topic: "zod",
    question: "What method do you use to parse and validate an input object?",
    answer: "`schema.parse(data)` — throws on error",
  },
  {
    id: "156",
    topic: "zod",
    question:
      "What method gives you a result object instead of throwing on invalid data?",
    answer: "`schema.safeParse(data)`",
  },
  {
    id: "157",
    topic: "zod",
    question: "How do you mark a Zod field as optional?",
    answer: "Append `.optional()` to the field schema",
  },
  {
    id: "158",
    topic: "zod",
    question: "How do you validate a union of multiple types in Zod?",
    answer: "`z.union([schemaA, schemaB])`",
  },
  {
    id: "159",
    topic: "zod",
    question: "How can you narrow Zod input to a specific literal value?",
    answer: "`z.literal('value')`",
  },
  {
    id: "160",
    topic: "zod",
    question:
      "How do you validate an array where each item follows the same schema?",
    answer: "`z.array(schema)`",
  },
  {
    id: "161",
    topic: "async-js",
    question:
      "What JavaScript mechanism ensures async callbacks are handled in order after the current call stack?",
    answer: "`Microtask queue` — includes `Promise.then`, `queueMicrotask`",
  },
  {
    id: "162",
    topic: "async-js",
    question:
      "What’s the difference between `setTimeout(fn, 0)` and `Promise.resolve().then(fn)`?",
    answer:
      "`setTimeout` goes to macrotask queue, `Promise.then` goes to microtask queue (executes sooner)",
  },
  {
    id: "163",
    topic: "async-js",
    question:
      "What’s the result of calling `await` inside a non-async function?",
    answer:
      "SyntaxError — `await` is only allowed inside async functions or top-level in modules",
  },
  {
    id: "164",
    topic: "async-js",
    question: "What API allows you to cancel a fetch request?",
    answer: "`AbortController` — use the signal in `fetch(url, { signal })`",
  },
  {
    id: "165",
    topic: "async-js",
    question: "What does `Promise.race()` return?",
    answer: "The value or rejection of the first settled promise in the array",
  },
  {
    id: "166",
    topic: "async-js",
    question:
      "What happens if you `await` multiple promises without `Promise.all`?",
    answer: "They run sequentially (one after another), not in parallel",
  },
  {
    id: "167",
    topic: "async-js",
    question:
      "What async pattern handles both errors and final success cleanly?",
    answer: "`try/catch/finally` around `await`ed calls",
  },
  {
    id: "168",
    topic: "async-js",
    question: "What’s a common pitfall with `forEach` and async/await?",
    answer:
      "`forEach` doesn’t await async callbacks — use `for...of` + `await` instead",
  },
  {
    id: "169",
    topic: "async-js",
    question: "What utility delays execution for N milliseconds in async code?",
    answer:
      "A custom `sleep(ms)` function using `return new Promise(resolve => setTimeout(resolve, ms))`",
  },
  {
    id: "170",
    topic: "async-js",
    question:
      "What async debugging tool lets you trace long chains of promises?",
    answer:
      "Async stack traces (enabled in modern browsers by default in DevTools)",
  },
  {
    id: "171",
    topic: "async-js",
    question:
      "What async pattern allows producing values over time using `for await...of`?",
    answer: "Async generators — `async function*`",
  },
  {
    id: "172",
    topic: "async-js",
    question:
      "What built-in function helps throttle execution of a fetch-heavy input?",
    answer: "Custom `throttle()` function or `requestIdleCallback`",
  },
  {
    id: "173",
    topic: "async-js",
    question: "What’s the main use of `ReadableStream` in modern browsers?",
    answer:
      "To process streaming data chunk-by-chunk (e.g. large files or streamed responses)",
  },
  {
    id: "174",
    topic: "async-js",
    question:
      "What’s the difference between `ReadableStream` and `AsyncIterable`?",
    answer:
      "`ReadableStream` uses readers; `AsyncIterable` works with `for await...of` directly",
  },
  {
    id: "175",
    topic: "async-js",
    question:
      "What pattern delays retry attempts to reduce pressure on services?",
    answer: "Exponential backoff — delay grows on each retry",
  },
  {
    id: "176",
    topic: "async-js",
    question: "What’s the purpose of `Promise.withResolvers()` (TC39 Stage 3)?",
    answer:
      "Creates an externally controllable promise with `resolve` and `reject` references",
  },
  {
    id: "177",
    topic: "async-js",
    question: "What’s the primary use of `AbortSignal.timeout(ms)`?",
    answer:
      "Automatically aborts after N milliseconds — useful for safe fetch timeouts",
  },
  {
    id: "178",
    topic: "async-js",
    question:
      "What’s a key benefit of `structuredClone()` over `JSON.stringify` for passing data to workers?",
    answer:
      "Supports non-JSON-safe types like `Map`, `Set`, and circular references",
  },
  {
    id: "179",
    topic: "async-js",
    question:
      "What built-in method schedules async tasks with lower priority than microtasks?",
    answer:
      "`setTimeout(fn, 0)` — queues task to macrotask queue after microtasks complete",
  },
  {
    id: "180",
    topic: "async-js",
    question: "What’s a safe pattern for race + timeout handling with fetch?",
    answer:
      "`Promise.race([fetchPromise, timeoutPromise])` with `AbortController` cleanup",
  },
  {
    id: "181",
    topic: "css",
    question:
      "What CSS value allows an element to size itself to fit its content?",
    answer: "`width: fit-content`",
  },
  {
    id: "182",
    topic: "css",
    question: "What’s the difference between `em` and `rem`?",
    answer:
      "`em` is relative to the parent, `rem` is relative to the root element",
  },
  {
    id: "183",
    topic: "css",
    question: "What property lets you control element stacking order?",
    answer: "`z-index` (works on positioned elements within stacking contexts)",
  },
  {
    id: "184",
    topic: "css",
    question: "What layout algorithm does `display: grid` use?",
    answer:
      "Two-dimensional grid layout with tracks (rows/columns) and alignment control",
  },
  {
    id: "185",
    topic: "css",
    question:
      "How do you prevent a child element from overflowing its container?",
    answer: "`overflow: hidden` or `scroll` or using `max-width`/`max-height`",
  },
  {
    id: "186",
    topic: "css",
    question: "What CSS property makes an element ignore pointer events?",
    answer: "`pointer-events: none`",
  },
  {
    id: "187",
    topic: "css",
    question: "How do you vertically center content inside a flex container?",
    answer: "`display: flex; align-items: center;`",
  },
  {
    id: "188",
    topic: "css",
    question: "What does `contain: layout;` do?",
    answer:
      "Creates a containment context that limits layout recalculations — improves perf",
  },
  {
    id: "189",
    topic: "css",
    question:
      "What’s the difference between `visibility: hidden` and `display: none`?",
    answer:
      "`visibility: hidden` hides but keeps layout; `display: none` removes from layout",
  },
  {
    id: "190",
    topic: "css",
    question: "What causes layout thrashing in CSS-heavy UIs?",
    answer:
      "Reading layout properties (like `offsetHeight`) and writing style repeatedly in a loop",
  },
  {
    id: "191",
    topic: "system-design",
    question:
      "What pattern allows services to continue functioning when a dependency fails?",
    answer:
      "`Fallback pattern` — provide a default response or cached data if upstream fails",
  },
  {
    id: "192",
    topic: "system-design",
    question:
      "What’s the difference between strong consistency and eventual consistency?",
    answer:
      "Strong: all reads see the latest write. Eventual: updates propagate over time.",
  },
  {
    id: "193",
    topic: "system-design",
    question: "What’s the benefit of an API Gateway in microservices?",
    answer:
      "Centralizes routing, rate limiting, auth, and protocol translation between clients and services",
  },
  {
    id: "194",
    topic: "system-design",
    question:
      "What technique prevents a single client from overwhelming a system with requests?",
    answer: "`Rate limiting` — via token bucket or leaky bucket algorithms",
  },
  {
    id: "195",
    topic: "system-design",
    question: "What is sharding in database architecture?",
    answer:
      "Splitting data across multiple databases or tables to scale horizontally",
  },
  {
    id: "196",
    topic: "system-design",
    question: "What’s the role of a CDN in global system architecture?",
    answer:
      "Distribute static content to edge servers near users for low-latency access",
  },
  {
    id: "197",
    topic: "system-design",
    question: "What consistency model does DynamoDB use by default?",
    answer: "Eventual consistency (with optional strongly consistent reads)",
  },
  {
    id: "198",
    topic: "system-design",
    question: "What is the CAP theorem in distributed systems?",
    answer:
      "You can only guarantee 2 out of 3: Consistency, Availability, Partition Tolerance",
  },
  {
    id: "199",
    topic: "system-design",
    question: "How does horizontal scaling differ from vertical scaling?",
    answer:
      "Horizontal: add more machines. Vertical: increase resources on one machine.",
  },
  {
    id: "200",
    topic: "system-design",
    question: "What’s the benefit of message queues in system design?",
    answer:
      "Decouple producers/consumers, smooth traffic spikes, enable async workflows",
  },
  {
    id: "201",
    topic: "browser",
    question: "What does the `DOMContentLoaded` event signify?",
    answer:
      "The initial HTML document has been completely loaded and parsed, without waiting for styles/images",
  },
  {
    id: "202",
    topic: "browser",
    question:
      "What is the difference between `navigator.userAgent` and `navigator.platform`?",
    answer:
      "`userAgent` identifies the browser; `platform` identifies the OS or device",
  },
  {
    id: "203",
    topic: "browser",
    question:
      "What API allows pages from the same origin to communicate across browser tabs?",
    answer: "`BroadcastChannel` API",
  },
  {
    id: "204",
    topic: "browser",
    question: "What is the purpose of `requestAnimationFrame()`?",
    answer:
      "Schedules rendering callbacks synced with the browser’s refresh rate",
  },
  {
    id: "205",
    topic: "browser",
    question:
      "What API allows you to observe visibility changes of a webpage or tab?",
    answer:
      "`Page Visibility API` — uses `document.visibilityState` and `visibilitychange` event",
  },
  {
    id: "206",
    topic: "browser",
    question:
      "What’s the main difference between `localStorage` and `sessionStorage`?",
    answer:
      "`localStorage` persists across sessions; `sessionStorage` is cleared when the tab closes",
  },
  {
    id: "207",
    topic: "browser",
    question:
      "How does the browser prioritize loading critical CSS vs JavaScript?",
    answer:
      "CSS blocks rendering; JS blocks parsing unless `defer` or `async` is used",
  },
  {
    id: "208",
    topic: "browser",
    question: "What is a reflow (aka layout thrash)?",
    answer:
      "When the browser recalculates positions/sizes of elements — expensive if triggered frequently",
  },
  {
    id: "209",
    topic: "browser",
    question:
      "What browser API gives access to real-time connection info like downlink speed?",
    answer: "`NetworkInformation` API via `navigator.connection`",
  },
  {
    id: "210",
    topic: "browser",
    question:
      "What security feature blocks cross-origin access to sensitive resources?",
    answer: "`CORS` — Cross-Origin Resource Sharing enforced via HTTP headers",
  },
  {
    id: "211",
    topic: "auth",
    question:
      "What’s the main security reason to store tokens in `HttpOnly` cookies?",
    answer:
      "They’re inaccessible to JavaScript, protecting against XSS attacks",
  },
  {
    id: "212",
    topic: "auth",
    question: "What’s the difference between a session token and a JWT?",
    answer:
      "Session tokens are stored server-side; JWTs are self-contained and stateless",
  },
  {
    id: "213",
    topic: "auth",
    question: "What is the primary risk of storing JWTs in `localStorage`?",
    answer:
      "They can be stolen via XSS because they are accessible to JavaScript",
  },
  {
    id: "214",
    topic: "auth",
    question: "What OAuth 2.0 flow is most secure for single-page apps (SPAs)?",
    answer: "`Authorization Code Flow with PKCE`",
  },
  {
    id: "215",
    topic: "auth",
    question: "What does PKCE protect against in OAuth flows?",
    answer:
      "Authorization code interception — ensures client integrity without secrets",
  },
  {
    id: "216",
    topic: "auth",
    question:
      "What’s the difference between `access_token` and `refresh_token`?",
    answer:
      "`access_token` is short-lived for API calls; `refresh_token` gets new access tokens",
  },
  {
    id: "217",
    topic: "auth",
    question:
      "What’s a common strategy to invalidate a JWT without a server session?",
    answer:
      "Track token IDs (jti) in a revocation list or use short-lived tokens with rotation",
  },
  {
    id: "218",
    topic: "auth",
    question: "How do you prevent CSRF when using cookies for auth?",
    answer:
      "Use `SameSite=Strict` or `Lax`, and include CSRF tokens for unsafe methods",
  },
  {
    id: "219",
    topic: "auth",
    question: "What does `SameSite=Lax` allow?",
    answer:
      "Sends cookies with top-level GET requests but not with cross-origin POSTs",
  },
  {
    id: "220",
    topic: "auth",
    question: "What’s a good practice for logout in a token-based system?",
    answer:
      "Clear cookies/localStorage, invalidate refresh tokens server-side if possible",
  },
  {
    id: "221",
    topic: "performance",
    question: "What is the primary metric for measuring initial render speed?",
    answer: "`First Contentful Paint (FCP)`",
  },
  {
    id: "222",
    topic: "performance",
    question: "What metric captures responsiveness to user input?",
    answer: "`Interaction to Next Paint (INP)` or `First Input Delay (FID)`",
  },
  {
    id: "223",
    topic: "performance",
    question: "What causes layout thrashing?",
    answer:
      "Reading + writing layout properties (like `offsetHeight`) in a loop",
  },
  {
    id: "224",
    topic: "performance",
    question: "What’s the difference between `debounce` and `throttle`?",
    answer:
      "`debounce` waits for idle, `throttle` limits execution to intervals",
  },
  {
    id: "225",
    topic: "performance",
    question: "What tool lets you record frame drops and layout shifts?",
    answer: "`Chrome DevTools > Performance` tab with rendering insights",
  },
  {
    id: "226",
    topic: "performance",
    question: "What strategy reduces initial JavaScript load in large apps?",
    answer: "`Code splitting` with dynamic `import()` or route-based chunks",
  },
  {
    id: "227",
    topic: "performance",
    question: "What HTML attribute delays image loading until visible?",
    answer: "`loading='lazy'`",
  },
  {
    id: "228",
    topic: "performance",
    question: "What does the `Content-Visibility` CSS property do?",
    answer: "`content-visibility: auto` skips rendering off-screen content",
  },
  {
    id: "229",
    topic: "performance",
    question: "What’s the impact of `position: fixed` elements on GPU usage?",
    answer:
      "Triggers composite layers and GPU acceleration, which may improve or hurt perf",
  },
  {
    id: "230",
    topic: "performance",
    question: "What is a good strategy to reduce time-to-interactive?",
    answer:
      "Prioritize critical rendering path: inline CSS, defer JS, preload fonts",
  },
  {
    id: "231",
    topic: "nextjs",
    question: "What directory enables the App Router in Next.js?",
    answer: "`/app` — replaces the traditional `/pages` routing system",
  },
  {
    id: "232",
    topic: "nextjs",
    question: "What are the three main rendering strategies in Next.js?",
    answer:
      "`Static Generation (SSG)`, `Server-side Rendering (SSR)`, and `Client-side Rendering (CSR)`",
  },
  {
    id: "233",
    topic: "nextjs",
    question:
      "What file is used to generate static params for dynamic routes in App Router?",
    answer:
      "`generateStaticParams()` — used inside dynamic `[slug]` or `[id]` folders",
  },
  {
    id: "234",
    topic: "nextjs",
    question: "How do you enable full streaming and React Server Components?",
    answer:
      "Use the App Router and `export const dynamic = 'force-dynamic'` for dynamic routes",
  },
  {
    id: "235",
    topic: "nextjs",
    question: "What method prevents route caching on the server?",
    answer: "`export const revalidate = 0` or `dynamic = 'force-dynamic'`",
  },
  {
    id: "236",
    topic: "nextjs",
    question: "What’s the difference between `use client` and `use server`?",
    answer:
      "`'use client'` marks a file as a client component; `'use server'` (Next 15) marks a server-only file",
  },
  {
    id: "237",
    topic: "nextjs",
    question:
      "What config file is used to define redirects, rewrites, and headers?",
    answer:
      "`next.config.js` — under the `async headers()`, `rewrites()`, or `redirects()` functions",
  },
  {
    id: "238",
    topic: "nextjs",
    question: "What file handles dynamic route generation with static export?",
    answer:
      "`generateStaticParams()` — used for static generation of dynamic pages",
  },
  {
    id: "239",
    topic: "nextjs",
    question: "What hook replaces `getInitialProps` in the App Router?",
    answer:
      "`React Server Components` + `async` page/route segments — data is fetched directly in components",
  },
  {
    id: "240",
    topic: "nextjs",
    question: "How do you disable static export and force full SSR?",
    answer:
      "`export const dynamic = 'force-dynamic'` at the route or layout level",
  },
  {
    id: "241",
    topic: "graphql",
    question: "What is the purpose of GraphQL’s `__typename` field?",
    answer:
      "It returns the name of the object’s type — useful for caching and unions",
  },
  {
    id: "242",
    topic: "graphql",
    question: "What’s a major benefit of GraphQL over REST?",
    answer:
      "Clients control the shape of responses — no over-fetching or under-fetching",
  },
  {
    id: "243",
    topic: "graphql",
    question: "What are GraphQL fragments used for?",
    answer:
      "Reusable query parts — help avoid repetition and improve type reuse",
  },
  {
    id: "244",
    topic: "graphql",
    question: "How does Apollo Client cache GraphQL queries?",
    answer: "Normalized cache with keys based on `__typename` and `id`",
  },
  {
    id: "245",
    topic: "graphql",
    question: "What GraphQL feature handles real-time communication?",
    answer: "`Subscriptions` — usually powered by WebSockets",
  },
  {
    id: "246",
    topic: "graphql",
    question: "How do you define input arguments for mutations in a schema?",
    answer: "Using `input` types in the schema and passing them as variables",
  },
  {
    id: "247",
    topic: "graphql",
    question:
      "What security concern exists with deeply nested GraphQL queries?",
    answer: "Query cost/complexity attacks — can cause denial of service",
  },
  {
    id: "248",
    topic: "graphql",
    question: "What tool is commonly used to visualize GraphQL queries?",
    answer: "`GraphiQL`, `GraphQL Playground`, or `Altair`",
  },
  {
    id: "249",
    topic: "graphql",
    question:
      "What directive allows partial field resolution in conditional queries?",
    answer: "`@skip(if: Boolean)` and `@include(if: Boolean)`",
  },
  {
    id: "250",
    topic: "graphql",
    question:
      "What’s the difference between `Query`, `Mutation`, and `Subscription` in GraphQL?",
    answer:
      "`Query`: read; `Mutation`: write/change; `Subscription`: real-time stream",
  },
  {
    id: "251",
    topic: "serverless",
    question: "What is a cold start in serverless functions?",
    answer:
      "The delay when a function is invoked after being idle — includes container spin-up time",
  },
  {
    id: "252",
    topic: "serverless",
    question: "Why are serverless functions considered stateless?",
    answer:
      "Each invocation is isolated and has no memory of previous requests",
  },
  {
    id: "253",
    topic: "serverless",
    question:
      "What’s a common way to store state across invocations in a serverless app?",
    answer:
      "Use external services like databases, object storage, or caching layers",
  },
  {
    id: "254",
    topic: "serverless",
    question: "What type of workloads are ideal for serverless functions?",
    answer:
      "Short-lived, event-driven tasks like form submissions, notifications, or image uploads",
  },
  {
    id: "255",
    topic: "serverless",
    question: "What’s a benefit of serverless over traditional containers?",
    answer:
      "Zero idle cost — you only pay per invocation and compute time used",
  },
  {
    id: "256",
    topic: "serverless",
    question:
      "What’s the typical timeout limit for most cloud provider serverless functions?",
    answer:
      "Often around 15 minutes (e.g., AWS Lambda), configurable within limits",
  },
  {
    id: "257",
    topic: "serverless",
    question:
      "What pattern avoids repeating shared code across multiple functions?",
    answer: "Use shared layers, middleware, or a monorepo structure",
  },
  {
    id: "258",
    topic: "serverless",
    question: "How do you handle secrets securely in a serverless function?",
    answer:
      "Use environment variables or secret managers (e.g., AWS Secrets Manager, Vercel Env Vars)",
  },
  {
    id: "259",
    topic: "serverless",
    question:
      "What does it mean that serverless scales “horizontally by default”?",
    answer:
      "Each request may spin up a new instance, scaling independently per user/event",
  },
  {
    id: "260",
    topic: "serverless",
    question:
      "What’s a drawback of serverless for real-time, persistent connections?",
    answer:
      "Serverless functions don’t maintain long-lived connections — unsuitable for WebSockets without an external broker",
  },
  {
    id: "261",
    topic: "i18n",
    question: "What does i18n stand for?",
    answer:
      "Internationalization — abbreviation from first and last letter with 18 characters in between",
  },
  {
    id: "262",
    topic: "i18n",
    question: "What’s the difference between i18n and l10n?",
    answer:
      "`i18n` is building the app to support multiple languages; `l10n` is providing translations/content",
  },
  {
    id: "263",
    topic: "i18n",
    question: "What is a locale?",
    answer: "A combination of language and region — e.g., `en-US`, `fr-CA`",
  },
  {
    id: "264",
    topic: "i18n",
    question: "What API formats numbers and currencies based on locale?",
    answer: "`Intl.NumberFormat`",
  },
  {
    id: "265",
    topic: "i18n",
    question: "What API formats dates and times based on locale?",
    answer: "`Intl.DateTimeFormat`",
  },
  {
    id: "266",
    topic: "i18n",
    question:
      "What file format is commonly used to store translations in modern apps?",
    answer: "JSON — often structured by locale and namespace",
  },
  {
    id: "267",
    topic: "i18n",
    question: "What’s a common challenge when localizing UI components?",
    answer:
      "Grammatical structure varies (e.g., gender, pluralization, word order)",
  },
  {
    id: "268",
    topic: "i18n",
    question: "What technique helps reduce bundle size in multi-locale apps?",
    answer:
      "Lazy loading or dynamic imports of locale-specific translation files",
  },
  {
    id: "269",
    topic: "i18n",
    question: "What does `fallbackLng` do in i18n frameworks like i18next?",
    answer:
      "Specifies the language to use if the user's locale has missing keys",
  },
  {
    id: "270",
    topic: "i18n",
    question: "What is a message key in i18n?",
    answer: "A unique string identifier that maps to a translatable phrase",
  },
  {
    id: "271",
    topic: "frontend-architecture",
    question:
      "What’s the main benefit of colocating logic, styles, and markup in modern components?",
    answer:
      "Improves maintainability and context isolation by reducing scattering",
  },
  {
    id: "272",
    topic: "frontend-architecture",
    question: "What’s the tradeoff of deeply nested component trees?",
    answer:
      "Improves reuse but may hurt readability and increase cognitive load",
  },
  {
    id: "273",
    topic: "frontend-architecture",
    question: "When should you choose global state over local component state?",
    answer:
      "When multiple distant components need synchronized access to the same data",
  },
  {
    id: "274",
    topic: "frontend-architecture",
    question: "What is the 'smart vs dumb component' pattern?",
    answer:
      "`Smart` components fetch and manage data; `dumb` components receive props and render UI",
  },
  {
    id: "275",
    topic: "frontend-architecture",
    question:
      "What does the 'presentational/container' pattern aim to separate?",
    answer: "Business logic from UI rendering",
  },
  {
    id: "276",
    topic: "frontend-architecture",
    question: "What’s a benefit of a mono-repo for frontend architecture?",
    answer:
      "Shared utilities/components, consistent tooling, and atomic commits across teams",
  },
  {
    id: "277",
    topic: "frontend-architecture",
    question: "What’s the key challenge when using micro-frontends?",
    answer:
      "Shared dependencies, consistent UI/UX, and cross-team coordination",
  },
  {
    id: "278",
    topic: "frontend-architecture",
    question: "How do you avoid prop drilling without a global state manager?",
    answer:
      "Use React Context to pass values through the tree without manual props",
  },
  {
    id: "279",
    topic: "frontend-architecture",
    question: "What’s a good principle for scalable folder structure?",
    answer:
      "`Feature-first` organization — group files by feature domain, not by type",
  },
  {
    id: "280",
    topic: "frontend-architecture",
    question:
      "What is the goal of using a design system in frontend architecture?",
    answer:
      "Ensure UI consistency, speed up development, and improve collaboration across teams",
  },
  {
    id: "281",
    topic: "resume-prep",
    question: "What resume format works best for tech roles?",
    answer:
      "Reverse-chronological — most recent role first, focused on impact and results",
  },
  {
    id: "282",
    topic: "resume-prep",
    question:
      "What’s the best structure for describing a project or achievement?",
    answer:
      "`Problem → Solution → Result`, ideally with metrics or % improvement",
  },
  {
    id: "283",
    topic: "resume-prep",
    question: "Why is it important to tailor your resume to each job?",
    answer:
      "To highlight relevant experience and match keywords that pass ATS filters",
  },
  {
    id: "284",
    topic: "resume-prep",
    question: "What keywords should you include in a frontend resume?",
    answer:
      "Frameworks (e.g., React, Next.js), architecture terms (SSR, SSG), testing, performance, a11y",
  },
  {
    id: "285",
    topic: "resume-prep",
    question: "What’s a common mistake in listing tech stacks on resumes?",
    answer:
      "Listing tools without showing context, depth, or how they were used to solve real problems",
  },
  {
    id: "286",
    topic: "resume-prep",
    question: "How should you present a GitHub project in your resume?",
    answer:
      "Link to repo + include a 1-liner on what problem it solves and which skills it demonstrates",
  },
  {
    id: "287",
    topic: "resume-prep",
    question: "What’s one way to show senior-level ownership in your resume?",
    answer:
      "Mention architectural decisions, mentoring, or process improvements with measurable results",
  },
  {
    id: "288",
    topic: "resume-prep",
    question: "What tense should you use when describing past jobs?",
    answer:
      "Past tense for completed roles; present tense for current responsibilities",
  },
  {
    id: "289",
    topic: "resume-prep",
    question: "What’s the ideal resume length for a senior developer?",
    answer: "1–2 pages — focused on most recent and relevant experience",
  },
  {
    id: "290",
    topic: "resume-prep",
    question:
      "What is a quick way to quantify frontend performance improvement?",
    answer:
      "Use metrics like LCP, TTI, or bundle size reduction — e.g., 'reduced TTI by 42%'",
  },
  {
    id: "291",
    topic: "mobile",
    question:
      "What viewport meta tag enables responsive layouts on mobile devices?",
    answer: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
  },
  {
    id: "292",
    topic: "mobile",
    question: "What CSS unit scales relative to screen width?",
    answer: "`vw` (viewport width) — 1vw = 1% of the viewport’s width",
  },
  {
    id: "293",
    topic: "mobile",
    question: "What’s the recommended minimum tap target size on mobile?",
    answer: "At least 48×48 pixels — per Google’s mobile UX guidelines",
  },
  {
    id: "294",
    topic: "mobile",
    question:
      "What issue can occur if you don’t set `user-scalable=no` in the viewport tag?",
    answer: "Users may zoom unexpectedly, breaking fixed layouts or components",
  },
  {
    id: "295",
    topic: "mobile",
    question: "What touch event replaces `click` to reduce input latency?",
    answer:
      "`touchstart` — provides faster feedback than `click`, which waits ~300ms",
  },
  {
    id: "296",
    topic: "mobile",
    question: "What API lets you detect if the keyboard is visible on mobile?",
    answer:
      "There’s no standard API; workarounds use `window.innerHeight` changes",
  },
  {
    id: "297",
    topic: "mobile",
    question: "What layout technique helps stack columns on small screens?",
    answer: "`Flexbox` or `CSS Grid` with `media queries` for breakpoints",
  },
  {
    id: "298",
    topic: "mobile",
    question: "What input attribute improves keyboard UX for emails?",
    answer: "`<input type='email'>` — shows `@` on the mobile keyboard",
  },
  {
    id: "299",
    topic: "mobile",
    question: "What strategy helps prevent layout shifts during font load?",
    answer:
      "`font-display: swap` in `@font-face` and setting fallback font sizes explicitly",
  },
  {
    id: "300",
    topic: "mobile",
    question: "What’s a common performance tip for mobile animations?",
    answer: "Use `transform` and `opacity` — avoid triggering layout/reflow",
  },
  {
    id: "301",
    topic: "testing",
    question: "What’s the goal of unit testing?",
    answer:
      "Test a small, isolated piece of logic or a pure function without external dependencies",
  },
  {
    id: "302",
    topic: "testing",
    question: "What does `jest.mock()` do?",
    answer:
      "Replaces a module or function with a mock version for isolation during tests",
  },
  {
    id: "303",
    topic: "testing",
    question:
      "What’s the difference between integration and end-to-end (E2E) testing?",
    answer:
      "Integration tests multiple modules together; E2E tests the full user flow via the UI",
  },
  {
    id: "304",
    topic: "testing",
    question: "What library is commonly used with React for component testing?",
    answer:
      "`@testing-library/react` — focuses on accessibility and behavior over implementation",
  },
  {
    id: "305",
    topic: "testing",
    question:
      "How does `screen.getByText()` differ from `queryByText()` in RTL?",
    answer: "`getByText` throws if not found; `queryByText` returns `null`",
  },
  {
    id: "306",
    topic: "testing",
    question: "What tool is widely used for E2E browser testing in JS apps?",
    answer: "`Cypress` — provides fast, visual, interactive E2E testing",
  },
  {
    id: "307",
    topic: "testing",
    question: "What’s the purpose of a `data-testid`?",
    answer:
      "Gives a stable selector for finding elements in tests without relying on text or layout",
  },
  {
    id: "308",
    topic: "testing",
    question:
      "What is snapshot testing and when should you be cautious using it?",
    answer:
      "Stores rendered output and compares it across runs — can lead to false positives if overused",
  },
  {
    id: "309",
    topic: "testing",
    question: "What type of test verifies the app from the user’s perspective?",
    answer:
      "End-to-End (E2E) test — simulates real user behavior via browser automation",
  },
  {
    id: "310",
    topic: "testing",
    question: "What’s a good strategy to test async behavior in UI?",
    answer:
      "Use `waitFor()` or `findBy*()` methods from RTL to wait for state changes",
  },
  {
    id: "311",
    topic: "monorepo",
    question: "What is a monorepo?",
    answer:
      "A single repository that contains multiple packages or projects — often shared across teams",
  },
  {
    id: "312",
    topic: "monorepo",
    question: "What are some popular tools for managing monorepos?",
    answer: "`Nx`, `Turborepo`, `Lerna`, `Bazel`",
  },
  {
    id: "313",
    topic: "monorepo",
    question: "What problem do monorepos help solve?",
    answer:
      "Ensure consistency, simplify dependency management, and enable shared code reuse",
  },
  {
    id: "314",
    topic: "monorepo",
    question: "What is a key challenge of monorepos?",
    answer:
      "Maintaining clear boundaries between packages and avoiding accidental cross-dependencies",
  },
  {
    id: "315",
    topic: "monorepo",
    question:
      "How can you enforce boundaries between teams or packages in a monorepo?",
    answer:
      "Use tools like `module boundaries` in `nx.json` or custom ESLint rules",
  },
  {
    id: "316",
    topic: "monorepo",
    question: "What benefit does a monorepo offer for CI pipelines?",
    answer:
      "Selective builds — only affected packages/apps are rebuilt and tested",
  },
  {
    id: "317",
    topic: "monorepo",
    question: "What’s the main difference between a monorepo and a polyrepo?",
    answer:
      "Monorepo: all projects in one repo; polyrepo: each project has its own repo",
  },
  {
    id: "318",
    topic: "monorepo",
    question: "How do monorepos support code reuse across teams?",
    answer:
      "Shared packages (e.g. `@org/ui`, `@org/utils`) live in the same repo and are versioned together",
  },
  {
    id: "319",
    topic: "monorepo",
    question: "What is `affected` in Nx?",
    answer:
      "A command that shows which projects are impacted by recent changes",
  },
  {
    id: "320",
    topic: "monorepo",
    question: "What versioning strategy can be used in monorepos?",
    answer:
      "Independent versioning or unified (fixed) versioning across all packages",
  },
  {
    id: "321",
    topic: "ci-cd",
    question: "What is the goal of Continuous Integration (CI)?",
    answer:
      "To automatically build and test code changes as soon as they are pushed",
  },
  {
    id: "322",
    topic: "ci-cd",
    question: "What is Continuous Deployment (CD)?",
    answer:
      "Automatically releasing every passing build to production (no manual step)",
  },
  {
    id: "323",
    topic: "ci-cd",
    question: "What’s a typical order of steps in a CI/CD pipeline?",
    answer: "Install → Lint → Test → Build → Deploy",
  },
  {
    id: "324",
    topic: "ci-cd",
    question: "What does a failing build in CI usually block?",
    answer: "Merging to main/protected branches or triggering deployment",
  },
  {
    id: "325",
    topic: "ci-cd",
    question:
      "How can you avoid redundant builds for unchanged packages in a monorepo?",
    answer:
      "Use `affected` logic (e.g., Nx), caching, or selective CI workflows",
  },
  {
    id: "326",
    topic: "ci-cd",
    question: "What is a canary deployment?",
    answer:
      "Releasing new code to a small subset of users before rolling out fully",
  },
  {
    id: "327",
    topic: "ci-cd",
    question: "What tool runs pipelines defined in `.gitlab-ci.yml`?",
    answer: "`GitLab CI/CD` — integrated with GitLab repositories",
  },
  {
    id: "328",
    topic: "ci-cd",
    question: "What is GitHub Actions?",
    answer: "A CI/CD platform where workflows are triggered by GitHub events",
  },
  {
    id: "329",
    topic: "ci-cd",
    question: "What’s the benefit of using matrix builds in CI?",
    answer:
      "Test across multiple environments (e.g., Node versions, OS) in parallel",
  },
  {
    id: "330",
    topic: "ci-cd",
    question: "What strategy helps rollback quickly after a bad deployment?",
    answer:
      "Blue-green deployment or keeping the previous release instantly restorable",
  },
  {
    id: "331",
    topic: "animation",
    question: "What CSS properties are GPU-accelerated and safe to animate?",
    answer:
      "`transform` and `opacity` — avoid layout-triggering properties like `width` or `top`",
  },
  {
    id: "332",
    topic: "animation",
    question:
      "What’s the difference between `transition` and `animation` in CSS?",
    answer:
      "`transition` is triggered by property change; `animation` runs based on keyframes",
  },
  {
    id: "333",
    topic: "animation",
    question: "What’s the purpose of `will-change` in CSS?",
    answer:
      "Hints the browser to optimize for an upcoming change in specified properties",
  },
  {
    id: "334",
    topic: "animation",
    question: "How does `requestAnimationFrame()` help in JS animations?",
    answer:
      "Schedules code to run right before the next paint frame — smooth 60fps animation",
  },
  {
    id: "335",
    topic: "animation",
    question: "What is `ease-in-out` in CSS timing functions?",
    answer:
      "Starts slowly, speeds up in the middle, then slows down again — creates a natural motion",
  },
  {
    id: "336",
    topic: "animation",
    question: "Why is animating `height: auto` problematic in CSS?",
    answer:
      "`auto` can’t be interpolated — needs JavaScript to measure and animate manually",
  },
  {
    id: "337",
    topic: "animation",
    question: "What’s the benefit of FLIP animation technique?",
    answer:
      "Optimizes layout animations by calculating transform deltas and reducing reflows",
  },
  {
    id: "338",
    topic: "animation",
    question: "What is the default frame rate for web animations?",
    answer: "60fps — ~16.67ms per frame",
  },
  {
    id: "339",
    topic: "animation",
    question: "What library provides spring-based animations for React?",
    answer:
      "`react-spring` — supports physics-based motion like tension and friction",
  },
  {
    id: "340",
    topic: "animation",
    question:
      "What’s a common accessibility concern with motion-heavy interfaces?",
    answer:
      "Motion sickness or cognitive overload — respect `prefers-reduced-motion` media query",
  },
  {
    id: "341",
    topic: "state-management",
    question: "What’s the difference between local and global state?",
    answer:
      "Local state belongs to a single component; global state is shared across multiple parts of the app",
  },
  {
    id: "342",
    topic: "state-management",
    question: "What are the downsides of overusing global state?",
    answer:
      "Can cause unnecessary re-renders, tight coupling, and hard-to-debug side effects",
  },
  {
    id: "343",
    topic: "state-management",
    question:
      "What’s a common pattern to isolate complex state logic in React?",
    answer:
      "`useReducer()` — centralizes state transitions using actions and reducers",
  },
  {
    id: "344",
    topic: "state-management",
    question:
      "What tool is commonly used for managing async state with caching and background refresh?",
    answer: "`React Query` or `TanStack Query`",
  },
  {
    id: "345",
    topic: "state-management",
    question: "What React pattern is prone to prop drilling?",
    answer: "Lifting state up too far without using context or shared hooks",
  },
  {
    id: "346",
    topic: "state-management",
    question: "What’s the role of selectors in Redux Toolkit or Recoil?",
    answer:
      "Memoize and derive data from state to avoid recomputing on every re-render",
  },
  {
    id: "347",
    topic: "state-management",
    question:
      "What library offers an atomic approach to state with minimal boilerplate?",
    answer:
      "`Jotai` or `Zustand` — each uses lightweight atomic state or hooks-based stores",
  },
  {
    id: "348",
    topic: "state-management",
    question: "What’s the core principle behind unidirectional data flow?",
    answer: "State flows down the component tree, and actions bubble up",
  },
  {
    id: "349",
    topic: "state-management",
    question: "When might you use a state machine like XState?",
    answer:
      "For modeling complex, explicit state transitions (e.g. forms, async steps, modal flows)",
  },
  {
    id: "350",
    topic: "state-management",
    question:
      "How can you optimize re-renders in deeply nested React components?",
    answer:
      "Use memoization (`React.memo`, `useMemo`), context split, or selector-based subscriptions",
  },
  {
    id: "351",
    topic: "security",
    question: "What is Cross-Site Scripting (XSS)?",
    answer:
      "A vulnerability where attackers inject malicious scripts into web pages viewed by other users",
  },
  {
    id: "352",
    topic: "security",
    question: "How can you prevent XSS in React apps?",
    answer:
      "Avoid `dangerouslySetInnerHTML`; React escapes HTML by default — sanitize any user content",
  },
  {
    id: "353",
    topic: "security",
    question: "What is Cross-Site Request Forgery (CSRF)?",
    answer:
      "An attack where a malicious site causes a user’s browser to perform unwanted actions on another site",
  },
  {
    id: "354",
    topic: "security",
    question: "How does `SameSite=Lax` help mitigate CSRF?",
    answer:
      "Prevents cookies from being sent with cross-site POST requests by default",
  },
  {
    id: "355",
    topic: "security",
    question: "What is Content Security Policy (CSP)?",
    answer:
      "A browser feature that restricts the sources of scripts, styles, images, etc. — mitigates XSS",
  },
  {
    id: "356",
    topic: "security",
    question: "What’s the purpose of `HttpOnly` cookies?",
    answer:
      "They are inaccessible to JavaScript — protect tokens from XSS leaks",
  },
  {
    id: "357",
    topic: "security",
    question: "What is clickjacking and how can it be prevented?",
    answer:
      "Tricking users into clicking hidden elements; prevent with `X-Frame-Options: DENY` or `Content-Security-Policy: frame-ancestors 'none'`",
  },
  {
    id: "358",
    topic: "security",
    question: "What’s the use of the `X-Content-Type-Options: nosniff` header?",
    answer:
      "Prevents MIME type sniffing — enforces `Content-Type` for scripts and styles",
  },
  {
    id: "359",
    topic: "security",
    question: "What does the `Strict-Transport-Security` header enforce?",
    answer: "Forces all future requests to use HTTPS (HSTS policy)",
  },
  {
    id: "360",
    topic: "security",
    question: "What’s the most secure way to store tokens in a browser?",
    answer:
      "`HttpOnly` secure cookies — prevent both XSS and some CSRF with `SameSite`",
  },
  {
    id: "361",
    topic: "browser-storage",
    question: "What are the main browser storage mechanisms?",
    answer: "`localStorage`, `sessionStorage`, `IndexedDB`, and `cookies`",
  },
  {
    id: "362",
    topic: "browser-storage",
    question:
      "What’s the difference between `localStorage` and `sessionStorage`?",
    answer:
      "`localStorage` persists across sessions; `sessionStorage` is cleared when the tab or window closes",
  },
  {
    id: "363",
    topic: "browser-storage",
    question:
      "What’s a limitation of `localStorage` for storing sensitive data?",
    answer: "It’s accessible via JavaScript — vulnerable to XSS attacks",
  },
  {
    id: "364",
    topic: "browser-storage",
    question: "What is the storage limit of `localStorage` in most browsers?",
    answer: "Around 5–10MB per origin (varies by browser)",
  },
  {
    id: "365",
    topic: "browser-storage",
    question: "How is data stored in `localStorage`?",
    answer:
      "As strings — you must manually `JSON.stringify()` and `JSON.parse()` complex objects",
  },
  {
    id: "366",
    topic: "browser-storage",
    question:
      "What API allows structured data storage with indexes and queries?",
    answer: "`IndexedDB` — an async NoSQL database in the browser",
  },
  {
    id: "367",
    topic: "browser-storage",
    question:
      "What makes `IndexedDB` better suited for large data than `localStorage`?",
    answer: "It supports objects, indexing, transactions, and async operations",
  },
  {
    id: "368",
    topic: "browser-storage",
    question: "What’s a secure way to store tokens in the browser?",
    answer: "`HttpOnly` cookies — not accessible to JS and protected from XSS",
  },
  {
    id: "369",
    topic: "browser-storage",
    question: "Can cookies be accessed from JavaScript?",
    answer:
      "Only non-`HttpOnly` cookies via `document.cookie` — limited and synchronous",
  },
  {
    id: "370",
    topic: "browser-storage",
    question: "What’s a good use case for `sessionStorage`?",
    answer:
      "Temporary tab-specific data like onboarding progress or unsaved form state",
  },
  {
    id: "371",
    topic: "a11y",
    question: "What does `a11y` stand for?",
    answer:
      "Accessibility — abbreviation of the word with 11 letters between a and y",
  },
  {
    id: "372",
    topic: "a11y",
    question: "What is the purpose of the `aria-label` attribute?",
    answer:
      "Provides an accessible name for screen readers when no visible label is present",
  },
  {
    id: "373",
    topic: "a11y",
    question: "How can you make a custom button accessible to keyboard users?",
    answer:
      "Add `role='button'`, `tabIndex=0`, and handle `Enter`/`Space` key events",
  },
  {
    id: "374",
    topic: "a11y",
    question: "What HTML elements are natively focusable?",
    answer: "`<a href>`, `<button>`, `<input>`, `<textarea>`, `<select>`",
  },
  {
    id: "375",
    topic: "a11y",
    question: "What’s the purpose of `aria-hidden='true'`?",
    answer: "Hides the element from assistive technologies like screen readers",
  },
  {
    id: "376",
    topic: "a11y",
    question:
      "What attribute defines a live region that updates dynamically for screen readers?",
    answer:
      "`aria-live` — commonly used for alerts, notifications, or dynamic content",
  },
  {
    id: "377",
    topic: "a11y",
    question: "What is color contrast ratio and why does it matter?",
    answer:
      "It measures text readability against backgrounds — required minimum is 4.5:1",
  },
  {
    id: "378",
    topic: "a11y",
    question: "How can you check if a site is accessible?",
    answer:
      "Use tools like Axe, Lighthouse, or screen readers (VoiceOver, NVDA, JAWS)",
  },
  {
    id: "379",
    topic: "a11y",
    question: "What’s a good practice for accessible form labels?",
    answer:
      "Use `<label for='id'>` or `aria-label` to associate labels with inputs",
  },
  {
    id: "380",
    topic: "a11y",
    question:
      "What HTML element should wrap grouped form controls like checkboxes?",
    answer:
      "`<fieldset>` with `<legend>` — provides semantic grouping for screen readers",
  },
  {
    id: "381",
    topic: "devtools",
    question:
      "What DevTools panel helps you inspect element styles, box model, and layout?",
    answer:
      "`Elements` panel — shows live DOM tree with applied and computed styles",
  },
  {
    id: "382",
    topic: "devtools",
    question:
      "What DevTools panel visualizes paint, layout, scripting, and GPU usage?",
    answer: "`Performance` panel — used for diagnosing render bottlenecks",
  },
  {
    id: "383",
    topic: "devtools",
    question: "How can you simulate slow network conditions in DevTools?",
    answer: "`Network` tab → Throttling dropdown → choose e.g. 'Slow 3G'",
  },
  {
    id: "384",
    topic: "devtools",
    question: "What does the 'Lighthouse' tab in DevTools do?",
    answer:
      "Runs audits on performance, accessibility, SEO, and best practices",
  },
  {
    id: "385",
    topic: "devtools",
    question:
      "What tool allows you to step through JavaScript execution line by line?",
    answer: "`Sources` panel — use breakpoints to pause and inspect variables",
  },
  {
    id: "386",
    topic: "devtools",
    question: "What DevTools feature helps inspect layout shift events?",
    answer:
      "`Performance` panel → Layout Shift section (or Core Web Vitals markers)",
  },
  {
    id: "387",
    topic: "devtools",
    question: "How do you find unused CSS or JS in DevTools?",
    answer: "`Coverage` tab — shows how much of your CSS/JS is actually used",
  },
  {
    id: "388",
    topic: "devtools",
    question: "What DevTools tab helps inspect ARIA roles and contrast issues?",
    answer: "`Accessibility` pane in the `Elements` tab",
  },
  {
    id: "389",
    topic: "devtools",
    question:
      "What’s the difference between `console.log()` and `$0` in DevTools?",
    answer:
      "`$0` refers to the last selected DOM element in the `Elements` panel",
  },
  {
    id: "390",
    topic: "devtools",
    question: "How can you persist logs in the console after page reload?",
    answer: "In the `Console` tab, enable `Preserve log` checkbox",
  },
  {
    id: "391",
    topic: "data-fetching",
    question: "What’s the difference between `fetch()` and `axios`?",
    answer:
      "`fetch` is a native browser API; `axios` is a wrapper with defaults, interceptors, and better error handling",
  },
  {
    id: "392",
    topic: "data-fetching",
    question: "What’s the difference between SWR and React Query?",
    answer:
      "Both support stale-while-revalidate, caching, retries — React Query is more feature-rich with mutation support and devtools",
  },
  {
    id: "393",
    topic: "data-fetching",
    question:
      "What HTTP status code indicates content is unchanged since the last request?",
    answer:
      "`304 Not Modified` — used with `If-None-Match` or `If-Modified-Since` headers",
  },
  {
    id: "394",
    topic: "data-fetching",
    question: "What is 'stale-while-revalidate'?",
    answer:
      "Serve cached data immediately, re-fetch in background for updated content",
  },
  {
    id: "395",
    topic: "data-fetching",
    question:
      "What’s the risk of fetching in `useEffect` without cancellation?",
    answer: "Memory leaks or updating state on unmounted components",
  },
  {
    id: "396",
    topic: "data-fetching",
    question: "How can you cancel an in-flight fetch request?",
    answer:
      "Use `AbortController` and pass its signal to `fetch(url, { signal })`",
  },
  {
    id: "397",
    topic: "data-fetching",
    question: "What caching headers control client-side cache?",
    answer: "`Cache-Control`, `ETag`, and `Last-Modified`",
  },
  {
    id: "398",
    topic: "data-fetching",
    question: "What is the benefit of prefetching in data-heavy apps?",
    answer: "Reduces perceived latency by fetching data before it’s needed",
  },
  {
    id: "399",
    topic: "data-fetching",
    question:
      "What hook is used in Next.js App Router to fetch static data at build time?",
    answer:
      "`generateStaticParams()` (for paths) and static export of `fetch()` in Server Components",
  },
  {
    id: "400",
    topic: "data-fetching",
    question: "What’s a good strategy to avoid over-fetching in GraphQL?",
    answer: "Use fragments and query only the fields required by the component",
  },
  {
    id: "401",
    topic: "dom",
    question: "What is the DOM in web development?",
    answer:
      "The DOM is an in-memory tree representation of the HTML structure of a web page",
  },
  {
    id: "402",
    topic: "dom",
    question: "What does `document.querySelector()` return?",
    answer:
      "The first matching element based on a CSS selector, or `null` if not found",
  },
  {
    id: "403",
    topic: "dom",
    question: "How do you create a new DOM element in JavaScript?",
    answer: "`document.createElement('tag')`",
  },
  {
    id: "404",
    topic: "dom",
    question: "What is `event.target` in an event handler?",
    answer:
      "The actual element that triggered the event (could be a child of the handler's element)",
  },
  {
    id: "405",
    topic: "dom",
    question: "How is `event.currentTarget` different from `event.target`?",
    answer:
      "`currentTarget` is the element with the event listener; `target` is the actual source of the event",
  },
  {
    id: "406",
    topic: "dom",
    question: "What does `appendChild()` do?",
    answer: "Adds a node as the last child of a parent node",
  },
  {
    id: "407",
    topic: "dom",
    question: "What’s the purpose of `documentFragment`?",
    answer:
      "An in-memory container used to batch DOM operations and improve performance",
  },
  {
    id: "408",
    topic: "dom",
    question: "How do you prevent default behavior in a DOM event?",
    answer: "Call `event.preventDefault()` inside the event handler",
  },
  {
    id: "409",
    topic: "dom",
    question: "What method removes an element from the DOM?",
    answer: "`element.remove()` or `parent.removeChild(child)`",
  },
  {
    id: "410",
    topic: "dom",
    question: "What is the difference between `innerText` and `textContent`?",
    answer:
      "`innerText` respects CSS visibility; `textContent` gets all text regardless of styling",
  },
  {
    id: "411",
    topic: "events",
    question: "What are the three phases of event propagation?",
    answer: "`Capturing → Target → Bubbling`",
  },
  {
    id: "412",
    topic: "events",
    question: "How do you stop an event from bubbling up the DOM?",
    answer: "`event.stopPropagation()`",
  },
  {
    id: "413",
    topic: "events",
    question: "What method cancels both bubbling and default browser behavior?",
    answer: "`event.preventDefault()` + `event.stopPropagation()`",
  },
  {
    id: "414",
    topic: "events",
    question: "What is event delegation?",
    answer:
      "Attaching a single listener to a common ancestor to handle events from multiple child elements",
  },
  {
    id: "415",
    topic: "events",
    question: "What’s the benefit of event delegation?",
    answer:
      "Improves performance and supports dynamic content without attaching many listeners",
  },
  {
    id: "416",
    topic: "events",
    question: "What are passive event listeners used for?",
    answer:
      "Tell the browser that `event.preventDefault()` won’t be called — helps with scroll performance",
  },
  {
    id: "417",
    topic: "events",
    question: "How do you listen to an event during the capture phase?",
    answer:
      "Pass `true` or `{ capture: true }` as the third argument to `addEventListener`",
  },
  {
    id: "418",
    topic: "events",
    question: "What is the `once` option in `addEventListener()`?",
    answer:
      "`{ once: true }` — automatically removes the listener after first call",
  },
  {
    id: "419",
    topic: "events",
    question: "What’s the difference between `pointerdown` and `mousedown`?",
    answer:
      "`pointerdown` works for touch, pen, and mouse; `mousedown` only for mouse",
  },
  {
    id: "420",
    topic: "events",
    question:
      "How can you prevent double-firing of both `click` and `touchstart` on mobile?",
    answer:
      "Use `pointer` events or prevent default behavior on `touchstart` carefully",
  },
  {
    id: "421",
    topic: "events",
    question: "What is a `CustomEvent` in the DOM?",
    answer:
      "An event you define and dispatch yourself using `new CustomEvent()`",
  },
  {
    id: "422",
    topic: "events",
    question: "What property lets you attach custom data to a `CustomEvent`?",
    answer:
      "`event.detail` — contains any custom payload passed during event dispatch",
  },
  {
    id: "423",
    topic: "events",
    question: "How do you dispatch a custom event?",
    answer:
      "`element.dispatchEvent(new CustomEvent('event-name', { detail: data }))`",
  },
  {
    id: "424",
    topic: "events",
    question:
      "What is the `input` event and how is it different from `change`?",
    answer:
      "`input` fires on every keystroke; `change` fires only when the input loses focus and value changed",
  },
  {
    id: "425",
    topic: "events",
    question: "What’s the difference between `focus` and `focusin`?",
    answer: "`focusin` bubbles, `focus` does not",
  },
  {
    id: "426",
    topic: "events",
    question:
      "How can you debounce event-driven functions like `scroll` or `resize`?",
    answer:
      "Wrap the handler in a debounced function using `setTimeout` or utility libraries like Lodash",
  },
  {
    id: "427",
    topic: "events",
    question: "What’s a safe way to handle global key events in React apps?",
    answer:
      "Attach a `keydown` or `keyup` listener in `useEffect` with proper cleanup",
  },
  {
    id: "428",
    topic: "events",
    question: "What’s the `visibilitychange` event used for?",
    answer: "Detects when the tab or window becomes visible or hidden",
  },
  {
    id: "429",
    topic: "events",
    question: "What is the `beforeunload` event used for?",
    answer:
      "Warns users before they leave or refresh the page — useful for unsaved changes",
  },
  {
    id: "430",
    topic: "events",
    question:
      "What’s the benefit of `addEventListener` over inline `onclick` attributes?",
    answer:
      "Better separation of concerns, multiple listeners per event, easier removal",
  },
  {
    id: "431",
    topic: "cdn",
    question: "What is a CDN?",
    answer:
      "A distributed network of servers that cache and deliver content from locations closer to users",
  },
  {
    id: "432",
    topic: "cdn",
    question: "What types of content are commonly served via CDNs?",
    answer: "Static assets like images, JavaScript, CSS, fonts, and videos",
  },
  {
    id: "433",
    topic: "cdn",
    question: "How does a CDN reduce latency?",
    answer:
      "By serving content from an edge server geographically closer to the user",
  },
  {
    id: "434",
    topic: "cdn",
    question: "What is a cache hit vs a cache miss in a CDN?",
    answer:
      "Hit: file is served from edge cache; Miss: file is fetched from origin server",
  },
  {
    id: "435",
    topic: "cdn",
    question: "What HTTP header can control caching behavior in a CDN?",
    answer:
      "`Cache-Control` — defines how, where, and for how long content is cached",
  },
  {
    id: "436",
    topic: "cdn",
    question: "What is the purpose of cache invalidation in CDNs?",
    answer:
      "To force the CDN to fetch fresh content from the origin after a change",
  },
  {
    id: "437",
    topic: "cdn",
    question: "What’s the difference between a push CDN and a pull CDN?",
    answer:
      "Push: you upload assets to the CDN manually; Pull: CDN fetches from origin on first request",
  },
  {
    id: "438",
    topic: "cdn",
    question: "What is origin shielding in a CDN?",
    answer:
      "Designating a single CDN node to fetch from origin to reduce origin load",
  },
  {
    id: "439",
    topic: "cdn",
    question: "What is edge computing in CDN contexts?",
    answer:
      "Running code at the CDN edge (e.g., rewrites, redirects, logic) close to users",
  },
  {
    id: "440",
    topic: "cdn",
    question: "Name a popular CDN provider that supports edge functions.",
    answer: "`Cloudflare`, `Vercel`, `Fastly`, `Akamai`, `AWS CloudFront`",
  },
  {
    id: "441",
    topic: "runtime",
    question: "What is the call stack in JavaScript?",
    answer:
      "A LIFO stack where JS tracks function calls and returns during execution",
  },
  {
    id: "442",
    topic: "runtime",
    question: "What’s the difference between microtasks and macrotasks?",
    answer:
      "Microtasks (e.g., Promises) run after the current call stack; macrotasks (e.g., setTimeout) run later in the event loop",
  },
  {
    id: "443",
    topic: "runtime",
    question:
      "What global object provides access to the JavaScript engine's memory management?",
    answer:
      "`globalThis` — includes `WeakMap`, `WeakSet`, and `FinalizationRegistry` for memory-sensitive tasks",
  },
  {
    id: "444",
    topic: "runtime",
    question: "What is the event loop?",
    answer:
      "A mechanism that handles task queues by dequeuing and executing callbacks after the call stack is clear",
  },
  {
    id: "445",
    topic: "runtime",
    question: "What’s the execution context in JavaScript?",
    answer:
      "An environment in which code is evaluated — includes variable scope, `this`, and the call stack",
  },
  {
    id: "446",
    topic: "runtime",
    question: "What are closures in terms of runtime?",
    answer:
      "Functions that remember variables from their lexical scope even after the outer function has returned",
  },
  {
    id: "447",
    topic: "runtime",
    question:
      "What tool visualizes the call stack, heap, and event loop in real-time?",
    answer: "`Loupe` — or use DevTools with `Performance` + async call stacks",
  },
  {
    id: "448",
    topic: "runtime",
    question: "How is memory managed in JavaScript?",
    answer: "Garbage collection — unreferenced memory is automatically freed",
  },
  {
    id: "449",
    topic: "runtime",
    question: "What’s the risk of synchronous blocking code in JS?",
    answer:
      "It blocks the single-threaded event loop, making the UI unresponsive",
  },
  {
    id: "450",
    topic: "runtime",
    question: "What does `setTimeout(fn, 0)` do?",
    answer:
      "Schedules `fn` to run after the current call stack and microtasks — as a macrotask",
  },
  {
    id: "451",
    topic: "memory",
    question: "What is a memory leak in JavaScript?",
    answer:
      "When memory that is no longer needed is not released due to lingering references",
  },
  {
    id: "452",
    topic: "memory",
    question: "What’s a common cause of memory leaks in React apps?",
    answer: "Subscriptions or async operations not cleaned up in `useEffect`",
  },
  {
    id: "453",
    topic: "memory",
    question:
      "How does JavaScript determine if memory can be garbage collected?",
    answer:
      "If there are no references to an object, it's considered unreachable and can be collected",
  },
  {
    id: "454",
    topic: "memory",
    question:
      "What browser tool helps you track retained objects and memory leaks?",
    answer:
      "`Chrome DevTools > Memory` tab — use heap snapshots and allocation instrumentation",
  },
  {
    id: "455",
    topic: "memory",
    question: "What is a detached DOM node and why is it dangerous?",
    answer:
      "A DOM element removed from the page but still referenced in JS — causes memory to stay allocated",
  },
  {
    id: "456",
    topic: "memory",
    question:
      "What’s the difference between `WeakMap` and `Map` in terms of memory?",
    answer:
      "`WeakMap` allows garbage collection of keys when no other references exist",
  },
  {
    id: "457",
    topic: "memory",
    question:
      "What is a good strategy to avoid retaining large datasets in memory?",
    answer:
      "Paginate, stream, or cache-limited slices of data instead of keeping everything loaded",
  },
  {
    id: "458",
    topic: "memory",
    question: "What tool allows you to detect growing memory usage over time?",
    answer:
      "`Performance Monitor` in Chrome DevTools or memory profiling via Lighthouse",
  },
  {
    id: "459",
    topic: "memory",
    question: "How do closures contribute to memory retention?",
    answer:
      "They preserve variables from outer scopes — can unintentionally keep large objects alive",
  },
  {
    id: "460",
    topic: "memory",
    question: "What practice helps free up memory after a component unmounts?",
    answer:
      "Clean up subscriptions, intervals, and references inside `useEffect`'s cleanup function",
  },
  {
    id: "461",
    topic: "rendering",
    question: "What are the main stages of the browser rendering pipeline?",
    answer:
      "`Style`, `Layout`, `Paint`, `Composite` — often triggered by DOM or CSS changes",
  },
  {
    id: "462",
    topic: "rendering",
    question: "What causes a reflow in the browser?",
    answer:
      "Any change that affects layout (e.g., size, position, adding/removing elements)",
  },
  {
    id: "463",
    topic: "rendering",
    question: "What’s the difference between paint and composite?",
    answer:
      "`Paint`: draw pixels for visible elements; `Composite`: layer composition into final screen image",
  },
  {
    id: "464",
    topic: "rendering",
    question: "What is First Contentful Paint (FCP)?",
    answer:
      "Time when the first DOM content (text/image) is rendered to screen",
  },
  {
    id: "465",
    topic: "rendering",
    question: "What’s the purpose of `requestAnimationFrame()`?",
    answer:
      "Synchronizes visual updates with browser refresh cycles — reduces jank",
  },
  {
    id: "466",
    topic: "rendering",
    question: "What is hydration in SSR/Next.js?",
    answer:
      "The process of attaching client-side event listeners to server-rendered HTML",
  },
  {
    id: "467",
    topic: "rendering",
    question: "What’s a common cause of React hydration errors?",
    answer: "Mismatch between server-rendered HTML and client-rendered output",
  },
  {
    id: "468",
    topic: "rendering",
    question: "How can you optimize initial rendering time?",
    answer:
      "Use code-splitting, lazy loading, reduce bundle size, and preconnect critical resources",
  },
  {
    id: "469",
    topic: "rendering",
    question: "What rendering strategy delays non-critical components?",
    answer:
      "`lazy` + `Suspense`, or `startTransition` in React 18+ for low-priority rendering",
  },
  {
    id: "470",
    topic: "rendering",
    question:
      "What tool can you use to visualize render steps and performance in detail?",
    answer:
      "`Chrome DevTools > Performance` tab — inspect layout, paint, and composite stages",
  },
  {
    id: "471",
    topic: "web-workers",
    question: "What is a Web Worker?",
    answer:
      "A background thread that runs scripts without blocking the main UI thread",
  },
  {
    id: "472",
    topic: "web-workers",
    question: "How do you create a Web Worker?",
    answer: "`new Worker('worker.js')` — must be a separate file (or Blob URL)",
  },
  {
    id: "473",
    topic: "web-workers",
    question: "How do the main thread and a Web Worker communicate?",
    answer:
      "Via `postMessage()` and `onmessage` event listeners using message passing",
  },
  {
    id: "474",
    topic: "web-workers",
    question: "Can Web Workers access the DOM?",
    answer:
      "No — they run in isolation without access to the window or DOM APIs",
  },
  {
    id: "475",
    topic: "web-workers",
    question: "What is a transferable object in the context of Web Workers?",
    answer:
      "An object (e.g., ArrayBuffer) whose ownership is transferred, not copied — improves performance",
  },
  {
    id: "476",
    topic: "web-workers",
    question: "What happens if a worker throws an uncaught error?",
    answer: "Triggers the `onerror` event on the main thread",
  },
  {
    id: "477",
    topic: "web-workers",
    question: "How can you stop a Web Worker from the main thread?",
    answer: "`worker.terminate()` — stops execution immediately",
  },
  {
    id: "478",
    topic: "web-workers",
    question: "What’s the use of `self` inside a Web Worker?",
    answer:
      "`self` refers to the worker’s global context (similar to `window` in main thread)",
  },
  {
    id: "479",
    topic: "web-workers",
    question: "What’s a good use case for Web Workers?",
    answer:
      "CPU-heavy tasks like image processing, data parsing, or encryption without blocking UI",
  },
  {
    id: "480",
    topic: "web-workers",
    question: "What tool can bundle inline Web Worker code in modern builds?",
    answer:
      "`Vite`, `Webpack Worker Loader`, or `workerize` — allow bundling workers from modules",
  },
  {
    id: "481",
    topic: "css-in-js",
    question: "What is CSS-in-JS?",
    answer:
      "A styling approach where CSS is defined within JavaScript files, often scoped to components",
  },
  {
    id: "482",
    topic: "css-in-js",
    question: "Name popular CSS-in-JS libraries.",
    answer:
      "`styled-components`, `emotion`, `Stitches`, `JSS`, `vanilla-extract`, `Linaria`",
  },
  {
    id: "483",
    topic: "css-in-js",
    question: "What’s the main benefit of CSS-in-JS?",
    answer:
      "Scoped styles, co-location with components, dynamic theming, and SSR support",
  },
  {
    id: "484",
    topic: "css-in-js",
    question: "How do styled-components apply styles to the DOM?",
    answer:
      "They inject style tags at runtime with unique class names via a style sheet manager",
  },
  {
    id: "485",
    topic: "css-in-js",
    question:
      "What’s a drawback of runtime CSS-in-JS libraries like styled-components?",
    answer: "They can increase runtime cost and add to JS bundle size",
  },
  {
    id: "486",
    topic: "css-in-js",
    question:
      "How does `vanilla-extract` differ from other CSS-in-JS solutions?",
    answer:
      "It’s build-time — extracts real CSS files during bundling, avoiding runtime overhead",
  },
  {
    id: "487",
    topic: "css-in-js",
    question: "What is the `css` prop in Emotion?",
    answer:
      "A special prop that allows writing dynamic styles directly on JSX elements",
  },
  {
    id: "488",
    topic: "css-in-js",
    question:
      "What technique helps avoid flash of unstyled content (FOUC) in SSR?",
    answer:
      "Collect styles on the server and inject them into the HTML during rendering",
  },
  {
    id: "489",
    topic: "css-in-js",
    question: "What’s the purpose of theming in CSS-in-JS?",
    answer:
      "Centralized control of design tokens (e.g. colors, spacing) across components",
  },
  {
    id: "490",
    topic: "css-in-js",
    question: "How can you avoid redundant class generation in CSS-in-JS?",
    answer: "Use memoization, atomic styles, or extract styles at build time",
  },
  {
    id: "491",
    topic: "deployment",
    question:
      "What’s the difference between development and production environments?",
    answer:
      "Development is for testing/debugging; production is optimized, secure, and user-facing",
  },
  {
    id: "492",
    topic: "deployment",
    question: "What is a build artifact?",
    answer:
      "The compiled output (e.g. HTML, JS, CSS, assets) generated during the build step for deployment",
  },
  {
    id: "493",
    topic: "deployment",
    question:
      "What’s the difference between static site hosting and server-rendered deployment?",
    answer:
      "Static sites serve prebuilt files (e.g. via CDN); server-rendered sites generate HTML on request",
  },
  {
    id: "494",
    topic: "deployment",
    question: "What platforms support static deployments for React/Next.js?",
    answer: "`Vercel`, `Netlify`, `GitHub Pages`, `Cloudflare Pages`",
  },
  {
    id: "495",
    topic: "deployment",
    question: "What’s the purpose of environment variables during deployment?",
    answer:
      "Inject config values (e.g. API URLs, keys) without hardcoding them in the app",
  },
  {
    id: "496",
    topic: "deployment",
    question: "What is a preview environment?",
    answer:
      "Temporary deployment tied to a pull request — allows testing changes before merging",
  },
  {
    id: "497",
    topic: "deployment",
    question: "What’s a good strategy for deploying SSR apps like Next.js?",
    answer:
      "Use platforms with serverless/edge support (e.g. Vercel, AWS Lambda) or custom Node servers",
  },
  {
    id: "498",
    topic: "deployment",
    question: "What is cache busting in deployment?",
    answer:
      "Ensures users get fresh files by appending unique hashes to filenames",
  },
  {
    id: "499",
    topic: "deployment",
    question: "What CI/CD tools are often used for automated deployments?",
    answer:
      "`GitHub Actions`, `GitLab CI`, `CircleCI`, `Jenkins`, `Bitbucket Pipelines`",
  },
  {
    id: "500",
    topic: "deployment",
    question: "What’s blue-green deployment?",
    answer:
      "A release strategy where two environments (blue/green) switch roles with zero downtime",
  },
];
