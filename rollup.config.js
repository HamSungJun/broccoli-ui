import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import dts from "unplugin-dts/rollup";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      plugins: [terser({ compress: { directives: false } })],
      preserveModules: true,
      banner: (chuknInfo) => {
        if (chuknInfo.name.includes(".client")) {
          return `"use client"`;
        }
        return "";
      },
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
