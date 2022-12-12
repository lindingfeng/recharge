<template>
  <div class="home-page">
    <CountryInputGroup
      :list="data.countryList"
      :loading="commonStore.status.rechargeLoading"
    />
    <RechargeGroup
      class="home-recharge"
      :list="data.rechargeList"
      :loading="commonStore.status.rechargeLoading"
    />
    <BannerGroup
      class="home-banner"
      :list="data.bannerList"
    />
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useCommonStore } from '@/store/common'
import CountryInputGroup from '@/components/business/country-input-group/index.vue'
import RechargeGroup from '@/components/business/recharge-group/index.vue'
import BannerGroup from '@/components/business/banner-group/index.vue'
import { rechargeList } from '@/config'
import apis from '@/apis'

const commonStore = useCommonStore()

const data = reactive({
  countryList: [],
  rechargeList,
  bannerList: []
})

onMounted(async () => {
  const [res, err] = await apis.login()
  console.log(res, err)
})

</script>

<style lang="less" scoped>
@import './index.less';
</style>

