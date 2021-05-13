import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: 0,
    pictures: [
      'https://picsum.photos/1024/480/?image=13',
      'https://picsum.photos/1024/480/?image=14',
      'https://picsum.photos/1024/480/?image=15',
      'https://picsum.photos/1024/480/?image=16',
      'https://picsum.photos/1024/480/?image=17',
      'https://picsum.photos/1024/480/?image=18',
      'https://picsum.photos/1024/480/?image=19',
      
    ]
  },
  mutations: {
    changeIndex(state){
      if(this.state.index < this.state.pictures.length-1){
        state.index++
      }else{
        state.index = 0
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
