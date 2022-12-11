import { defineStore } from 'pinia'
import countryList from '@/config/country'

export const useCommonStore = defineStore('common', {
  state: () => ({
    countryList,
    rechargeList: [],
    selectCountry: countryList[0] || {},
    status: {
      countryLoading: false,
      rechargeLoading: false,
    }
  }),
  actions: {}
})
