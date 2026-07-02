module.exports = function (migration) {
  const testimonialSection = migration.createContentType(
    "componentTestimonialSection",
    {
      name: "Component: Testimonial Section",
      description: "A group of customer testimonials.",
      displayField: "internalName",
    },
  );

  testimonialSection
    .createField("internalName", {
      name: "Internal Name",
      type: "Symbol",
      required: true,
    })
    .omitted(true);

  testimonialSection.createField("heading", {
    name: "Heading",
    type: "Symbol",
  });

  testimonialSection.createField("testimonials", {
    name: "Testimonials",
    type: "Array",
    items: {
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["componentTestimonial"] }],
    },
  });
};
