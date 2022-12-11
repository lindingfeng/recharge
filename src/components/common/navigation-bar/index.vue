<template>
  <div class="navigation-bar-component">
    <div class="navigation-bar-body">
      <div class="navigation-bar-left" @click="router.go(-1)">
        <img class="icon-back" src="@/assets/imgs/common/icon_back.png" />
        <div class="navigation-bar-title">{{ routeInfo.meta.title }}</div>
      </div>
      <div class="navigation-bar-right">
        <slot name="right-content">
          <span v-if="routeInfo.meta.rightTitle" class="right-title" @click="rightHandler">{{ routeInfo.meta.rightTitle }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'

defineOptions({
  name: 'NavigationBar'
})

defineProps({
  rightTitle: String
})

defineEmits([
  'right-click'
])

const router = useRouter()

const route = useRoute()

const routeInfo = computed(() => route)

function rightHandler () {
  if (routeInfo.value.meta.jumpRouterPath) {
    router.push(routeInfo.value.meta.jumpRouterPath)
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>