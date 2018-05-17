import buble from 'rollup-plugin-buble';

export default {
  input: './index.js',
  output: {
    format: 'umd',
    name: 'Emiton',
    file: './emiton.umd.js'
  },
  plugins: [
    buble()
  ]
};
