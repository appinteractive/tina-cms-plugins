# TinaCMS Plugins

This is a collection of plugins for [TinaCMS](https://tinacms.org).

## Installation

Note: This is a work in progress and not ready for production.

Currently you have to link this repository by calling following link command (you can use your favorite package manager) inside thos tepo and the one you want to use it (in thst order)

```bash
yarn link tina-cms-plugins
```

Then you can run this with

```bash
pnpm install
pnpm run dev
```

## Usage

You can import the plugins like this inside your tina schema

```js
import { useReferenceSelect } from 'tina-cms-plugins'

...

ui: {
  component: useReferenceSelect,
}
-
```

## Issues

At this moment I cant get any styles working when importing in tina.
