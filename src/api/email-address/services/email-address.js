'use strict';

/**
 * email-address service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-address.email-address');
