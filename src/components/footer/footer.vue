<template>
  <div class="footernav bottom_menu_bar bgfff bottomBox">
    <ul class="clearfix footernav_ul bgfff">
      <li class="index-a dogon">
        <!--<a href="https://wap.epet.com/main.html?pet_type=cat" class="db"></a>-->
        <router-link to="/main" class="first"></router-link>
      </li>
      <li class="type-a">
        <!--<a href="https://wap.epet.com/category.html?pet_type=cat" class="db"></a>-->
        <router-link to="/classify/bigbox" class="two"></router-link>
      </li>
      <li class="cart-a">
        <a href="https://wap.epet.com/cart/main.html" class="three"></a>
      </li>
      <li class="myepet-a">
        <router-link to="/regist" class="four"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footernav
    height 45px
    background: 0 0;
    .footernav_ul
      height: 45px;
      line-height: 45px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 3;
      border-top: 1px solid #e7e7e7;
      li
        float: left
        width: 25%
        height: 55px
        a
          background url(./img.png) no-repeat
          background-size: 234px 163px;
          display block
          margin: 0 auto;
          height: 40px;
          width: 42px;
          margin-top: 2px;
          &.first
            background-position: -85px 0
          &.two
            background-position: -85px -41px;
          &.three
            background-position: -85px -81px;
          &.four
            background-position: -85px -122px;
          &.active.first
            background-position: -42px 0;
          &.active.two
            background-position: -42px -40px;
          &.active.three
            background-position: -42px -80px;
          &.active.four
            background-position: -42px -120px;





</style>
