<template>
  <div class="sale">
    <littleheader :imgsrc="imgsrc"></littleheader>

    <div>
      <ul>
        <li v-for="(src,index) in imgs" :key="index">
          <groupbuy :imgsrc="src"></groupbuy>
          <cline></cline>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import littleheader from '../littleheader/littleheader.vue'
  import groupbuy from '../groupbuy/groupbuy.vue'
  import cline from '../cline/cline.vue'

  export default {

    data(){
      return {
        imgs :[
          'https://img2.epetbar.com/nowater/2017-12/13/21/f9b03b752970c2c957877a4c6eabf206.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/21/ed5436e5ee13a4f8d83fff1314e24e42.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/21/7dee954fae7fdb254a57bf9aef7fa404.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/14/18/41a2c0e86fc36dba2a99b7e2ca7f977c.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/21/f517eb9ebcc886504f885041717b944e.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/21/78d0d84294183888aaaf864cb04ca0df.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/21/0a1231be7907b558c59cc2453d6135b1.jpg@!water',
        ],
        imgsrc : 'https://img2.epetbar.com/nowater/2017-12/13/16/70adf3f7cc4cbe58a7dc4865c4b4f932.jpg'
      }
    },

    components : {
      groupbuy,
      cline,
      littleheader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">


</style>
