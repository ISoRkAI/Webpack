import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';
import { buildDevServer } from './buildDevServer';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = options.mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
