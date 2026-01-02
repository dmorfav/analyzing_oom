# analyzing_oom

This repo is a PoC to show how the AnalogJS build can fail with limited memory. The goal is to reproduce the out-of-memory behavior and measure render costs under constrained environments.

## Setup

Run `npm install` to install the application dependencies.

## Development

Run `npm start` for a dev server. Navigate to `http://localhost:5173/`. The application automatically reloads if you change any of the source files.

## Build

- `npm run build` — build client/server normally (artifacts in `dist/analog/public` and `dist/analog/server`).
- `npm run build:oom` — forces the build to run with 2048 MB (`--max-old-space-size=2048`). This intentionally reproduces the OOM crash on low-memory environments.
- `npm run build:gc` — runs the build with `--trace-gc` to log GC activity and measure render/build cost in detail.

## Test

Run `npm run test` to run unit tests with [Vitest](https://vitest.dev).

## Community

- Visit and Star the [GitHub Repo](https://github.com/analogjs/analog)
- Join the [Discord](https://chat.analogjs.org)
- Follow us on [Twitter](https://twitter.com/analogjs)
- Become a [Sponsor](https://github.com/sponsors/brandonroberts)
