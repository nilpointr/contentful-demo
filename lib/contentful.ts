export interface Sys {
  id: string;
}

export interface Asset {
  url: string;
  width: number;
  height: number;
}

export interface HeroSection {
  __typename: "ComponentHero";
  sys: Sys;
  heading: string;
  subheading: string | null;
  backgroundImage: Asset | null;
  ctaText: string | null;
  ctaLink: string | null;
}

export interface CateringPackage {
  __typename: "ComponentCateringPackage";
  sys: Sys;
  name: string;
  description: string | null;
  image: Asset | null;
  price: number | null;
  servingsInfo: string | null;
}

export interface FeatureSection {
  __typename: "ComponentFeatureSection";
  sys: Sys;
  heading: string | null;
  itemsCollection: { items: Omit<CateringPackage, "__typename">[] } | null;
}

export interface Testimonial {
  __typename: "ComponentTestimonial";
  sys: Sys;
  quote: string;
  authorName: string;
  authorRole: string | null;
  avatar: Asset | null;
}

export interface TestimonialSection {
  __typename: "ComponentTestimonialSection";
  sys: Sys;
  heading: string | null;
  testimonialsCollection: { items: Omit<Testimonial, "__typename">[] } | null;
}

export interface CallToAction {
  __typename: "ComponentCallToAction";
  sys: Sys;
  heading: string;
  body: string | null;
  buttonText: string | null;
  buttonLink: string | null;
}

export type Section =
  | HeroSection
  | CateringPackage
  | FeatureSection
  | Testimonial
  | TestimonialSection
  | CallToAction;

export interface Page {
  title: string;
  slug: string;
  seoTitle: string | null;
  seoDescription: string | null;
  sectionsCollection: { items: Section[] } | null;
}

const PAGE_QUERY = `
  query PageBySlug($slug: String!) {
    pageCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        seoTitle
        seoDescription
        sectionsCollection(limit: 10) {
          items {
            __typename
            ... on ComponentHero {
              sys { id }
              heading
              subheading
              backgroundImage { url width height }
              ctaText
              ctaLink
            }
            ... on ComponentCateringPackage {
              sys { id }
              name
              description
              image { url width height }
              price
              servingsInfo
            }
            ... on ComponentFeatureSection {
              sys { id }
              heading
              itemsCollection(limit: 10) {
                items {
                  sys { id }
                  name
                  description
                  image { url width height }
                  price
                  servingsInfo
                }
              }
            }
            ... on ComponentTestimonial {
              sys { id }
              quote
              authorName
              authorRole
              avatar { url width height }
            }
            ... on ComponentTestimonialSection {
              sys { id }
              heading
              testimonialsCollection(limit: 10) {
                items {
                  sys { id }
                  quote
                  authorName
                  authorRole
                  avatar { url width height }
                }
              }
            }
            ... on ComponentCallToAction {
              sys { id }
              heading
              body
              buttonText
              buttonLink
            }
          }
        }
      }
    }
  }
`;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getEndpoint(): string {
  const spaceId = requireEnv("CONTENTFUL_SPACE_ID");
  const environment = process.env.CONTENTFUL_ENVIRONMENT ?? "master";
  return `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;
}

async function contentfulGraphQL<T>(
  query: string,
  variables: Record<string, unknown>,
  preview = false,
): Promise<T> {
  const token = preview
    ? requireEnv("CONTENTFUL_PREVIEW_TOKEN")
    : requireEnv("CONTENTFUL_DELIVERY_TOKEN");

  const res = await fetch(getEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: preview ? 0 : 60 },
  });

  if (!res.ok) {
    throw new Error(
      `Contentful GraphQL request failed: ${res.status} ${res.statusText}`,
    );
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(
      `Contentful GraphQL errors: ${JSON.stringify(json.errors)}`,
    );
  }

  return json.data as T;
}

export async function getPageBySlug(
  slug: string,
  preview = false,
): Promise<Page | null> {
  const data = await contentfulGraphQL<{ pageCollection: { items: Page[] } }>(
    PAGE_QUERY,
    { slug },
    preview,
  );
  return data.pageCollection.items[0] ?? null;
}
