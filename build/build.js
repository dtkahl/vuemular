const fs = require("fs-extra");
const path = require("path");
const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const vue = require("rollup-plugin-vue");

async function build(input) {
  let plugins = [
    resolve(),
    commonjs(),
    vue(),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: false
    })
  ];

  const bundle = await rollup.rollup({
    input: path.resolve(__dirname, '..', input),
    plugins
  });
  await bundle.write({
    dir: path.resolve(__dirname, '../lib'),
    format: "cjs",
    exports: "named"
  });
}

(async () => {
  await fs.emptydir(path.resolve(__dirname, '../lib'));
  await build('src/vuemular.js');
  // await build('src/vuemularMixin.js');
  // await build('src/components/VField.vue');
  // await build('src/components/VSubset.vue');
})();
