import buble from 'rollup-plugin-buble';

export default {
  input: './index.js',
  output: {
    format: 'umd',
    name: 'Emitry',
    file: './emitry.umd.js'
  },
  plugins: [
    buble()
  ]
};
