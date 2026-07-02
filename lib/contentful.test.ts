import { afterEach, describe, expect, it } from "vitest";
import { getPageBySlug } from "./contentful";

describe("getPageBySlug", () => {
  const originalEnv = { ...process.env };

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  it("throws a clear error when CONTENTFUL_SPACE_ID is missing", async () => {
    process.env.CONTENTFUL_DELIVERY_TOKEN = "test-token";
    delete process.env.CONTENTFUL_SPACE_ID;
    await expect(getPageBySlug("/")).rejects.toThrow(
      "Missing required environment variable: CONTENTFUL_SPACE_ID",
    );
  });

  it("throws a clear error when CONTENTFUL_DELIVERY_TOKEN is missing", async () => {
    process.env.CONTENTFUL_SPACE_ID = "test-space-id";
    delete process.env.CONTENTFUL_DELIVERY_TOKEN;
    await expect(getPageBySlug("/")).rejects.toThrow(
      "Missing required environment variable: CONTENTFUL_DELIVERY_TOKEN",
    );
  });
});
