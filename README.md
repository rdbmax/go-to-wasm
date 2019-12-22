# Go to WASM

Experimenting webassembly with Golang. It benchmark equivalent javascript and wasm tasks (big loops). Also mixing some technologies together.

## About webassembly

> WebAssembly is a new type of code that can be run in modern web browsers — it is a low-level assembly-like language with a compact binary format that runs with near-native performance and provides languages such as C/C++ and Rust with a compilation target so that they can run on the web. It is also designed to run alongside JavaScript, allowing both to work together. - (https://developer.mozilla.org/en-US/docs/WebAssembly) 

## technical stack

Languages : Go -> Webassembly, JS, NodeJS

Bundling: Webpack

Project architecture: Lerna

FrontEnd: ReactJS

BackEnd: ExpressJS

Next target is deploying on github pages with github actions. (Pull request are welcome)

## Usage

Install node modules : `yarn` or `npm i`.
Then run `yarn dev`or `npm run dev`.

Open browser at `http://localhost:8080`, you see 2 buttons, each one runs the same code from JS or GO/WASM then print the time it takes.

Results depends on browsers and other factors. On my personnal computer, with chrome wasm is faster, but with firefox js is faster.

## More informations

- [Golang wiki for webassembly](https://github.com/golang/go/wiki/WebAssembly)
- [MDN webassembly](https://developer.mozilla.org/en-US/docs/WebAssembly)
- [Webassembly.org](https://webassembly.org/)

