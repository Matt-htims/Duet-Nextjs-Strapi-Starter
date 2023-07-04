"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentBlocks: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      //   feature: {
      //     populate: {
      //       fields: ["title", "description", "showLink", "newTab", "url", "text"],
      //       media: {
      //         fields: ["url", "alternativeText", "caption", "width", "height"],
      //       },
      //     },
      //   },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      images: {
        populate: {
          data: {
            attributes: {
              fields: ["url", "alternativeText", "caption", "width", "height"],
            },
          },
        },
      },
      //   plans: {
      //     populate: ["product_features"],
      //   },
      submitButton: {
        populate: true,
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
