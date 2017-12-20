<template>
  <div class="threeimg">
    <div class="left" style="width: 50.13%;" v-if="threeArr[0]">
      <a>
        <img :src="threeArr[0].content_images[0][0].image" style="height: 265.957px;width:98.5%">
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

    data(){
      return{
        threeArr:[],
      }
    },


    computed : {
      ...mapState(['dogInfo'])

    },



    mounted () {
      this.$store.dispatch('getDogInfo')

      setTimeout(()=>{
        if(this.dogInfo.datas){
          //获取用过index属性准确获取图片位置
          this.threeArr = this.dogInfo.datas.filter(img=>img.type==='13'&&img.index==='2938')
        }
      },200)


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .threeimg
    overflow hidden
    .left
      float left
      position: relative
      height 100%
    .twoimg
      float: left

</style>
