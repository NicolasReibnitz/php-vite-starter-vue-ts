<template>
	<div>
		<a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
			<img src="../../public/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
		<a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
			<img src="../../public/php.svg" class="logo php" alt="PHP logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue + PHP" />
</template>

<script setup lang="ts">
	import HelloWorld from './components/HelloWorld.vue';
</script>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		transition: filter 300ms;
		will-change: filter;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}

	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
