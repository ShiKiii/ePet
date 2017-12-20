import {ACCEPT_DOG,ACCEPT_DOGTYPE,ACCEPT_DOGTYPEDET,ACCEPT_CATEGORY} from './types'

export default {
  [ACCEPT_DOG](state,{data}){
    //更新数据
    state.dogInfo = data
  },

  [ACCEPT_DOGTYPE](state,{data}){
    //更新数据
    state.dogType = data
  },

  [ACCEPT_DOGTYPEDET](state,{data}){
    //更新数据
    state.dogTypeDet = data
  },

  [ACCEPT_CATEGORY](state,{data}){
    //更新数据
    state.category = data
  },

}
