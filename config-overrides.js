module.exports = function override(config, env) {
  // Locate the rule that uses PostCSS Loader
  const postcssRule = config.module.rules.find(rule =>
    rule.oneOf?.find(subRule => subRule.loader?.includes('postcss-loader'))
  );

  if (postcssRule) {
    const postcssLoader = postcssRule.oneOf.find(subRule => subRule.loader?.includes('postcss-loader'));

    // Modify the PostCSS Loader configuration
    if (postcssLoader) {
      postcssLoader.options = {
        postcssOptions: {
          plugins: [
            // Your PostCSS plugins go here, e.g., autoprefixer, postcss-preset-env, etc.
          ],
        },
      };
    }
  }

  return config;
};
