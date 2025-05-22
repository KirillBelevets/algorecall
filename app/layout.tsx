import "@/app/globals.css";

export const metadata = {
  title: "AlgoRecall",
  description: "Flashcard trainer for DSA mastery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
