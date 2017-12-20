<template>
  <div>
    <div class="rows">
      <div v-for="(menu,index) in menusTop" :key="index">
        <a :href="menu.target.param">
          <img :src="menu.image">
        </a>
      </div>
    </div>

    <div class="rows">
      <div v-for="(menu,index) in menusBottom" :key="index">
        <a :href="menu.target.param">
          <img :src="menu.image">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {

    data () {
      return {
        menusTop:[],
        menusBottom:[],
        menusIcon:[]
      }
    },

    mounted () {
      this.$store.dispatch('getDogInfo')

      setTimeout(()=>{
        this.menusIcon = this.dogInfo.datas.filter(data=>data.type === '3' &&data.index === '3047')
        this.menusTop = this.menusIcon[0].menus.filter((menu,index) => index<5 );
        this.menusBottom = this.menusIcon[0].menus.filter((menu,index) => index>=5 )
      },200)


    },

    computed : {
      ...mapState(['dogInfo'])
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rows
    display -webkit-box
    display flex
    div
      -webkit-box-flex:1;
      flex-grow:1 ;
      width 20%
      a
        font-size: 22px;
        color: #666;
        text-align: center;
        line-height: 50px;
        display: block;
        img
          width 100%




</style>
