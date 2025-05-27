import Link from "next/link";

const topics = [
  { label: "Flashcards", slug: "flashcards" },
  { label: "Quiz", slug: "quiz" },
  { label: "Topics", slug: "topics" },
  { label: "Flashcards Sequential", slug: "flashcards-sequential" },
  { label: "Data Structures", slug: "data-structures" },
  { label: "Event Loop Visualizer", slug: "event-loop" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-white">
        📚 Developer Training Hub
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">Explore Topics</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topics.map(({ label, slug }) => (
            <li key={slug}>
              <Link
                href={`/${slug}`}
                className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition shadow"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        Built for focused prep and real-world mastery ⚡
      </footer>
    </main>
  );
}
