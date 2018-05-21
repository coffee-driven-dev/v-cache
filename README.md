<h1 align="center">
	<img src="https://raw.githubusercontent.com/coffee-driven-dev/coffee-driven-dev.com/master/GitHub-Project-Logo.png" alt="cdd logo" />
	<br>
	v-cache
	<br>
</h1>
<p align="center" style="font-size: 1.2em;">
	The source code for the <a href="https://www.coffee-driven-dev.com">v-cache</a> <a href="https://vuejs.org/v2/guide/custom-directive.html">Vue Directive</a>.
</p>

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

[![PRs Welcome][prs-badge]][prs]

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

## LICENSE

MIT

[github-watch-badge]: https://img.shields.io/github/watchers/coffee-driven-dev/v-cache.svg?style=social
[github-watch]: https://github.com/coffee-driven-dev/v-cache/watchers
[github-star-badge]: https://img.shields.io/github/stars/coffee-driven-dev/v-cache.svg?style=social
[github-star]: https://github.com/coffee-driven-dev/v-cache/stargazers
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com