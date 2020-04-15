import resolve from "rollup-plugin-node-resolve";

export default {
  input: "index.js",
  output: [
    {
      file: "dist/esm.js",
      format: "es",
    },
  ],
  plugins: [resolve()]
}
