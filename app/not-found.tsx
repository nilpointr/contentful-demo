import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-16 text-center">
      <h1 className="text-2xl font-semibold">
        This Page Does Not Meet The Minimum Standard.
      </h1>
      <p className="max-w-md text-muted-foreground">
        Mostly because it doesn&apos;t exist. Try the homepage instead.
      </p>
      <Link
        href="/"
        className="mt-2 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
      >
        Back To Home
      </Link>
    </main>
  );
}
