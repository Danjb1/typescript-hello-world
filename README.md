# TypeScript "Hello World"

This is a simple, lightweight example to get started with TypeScript, without introducing any other dependencies.

## :hammer: Build

TypeScript files must be compiled into JavaScript before they can be run in the browser.

The TypeScript compiler uses [`tsconfig.json`](./tsconfig.json) to determine how to build the project.

```bash
npm install typescript -g
tsc [-w]
```

## :running: Run

When using TypeScript modules, the [files must be served from an HTTP server](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#Troubleshooting).

One option is to use the [`http-server`](https://github.com/http-party/http-server) module (requires [Node.js](https://nodejs.org/en/)):

```bash
npm install http-server -g
http-server -p 8080
# => Browse to: http://localhost:8080
```

## :memo: A Note on Modules and Imports

This project compiles to an ES6 module, which can be understood directly by modern browsers without the need for additional dependencies.

A significant downside of using ES6 modules is [path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) is not supported, so all imports have to be relative. In order to use paths, a loader or external tool must be used.

> This issue is discussed in more detail [here](https://github.com/Microsoft/TypeScript/issues/10866).

The imports also have to be specified using a `.js` extension, which is a little strange.

> This issue is discussed in more detail [here](https://github.com/microsoft/TypeScript/issues/16577).

Other modules formats are described below.

### [Asynchronous Module Definition (AMD)](https://github.com/amdjs/amdjs-api/wiki/AMD)

**Requires [RequireJS](https://requirejs.org/).**

> The Asynchronous Module Definition (AMD) API specifies a mechanism for defining modules such that the module and its dependencies can be asynchronously loaded. This is particularly well suited for the browser environment where synchronous loading of modules incurs performance, usability, debugging, and cross-domain access problems.

### CommonJS

**Requires [CommonJS](http://www.commonjs.org/).**

This format seems to be obsolete now.

### [Universal Module Definition (UMD)](https://github.com/umdjs/umd)

> These are modules which are capable of working everywhere, be it in the client, on the server or elsewhere.

This format can be used to build a module, but not one that the browser can directly understand and execute. Functions exported by the resulting module must be called explicitly.

### System

**Requires [SystemJS](https://github.com/systemjs/systemjs).**

> Configurable module loader enabling backwards compatibility workflows for ES modules in browsers.
