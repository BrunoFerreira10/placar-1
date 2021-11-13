import Vue from 'vue' 
export default new Vue({ 
   methods: {
     toogleMenuEvent(payload) {
        this.$emit('toogleMenuEvent', payload)
     },
     onToogleMenu(callback) {
       this.$on('toogleMenuEvent', callback)
     }
   }
})