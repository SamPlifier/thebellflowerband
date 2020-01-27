const withImages = require('next-images');
// const audio = require('audio-loader');
// const fileLoader = require('file-loader');

module.exports = withImages();

// console.log('module exports', module.exports.withImages);
// module.exports = {
//     images: withImages()
// }

// module.exports = {
//     webpack: (config, options) => {
//       config.module.rules.push({
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           options.defaultLoaders.babel,
//           {
//             loader: 'file-loader',
//           },
//         ],
//       })
//       return config
//     }
//   }