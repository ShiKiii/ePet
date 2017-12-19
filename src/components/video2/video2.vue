<template>
  <div class="sale">
    <div class="saleheader">
      <div class="salelogo">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/16/ef5a8dee1393526fed2afe5059fb8c58.jpg">
      </div>
      <div class="more">
        <a href="https://wap.epet.com/v2/brandsale.html?pet_type=cat&fw=0">
          <img src="https://img2.epetbar.com/nowater/2017-12/13/13/5cfcbe65444cb2ce687118f8dc0ceca2.jpg">
        </a>
      </div>
    </div>
    <div class="videomain" style="width: 100%;">
      <img src="https://img1.epetbar.com/2017-10/31/16/e113957a8e3397f46adf4e2cbe904c34.jpg@!500w0h"
            style="width: 100%;">
      <img src="./play.png" class="play">
    </div>
    <div class="ft12 c999 pad10 ftc">
      <div class="textover c333">吐槽！E宠！首部自黑视频</div>
      <div>
        <span class="cmallViewIco mr3"></span>
        1448
        <span class="ml10 mr10">|</span>
        04:00
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
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

    .videomain
      position: relative
      .play
        background-size: contain;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 50%;
        top: 63%;
        margin-left: -10px;
        margin-top: -10px;
</style>
