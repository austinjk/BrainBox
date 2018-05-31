<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100');

* {
  font-size: 14px;
}

html,
body {
  background-color: #222;
  height: 100%;
  margin: 0px;
  font: 16px/20px 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial,
    Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
}
</style>
