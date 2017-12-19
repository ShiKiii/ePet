<template>
  <div class="classifyRouter">
    <div class="header">
      <div class="classify">
          <span>
            <a href="javascript:;">分类</a>
          </span>
      </div>
      <div class="brand">
          <span>
            <a href="javascript:;">品牌</a>
          </span>
      </div>
      <a href="javascript:;" class="search">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png">
      </a>
    </div>
    <div class="bigbox">
      <div class="leftbox">
        <div>
          <ul>
            <li>为您推荐</li>
            <li>狗狗主粮</li>
            <li>狗狗零食</li>
            <li>狗狗服饰</li>
            <li>狗狗窝垫</li>
            <li>狗狗生活</li>
            <li>狗狗玩具</li>
            <li>狗狗保健</li>
            <li>狗狗医疗</li>
            <li>狗狗牵引</li>
            <li>狗狗美容</li>
            <li>狗狗生活</li>
            <li>狗狗生活</li>
            <li>狗狗生活</li>
          </ul>
        </div>
      </div>
      <div class="rightbox">
        <div class="outline">
          <div class="inline">
            <a href="javascript:;" class="title">
              狗狗服饰
              <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png">
            </a>
            <ul class="topUl">
              <li class="fl mt10">
                <a href="" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" src="https://img2.epetbar.com/nowater/cates/2014-03/24/7feeef10bab3d2e8df8a9149e0cb7c70.jpg@!300w-b" lazy="loaded">
                  </div>
                  <p class="ftc ft12 mt10 c333">时尚服装</p>
                </a>
              </li>
              <li class="fl mt10">
                <a href="" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" src="https://img2.epetbar.com/nowater/cates/2014-03/24/7feeef10bab3d2e8df8a9149e0cb7c70.jpg@!300w-b" lazy="loaded">
                  </div>
                  <p class="ftc ft12 mt10 c333">时尚服装</p>
                </a>
              </li>
              <li class="fl mt10">
                <a href="" class="db">
                  <div class="rela loadimg-nofixed">
                    <img class="w100 image" src="https://img2.epetbar.com/nowater/cates/2014-03/24/7feeef10bab3d2e8df8a9149e0cb7c70.jpg@!300w-b" lazy="loaded">
                  </div>
                  <p class="ftc ft12 mt10 c333">时尚服装</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="outline ">
          <div class="inline">
            <a href="javascript:;" class="title">
              热门品牌
            </a>
            <ul class="buttonUl">
              <li class="logo">
                <a href="javascript:;" class="title">
                  <div>
                    <img src="https://img2.epetbar.com/nowater/brand_logo/2016-09/22/8/c0dab99c5239d783320175df8998554a.jpg" alt="">
                    <p  class="brandname">Opawz</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
    div
      width: 50%;
      height: 40px;
      line-height: 40px;
      float: left;
      a
        font-weight: 700
        font-size 13px
    .classify
      text-align right
      padding-right 5%
    .brand
      text-align left
      padding-left 5%
    .search
      img
        position: absolute
        top: 13px;
        right: 15px;
        width: 14px;
        height: 14px;

  .bigbox
    margin-top 43px
    .leftbox
      position: fixed;
      top: 40px;
      left: 0;
      overflow-y: hidden;
      bottom: 0;
      padding-bottom: 45px;
      div
        ul
          li
            padding: 15px 0;
            border-bottom: 1px solid #f3f4f5;
            width: 70px;
            height: 50px;
            font-size: 13px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            text-align center

    .rightbox
      margin-left: 75px;
      .outline
        overflow hidden
        display block
        .inline
          display: block
          padding: 15px 5px 20px;
          border-top: 1px solid #f3f4f5;
          .title
            font-size: 12px;
            display: block;
            color: #999;
            padding-left: 5px;
            margin-top: 10px;
            img
              height: 10px;
              margin-top: 5px;
              float: right;
          .buttonUl
            overflow hidden
            display block
            li
              position: relative;
              margin-top: 10px;
              float: left;
              width: 50%!important;
              padding: 0 5px;
              a
                div
                  position: relative;
                  border: 1px solid #f3f4f5;
                  text-align: center;
                  padding: 55px 10px 10px;
                  overflow hidden
                  img
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    margin-top: 10px;
                    top: 0;
                    position: absolute;
                    height: 45px;
                    max-width: 100%;


          .topUl
            overflow hidden
            display block
            li
              float left
              width: 33.33%;
              padding: 0 5px;
              margin-top: 10px;
              a
                color #333
                div
                  position: relative;
                  padding-top: 100%;
                  img
                    top: 0;
                    left: 0;
                    position: absolute;
                    width: 100%;
</style>
