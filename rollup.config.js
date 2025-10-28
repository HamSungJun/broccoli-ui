import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "unplugin-dts/rollup";
import del from "rollup-plugin-delete";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      plugins: [terser()],
      preserveModules: true,
    },
  ],
  plugins: [
    del({ targets: "dist" }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    dts({ bundleTypes: true }),
    babel({ babelHelpers: "runtime", configFile: "./.babelrc.json" }),
  ],
  external: ["react", "react-dom"],
};
