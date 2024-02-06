const nextConfig = {
  webpack: (config, { webpack }) => {
    if (config.plugins) {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^(lokijs|pino-pretty|encoding)$/,
        })
      );
    }

    // Return the modified config
    return config;
  },
};

module.exports = nextConfig;
