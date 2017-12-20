<template>
  <div class="brandList">
    <div>
      <div v-for="(list,index) in category.brand" :key="index">
        <div class="littleTitle">
          <span>—— {{list.title}} ——</span>
        </div>
        <div class="list">
          <ul>
            <li v-for="(item,index) in list.list" :key="index">
              <a href="">
                <div class="img">
                  <img :src="item.logo">
                </div>
                <p class="name">{{item.name}}</p>
                <p class="address">{{item.address}}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="allButton">
          <a href="javascript:;" @click="allButton">全部</a>
        </div>
        <div class="allBrand" v-show="isShow">
          <div class="all-header">
            <span class="back" @click="hideAll"></span>
            <span class="text">全部品牌</span>
            <span class="more" @click="hidenNav"></span>
          </div>

          <transition name="fade">
            <div class="nav" v-show="navShow">
              <div>
                <router-link to="/main">
                  <span class="mainIcon"></span>
                  <p>首页</p>
                </router-link>
                <router-link to="/classify">
                  <span class="classifyIcon"></span>
                  <p>商品分类</p>
                </router-link>
                <a href="">
                  <span class="buyIcon"></span>
                  <p>购物车</p>
                </a>
                <router-link to="/regist">
                  <span class="registIcon"></span>
                  <p>我的e宠</p>
                </router-link>
              </div>
            </div>
          </transition>

          <div class="allBrands">
            <mt-index-list>
              <mt-index-section v-for="(brand,index) in brands" :key="index" index="A">
                <mt-cell title="Aaron"></mt-cell>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell>
              </mt-index-section>
            </mt-index-list>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  export default {

    data(){
      return{
        isShow: false,
        navShow: false,
      }
    },

    computed:{
      ...mapState(['category'])
    },
    mounted (){
      this.$store.dispatch('reqCategory')
    },

    methods: {
      allButton (){
        this.isShow = !this.isShow
      },
      hideAll(){
        this.isShow = !this.isShow
      },
      hidenNav(){
        this.navShow = !this.navShow
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brandList
    background  #f3f4f5
    padding  45px 0 0
    div
      padding-bottom  15px
      margin-bottom  10px
      background  #fff
      .littleTitle
        padding  20px 0 0 0
        margin 0
        font-size  12px
        color  #999
        text-align center
      .list
        padding  0 5px
        ul
          li
            position relative
            margin-top  20px
            width  33.33%
            padding  0 5px
            float  left
            a
              color  #333
              p
                height  20px
                overflow  hidden
                text-overflow  ellipsis
                white-space  nowrap
                text-align  center
              .img
                border  1px solid #e2e2e2
                text-align  center
                padding  50px 10px 10px
                img
                  max-width  90%
                  margin  10px auto 0
                  height  40px
                  right  0
                  top  0
                  left  0
                  padding 0
                  position  absolute
              .name
                font-size  13px
                margin  5px 0 0 0
              .address
                margin 0
                color  #999
                font-size  12px

      .allButton
        a
          position fixed
          right 6px
          bottom 65px
          z-index 10
          background rgba(0,0,0,.06)
          line-height 40px
          width 40px
          height 40px
          border-radius 50%
          font-size 12px
          color #fff
          text-align center


      .allBrand
        position  absolute
        left 0
        right 0
        bottom 0
        top 0
        overflow hidden
        background #fff
        height 100%
        width 100%
        z-index 99
        .all-header
          height  50px
          line-height  50px
          position  relative
          padding  0 10px
          border-bottom  1px solid #f3f3f3
          text-align center
          margin 0
          .back
            background: url(./img/img.png) no-repeat;
            background-size: 234px 159px;
            height: 18px;
            width: 11px;
            background-position: -201px -10px;
            position: absolute;
            margin-top: 15px;
            left: 10px;
          .text
            width 90%
            margin: 0 auto;
            font-size: 18px;
          .more
            background url(./img/img.png) no-repeat
            background-size 234px 163px
            height 18px
            width 17px
            background-position -217px -10px
            position absolute
            margin-top 14px
            margin-left 10px
            text-align center
            right 10px


        .nav
          width: 100%;
          background: #fff;
          overflow: hidden;
          margin 0
          padding 0
          font-size 14px
          height 68px
          div
            padding 10px 0
            margin 0
            overflow hidden
            border-bottom: 1px solid #d7d7d7;

          &.fade-enter-active,&.fade-leave-active
            transition:height .3s linear;

          &.fade-enter, &.fade-leave-active
            height: 0;

          a
            display: inline-block;
            width: 25%;
            text-align: center;
            float: left;
            color #333
            p
              margin 0
            span
              height: 25px;
              width: 25px;
              margin: 0 auto;
              display block
            .mainIcon
              background: url(./img/img.png) no-repeat;
              background-position: -172px -7px;
              background-size: 234px 163px;
            .classifyIcon
              background: url(./img/img.png) no-repeat;
              background-position: -172px -49px;
              background-size: 234px 163px;
            .buyIcon
              background: url(./img/img.png) no-repeat;
              background-position: -172px -90px;
              background-size: 234px 163px;
            .registIcon
              background: url(./img/img.png) no-repeat;
              background-position: -172px -133px;
              background-size: 234px 163px;










</style>
