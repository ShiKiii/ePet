<template>
    <div class="littleheader">
      <div class="headerlogo">
        <img :src="imgsrc">
      </div>
      <div class="more">
        <a href="https://wap.epet.com/v2/brandsale.html?pet_type=cat&fw=0">
          <img src="https://img2.epetbar.com/nowater/2017-12/13/13/5cfcbe65444cb2ce687118f8dc0ceca2.jpg">
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    props : {
      imgsrc :{
        type : String,
        required: true,
        default : 'https://img2.epetbar.com/nowater/2017-12/13/16/31188b47432f39588fbf6c7d39f59e2a.jpg'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

    .littleheader
      padding-top: 10px;
      padding-bottom: 5px;
      text-align center
      position: relative
      .headerlogo
        img
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
