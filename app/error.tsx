"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-16 text-center">
      <h1 className="text-2xl font-semibold">
        Something Fell Below The Minimum Standard.
      </h1>
      <p className="max-w-md text-muted-foreground">
        We couldn&apos;t load this page. It happens. Try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-2 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
      >
        Try Again
      </button>
    </main>
  );
}
