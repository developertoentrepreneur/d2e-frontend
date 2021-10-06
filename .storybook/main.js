const path = require('path');
const rootPath = path.resolve(__dirname, '../src');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        additionalData: `@import "@/assets/css/index.scss";`
                    }
                }
            ]
            // include: path.resolve(__dirname, '../')
        });
        // Return the altered config
        config.resolve.alias['@'] = rootPath;

        return config;
    }
};
