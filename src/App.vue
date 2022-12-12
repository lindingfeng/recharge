<template>
  <div id="app">
    <NavigationBar
      v-if="!isShowTabBar"
    />
    <router-view
      ref="routerRef"
      :key="baseStore.timestamp"
      :data-timestamp="baseStore.timestamp"
      class="app-page no-pxtorem_width"
    />
    <TabBar
      v-if="isShowTabBar"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useBaseStore } from '@/store'
import { useRoute } from 'vue-router/composables'
import TabBar from '@/components/common/tab-bar/index.vue'
import NavigationBar from '@/components/common/navigation-bar/index.vue'

const route = useRoute()

const baseStore = useBaseStore()

const isShowTabBar = computed(() => {
  return ['Home', 'Contact', 'User'].includes(route.name)
})

</script>

<style lang="less">
@import './common/style/index.less';
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(360deg, #F8FBFF 0%, #F8FBFF 120px, #C6E6FF 100%) no-repeat;
  .app-page {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
