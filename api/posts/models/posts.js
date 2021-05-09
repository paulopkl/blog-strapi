'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 */

module.exports = {
    async afterCreate(result, data) {
        axios.post('https://api.netlify.com/build_hooks/6096cad03047e5c1b32923d1');
    }

    async afterUpdate(result, params, data) {
        axios.post('https://api.netlify.com/build_hooks/6096cad03047e5c1b32923d1');
    }
};
