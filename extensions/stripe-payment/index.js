const stripeModule = require('./modules/stripe');

module.exports = {
  name: 'stripe-payment',
  version: '1.0.0',
  register: async (server, options) => {
    server.registerModule(stripeModule);
  },
};