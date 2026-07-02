import Image from "next/image";
import type { Page, Section, Asset } from "@/lib/contentful";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function PageBody({ page }: { page: Page }) {
  return (
    <main className="flex flex-1 flex-col">
      {page.sectionsCollection?.items.map((section) => (
        <SectionBlock key={section.sys.id} section={section} />
      ))}
    </main>
  );
}

function AssetImage({
  asset,
  alt,
  sizes,
  priority,
  className,
}: {
  asset: Asset;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={asset.url}
      alt={alt}
      width={asset.width}
      height={asset.height}
      sizes={sizes}
      priority={priority}
      className={`h-full w-full object-cover ${className ?? ""}`}
    />
  );
}

function formatPrice(price: number | null) {
  return price === null ? null : `$${price.toFixed(2)}`;
}

function SectionBlock({ section }: { section: Section }) {
  switch (section.__typename) {
    case "ComponentHero":
      return (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            {section.backgroundImage ? (
              <>
                <AssetImage
                  asset={section.backgroundImage}
                  alt=""
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-foreground/55" />
              </>
            ) : (
              <ImagePlaceholder
                label="hero background"
                className="h-full w-full"
              />
            )}
          </div>
          <div
            className={`relative mx-auto max-w-2xl px-6 py-28 text-center ${
              section.backgroundImage ? "text-background" : ""
            }`}
          >
            <h1 className="text-4xl font-semibold tracking-tight">
              {section.heading}
            </h1>
            {section.subheading && (
              <p className="mt-4 text-lg">{section.subheading}</p>
            )}
            {section.ctaText && section.ctaLink && (
              <a
                href={section.ctaLink}
                className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
              >
                {section.ctaText}
              </a>
            )}
          </div>
        </section>
      );

    case "ComponentCateringPackage":
      return (
        <section className="mx-auto max-w-md px-6 py-16 text-center">
          <PackageCard item={section} />
        </section>
      );

    case "ComponentFeatureSection":
      return (
        <section className="mx-auto max-w-5xl px-6 py-20">
          {section.heading && (
            <h2 className="text-center text-2xl font-semibold">
              {section.heading}
            </h2>
          )}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {section.itemsCollection?.items.map((item) => (
              <PackageCard key={item.sys.id} item={item} />
            ))}
          </div>
        </section>
      );

    case "ComponentTestimonial":
      return (
        <section className="mx-auto max-w-xl px-6 py-16">
          <TestimonialCard item={section} />
        </section>
      );

    case "ComponentTestimonialSection":
      return (
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-5xl px-6">
            {section.heading && (
              <h2 className="text-center text-2xl font-semibold">
                {section.heading}
              </h2>
            )}
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              {section.testimonialsCollection?.items.map((testimonial) => (
                <TestimonialCard key={testimonial.sys.id} item={testimonial} />
              ))}
            </div>
          </div>
        </section>
      );

    case "ComponentCallToAction":
      return (
        <section className="bg-accent py-20 text-center text-accent-foreground">
          <div className="mx-auto max-w-xl px-6">
            <h2 className="text-2xl font-semibold">{section.heading}</h2>
            {section.body && <p className="mt-3">{section.body}</p>}
            {section.buttonText && section.buttonLink && (
              <a
                href={section.buttonLink}
                className="mt-6 inline-block rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground"
              >
                {section.buttonText}
              </a>
            )}
          </div>
        </section>
      );

    default:
      return null;
  }
}

function PackageCard({
  item,
}: {
  item: {
    name: string;
    description: string | null;
    image: Asset | null;
    price: number | null;
    servingsInfo: string | null;
  };
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      <div className="aspect-4/3">
        {item.image ? (
          <AssetImage
            asset={item.image}
            alt={item.name}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <ImagePlaceholder label={item.name} className="h-full w-full" />
        )}
      </div>
      <div className="p-6 text-left">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        {item.description && (
          <p className="mt-2 text-sm text-muted-foreground">
            {item.description}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-sm">
          {item.price !== null && (
            <span className="font-medium">{formatPrice(item.price)}</span>
          )}
          {item.servingsInfo && (
            <span className="text-muted-foreground">{item.servingsInfo}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  item,
}: {
  item: {
    quote: string;
    authorName: string;
    authorRole: string | null;
    avatar: Asset | null;
  };
}) {
  return (
    <figure className="text-center">
      <div className="mx-auto h-16 w-16 overflow-hidden rounded-full">
        {item.avatar ? (
          <AssetImage asset={item.avatar} alt={item.authorName} sizes="64px" />
        ) : (
          <ImagePlaceholder
            label={item.authorName}
            showLabel={false}
            className="h-full w-full"
          />
        )}
      </div>
      <blockquote className="mt-4 text-sm italic">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-2 text-sm text-muted-foreground">
        {item.authorName}
        {item.authorRole && ` — ${item.authorRole}`}
      </figcaption>
    </figure>
  );
}
