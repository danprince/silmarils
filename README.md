<p align="center"><img src="assets/logo.svg" height="32" alt="Logo" /></p>
<h1 align="center">Silmarils</h1>
<p align="center"><a href="https://npmjs.com/package/silmarils"><img src="https://img.shields.io/npm/v/silmarils.svg?label=&color=000"  alt="npm version" /></a></p>

This library is a collection of code that I am fed up of rewriting for games and interactive visualizations.

It is well typed, data oriented, and designed to be easy to use in modern environments.

* [Documentation](https://silmarils.netlify.app/)

## Usage
You can use Silmarils directly in [browsers that support ES modules][caniuse-esm].

``` javascript
// importing modules from UNPKG
import { Point } from "https://unpkg.com/silmarils"

// importing a single function from UNPKG
import { distance } from "https://unpkg.com/silmarils/point";
```

Alternatively if you're using a bundler (like Webpack, Rollup or Parcel) then you can install the library from npm and import it instead.

``` javascript
// importing modules from npm
import { Point } from "silmarils";

// importing a single function from npm
import { distance } from "silmarils/point";
```

The library is designed with [tree-shaking][tree-shaking] in mind (which is a hasty way of saying that bundlers will only include the functions you actually use).

[caniuse-esm]: https://caniuse.com/#feat=es6-module
[tree-shaking]: https://webpack.js.org/guides/tree-shaking/
