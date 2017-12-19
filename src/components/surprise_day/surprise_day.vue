<template>
  <div class="surprise">
    <div class="surprise-tit clearfix pad10 rela overflow">
      <div class="fl titimg"><img src="//static.epetbar.com/static_web/wap/src/images/suprice.png"></div>
      <div class="fl ft13 ml10" style="margin-top: 1px;">距本场结束</div>
      <div class="fl surprise-time hide"></div>
      <div class="time ftc fl ml5">
        <div class="time1 dib clearfix ft12 dtime">
          <span class="time1-1">02</span>
          <span class="time-zi ft12">:</span>
          <span class="time1-1">31</span>
          <span class="time-zi ft12">:</span>
          <span class="time1-1">05</span></div>
      </div>
      <div class="more">
        <a href="https://wap.epet.com/surprise/Main.html?pet_type=cat&amp;fw=0" class="db ftr">
          <img src="https://img2.epetbar.com/nowater/2016-10/26/20/c6b7ac04e8c6cb827365c17bd74aef59.png">
        </a>
      </div>
    </div>
    <div class="surprise-pro pl5 mb10">
      <div class="swiper-container surprise-scroll swiper-container-horizontal" ref="wrapper">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div class="swiper-slide swiper-slide-active" style="width: 98.5714px; margin-right: 10px;">
            <div class="pro-block">
              <a href="https://wap.epet.com/surprise/Main.html?pet_type=cat&amp;fw=0">
                <div class="thispro-img loadimg-nofixed">
                  <img class="image" src="https://img1.epetbar.com/2017-02/07/10/81189f4d95be18ba88eabb1e4eb7ba87.jpg@!300w-b" lazy="loaded"> <!----> <!----></div>
                <div class="cred ftc mt5">
                  <span class="ft12">¥</span>
                  <span class="ft17">2.00</span>
                </div>
                <p class="c999 ftc ft12 sheng">省￥18.00</p>
              </a>
            </div>
          </div>

          <div class="swiper-slide swiper-slide-next" style="width: 98.5714px; margin-right: 10px;">
            <div class="pro-block">
              <a href="https://wap.epet.com/surprise/Main.html?pet_type=cat&amp;fw=0">
                <div class="thispro-img loadimg-nofixed">
                  <img class="image" src="https://img1.epetbar.com/2017-09/28/11/e0e2994933b8fdded9ba1a3410ea4f8b.jpg@!300w-b" lazy="loaded">
                </div>
                <div class="cred ftc mt5">
                  <span class="ft12">¥</span>
                  <span class="ft17">5.80</span>
                </div>
                <p class="c999 ftc ft12 sheng">省￥52.20</p>
              </a>
            </div>
          </div>

          <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
            <div class="pro-block">
              <a href="https://wap.epet.com/surprise/Main.html?pet_type=cat&amp;fw=0">
                <div class="thispro-img loadimg-nofixed">
                  <img class="image" src="https://img1.epetbar.com/2017-11/28/09/6673268b95b4d62b17c56e4484816ecb.jpg@!300w-b" lazy="loaded">
                </div>
                <div class="cred ftc mt5">
                  <span class="ft12">¥</span>
                  <span class="ft17">8.90</span>
                </div>
                <p class="c999 ftc ft12 sheng">省￥80.10</p>
              </a>
            </div>
          </div>

          <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
            <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?pet_type=cat&amp;fw=0">
              <div class="thispro-img loadimg-nofixed">
                <img class="image" src="https://img1.epetbar.com/2017-08/16/14/157ee5cfcfb8a7cc5cb802a1ca454416.jpg@!300w-b" lazy="loaded">
              </div>
              <div class="cred ftc mt5">
                <span class="ft12">¥</span>
                <span class="ft17">4.90</span>
              </div>
              <p class="c999 ftc ft12 sheng">省￥44.10</p></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    mounted () {
      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll= new BScroll(this.$refs.wrapper,{
            click:true,
            scrollX: true
          })
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise
    .rela
      position: relative
      .fl
        float left
        img
          height: 24px;
          margin-left: -20px;
      .more
        position: absolute;
        top: 2px;
        right: -8px;
        a
          img
            border 0
            margin 0 0 0 auto
            display block
            width 50%
  .surprise-pro
    .swiper-container
      width: 100%;
      height: 100%;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      .swiper-wrapper
        position: relative;
        z-index 1
        display flex
        width 450px
        .swiper-slide
          position relative
          flex-shrink: 0;
          height 100%
          .pro-block
            margin: 0 .5em;
            a
              display: block
              .loadimg-nofixed
                background-size: 120px auto;
                position: relative;
                padding-top: 100%;
                img
                  top: 0;
                  left: 0;
                  width: 100%;
                  position: absolute;



</style>
