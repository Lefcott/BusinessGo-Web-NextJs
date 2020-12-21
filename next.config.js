const path = require('path');

exports.webpack = (config, { defaultLoaders }) => {
  config.module.rules.push({
    test: /\.+(jsx?)$/,
    loader: defaultLoaders.babel,
    include: path.resolve(__dirname, './src')
  });
  return config;
};

const deleteKeys = env =>
  Object.entries(process.env).forEach(([key]) => {
    if (key.startsWith('__') || key.startsWith('NODE_')) delete process.env[key];
  });

const { env } = process;

deleteKeys(env);

env.PROJECT_NAME = env.PROJECT_NAME || process.argv[4];

exports.env = { ...env };
