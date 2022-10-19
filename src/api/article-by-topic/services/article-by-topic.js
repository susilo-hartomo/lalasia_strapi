'use strict';

/**
 * article-by-topic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-by-topic.article-by-topic');
