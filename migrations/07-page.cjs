const SECTION_TYPES = [
  "componentHero",
  "componentCateringPackage",
  "componentFeatureSection",
  "componentTestimonial",
  "componentTestimonialSection",
  "componentCallToAction",
];

module.exports = function (migration) {
  const page = migration.createContentType("page", {
    name: "Page",
    description:
      "A composable page built from sections. Used for the homepage and landing page.",
    displayField: "title",
  });

  page
    .createField("internalName", {
      name: "Internal Name",
      type: "Symbol",
      required: true,
    })
    .omitted(true);

  page.createField("title", {
    name: "Title",
    type: "Symbol",
    required: true,
  });

  page.createField("slug", {
    name: "Slug",
    type: "Symbol",
    required: true,
    validations: [{ unique: true }],
  });

  page.createField("seoTitle", {
    name: "SEO Title",
    type: "Symbol",
  });

  page.createField("seoDescription", {
    name: "SEO Description",
    type: "Text",
  });

  page.createField("sections", {
    name: "Sections",
    type: "Array",
    items: {
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: SECTION_TYPES }],
    },
  });
};
