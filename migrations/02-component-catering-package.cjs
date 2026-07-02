module.exports = function (migration) {
  const cateringPackage = migration.createContentType(
    "componentCateringPackage",
    {
      name: "Component: Catering Package",
      description: "A single catering package or offering.",
      displayField: "name",
    },
  );

  cateringPackage
    .createField("internalName", {
      name: "Internal Name",
      type: "Symbol",
      required: true,
    })
    .omitted(true);

  cateringPackage.createField("name", {
    name: "Name",
    type: "Symbol",
    required: true,
  });

  cateringPackage.createField("description", {
    name: "Description",
    type: "Text",
  });

  cateringPackage.createField("image", {
    name: "Image",
    type: "Link",
    linkType: "Asset",
  });

  cateringPackage.createField("price", {
    name: "Price",
    type: "Number",
  });

  cateringPackage.createField("servingsInfo", {
    name: "Servings Info",
    type: "Symbol",
  });
};
