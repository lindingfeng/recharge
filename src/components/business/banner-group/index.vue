<template>
  <div class="banner-group-component">
    <div class="banner-group">
      <img class="icon-banner" src="@/assets/imgs/common/icon_banner.png" />
    </div>
  </div>
</template>

<script setup>

defineOptions({
  name: 'BannerGroup'
})

defineProps({
  list: Array
})

</script>

<style lang="less" scoped>
@import './index.less';
</style>

