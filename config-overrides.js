const rewireReactHotLoader = require("react-app-rewire-hot-loader");

// setting up hot-loader without ejecting CRA
module.exports = function override(config, env) {
  /*eslint-disable */
  config = rewireReactHotLoader(config, env);
  /* eslint-enable */
  return config;
};
