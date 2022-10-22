'use strict';

/**
 * count-product-sold service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::count-product-sold.count-product-sold');
