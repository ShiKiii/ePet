<template>
  <div class="main">
    <div class="clearfix pt5 pl10 pr10 pb5">
      <div class="epet-search bgf">
        <div class="fl rela ft14 location">
          <a href="https://wap.epet.com/place.html?pet_type=cat&amp;fw=0">
            <span class="catordog c89">狗狗站</span>
            <span class="c89">|</span>
            <span data-name="my-place" class="myposition c89 ft13">武汉</span>
            <i></i>
          </a>
        </div>
        <p class="search-text">
          <a href="https://wap.epet.com/search.html?pet_type=cat&amp;fw=0">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="eico serach-ico"></span>
          </a>
        </p>
        <div class="epet-category">
          <router-link to="/regist">
            <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
          </router-link>
        </div>
      </div>
    </div>
    <div class="find_nav">
      <div class="find_nav_left dscroll" >
        <div class="find_nav_list dscroll-div" ref="wrapper" >
          <ul class="dscroll-ul" style="width: 140%;">
            <li data-type="1" data-shareid="1" class="dscroll-li on" style="width: 74.5px;"
                  v-for="(menu,index) in dogInfo.menus" :key="index">
              <a :href="menu.menu_target">
                <span class="rela">
                  <span>{{menu.menu_name}}</span>
                  <i></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {

    computed : {
      ...mapState(['dogInfo'])
    },

    mounted () {

      this.$store.dispatch('getDogInfo');

      //添加横向滚动
      this.$nextTick(()=>{
        this.scroll = new BScroll(this.$refs.wrapper,{
          scrollX : true,
          active : true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main
    max-width: 640px;
    margin: auto;
    position: fixed
    height 86px
    z-index 3
    background #fff
    .clearfix
      .epet-search
        padding: 8px 0;
        background: #fff;
        text-align: center;
        display: -webkit-box;
        -webkit-box-align: center;
        display: -moz-box;
        -moz-box-align: center;
        width: 100%;
        .serach-ico
          width: 11px;
          height: 11px;
          position: absolute;
          right: 5px;
          top: 0;
          bottom: 0;2
          margin: auto 0;
          background-position: 0 0;
        .eico
          background: url(./search.png) no-repeat;
          background-size: 11px auto;
        .location
          margin-right: 20px;
          position: relative;
          .c89
            color: #898989;
          i
            position: absolute;
            top: 10px;
            right: -11px;
            border-width: 4px;
            font-size: 0;
            line-height: 0;
            border-style: solid solid dotted;
            border-color: #898989 transparent transparent;

        .search-text
          position: relative;
          -webkit-box-flex: 1;
          margin 0
          input
            width: 100%;
            border: 0;
            height: 25px;
            background: #e9e9e9;
            border-radius: 4px;
            color: #bcbcbc;
            text-indent: 10px;
            font-size: 13px;
            outline: 0;

        .epet-category
          img
            width: 25px;
            margin-left: 10px;



    .find_nav
      width: 100%;
      height: 35px;
      min-width: 320px;
      .dscroll
        overflow hidden
        .dscroll-ul
          white-space: nowrap;
          display: inline-block;
          .dscroll-li
            width: 25%;
            float: left;
            a
              display: block;
              width: 100%;
              height: 100%;
              line-height: 36px;
              font-size: 14px;
              text-align: center;
              color: #666;
              span
                color: #e73f85;
                display: inline-block;
              .rela
                position: relative;


</style>
