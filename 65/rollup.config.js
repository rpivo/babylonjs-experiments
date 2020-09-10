import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

// const env = process.env.NODE_ENV;

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    manualChunks(id) {
      if (id.includes('node_modules')) {
        return 'vendor';
      }
    },
    // manualChunks: {
    //   react: ['react'],
    //   reactDOM: ['react-dom'],
    // },
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
}

// export default {
//   input: 'src/index.tsx',
//   output: {
//     dir: 'dist',
//     format: 'esm',
//     manualChunks: {
//       react: ['react'],
//       reactDOM: ['react-dom'],
//     },
//     plugins: env === 'production' && [terser()],
//   },
//   plugins: [
//     gzipPlugin({
//       customCompression: (content) => brotliCompressSync(Buffer.from(content)),
//       fileName: '.br',
//     }),
//     json(),
//     replace({
//       'process.env.NODE_ENV': JSON.stringify(env),
//     }),
//     typescript(),
//     resolve(),
//     commonjs({
//       include: 'node_modules/**',
//     }),
//   ],
// };
