import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide uppercase"
        >
          Adequate Catering Co.
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/corporate-catering">Corporate Catering</Link>
        </nav>
      </div>
    </header>
  );
}
