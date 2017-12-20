<template>
  <div class="classifyRouter">
    <div class="header">
      <div class="classify">
        <router-link to="bigbox">分类<span></span></router-link>
      </div>
      <div class="brand">
        <router-link to="brand">品牌<span></span></router-link>
      </div>
      <a href="javascript:;" class="search">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png">
      </a>
    </div>

    <router-view></router-view>
    <ec-footer></ec-footer>
  </div>
</template>

<script>
  import footer from '../../components/footer/footer.vue'

  export default {


    components : {
      'ec-footer' : footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .header
    width 100%
    padding: 0 15px;
    border-bottom: 1px solid #cbcbcb;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    z-index: 11;
    background white
    div
      width: 50%;
      height: 40px;
      line-height: 40px;
      float: left;
      a
        position relative
        margin 0 .8rem
        font-size .6rem
        font-weight 500
        color #000
        &:active
          color #ed4044
          >span
            position absolute
            bottom -.4rem
            left -0.1rem
            width 100%
            height 2px
            background #ed4044
    .brand
      text-align left
      padding-left 5%
    .classify
      text-align right
      padding-right 5%
    .search
      img
        position: absolute
        top: 13px;
        right: 15px;
        width: 14px;
        height: 14px;


</style>
