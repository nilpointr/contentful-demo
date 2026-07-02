import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/contentful";
import { PageBody } from "@/components/PageSections";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("/");
  if (!page) return {};
  return {
    title: page.seoTitle ?? page.title,
    description: page.seoDescription ?? undefined,
  };
}

export default async function Home() {
  const page = await getPageBySlug("/");

  if (!page) {
    return (
      <main className="flex flex-1 items-center justify-center p-16 text-center">
        <p className="max-w-md text-lg text-muted-foreground">
          No Contentful <code>page</code> entry found for slug &quot;/&quot;
          yet. Create one in the Adequate Catering Co. space to populate the
          homepage.
        </p>
      </main>
    );
  }

  return <PageBody page={page} />;
}
