<template>
  <div class="tab-bar-component">
    <div class="tab-bar-list">
      <div
        v-for="(item, index) in tabBarList"
        :key="index"
        class="tab-bar-item"
        :class="{
          active: item.routerName === route.name
        }"
        @click="toRouter(item)"
      >
        <div class="tab-bar-image">
          <img
            class="icon-bar"
            :src="item.routerName === route.name ? item.selIcon : item.icon"
          />
        </div>
        <div class="tab-bar-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router/composables'
import { tabBarList } from '@/config'

const route = useRoute()

const router = useRouter()

function toRouter ({ routerName }) {
  if (route.name === routerName) return
  router.replace({ name: routerName })
}

</script>

<style lang="less" scoped>
@import './index.less';
</style>