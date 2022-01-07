const path = require('path');
const { parse, setSeconds } = require('date-fns');
const { formatInTimeZone } = require('date-fns-tz');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackObfuscatorPlugin = require('webpack-obfuscator');
const ObfuscatorConfig = require('./obfuscator.config');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');

/**
 * Generates a build id based on current UTC time
 * @returns {string} build id like `10efyzh`
 */
const getBuildId = () => Number(formatInTimeZone(setSeconds(new Date(), 0), "utc", "yyMMddHHm")).toString(36);

/**
 * Transforms build ID to Date object
 * @param {string} buildId 
 * @returns {Date} a date object
 */
const getBuildDate = (buildId) => parse(parseInt(buildId, 36).toString(), "yyMMddHHm", new Date());

function makeConfig(env) {
    const _buildId = getBuildId();

    return {
        entry: {
            main: "./src/app.tsx",
        },
        devtool: env.production ? undefined : 'inline-source-map',
        output: {
            path: path.resolve(__dirname, `build`),
            filename: `[name].${_buildId}.js`,
            clean: true,
            crossOriginLoading: "anonymous",
            publicPath: "/"
        },
        devServer: {
            port: 9900,
            open: true,
            historyApiFallback: true
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        mode: env.production ? "production" : "development",
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx|ts)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        {
                            loader: "sass-loader",
                            options: {
                                // Prefer `dart-sass`
                                implementation: require("sass"),
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
                {
                    test: /\.(md|png|jpg|jpeg|eot|svg|ttf|woff|woff2)$/,
                    type: "asset",
                    generator: {
                        filename: 'assets/[contenthash][ext][query]'
                    },
                    parser: {
                        dataUrlCondition: {
                            maxSize: 8 * 1024 // Only inline assets that are less than 8Kb
                        }
                    }
                },
                {
                    test: /\.(md)$/,
                    type: "asset/source",
                    generator: {
                        filename: 'assets/[contenthash][ext][query]'
                    }
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `[name].${_buildId}.css`
            }),
            env.production
                ? new SubresourceIntegrityPlugin({
                    hashFuncNames: ['sha512'],
                    enabled: true
                })
                : null,
            new BundleStatsWebpackPlugin({
                baseline: true
            }),
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'public/index.ejs'),
                filename: 'index.html',
                scriptLoading: "defer",
                inject: false
            }),
            env.obfuscate
                ? new WebpackObfuscatorPlugin(ObfuscatorConfig)
                : null
        ].filter(x => x !== null),
    }
}

module.exports = makeConfig;