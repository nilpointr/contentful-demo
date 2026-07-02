module.exports = function (migration) {
  const testimonial = migration.createContentType("componentTestimonial", {
    name: "Component: Testimonial",
    description: "A single customer quote.",
    displayField: "authorName",
  });

  testimonial
    .createField("internalName", {
      name: "Internal Name",
      type: "Symbol",
      required: true,
    })
    .omitted(true);

  testimonial.createField("quote", {
    name: "Quote",
    type: "Text",
    required: true,
  });

  testimonial.createField("authorName", {
    name: "Author Name",
    type: "Symbol",
    required: true,
  });

  testimonial.createField("authorRole", {
    name: "Author Role",
    type: "Symbol",
  });

  testimonial.createField("avatar", {
    name: "Avatar",
    type: "Link",
    linkType: "Asset",
  });
};
