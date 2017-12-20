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
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['category'])
    },
    mounted (){
      this.$store.dispatch('reqCategory')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brandList
    background: #f3f4f5;
    padding: 45px 0 0;
    div
      padding-bottom: 15px;
      margin-bottom: 10px;
      background: #fff;
      .littleTitle
        padding: 20px 0 0 0;
        margin 0
        font-size: 12px;
        color: #999;
        text-align center
      .list
        padding: 0 5px;
        ul
          li
            position relative
            margin-top: 20px;
            width: 33.33%;
            padding: 0 5px;
            float: left;
            a
              color: #333;
              p
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: center;
              .img
                border: 1px solid #e2e2e2;
                text-align: center;
                padding: 50px 10px 10px;
                img
                  max-width: 90%;
                  margin: 10px auto 0;
                  height: 40px;
                  right: 0;
                  top: 0;
                  left: 0;
                  padding 0
                  position: absolute;
              .name
                font-size: 13px;
                margin: 5px 0 0 0;
              .address
                margin 0
                color: #999;
                font-size: 12px;
</style>
