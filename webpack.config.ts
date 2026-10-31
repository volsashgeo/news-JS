import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';

// Статические импорты — вместо require() внутри функции
import devConfig from './webpack.dev.config';
import prodConfig from './webpack.prod.config';

const baseConfig: Configuration = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new DotenvWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

type Env = { mode?: string };

export default ({ mode }: Env): Configuration => {
    const isProductionMode = mode === 'prod';
    const envConfig: Configuration = isProductionMode ? prodConfig : devConfig;

    return merge(baseConfig, envConfig);
};
