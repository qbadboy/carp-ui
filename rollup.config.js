import path from 'path';

import vuePlugin from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

function uiMixin(style) {
  return style.import(path.join(__dirname, './src/style/ui.styl'));
}

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/carp_ui.es.js',
    format: 'es'
  },
  plugins: [
    resolve({
      mainFields: ['module', 'main', 'index'],
      extensions: ['.js', '.json', '.vue']
    }),
    commonjs(),
    vuePlugin({
      style: {
        preprocessOptions: {
          stylus: {
            use: [uiMixin]
          }
        }
      }
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    postcss({
      config: {
        path: path.resolve(__dirname, './postcss.config.js')
      }
    })
  ]
};
