<template>
  <div id="app">
    <comp-menu />
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import CompMenu from "./components/CompMenu";

export default {
  name: "app",
  components: {
    CompMenu,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>

<style>
</style>
