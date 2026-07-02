module.exports = function (migration) {
  const hero = migration.createContentType("componentHero", {
    name: "Component: Hero",
    description:
      "Top banner section with a heading, image, and call-to-action button.",
    displayField: "internalName",
  });

  hero
    .createField("internalName", {
      name: "Internal Name",
      type: "Symbol",
      required: true,
    })
    .omitted(true);

  hero.createField("heading", {
    name: "Heading",
    type: "Symbol",
    required: true,
  });

  hero.createField("subheading", {
    name: "Subheading",
    type: "Text",
  });

  hero.createField("backgroundImage", {
    name: "Background Image",
    type: "Link",
    linkType: "Asset",
  });

  hero.createField("ctaText", {
    name: "CTA Text",
    type: "Symbol",
  });

  hero.createField("ctaLink", {
    name: "CTA Link",
    type: "Symbol",
  });
};
