module.exports = function (migration) {
  const cta = migration.createContentType("componentCallToAction", {
    name: "Component: Call To Action",
    description: "A closing call-to-action banner.",
    displayField: "internalName",
  });

  cta
    .createField("internalName", {
      name: "Internal Name",
      type: "Symbol",
      required: true,
    })
    .omitted(true);

  cta.createField("heading", {
    name: "Heading",
    type: "Symbol",
    required: true,
  });

  cta.createField("body", {
    name: "Body",
    type: "Text",
  });

  cta.createField("buttonText", {
    name: "Button Text",
    type: "Symbol",
  });

  cta.createField("buttonLink", {
    name: "Button Link",
    type: "Symbol",
  });
};
