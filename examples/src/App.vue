<template>
  <div id="app">
    <v-app>
		<v-toolbar color="primary" app></v-toolbar>
		<v-content>
			<v-container fluid>
				<h1>v-cache examples</h1>

				The custom Vue Directive, v-cache, can be attached to any Vue component. The only required parameter is a unique string that can
				be used as a "caching key". In example:<br />
				<br />
				<code>&lt;my-custom-form-component v-cache="'my-custom-cache-key'" /&gt;</code><br />
				<br />
				When a component uses the v-cache directive, it gains the ability to cache, restore, or clear the state of:<br />
				<br />
				<code style="white-space: normal">
				data: {
					form: {
						// Cache, restore, or clear this state
					}
				}</code><br />
				<br />
				By emitting these events to trigger the directive's behavior:<br />
				<br />
<code>this.$emit("cache");
this.$emit("cache-restore");
this.$emit("cache-clear");
</code>

				<v-layout row wrap>

					<!-- BASIC -->
					<v-flex xs12 md6>
						<h2>Basic Example</h2>
						Try reloading the page after typing in this form! You can even close the tab (or your browser entirely).
						<v-card style="padding: 30px 45px;">
							<basic-example v-cache="'basic-form-cache-key'" />
						</v-card>
					</v-flex>
					<v-flex xs12 md6>
						<h2>Code</h2>
						<VEmbed id="embed-container" :options="{ emoji: true }">
							<div class="gist-url">
								https://gist.github.com/dannyrb/59ebb502b93bdcba940c1614cb20c771
							</div>
						</VEmbed>
					</v-flex>

					<!-- ADVANCED -->
					<v-flex xs12 md6>
						<h2>Advanced Example</h2>		
						<v-card style="padding: 30px 45px;">
							<basic-example />
						</v-card>
					</v-flex>
					<v-flex xs12 md6>
						<h2>Code</h2>
						<VEmbed id="embed-container2" :options="{ emoji: true }">
							<div class="gist-url">
								https://gist.github.com/dannyrb/59ebb502b93bdcba940c1614cb20c771
							</div>
						</VEmbed>
					</v-flex>

				</v-layout>
			</v-container>
		</v-content>
		<v-footer app></v-footer>
	</v-app>
  </div>
</template>

<script>
import BasicExample from './components/BasicExample.vue'
import VEmbed from 'vue-embed';

export default {
  name: 'app',
  components: {
	BasicExample,
	VEmbed
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 { margin-top: 25px; }
.gist-url { display: none; }
iframe { margin: 0 !important;}
</style>
