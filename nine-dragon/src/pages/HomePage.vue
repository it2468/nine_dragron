<template>
  <div>
        <transition mode="out-in" name="home-page">
          <router-view></router-view>
        </transition>
        <comp-slider />
  </div>
</template>

<script>
import CompSlider from '../components/CompSlider'

export default {
    name:'home-page',
    components:{
        CompSlider
    }
}
</script>

<style>
.home-page-enter-active, .home-page-leave-active{
  transition: all .5s ease;
}
.home-page-enter,.home-page-leave-to {
  opacity: 0;
}
.home-page-enter-to, .home-page-leave{
  opacity: 1;
}
</style>