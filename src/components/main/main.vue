<template>
  <div class="wrap">
    <!--头部组件-->
    <ec-header></ec-header>
    <!--轮播组件-->
    <ec-swipe></ec-swipe>
    <!--跳转按钮组件-->
    <menuicon></menuicon>
    <!--分割线组件-->
    <cline></cline>
    <!--每日疯抢组件-->
    <surprise_day></surprise_day>
    <!--分割线组件-->
    <cline></cline>
    <!--团购插件-->
    <groupbuy imgsrc="https://img2.epetbar.com/nowater/2017-12/14/21/370311d69fd1a39fedca2774dc25ad97.jpg@!water"></groupbuy>
    <!--分割线组件-->
    <cline></cline>
    <!--三图组件-->
    <threeimg></threeimg>
    <!--分割线组件-->
    <cline></cline>
    <!--特卖组件-->
    <sale></sale>
    <!--标题加轮播组件-->
    <titleandswipe></titleandswipe>
    <!--分割线组件-->
    <cline></cline>
    <!--视频入口组件-->
    <ec-video></ec-video>
    <!--分割线组件-->
    <cline></cline>
    <!--视频入口组件-->
    <video2></video2>
    <!--分割线组件-->
    <cline></cline>
    <!--小尾巴-->
    <div>
      <a href="javascript:;" style="height: 29.1987px;">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/16/2b4302241c921a29523ce43d465cd28d.jpg@!water"
             style="width: 100%;">
      </a>
    </div>
    <!--尾部组件-->
    <tail></tail>
    <!--脚部插件-->
    <ec-footer></ec-footer>
  </div>

</template>

<script>
  import header from '../header/header.vue'
  import swipe from '../swipe/swipe.vue'
  import menuicon from '../menuicon/menuicon.vue'
  import cline from '../cline/cline.vue'
  import surprise_day from '../surprise_day/surprise_day.vue'
  import groupbuy from '../groupbuy/groupbuy.vue'
  import footer from '../footer/footer.vue'
  import threeimg from '../threeimg/threeimg.vue'
  import sale from '../sale/sale.vue'
  import titleandswipe from '../titleandswipe/titleandswipe.vue'
  import video from '../video/video.vue'
  import tail from '../tail/tail.vue'
  import video2 from '../video2/video2.vue'


  export default {
    components:{
      'ec-header' : header,
      'ec-swipe' : swipe,
      menuicon,
      cline,
      surprise_day,
      groupbuy,
      'ec-footer' : footer,
      threeimg,
      sale,
      titleandswipe,
      'ec-video' : video,
      tail,
      video2
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    overflow hidden
    .find_nav
      width: 100%;
      height: 35px;
      min-width: 320px;
      .tab
        width 140%
        .tab-item
          white-space: nowrap;
          display: inline-block;



</style>
