import injectDevServer from '@cypress/react/plugins/next';

module.exports = (on, config) => {
  injectDevServer(on, config);

  return config;
};
