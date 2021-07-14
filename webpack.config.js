const path = require('path');

// const entryFile = path.join(__dirname, 'client', 'src', 'index.js');
// const outputDir = path.join(__dirname, 'client', 'dist');

// module.exports = {
//   entry: {
//     entryFile
//   },
//   output: {
//     path: outputDir,
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: 'babel-loader'
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   }
// };

const entry = path.join(__dirname, 'client', 'src', 'index.tsx');
const output = path.resolve(__dirname, 'client', 'dist');

module.exports = {
  entry: entry,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: output
  }
};
