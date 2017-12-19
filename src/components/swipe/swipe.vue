<template>
  <mt-swipe :auto="2000" class="swiper-container">
    <mt-swipe-item><img src="./3d37da259b71fee7a52d9ec8e6909a6f.jpg"></mt-swipe-item>
    <mt-swipe-item><img src="./6a26f5c3d5063271682027443021aac3.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="./6b14a021f255a05b7d8e4f7b03e8dc36.png" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="./c3a870ba1b2efc5a020a51cae6d6f72c.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="./fa4f3fc3e22d73eb1180d0facc7d8978.jpg" alt=""></mt-swipe-item>
  </mt-swipe>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width: 100%;
    height: 160px;
    margin: 86px auto 0 ;
    position: relative;
    overflow: hidden;
    z-index: 1;
    img
      width 100%
      height 100%
</style>
