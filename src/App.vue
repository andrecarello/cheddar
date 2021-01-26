<template>
  <div id="app">
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>
<style lang="scss" src="./app.scss"></style>
