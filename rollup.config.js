import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.compat.js',
  output: {
    name: 'amplitude',
    file: 'amplitude.js',
    format: 'umd',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      externalHelpersWhitelist: ['defineProperty', 'extends', 'typeof'],
      plugins: ['external-helpers', 'transform-object-rest-spread'],
    }),
    resolve({
      browser: true,
    }),
    replace({
      BUILD_COMPAT_SNIPPET: 'true',
      BUILD_COMPAT_2_0: 'true',
      BUILD_COMPAT_LOCAL_STORAGE: 'true',
    }),
    commonjs(),
  ],
}
