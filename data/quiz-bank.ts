export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "You need to store unique values only. Which structure fits?",
    options: ["Array", "Set"],
    correct: "Set",
    explanation: "Set ensures uniqueness automatically; Array doesn't.",
  },
  {
    id: "q2",
    question: "You need key-value storage and want to allow keys of any type.",
    options: ["Object", "Map"],
    correct: "Map",
    explanation: "Map accepts any key type, Object only strings/symbols.",
  },
  {
    id: "q3",
    question: "You need to maintain insertion order in a list of items.",
    options: ["Array", "Set"],
    correct: "Array",
    explanation: "Array is best for ordered list access and indexing.",
  },
  {
    id: "q4",
    question: "You need O(1) insertion and removal from both ends of a list.",
    options: ["Array", "Deque"],
    correct: "Deque",
    explanation:
      "Deque (double-ended queue) supports fast push/pop on both ends.",
  },
  {
    id: "q5",
    question: "You need constant time access to elements by index.",
    options: ["LinkedList", "Array"],
    correct: "Array",
    explanation: "Arrays offer O(1) access by index; LinkedLists are O(n).",
  },
  {
    id: "q6",
    question: "You frequently add and remove items from the start of a list.",
    options: ["Array", "LinkedList"],
    correct: "LinkedList",
    explanation: "LinkedLists support O(1) insertion/removal at the start.",
  },
  {
    id: "q7",
    question:
      "You need a unique list of elements and care about insertion order.",
    options: ["Set", "Array"],
    correct: "Set",
    explanation: "Set keeps uniqueness and insertion order (in JS).",
  },
  {
    id: "q8",
    question:
      "You need to store user sessions with expiration and quick lookup.",
    options: ["Object", "Map"],
    correct: "Map",
    explanation: "Map allows metadata, preserves order, and is iterable.",
  },
  {
    id: "q9",
    question:
      "You need to track frequency of characters in a string efficiently.",
    options: ["Object", "Map"],
    correct: "Object",
    explanation: "Object is simpler for counting keys with string identifiers.",
  },
  {
    id: "q10",
    question: "You need to ensure LIFO (last-in-first-out) behavior.",
    options: ["Queue", "Stack"],
    correct: "Stack",
    explanation: "Stack follows LIFO, Queue follows FIFO.",
  },
  {
    id: "q11",
    question: "You need to ensure FIFO (first-in-first-out) behavior.",
    options: ["Stack", "Queue"],
    correct: "Queue",
    explanation: "Queue ensures first-in is first-out.",
  },
  {
    id: "q12",
    question: "You need fast membership check in a large dataset.",
    options: ["Array", "Set"],
    correct: "Set",
    explanation: "Set offers O(1) lookup vs O(n) for Array.",
  },
  {
    id: "q13",
    question:
      "You want to preserve key insertion order and allow any key type.",
    options: ["Map", "Object"],
    correct: "Map",
    explanation: "Map preserves insertion order and allows any type of key.",
  },
  {
    id: "q14",
    question:
      "You need a structure that prevents duplicate keys and supports quick access.",
    options: ["Map", "Set"],
    correct: "Map",
    explanation:
      "Map allows key-value storage with unique keys and fast access.",
  },
  {
    id: "q15",
    question: "You need to traverse a tree in breadth-first order.",
    options: ["Queue", "Stack"],
    correct: "Queue",
    explanation: "BFS uses a queue to process nodes level by level.",
  },
  {
    id: "q16",
    question: "You need to backtrack in a DFS (depth-first search).",
    options: ["Stack", "Queue"],
    correct: "Stack",
    explanation: "DFS uses a stack (explicit or recursive) to track nodes.",
  },
  {
    id: "q17",
    question:
      "You need to maintain a dynamic list where insertions are rare but reads are frequent.",
    options: ["LinkedList", "Array"],
    correct: "Array",
    explanation:
      "Arrays provide faster access; LinkedLists are better for frequent insertions/removals.",
  },
  {
    id: "q18",
    question: "You need to implement an LRU cache efficiently.",
    options: ["Map", "Array"],
    correct: "Map",
    explanation:
      "Map (with extra logic or LinkedHashMap in Java) provides fast key-based operations.",
  },
  {
    id: "q19",
    question:
      "You need a data structure for implementing a scheduler (by arrival time).",
    options: ["Stack", "Queue"],
    correct: "Queue",
    explanation: "A queue ensures FIFO processing, ideal for scheduling tasks.",
  },
  {
    id: "q20",
    question: "You need to check for balanced parentheses in an expression.",
    options: ["Queue", "Stack"],
    correct: "Stack",
    explanation:
      "A stack is used to match opening and closing brackets properly.",
  },
  {
    id: "q21",
    question: "You need to keep a sorted list with frequent insertions.",
    options: ["Array", "Binary Search Tree"],
    correct: "Binary Search Tree",
    explanation: "BSTs support efficient insertions and maintain order.",
  },
  {
    id: "q22",
    question:
      "You want to remove the smallest element quickly from a dynamic collection.",
    options: ["Stack", "Min Heap"],
    correct: "Min Heap",
    explanation:
      "Min Heaps allow fast access and removal of the smallest item (O(log n)).",
  },
  {
    id: "q23",
    question: "You need to track the k largest items in a stream of data.",
    options: ["Min Heap", "Max Heap"],
    correct: "Min Heap",
    explanation:
      "Use a Min Heap of size k to keep the top k largest elements efficiently.",
  },
  {
    id: "q24",
    question: "You need to detect a cycle in a directed graph.",
    options: ["DFS", "BFS"],
    correct: "DFS",
    explanation:
      "DFS with visited + recursion stack is standard for cycle detection in directed graphs.",
  },
  {
    id: "q25",
    question: "You need to find the shortest path in an unweighted graph.",
    options: ["DFS", "BFS"],
    correct: "BFS",
    explanation:
      "BFS finds the shortest path in unweighted graphs as it explores level by level.",
  },
  {
    id: "q26",
    question: "You need to hash a string key to store in a structure.",
    options: ["Set", "Object"],
    correct: "Object",
    explanation:
      "JavaScript Objects use string keys by default and hash them internally.",
  },
  {
    id: "q27",
    question: "You need constant-time access and random removal of elements.",
    options: ["Set", "Map"],
    correct: "Set",
    explanation:
      "Set supports O(1) operations and doesn’t store key-value pairs like Map.",
  },
  {
    id: "q28",
    question:
      "You need to recursively traverse a tree and process leaf nodes first.",
    options: ["Post-order", "Pre-order"],
    correct: "Post-order",
    explanation:
      "Post-order visits children before the root — perfect for bottom-up logic.",
  },
  {
    id: "q29",
    question:
      "You need to process a tree top-down and handle each node before its children.",
    options: ["In-order", "Pre-order"],
    correct: "Pre-order",
    explanation:
      "Pre-order visits root first — useful for cloning trees or rule application.",
  },
  {
    id: "q30",
    question: "You want to detect if two graphs are isomorphic.",
    options: ["Adjacency List", "Adjacency Matrix"],
    correct: "Adjacency Matrix",
    explanation:
      "Matrix representation allows fast structural comparison for isomorphism.",
  },
  {
    id: "q31",
    question: "You want to store a sparse graph efficiently.",
    options: ["Adjacency List", "Adjacency Matrix"],
    correct: "Adjacency List",
    explanation: "Adjacency lists are memory-efficient for sparse graphs.",
  },
  {
    id: "q32",
    question:
      "You need a structure that stores frequencies of items for histogram-style use.",
    options: ["Map", "Set"],
    correct: "Map",
    explanation:
      "Map allows counting and tracking multiple occurrences via value fields.",
  },
  {
    id: "q33",
    question:
      "You want to flatten a deeply nested object into a single-level structure.",
    options: ["Recursion", "Iteration"],
    correct: "Recursion",
    explanation:
      "Recursive strategies are best for arbitrarily deep structures.",
  },
  {
    id: "q34",
    question: "You need to convert a binary tree into a sorted array.",
    options: ["In-order Traversal", "Pre-order Traversal"],
    correct: "In-order Traversal",
    explanation: "In-order traversal of a BST gives sorted elements.",
  },
  {
    id: "q35",
    question: "You need to delete a node from a binary search tree.",
    options: ["Recursive", "Iterative"],
    correct: "Recursive",
    explanation: "Recursive logic is commonly used to maintain BST invariants.",
  },
  {
    id: "q36",
    question: "You want to avoid mutating original data when transforming it.",
    options: ["Map()", "forEach()"],
    correct: "Map()",
    explanation:
      "Map returns a new array; forEach mutates only if you write side effects.",
  },
  {
    id: "q37",
    question: "You want to deeply clone a nested object.",
    options: ["Spread Operator", "StructuredClone"],
    correct: "StructuredClone",
    explanation:
      "Spread only does shallow copies; StructuredClone handles nested structures.",
  },
  {
    id: "q38",
    question:
      "You need to transform a list of items into a grouped object by property.",
    options: ["reduce()", "map()"],
    correct: "reduce()",
    explanation: "reduce builds an accumulated object or map for grouping.",
  },
  {
    id: "q39",
    question:
      "You want to compare performance of two implementations with large input.",
    options: ["Big-O Analysis", "Profiling"],
    correct: "Profiling",
    explanation:
      "Profiling gives runtime performance; Big-O is asymptotic estimation.",
  },
  {
    id: "q40",
    question:
      "You want to reason about worst-case performance before implementation.",
    options: ["Big-O Analysis", "Benchmarking"],
    correct: "Big-O Analysis",
    explanation:
      "Big-O describes worst-case/average complexity regardless of hardware.",
  },
  {
    id: "q41",
    question: "You need to find the depth of a tree structure.",
    options: ["DFS", "BFS"],
    correct: "DFS",
    explanation:
      "DFS naturally explores the depth of a tree and can return max depth.",
  },
  {
    id: "q42",
    question: "You need to level-order print a tree (each level line by line).",
    options: ["BFS", "DFS"],
    correct: "BFS",
    explanation: "BFS visits level by level — ideal for printing by levels.",
  },
  {
    id: "q43",
    question:
      "You want to prevent accidental object mutation when passing between functions.",
    options: ["Object.freeze", "Object.assign"],
    correct: "Object.freeze",
    explanation:
      "freeze() makes the object immutable; assign() performs shallow copy only.",
  },
  {
    id: "q44",
    question:
      "You want to ensure a function doesn't recompute for the same input.",
    options: ["Memoization", "Debouncing"],
    correct: "Memoization",
    explanation:
      "Memoization caches results based on input args; debouncing delays execution.",
  },
  {
    id: "q45",
    question: "You want to reduce API calls triggered by fast user typing.",
    options: ["Debounce", "Throttle"],
    correct: "Debounce",
    explanation:
      "Debounce waits for inactivity; throttle limits to one call per interval.",
  },
  {
    id: "q46",
    question: "You want to limit the number of function calls per second.",
    options: ["Throttle", "Memoization"],
    correct: "Throttle",
    explanation: "Throttle enforces a time window between executions.",
  },
  {
    id: "q47",
    question:
      "You need to remember previous expensive calculations in React components.",
    options: ["useMemo", "useEffect"],
    correct: "useMemo",
    explanation:
      "useMemo caches computation between renders; useEffect handles side effects.",
  },
  {
    id: "q48",
    question: "You want to fetch data only once when a component mounts.",
    options: ["useEffect", "useMemo"],
    correct: "useEffect",
    explanation:
      "useEffect is for side-effects like data fetching; useMemo is for pure calculations.",
  },
  {
    id: "q49",
    question:
      "You want to conditionally run a function based on changing dependencies.",
    options: ["useCallback", "useEffect"],
    correct: "useEffect",
    explanation:
      "useEffect runs based on dependencies; useCallback memoizes functions.",
  },
  {
    id: "q50",
    question:
      "You want to avoid unnecessary re-renders due to function identity changes.",
    options: ["useCallback", "useEffect"],
    correct: "useCallback",
    explanation:
      "useCallback returns the same function reference unless deps change.",
  },
  {
    id: "q51",
    question:
      "You want to prevent a React component from rerendering if its props didn't change.",
    options: ["React.memo", "useEffect"],
    correct: "React.memo",
    explanation:
      "React.memo is a HOC that prevents rerenders if props are shallow-equal.",
  },
  {
    id: "q52",
    question:
      "You want to cache the result of an async function based on input.",
    options: ["Memoization", "Caching Layer"],
    correct: "Caching Layer",
    explanation:
      "Async results require external cache (e.g. Redis), not in-memory memoization.",
  },
  {
    id: "q53",
    question:
      "You want to reduce load times by storing frequently accessed data in the browser.",
    options: ["LocalStorage", "SessionStorage"],
    correct: "LocalStorage",
    explanation:
      "LocalStorage persists across sessions; SessionStorage clears on tab close.",
  },
  {
    id: "q54",
    question: "You want to extract the keys of a TypeScript type as a union.",
    options: ["keyof", "typeof"],
    correct: "keyof",
    explanation: "`keyof T` creates a union of property names of `T`.",
  },
  {
    id: "q55",
    question: "You want to get the type of a runtime variable in TypeScript.",
    options: ["typeof", "keyof"],
    correct: "typeof",
    explanation:
      "`typeof x` gets the type of a value in TS; `keyof` is for type-level keys.",
  },
  {
    id: "q56",
    question:
      "You want to create a new type with all properties of another type optional.",
    options: ["Partial", "Record"],
    correct: "Partial",
    explanation: "`Partial<T>` makes all properties in `T` optional.",
  },
  {
    id: "q57",
    question:
      "You want to define an object with fixed string keys and uniform value type.",
    options: ["Record", "Partial"],
    correct: "Record",
    explanation:
      "`Record<K, V>` defines an object with keys of `K` and values of `V`.",
  },
  {
    id: "q58",
    question:
      "You want to check if a variable is of a certain custom type at runtime.",
    options: ["Type Guard", "Interface"],
    correct: "Type Guard",
    explanation:
      "Interfaces are compile-time only; type guards are runtime checks.",
  },
  {
    id: "q59",
    question:
      "You want to infer a generic type from inside a conditional type.",
    options: ["infer", "extends"],
    correct: "infer",
    explanation: "`infer` lets you capture part of a type inside conditionals.",
  },
  {
    id: "q60",
    question: "You want to narrow a union type based on property existence.",
    options: ["in operator", "typeof"],
    correct: "in operator",
    explanation:
      "` in ` is used for discriminated unions (e.g., `'type' in obj`).",
  },
  {
    id: "q61",
    question:
      "You want to write a function that works for multiple types of input while preserving type safety.",
    options: ["Generics", "any"],
    correct: "Generics",
    explanation:
      "Generics allow type-safe reusability; `any` loses type safety.",
  },
  {
    id: "q62",
    question: "You want to create a readonly version of a given type.",
    options: ["Readonly", "Partial"],
    correct: "Readonly",
    explanation: "`Readonly<T>` makes all properties immutable.",
  },
  {
    id: "q63",
    question: "You want to exclude some keys from a type.",
    options: ["Omit", "Pick"],
    correct: "Omit",
    explanation:
      "`Omit<T, K>` removes `K` keys from `T`; `Pick` keeps only selected keys.",
  },
  {
    id: "q64",
    question: "You want to get the type of a specific property from a type.",
    options: ["Indexed Access", "Mapped Type"],
    correct: "Indexed Access",
    explanation: "`T['key']` gets the type of a specific property of `T`.",
  },
  {
    id: "q65",
    question:
      "You want to iterate over all keys of a type to transform values.",
    options: ["Mapped Type", "Indexed Access"],
    correct: "Mapped Type",
    explanation:
      "Mapped types use `[K in keyof T]` to transform or modify fields.",
  },
  {
    id: "q66",
    question: "You want to create a type that makes certain keys optional.",
    options: ["Partial", "Pick + Partial"],
    correct: "Pick + Partial",
    explanation:
      "To partially make keys optional, you combine `Pick` with `Partial`.",
  },
  {
    id: "q67",
    question:
      "You want to get the keys of an object type whose values are of a certain type.",
    options: ["Conditional + keyof", "Mapped Type"],
    correct: "Conditional + keyof",
    explanation:
      "You need to filter keys by value using conditional types + `keyof`.",
  },
  {
    id: "q68",
    question:
      "You want to build a type like 'getUser' | 'createUser' from union 'get' | 'create' and 'User'.",
    options: ["Template Literal Types", "Mapped Types"],
    correct: "Template Literal Types",
    explanation:
      "Template literal types let you build union strings like `${Verb}${Noun}`.",
  },
  {
    id: "q69",
    question:
      "You want to extract the value type of an object whose key is known.",
    options: ["Indexed Access", "keyof"],
    correct: "Indexed Access",
    explanation: "`T['someKey']` gives you the value type for that key.",
  },
  {
    id: "q70",
    question:
      "You want to define a tuple where the first value is string, second is number.",
    options: ["Tuple", "Array"],
    correct: "Tuple",
    explanation: "Tuples enforce positional types, unlike generic arrays.",
  },
  {
    id: "q71",
    question:
      "You want to make a type that transforms all string values to uppercase.",
    options: ["Mapped + Template Literal", "Record"],
    correct: "Mapped + Template Literal",
    explanation: "Use mapped type + template literals + `Uppercase<>` utility.",
  },
  {
    id: "q72",
    question:
      "You want to prevent extra properties in a TypeScript object literal.",
    options: ["Exact Type Check", "Structural Typing"],
    correct: "Exact Type Check",
    explanation:
      "TS normally allows excess properties; exact checks catch them via literal assignment.",
  },
  {
    id: "q73",
    question:
      "You want to transform a union of string literals into a union of object types.",
    options: ["Mapped Type", "Conditional Type"],
    correct: "Mapped Type",
    explanation:
      "Mapped types over unions produce object unions — useful for tag-based systems.",
  },
  {
    id: "q74",
    question: "You want to define a function that accepts literally nothing.",
    options: ["void", "never"],
    correct: "never",
    explanation:
      "`never` means no value is possible; `void` means it returns undefined.",
  },
  {
    id: "q75",
    question:
      "You want to represent a variable that might be anything, but enforce type checks before use.",
    options: ["unknown", "any"],
    correct: "unknown",
    explanation:
      "`unknown` is safer than `any`; you must narrow it before use.",
  },
  {
    id: "q76",
    question: "You want to allow anything without any type safety.",
    options: ["unknown", "any"],
    correct: "any",
    explanation: "`any` disables type checking, unlike `unknown`.",
  },
  {
    id: "q77",
    question: "You want to extract the return type from a function type.",
    options: ["infer", "ReturnType"],
    correct: "ReturnType",
    explanation: "`ReturnType<F>` is the built-in utility for this use case.",
  },
  {
    id: "q78",
    question:
      "You want to extract a type from inside a conditional using pattern matching.",
    options: ["infer", "extends"],
    correct: "infer",
    explanation:
      "`infer` is used inside conditional types to capture a type for later use.",
  },
  {
    id: "q79",
    question:
      "You want to make a conditional type that applies to each member of a union individually.",
    options: ["Distributive Conditional", "Mapped Type"],
    correct: "Distributive Conditional",
    explanation:
      "Conditional types distribute over unions by default (unless wrapped in a tuple).",
  },
  {
    id: "q80",
    question: "You want to convert a union type into an intersection type.",
    options: ["Distributive Conditional + Inference", "keyof"],
    correct: "Distributive Conditional + Inference",
    explanation:
      "Use conditional types with `infer` to transform union into intersection.",
  },
  {
    id: "q81",
    question: "You want to prevent a function from ever returning normally.",
    options: ["void", "never"],
    correct: "never",
    explanation:
      "Functions like `throw new Error()` return `never`, indicating no return path.",
  },
  {
    id: "q82",
    question:
      "You want to define a utility type that removes null and undefined from a type.",
    options: ["NonNullable", "Exclude"],
    correct: "NonNullable",
    explanation:
      "`NonNullable<T>` removes both `null` and `undefined` from `T`.",
  },
  {
    id: "q83",
    question: "You want to exclude specific members from a union type.",
    options: ["Exclude", "Omit"],
    correct: "Exclude",
    explanation:
      "`Exclude<A, B>` removes B's members from A (works on unions).",
  },
  {
    id: "q84",
    question:
      "You want to schedule a callback after the current call stack is clear.",
    options: ["setTimeout(fn, 0)", "queueMicrotask(fn)"],
    correct: "queueMicrotask(fn)",
    explanation:
      "`queueMicrotask` runs after the current task but before any `setTimeout`.",
  },
  {
    id: "q85",
    question: "You want to schedule a function for the next animation frame.",
    options: ["setTimeout", "requestAnimationFrame"],
    correct: "requestAnimationFrame",
    explanation:
      "`requestAnimationFrame` is synced with the browser’s render cycle.",
  },
  {
    id: "q86",
    question:
      "You want to store data that should persist across tabs and sessions.",
    options: ["SessionStorage", "LocalStorage"],
    correct: "LocalStorage",
    explanation:
      "`LocalStorage` persists across tabs and sessions; `SessionStorage` doesn't.",
  },
  {
    id: "q87",
    question: "You want to store sensitive tokens client-side temporarily.",
    options: ["Memory (JS)", "LocalStorage"],
    correct: "Memory (JS)",
    explanation:
      "LocalStorage is vulnerable to XSS. Store tokens in memory if short-lived.",
  },
  {
    id: "q88",
    question: "You want to securely store a refresh token in the browser.",
    options: ["HTTP-only Cookie", "LocalStorage"],
    correct: "HTTP-only Cookie",
    explanation:
      "Only HTTP-only cookies are safe from JS access (XSS-resistant).",
  },
  {
    id: "q89",
    question: "You want to pass data between two browser tabs.",
    options: ["BroadcastChannel", "SessionStorage"],
    correct: "BroadcastChannel",
    explanation: "`BroadcastChannel` is a native API for tab-to-tab messaging.",
  },
  {
    id: "q90",
    question: "You want to cache fetch requests on the client for offline use.",
    options: ["Service Worker", "LocalStorage"],
    correct: "Service Worker",
    explanation:
      "Service Workers intercept network requests and enable offline caching.",
  },
  {
    id: "q91",
    question:
      "You want to avoid layout thrashing when updating DOM elements in a loop.",
    options: ["requestAnimationFrame", "DocumentFragment"],
    correct: "DocumentFragment",
    explanation:
      "`DocumentFragment` allows batch DOM updates without triggering reflow.",
  },
  {
    id: "q92",
    question: "You want to lazy-load assets when they enter the viewport.",
    options: ["IntersectionObserver", "MutationObserver"],
    correct: "IntersectionObserver",
    explanation:
      "Use `IntersectionObserver` to detect when elements enter the viewport.",
  },
  {
    id: "q93",
    question: "You want to watch for DOM tree changes in a React ref element.",
    options: ["MutationObserver", "ResizeObserver"],
    correct: "MutationObserver",
    explanation:
      "`MutationObserver` tracks added/removed child elements or attribute changes.",
  },
  {
    id: "q94",
    question: "You want to protect against cross-site request forgery (CSRF).",
    options: ["SameSite Cookie", "Access Token in LocalStorage"],
    correct: "SameSite Cookie",
    explanation:
      "`SameSite` cookies restrict cross-origin sending, mitigating CSRF.",
  },
  {
    id: "q95",
    question: "You want to protect against cross-site scripting (XSS).",
    options: ["Input Sanitization", "CORS Headers"],
    correct: "Input Sanitization",
    explanation:
      "CORS doesn’t prevent XSS; sanitize HTML to prevent script injection.",
  },
  {
    id: "q96",
    question:
      "You want to share an API across multiple frontend origins securely.",
    options: ["CORS", "CSRF Tokens"],
    correct: "CORS",
    explanation: "CORS controls cross-origin access to APIs.",
  },
  {
    id: "q97",
    question:
      "You want to allow credentials (cookies) to be sent in a cross-origin request.",
    options: ["credentials: 'include'", "Access-Control-Allow-Origin: *"],
    correct: "credentials: 'include'",
    explanation:
      "`credentials: 'include'` allows cross-origin cookies; wildcard origin breaks this.",
  },
  {
    id: "q98",
    question: "You want to avoid exposing tokens to JavaScript.",
    options: ["HTTP-only Cookies", "LocalStorage"],
    correct: "HTTP-only Cookies",
    explanation:
      "LocalStorage is accessible by JS; only HTTP-only cookies are not.",
  },
  {
    id: "q99",
    question: "You want to validate the authenticity of a frontend session.",
    options: ["JWT Signature", "LocalStorage Presence"],
    correct: "JWT Signature",
    explanation:
      "JWTs use signatures to verify integrity; presence in localStorage is not validation.",
  },
  {
    id: "q100",
    question: "You want to prevent a refresh token from being stolen by XSS.",
    options: ["HTTP-only Cookie", "SessionStorage"],
    correct: "HTTP-only Cookie",
    explanation:
      "SessionStorage is still JS-accessible; only HTTP-only cookies are safe from XSS.",
  },
  {
    id: "q101",
    question:
      "You want to prevent the frontend from loading scripts from unknown origins.",
    options: ["Content Security Policy", "CORS"],
    correct: "Content Security Policy",
    explanation:
      "CSP restricts script sources to prevent XSS from external domains.",
  },
  {
    id: "q102",
    question: "You want to invalidate a JWT immediately after user logout.",
    options: ["Blacklist Server Token", "Delete LocalStorage"],
    correct: "Blacklist Server Token",
    explanation:
      "Deleting client-side data isn't enough; server must revoke the token.",
  },
  {
    id: "q103",
    question:
      "You want to protect sensitive routes in a React app from unauthenticated users.",
    options: ["Route Guard / Middleware", "Lazy Loading"],
    correct: "Route Guard / Middleware",
    explanation:
      "Lazy loading affects bundle size, not route access. Guards enforce auth.",
  },
  {
    id: "q104",
    question:
      "You want to create only one instance of a class across your entire app.",
    options: ["Singleton", "Factory"],
    correct: "Singleton",
    explanation:
      "Singleton ensures exactly one instance is created and reused.",
  },
  {
    id: "q105",
    question:
      "You want to abstract creation logic and return different implementations at runtime.",
    options: ["Factory", "Builder"],
    correct: "Factory",
    explanation:
      "Factory encapsulates object creation and can return varied types.",
  },
  {
    id: "q106",
    question:
      "You want to construct a complex object step-by-step with custom configuration.",
    options: ["Builder", "Factory"],
    correct: "Builder",
    explanation: "Builder separates object construction from representation.",
  },
  {
    id: "q107",
    question:
      "You want to notify multiple parts of your system when one component updates.",
    options: ["Observer", "Strategy"],
    correct: "Observer",
    explanation:
      "Observer notifies subscribed components when a subject changes.",
  },
  {
    id: "q108",
    question:
      "You want to swap different algorithms without changing object structure.",
    options: ["Strategy", "Factory"],
    correct: "Strategy",
    explanation:
      "Strategy defines interchangeable algorithms under a shared interface.",
  },
  {
    id: "q109",
    question:
      "You want to provide a simplified interface to a complex subsystem.",
    options: ["Facade", "Adapter"],
    correct: "Facade",
    explanation:
      "Facade offers a unified, simplified API for complex logic underneath.",
  },
  {
    id: "q110",
    question:
      "You want to make an interface compatible with another without changing existing code.",
    options: ["Adapter", "Bridge"],
    correct: "Adapter",
    explanation:
      "Adapter converts one interface to another to ensure compatibility.",
  },
  {
    id: "q111",
    question:
      "You want to decouple abstraction from implementation across layers.",
    options: ["Bridge", "Proxy"],
    correct: "Bridge",
    explanation:
      "Bridge separates interface and implementation to evolve them independently.",
  },
  {
    id: "q112",
    question:
      "You want to control access or enhance functionality without modifying original code.",
    options: ["Proxy", "Decorator"],
    correct: "Proxy",
    explanation:
      "Proxy controls access to the original object (e.g., for lazy loading, logging).",
  },
  {
    id: "q113",
    question:
      "You want to dynamically add behavior to objects without altering their code.",
    options: ["Decorator", "Proxy"],
    correct: "Decorator",
    explanation:
      "Decorator wraps an object to add features dynamically without inheritance.",
  },
  {
    id: "q114",
    question:
      "You want to reduce repeated reads of static user data from the database.",
    options: ["Cache Layer", "Load Balancer"],
    correct: "Cache Layer",
    explanation:
      "Caching stores pre-fetched data closer to the user, reducing DB load.",
  },
  {
    id: "q115",
    question:
      "You want to distribute incoming traffic across multiple backend servers.",
    options: ["Load Balancer", "CDN"],
    correct: "Load Balancer",
    explanation:
      "Load balancers route traffic to backend instances based on availability and load.",
  },
  {
    id: "q116",
    question: "You want to serve static assets close to users worldwide.",
    options: ["CDN", "Load Balancer"],
    correct: "CDN",
    explanation:
      "CDNs cache static files (e.g. images, JS) across global edge locations.",
  },
  {
    id: "q117",
    question:
      "You want to ensure users always get the latest API response, not a cached one.",
    options: ["Cache-Control: no-store", "Cache-Control: public"],
    correct: "Cache-Control: no-store",
    explanation: "`no-store` prevents any caching and forces full re-fetch.",
  },
  {
    id: "q118",
    question:
      "You want to handle background tasks without blocking the main app logic.",
    options: ["Message Queue", "Synchronous API"],
    correct: "Message Queue",
    explanation:
      "Queues (e.g. RabbitMQ, SQS) offload heavy async work to workers.",
  },
  {
    id: "q119",
    question:
      "You want to retry a failed request a few times before giving up.",
    options: ["Retry Logic", "Circuit Breaker"],
    correct: "Retry Logic",
    explanation:
      "Retry logic attempts the request again with backoff before failing.",
  },
  {
    id: "q120",
    question:
      "You want to stop making requests to a failing service temporarily.",
    options: ["Circuit Breaker", "Retry Logic"],
    correct: "Circuit Breaker",
    explanation:
      "Circuit breakers stop traffic when failure rate passes a threshold.",
  },
  {
    id: "q121",
    question: "You want to horizontally scale your stateless web server.",
    options: ["Multiple Instances", "Sticky Sessions"],
    correct: "Multiple Instances",
    explanation:
      "Stateless services can scale by adding more instances (replicas).",
  },
  {
    id: "q122",
    question:
      "You want to maintain user login state across multiple load-balanced servers.",
    options: ["Sticky Sessions", "Round Robin"],
    correct: "Sticky Sessions",
    explanation:
      "Sticky sessions ensure the same user connects to the same server.",
  },
  {
    id: "q123",
    question:
      "You want to deliver real-time updates to multiple users at once.",
    options: ["WebSockets", "REST Polling"],
    correct: "WebSockets",
    explanation:
      "WebSockets allow bidirectional, real-time communication without polling.",
  },
  {
    id: "q124",
    question:
      "You want to prevent unnecessary re-rendering of a child component when parent updates.",
    options: ["React.memo", "useEffect"],
    correct: "React.memo",
    explanation:
      "`React.memo` skips rendering if props haven't changed (shallow compare).",
  },
  {
    id: "q125",
    question:
      "You want to persist a value across renders without causing re-renders.",
    options: ["useRef", "useState"],
    correct: "useRef",
    explanation:
      "`useRef` stores mutable values without triggering a re-render on change.",
  },
  {
    id: "q126",
    question: "You want to run a function only once when a component mounts.",
    options: ["useEffect(() => ..., [])", "useMemo"],
    correct: "useEffect(() => ..., [])",
    explanation:
      "`useEffect` with an empty dependency array runs only on mount.",
  },
  {
    id: "q127",
    question:
      "You want to memoize a computed value that depends on props/state.",
    options: ["useMemo", "useCallback"],
    correct: "useMemo",
    explanation:
      "`useMemo` caches the result of a computation based on dependencies.",
  },
  {
    id: "q128",
    question:
      "You want to memoize a function to avoid creating a new reference on every render.",
    options: ["useCallback", "useMemo"],
    correct: "useCallback",
    explanation: "`useCallback` returns a memoized version of the function.",
  },
  {
    id: "q129",
    question:
      "You want to handle async data loading with built-in React suspense.",
    options: ["use", "useEffect"],
    correct: "use",
    explanation:
      "`use()` in React 18+ handles async resources inside components (experimental).",
  },
  {
    id: "q130",
    question:
      "You want to render a fallback while a component is being lazily loaded.",
    options: ["Suspense", "ErrorBoundary"],
    correct: "Suspense",
    explanation:
      "`<Suspense>` provides a fallback UI while lazy components are loading.",
  },
  {
    id: "q131",
    question: "You want to catch rendering errors in child components.",
    options: ["ErrorBoundary", "Suspense"],
    correct: "ErrorBoundary",
    explanation:
      "`ErrorBoundary` is used to handle rendering errors gracefully.",
  },
  {
    id: "q132",
    question:
      "You want to optimize a list rendering by uniquely identifying elements.",
    options: ["key prop", "ref"],
    correct: "key prop",
    explanation:
      "`key` helps React identify which items have changed in a list.",
  },
  {
    id: "q133",
    question: "You want to avoid deeply nested prop drilling for shared state.",
    options: ["Context API", "Memoization"],
    correct: "Context API",
    explanation:
      "Context API provides global state access without passing props through many layers.",
  },
  {
    id: "q134",
    question:
      "You want to execute a task immediately after the current call stack finishes.",
    options: ["queueMicrotask", "setTimeout"],
    correct: "queueMicrotask",
    explanation:
      "`queueMicrotask` runs before any macrotask like `setTimeout`.",
  },
  {
    id: "q135",
    question:
      "You want to schedule work after the browser finishes other I/O and rendering.",
    options: ["setTimeout", "requestIdleCallback"],
    correct: "requestIdleCallback",
    explanation:
      "`requestIdleCallback` schedules non-urgent work during browser idle time.",
  },
  {
    id: "q136",
    question:
      "You want to resolve multiple independent promises concurrently and get all results.",
    options: ["Promise.all", "Promise.race"],
    correct: "Promise.all",
    explanation: "`Promise.all` waits for all to resolve or one to reject.",
  },
  {
    id: "q137",
    question:
      "You want to respond to the fastest resolving promise among many.",
    options: ["Promise.any", "Promise.race"],
    correct: "Promise.any",
    explanation:
      "`Promise.any` resolves with the first successful result, ignoring rejections.",
  },
  {
    id: "q138",
    question: "You want to cancel a network request if it takes too long.",
    options: ["AbortController", "setTimeout"],
    correct: "AbortController",
    explanation: "`AbortController` allows canceling fetch with a signal.",
  },
  {
    id: "q139",
    question:
      "You want to retry a failed async task with delay between attempts.",
    options: ["Exponential Backoff", "Promise.race"],
    correct: "Exponential Backoff",
    explanation:
      "Backoff introduces increasing delays between retries to reduce load.",
  },
  {
    id: "q140",
    question:
      "You want to ensure two async operations are performed one after the other.",
    options: ["await sequentially", "Promise.all"],
    correct: "await sequentially",
    explanation:
      "Using `await` one after another ensures sequence; `Promise.all` runs in parallel.",
  },
  {
    id: "q141",
    question:
      "You want to execute an async function but ignore its result and errors.",
    options: ["void asyncFn()", "await asyncFn()"],
    correct: "void asyncFn()",
    explanation:
      "`void asyncFn()` executes without awaiting and silences unhandled promise warnings.",
  },
  {
    id: "q142",
    question: "You want to wrap a callback-style API in a promise.",
    options: ["promisify", "bind"],
    correct: "promisify",
    explanation:
      "`promisify(fn)` turns `(err, result)` style callbacks into Promises.",
  },
  {
    id: "q143",
    question:
      "You want to reduce the number of async API calls during rapid user input.",
    options: ["Debounce", "Throttle"],
    correct: "Debounce",
    explanation:
      "`Debounce` delays execution until typing stops, avoiding excessive calls.",
  },
  {
    id: "q144",
    question:
      "You want to decouple the frontend from direct backend service calls.",
    options: ["API Gateway", "Service Mesh"],
    correct: "API Gateway",
    explanation:
      "API Gateways route and aggregate service responses for the frontend.",
  },
  {
    id: "q145",
    question:
      "You want to control service-to-service communication and observability.",
    options: ["Service Mesh", "Load Balancer"],
    correct: "Service Mesh",
    explanation:
      "Service Mesh handles internal traffic with tracing, retries, and auth.",
  },
  {
    id: "q146",
    question:
      "You want to ensure a microservice doesn’t crash the system if it fails.",
    options: ["Circuit Breaker", "Retry Logic"],
    correct: "Circuit Breaker",
    explanation:
      "Circuit Breakers stop traffic temporarily after repeated failures.",
  },
  {
    id: "q147",
    question: "You want to version APIs without breaking old clients.",
    options: ["URL Versioning", "GraphQL"],
    correct: "URL Versioning",
    explanation:
      "URL versioning (`/v1/`, `/v2/`) separates API changes clearly.",
  },
  {
    id: "q148",
    question:
      "You want to prevent breaking changes when updating a shared API contract.",
    options: ["Backward Compatibility", "Strong Typing"],
    correct: "Backward Compatibility",
    explanation:
      "Maintaining compatibility ensures old clients continue working.",
  },
  {
    id: "q149",
    question:
      "You want to enforce contract between frontend and backend at build time.",
    options: ["OpenAPI / Swagger", "Postman"],
    correct: "OpenAPI / Swagger",
    explanation:
      "OpenAPI schemas validate structure and types during development.",
  },
  {
    id: "q150",
    question:
      "You want the frontend to consume only needed fields from a large object graph.",
    options: ["GraphQL", "REST"],
    correct: "GraphQL",
    explanation: "GraphQL allows field-level queries to avoid over-fetching.",
  },
  {
    id: "q151",
    question:
      "You want to avoid cascading failures between dependent microservices.",
    options: ["Bulkhead Pattern", "Retry Logic"],
    correct: "Bulkhead Pattern",
    explanation:
      "Bulkheads isolate failures by containing them in one area of the system.",
  },
  {
    id: "q152",
    question:
      "You want to maintain internal service contracts without exposing them publicly.",
    options: ["Internal API", "Public API"],
    correct: "Internal API",
    explanation:
      "Internal APIs are for service-to-service and not meant for public consumption.",
  },
  {
    id: "q153",
    question:
      "You want to retry async tasks from a queue that failed due to a temporary issue.",
    options: ["Dead Letter Queue", "Delayed Retry"],
    correct: "Delayed Retry",
    explanation:
      "Delayed retries give transient failures time to resolve before retrying.",
  },
  {
    id: "q154",
    question: "You want to copy text to the clipboard from a button click.",
    options: ["Clipboard API", "localStorage"],
    correct: "Clipboard API",
    explanation:
      "`navigator.clipboard.writeText()` is the standard method for copying.",
  },
  {
    id: "q155",
    question:
      "You want to trigger a notification to the user from your web app.",
    options: ["Notification API", "Alert"],
    correct: "Notification API",
    explanation:
      "The Notification API allows native-like system notifications.",
  },
  {
    id: "q156",
    question: "You want to detect when a tab becomes hidden or visible again.",
    options: ["Page Visibility API", "IntersectionObserver"],
    correct: "Page Visibility API",
    explanation:
      "`document.visibilityState` and `visibilitychange` event track tab visibility.",
  },
  {
    id: "q157",
    question: "You want to check if the user has gone offline.",
    options: ["navigator.onLine", "document.hidden"],
    correct: "navigator.onLine",
    explanation:
      "`navigator.onLine` tells you whether the browser thinks it’s connected.",
  },
  {
    id: "q158",
    question: "You want to track user's geographic location in real time.",
    options: ["Geolocation API", "BroadcastChannel"],
    correct: "Geolocation API",
    explanation: "The Geolocation API gives access to latitude and longitude.",
  },
  {
    id: "q159",
    question: "You want to allow the user to select a file from their device.",
    options: ["File Input", "Clipboard API"],
    correct: "File Input",
    explanation: "`<input type='file'>` triggers file selection and access.",
  },
  {
    id: "q160",
    question:
      "You want to stream large files from a server without loading them entirely.",
    options: ["ReadableStream", "fetch().json()"],
    correct: "ReadableStream",
    explanation:
      "`ReadableStream` lets you consume response body chunks incrementally.",
  },
  {
    id: "q161",
    question:
      "You want to listen for and react to incoming messages from another browser tab.",
    options: ["BroadcastChannel", "Service Worker"],
    correct: "BroadcastChannel",
    explanation:
      "`BroadcastChannel` supports pub/sub-style communication between tabs.",
  },
  {
    id: "q162",
    question: "You want to persist data across sessions for offline use.",
    options: ["IndexedDB", "SessionStorage"],
    correct: "IndexedDB",
    explanation:
      "`IndexedDB` is a low-level async API for large structured storage.",
  },
  {
    id: "q163",
    question: "You want to detect changes to the size of a DOM element.",
    options: ["ResizeObserver", "MutationObserver"],
    correct: "ResizeObserver",
    explanation:
      "`ResizeObserver` triggers callbacks when element dimensions change.",
  },
  {
    id: "q164",
    question:
      "You want to test a single function in isolation without external dependencies.",
    options: ["Unit Test", "Integration Test"],
    correct: "Unit Test",
    explanation:
      "Unit tests target individual components or functions in isolation.",
  },
  {
    id: "q165",
    question: "You want to test how multiple components interact together.",
    options: ["Integration Test", "Unit Test"],
    correct: "Integration Test",
    explanation:
      "Integration tests ensure components/services work together correctly.",
  },
  {
    id: "q166",
    question: "You want to test your entire app from the user’s perspective.",
    options: ["End-to-End Test", "Unit Test"],
    correct: "End-to-End Test",
    explanation:
      "E2E tests simulate real user flows in the browser (e.g., via Cypress or Playwright).",
  },
  {
    id: "q167",
    question: "You want to simulate a network request in a unit test.",
    options: ["Mocking", "Spying"],
    correct: "Mocking",
    explanation:
      "Mocking replaces real API calls with controlled, fake responses.",
  },
  {
    id: "q168",
    question:
      "You want to verify that a function was called with specific arguments.",
    options: ["Spying", "Mocking"],
    correct: "Spying",
    explanation:
      "Spies record function calls and let you assert on call arguments and frequency.",
  },
  {
    id: "q169",
    question:
      "You want to test a component’s behavior without relying on actual DOM rendering.",
    options: ["Shallow Render", "Full Render"],
    correct: "Shallow Render",
    explanation:
      "Shallow rendering renders only the current component, not its children.",
  },
  {
    id: "q170",
    question:
      "You want to deploy new code automatically after tests pass on GitHub.",
    options: ["CI/CD Pipeline", "Manual Deploy"],
    correct: "CI/CD Pipeline",
    explanation:
      "CI/CD automates build/test/deploy steps to streamline releases.",
  },
  {
    id: "q171",
    question:
      "You want to run tests in multiple environments automatically on each push.",
    options: ["GitHub Actions", "Dev Server"],
    correct: "GitHub Actions",
    explanation:
      "GitHub Actions automates tasks like testing, linting, and deployment on events.",
  },
  {
    id: "q172",
    question:
      "You want to isolate test cases from accessing real environment variables.",
    options: ["Mock dotenv values", "Use localStorage"],
    correct: "Mock dotenv values",
    explanation:
      "Environment variables should be mocked or replaced in test environments.",
  },
  {
    id: "q173",
    question: "You want to keep test data isolated between individual tests.",
    options: ["beforeEach", "afterAll"],
    correct: "beforeEach",
    explanation:
      "`beforeEach` resets or prepares state before every test to prevent leaks.",
  },
  {
    id: "q174",
    question: "You want to catch unexpected errors during component rendering.",
    options: ["ErrorBoundary", "try/catch"],
    correct: "ErrorBoundary",
    explanation:
      "`ErrorBoundary` is a React construct for catching render-time errors.",
  },
  {
    id: "q175",
    question: "You want to catch async errors in a data-fetching function.",
    options: ["try/catch", "ErrorBoundary"],
    correct: "try/catch",
    explanation:
      "Async logic must be caught with `try/catch`; `ErrorBoundary` won’t handle it.",
  },
  {
    id: "q176",
    question:
      "You want to ensure an error is reported even if it fails silently in production.",
    options: ["Logging service (e.g. Sentry)", "Console.error"],
    correct: "Logging service (e.g. Sentry)",
    explanation:
      "Console errors don’t persist or alert; services like Sentry capture full error context.",
  },
  {
    id: "q177",
    question:
      "You want to show a fallback UI when a third-party component crashes.",
    options: ["ErrorBoundary", "Suspense"],
    correct: "ErrorBoundary",
    explanation:
      "`Suspense` is for async loading; only `ErrorBoundary` can catch runtime crashes.",
  },
  {
    id: "q178",
    question: "You want to track user actions leading up to a frontend error.",
    options: ["Breadcrumb Logging", "Stack Trace"],
    correct: "Breadcrumb Logging",
    explanation:
      "Breadcrumbs capture user interactions/events before an error occurred.",
  },
  {
    id: "q179",
    question: "You want to log warnings without stopping execution.",
    options: ["console.warn", "throw new Error"],
    correct: "console.warn",
    explanation:
      "`console.warn` reports non-fatal issues without interrupting flow.",
  },
  {
    id: "q180",
    question:
      "You want to fail gracefully when a feature isn’t supported in a browser.",
    options: ["Feature Detection", "Polyfill"],
    correct: "Feature Detection",
    explanation: "Detect first, then fallback or polyfill if missing.",
  },
  {
    id: "q181",
    question: "You want to handle an error thrown inside a Promise chain.",
    options: [".catch()", "try/catch"],
    correct: ".catch()",
    explanation:
      "Promises require `.catch()` for error handling; `try/catch` only works with `await`.",
  },
  {
    id: "q182",
    question:
      "You want to prevent a user from submitting a form twice by accident.",
    options: ["Disable button on submit", "Log error"],
    correct: "Disable button on submit",
    explanation:
      "Disabling the button prevents duplicate requests or logic execution.",
  },
  {
    id: "q183",
    question:
      "You want to retry a failed API call once with logging on failure.",
    options: ["try/catch + retry logic", "Promise.all"],
    correct: "try/catch + retry logic",
    explanation:
      "Retry logic wrapped in `try/catch` allows control + error capture.",
  },
  {
    id: "q184",
    question:
      "You want to share global app state like auth across unrelated components.",
    options: ["Context API", "Local Component State"],
    correct: "Context API",
    explanation: "Context provides shared state across the component tree.",
  },
  {
    id: "q185",
    question:
      "You want to update component state without triggering re-renders in siblings.",
    options: ["Zustand", "Context API"],
    correct: "Zustand",
    explanation:
      "Zustand allows granular subscriptions to prevent global re-renders.",
  },
  {
    id: "q186",
    question:
      "You want to persist state between reloads with minimal boilerplate.",
    options: ["Zustand with middleware", "Redux Toolkit"],
    correct: "Zustand with middleware",
    explanation:
      "Zustand has built-in persistence middleware; Redux needs manual setup or plugins.",
  },
  {
    id: "q187",
    question:
      "You want to build a type-safe, scalable state system with strict reducers.",
    options: ["Redux Toolkit", "Recoil"],
    correct: "Redux Toolkit",
    explanation:
      "RTK enforces structure with reducers, actions, and TypeScript support.",
  },
  {
    id: "q188",
    question:
      "You want to derive data from other pieces of state without recomputation.",
    options: ["Recoil Selectors", "Redux useSelector"],
    correct: "Recoil Selectors",
    explanation:
      "Selectors in Recoil compute derived state with caching built-in.",
  },
  {
    id: "q189",
    question:
      "You want to colocate state with components while keeping it isolated.",
    options: ["Local useState", "Redux"],
    correct: "Local useState",
    explanation: "`useState` is ideal for isolated component-local behavior.",
  },
  {
    id: "q190",
    question: "You want to avoid prop drilling for theme or language settings.",
    options: ["Context API", "Props"],
    correct: "Context API",
    explanation:
      "Context allows deeply nested access without manually passing props.",
  },
  {
    id: "q191",
    question:
      "You want a state library that requires minimal setup and no boilerplate.",
    options: ["Zustand", "Redux"],
    correct: "Zustand",
    explanation: "Zustand is small, fast, and has almost no boilerplate.",
  },
  {
    id: "q192",
    question: "You want to track state history and support undo/redo.",
    options: ["Redux", "useState"],
    correct: "Redux",
    explanation:
      "Redux makes state transitions explicit and can persist history.",
  },
  {
    id: "q193",
    question:
      "You want to optimize state updates in large apps with fine-grained subscriptions.",
    options: ["Zustand", "Context API"],
    correct: "Zustand",
    explanation:
      "Zustand avoids re-rendering all consumers by default using selective subscriptions.",
  },
  {
    id: "q194",
    question:
      "You want to lazy-load a component only when it appears in the viewport.",
    options: ["IntersectionObserver + dynamic import", "useEffect + fetch"],
    correct: "IntersectionObserver + dynamic import",
    explanation:
      "Use IO to detect visibility and dynamic import to load the component.",
  },
  {
    id: "q195",
    question:
      "You want to reduce initial JS bundle size in a large Next.js app.",
    options: ["Dynamic Imports", "Global Imports"],
    correct: "Dynamic Imports",
    explanation:
      "Dynamic imports load only when needed, reducing initial bundle size.",
  },
  {
    id: "q196",
    question: "You want to identify slow components causing re-renders.",
    options: ["React Profiler", "Redux DevTools"],
    correct: "React Profiler",
    explanation: "The React Profiler tracks re-render times and performance.",
  },
  {
    id: "q197",
    question:
      "You want to ensure React doesn’t re-render when props haven’t changed.",
    options: ["memo()", "useEffect()"],
    correct: "memo()",
    explanation: "`memo` prevents re-renders based on shallow prop equality.",
  },
  {
    id: "q198",
    question:
      "You want to avoid memory leaks when using event listeners inside components.",
    options: ["Remove listener in useEffect cleanup", "Store event in ref"],
    correct: "Remove listener in useEffect cleanup",
    explanation:
      "Always clean up side effects (like listeners) to avoid memory leaks.",
  },
  {
    id: "q199",
    question:
      "You want to defer expensive computation until it's actually needed.",
    options: ["lazy evaluation", "eager computation"],
    correct: "lazy evaluation",
    explanation:
      "Lazy computation defers execution until a value is accessed or needed.",
  },
  {
    id: "q200",
    question:
      "You want to avoid unnecessary re-renders when context updates but value hasn’t changed.",
    options: ["Memoize context value", "Wrap in useEffect"],
    correct: "Memoize context value",
    explanation:
      "Context consumers re-render if the value prop changes — even if it's shallowly equal.",
  },
];
