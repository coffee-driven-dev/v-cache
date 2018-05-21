<h1 align="center">
	<img src="https://raw.githubusercontent.com/coffee-driven-dev/coffee-driven-dev.com/master/GitHub-Project-Logo.png" alt="cdd logo" />
	<br>
	v-cache
	<br>
</h1>
<p align="center" style="font-size: 1.2em;">
	The source code for the [v-cache](https://www.coffee-driven-dev.com) [Vue Directive](https://vuejs.org/v2/guide/custom-directive.html).
</p>

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

[![CircleCI][circle-ci-badge]][circle-ci]
[![Code Coverage][coverage-badge]][coverage]
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