<template>
  <div class="sale">
    <div class="saleheader">
      <div class="salelogo">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/16/0954d3cd070051587d8f4d6af79882aa.jpg">
      </div>
      <div class="more">
        <a href="https://wap.epet.com/v2/brandsale.html?pet_type=cat&fw=0">
          <img src="https://img2.epetbar.com/nowater/2017-12/13/13/5cfcbe65444cb2ce687118f8dc0ceca2.jpg">
        </a>
      </div>
    </div>
    <swipe></swipe>
  </div>
</template>

<script>
  import swipe from '../swipe/swipe.vue'
  export default {
    components : {
      swipe
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sale
    .saleheader
      padding-top: 10px;
      padding-bottom: 5px;
      text-align center
      position: relative
      .salelogo
        img
          display block
          float left
          max-width: 50%;
          max-height: 73px;
          margin: 0 auto 0 10px;
      .more
        position: absolute
        text-align: right;
        right: 0;
        top: 1px;
        a
          text-align: center;
          img
            margin-top 20px
            width 50%
            float right
</style>
