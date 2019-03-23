'use strict';

/**
 * Report.js controller
 *
 * @description: A set of functions called "actions" for managing `Report`.
 */

module.exports = {

  /**
   * Retrieve report records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.report.search(ctx.query);
    } else {
      return strapi.services.report.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a report record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.report.fetch(ctx.params);
  },

  /**
   * Count report records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.report.count(ctx.query);
  },

  /**
   * Create a/an report record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.report.add(ctx.request.body);
  },

  /**
   * Update a/an report record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.report.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an report record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.report.remove(ctx.params);
  }
};
