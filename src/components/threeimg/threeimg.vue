<template>
  <div class="threeimg">
    <div class="left" style="width: 50.13%;" v-if="dogInfo.datas">
      <a :href="dogInfo.datas[8].content_images[0][0].target.param">
        <img :src="dogInfo.datas[8].content_images[0][0].image" style="height: 265.957px;width:98.5%">
      </a>
    </div>
    <div class="twoimg" style="width: 49.87%">
      <a href="https://sale.epet.com/m/mould/fashion/main.html?pet_type=cat&fw=0">
        <img src="./2.jpg"  style="height: 132.353px">
      </a>
      <a href="https://wap.epet.com/petschool/SchoolDetail.html?aid=198&fw=0">
        <img src="./3.jpg"  style="height: 132.353px">
      </a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['dogInfo'])
    },

    mounted () {
      this.$store.dispatch('getDogInfo')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .threeimg
    overflow hidden
    .left
      float left
    .twoimg
      float: left

</style>
