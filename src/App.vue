<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
}
body {
  background-color: #fc5c65;
}

.app {
  width: 800px;
  margin: 0 auto;
  padding:1em 3em;
  background-color: white;
  border-radius: 1em;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
