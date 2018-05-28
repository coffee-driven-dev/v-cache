<h1 align="center">
    <img src="https://raw.githubusercontent.com/coffee-driven-dev/coffee-driven-dev.com/master/GitHub-Project-Logo.png" alt="cdd logo" />
    <br>
    v-cache
    <br>
</h1>
<p align="center" style="font-size: 1.2em;">
    The source code for <a href="https://coffee-driven-dev.github.io/v-cache/">v-cache</a> a VueJS <a href="https://vuejs.org/v2/guide/custom-directive.html">Directive</a>.
</p>

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![PRs Welcome][prs-badge]][prs]


[![npm](https://img.shields.io/npm/dt/v-cache.svg?style=for-the-badge)](https://www.npmjs.com/package/v-cache)
[![npm](https://img.shields.io/npm/v/v-cache.svg?style=for-the-badge)](https://www.npmjs.com/package/v-cache)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/v-cache.svg?style=for-the-badge)](https://www.npmjs.com/package/v-cache)
[![npm](https://img.shields.io/npm/l/v-cache.svg?style=for-the-badge)](https://www.npmjs.com/package/v-cache)


## About

**What is v-cache?**


**When and why should I use v-cache?**


## Installation

```js
// NPM
npm install v-cache --save

// Yarn
yarn add v-cache
```

_main.js_
```js
import Vue from 'vue';
import vCache from 'v-cache';

Vue.directive("cache", vCache);
```

## Basic Usage

_App.vue_
```
<template>
  <div id="app">
    
    <!-- Where the magic happens -->
    <custom-form v-cache="'unique-key'" />

  </div>
</template>

<script>
import CustomForm from "./components/CustomForm.vue"

export default {
  name: "app",
  components: {
    CustomForm
  }
}
</script>
```

_/components/CustomForm.vue_
```
<template><!-- Business as usual --></template>

<script>
export default {
  name: 'CustomForm',
  data() {
    return {
      form: { /* misc fields */ }
    }
  },
  watch: {
    // Watch for changes to all of form's properties
    // and trigger caching behavior
    form: {
      handler: function() {
        this.$emit("cache", this.form);
      },
      deep: true
    }
  },
  mounted() {
    // After this form is rendered, restore its form values
    // if it has any cached form values
    this.$emit("restore-cache");
  },
  methods: {
    submit() {
      // Clear any cached values for this form
      this.$emit("clear-cache");
    }
  }
}
</script>
```

## Advanced Usage

`v-cache` can accept either a single string to set the key used to store/retrieve data, or an object that allows you to override default behavior for the directive. Examples for both are included below. You can see the default values for each of the properties in src/index.js.

```
// Simple
<my-custom-form-component v-cache="'my-unique-key'" />


// All Available Options
<my-custom-form-component
    v-cache="{
        /* Required, the unique key we use to cache
        * the component's data w/ localforage
        */
        key: 'my-unique-key',

        /* The property to "cache" data from.
        * When NULL, cache all component data
        */
        cacheTarget: 'form',
        
        /* The property to "restore" data from cache to.
        * When NULL, merge against all component data
        */
        restoreTarget: 'form',

        /* Handles a successful restore. Has access to the
        * value found in cache, the Vuejs virtual node for
        * the custom component, and the restoreTarget (string)
        */
        successHandler: (value, vnode, restoreTarget) => {},

        /* Called if localforage fails when attempting to
        * cache or restore cache. localforage's error object
        */
        errorHandler: (err) => {},

        /* Called _after_ a successful restore. Provides
        * access to the raw value retrieved from the cache.
        */
        restoreCallback: (value) => {}
    }"
/>
```

Attaching the `v-cache` directive to a custom component wires it up to use caching functionality. To leverage this functionality, you can `$emit` one of the following events from inside the component:


| Event | Behavior | Options (optional) |
| :--- | :--- | :--- |
| `$emit('cache')` | save `cacheTarget` to cache | `$emit('cache', /* data to cache */)` |
| `$emit('cache-restore')` | restore cache to `restoreTarget` | `$emit('cache-restore', 'new-restore-target')` OR `$emit('cache-restore({ restoreTarget: '', successHandler: ()=> {}, errorHandler: () => {} })` |
| `$emit('cache-clear')` | clear cache | N/A |

## Roadmap

### v2

- Config option to not cache `password` fields
- Ability to cache native forms and form elements directly

## LICENSE

MIT

[github-watch-badge]: https://img.shields.io/github/watchers/coffee-driven-dev/v-cache.svg?style=social
[github-watch]: https://github.com/coffee-driven-dev/v-cache/watchers
[github-star-badge]: https://img.shields.io/github/stars/coffee-driven-dev/v-cache.svg?style=social
[github-star]: https://github.com/coffee-driven-dev/v-cache/stargazers
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com