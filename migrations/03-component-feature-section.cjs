module.exports = function (migration) {
  const featureSection = migration.createContentType(
    "componentFeatureSection",
    {
      name: "Component: Feature Section",
      description:
        "A grid of catering packages, e.g. featured on the homepage.",
      displayField: "internalName",
    },
  );

  featureSection
    .createField("internalName", {
      name: "Internal Name",
      type: "Symbol",
      required: true,
    })
    .omitted(true);

  featureSection.createField("heading", {
    name: "Heading",
    type: "Symbol",
  });

  featureSection.createField("items", {
    name: "Items",
    type: "Array",
    items: {
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["componentCateringPackage"] }],
    },
  });
};
