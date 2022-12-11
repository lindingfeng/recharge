<template>
  <div class="user-page">
    <div class="user-info-content"></div>
    <div class="menu-cell-group">
      <div
        v-for="(item, index) in userMenuList"
        :key="index"
        class="menu-cell"
        @click="$router.push(item.path)"
      >
        <div class="menu-cell-image">
          <img class="icon-menu" :src="item.icon" />
        </div>
        <div class="menu-cell-name">{{ item.name }}</div>
        <img class="icon-right" src="@/assets/imgs/common/icon_right.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { userMenuList } from '@/config'

</script>

<style lang="less" scoped>
@import './index.less';
</style>

