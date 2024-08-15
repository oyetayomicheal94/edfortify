// // next.config.js

// module.exports = {
//     webpack: (config, { isServer }) => {
//         if (!isServer) {
//             config.module.rules.push({
//                 test: /\.svg$/,
//                 issuer: /\.(js|ts)x?$/,
//                 use: ['file-loader'],
//             });
//         }

//         return config;
//     },
//     images: {
//         domains: ['tailwindui.com', 'zionrebornuniversity.com.ng', 'localhost'],
//         formats: ['image/avif', 'image/webp'],
//     },
//     reactStrictMode: true,
//     experimental: {
//         esmExternals: true,
//     },
// };
// next.config.js

//
module.exports = {
    images: {
        domains: ['tailwindui.com', 'zionrebornuniversity.com.ng', 'localhost'],
        formats: ['image/avif', 'image/webp'],
        loader: 'default',
        // Enable SVG support
        dangerouslyAllowSVG: true,
    },
    reactStrictMode: true,
    experimental: {
        esmExternals: true,
    },
};
