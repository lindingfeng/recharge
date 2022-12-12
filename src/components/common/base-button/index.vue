<template>
  <div class="base-button-component">
    <Button
      block
      color="linear-gradient(90deg, #21B0FF 0%, #218CFF 100%)"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </Button>
  </div>
</template>

<script setup>
import { Button } from 'vant'

</script>

<style lang="less" scoped>
@import './index.less';
</style>