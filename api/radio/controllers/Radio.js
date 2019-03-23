'use strict';

/**
 * Radio.js controller
 *
 * @description: A set of functions called "actions" for managing `Radio`.
 */

module.exports = {

  /**
   * Retrieve radio records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.radio.search(ctx.query);
    } else {
      return strapi.services.radio.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a radio record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.radio.fetch(ctx.params);
  },

  /**
   * Count radio records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.radio.count(ctx.query);
  },

  /**
   * Create a/an radio record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.radio.add(ctx.request.body);
  },

  /**
   * Update a/an radio record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.radio.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an radio record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.radio.remove(ctx.params);
  }
};
