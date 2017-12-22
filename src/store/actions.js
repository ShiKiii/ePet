import {reqDogInfo} from '../api'
import {ACCEPT_DOG,ACCEPT_DOGTYPE,ACCEPT_DOGTYPEDET,ACCEPT_CATEGORY,ACCEPT_ALLBRAND} from './types'

import axios from 'axios'

export default {
  getDogInfo({commit},callback){
    reqDogInfo().then(response => {
      let data = response.data
      commit(ACCEPT_DOG,{data})
      callback&&callback();
      console.log('数据获取成功'+data.mall_uid)
    },response => {
      console.log('数据获取失败')
    })
  },
  reqDogType({commit}){
    let url='/api/v3/goods/category/main.html?'
    axios.get(`${url}pet_type=dog&system=wap&isWeb=1&version=303&_=1513561216893`)
      .then(response=>{
        let data=response.data
        commit(ACCEPT_DOGTYPE,{data})
      },response=>{
        console.log('error');
      })
  },

  reqDogTypeDet({commit},typeId){
    let url='/api/v3/goods/category/main.html?'
    axios.get(`${url}do=getChildren&owner=${typeId}&pet_type=dog&system=wap&isWeb=1&version=303`)
      .then(response=>{
        let data=response.data
        commit(ACCEPT_DOGTYPEDET,{data})
      },response=>{
        console.log('error');
      })
  },

  reqCategory({commit}){
    let url='/api/v3/brand/list/main.html?'
    axios.get(`${url}pet_type=dog&system=wap&isWeb=1&version=303&_=1513600812850`)
      .then(response=>{
        let data=response.data
        commit(ACCEPT_CATEGORY,{data})
      },response=>{
        console.log('error');
      })
  },

  reqAllBrand({commit}){
    let url = '/api/v3/brand/list/main.html?'
    axios.get(`${url}do=getall&system=wap&isWeb=1&version=303&_=1513821078868`)
      .then(response=>{
        let data = response.data
        commit(ACCEPT_ALLBRAND,{data})
      },response=>{
        console.log('error')
      })
  }
}
