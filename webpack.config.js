const path = require("path");

module.exports = {
  entry: [
    "./js/utils.js",
    "./js/backend.js",
    "./js/data.js",
    "./js/form.js",
    "./js/preview.js",
    "./js/pin.js",
    "./js/card.js",
    "./js/map.js",
    "./js/main.js",
    "./js/drag.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
}
