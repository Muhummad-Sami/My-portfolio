import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-serif text-6xl font-bold text-[var(--accent-primary)] mb-3">404</h1>
      <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Page Not Found</h2>
      <p className="text-sm text-[var(--text-secondary)] max-w-md mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg bg-[var(--accent-primary)] text-white text-xs font-mono tracking-wider uppercase font-medium hover:bg-[var(--accent-hover)] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
