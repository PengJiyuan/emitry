import buble from 'rollup-plugin-buble';
import butternut from 'rollup-plugin-butternut';

const min = process.env.npm_config_min;
const config = {
  input: './index.js',
  output: {
    format: 'umd',
    name: 'Emitry',
    file: './lib/emitry.umd.js'
  },
  plugins: [
    buble()
  ]
};

if(min) {
  config.output.file = './lib/emitry.umd.min.js';
  config.plugins.push(butternut());
}

export default config;
