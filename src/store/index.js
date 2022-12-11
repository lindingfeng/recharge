// import { Toast } from 'vant'
import { defineStore } from 'pinia'

export const useBaseStore = defineStore('main', {
  state: () => ({
    timestamp: +new Date()
  }),
  actions: {}
})
