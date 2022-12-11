<template>
  <div class="recharge-group-component">
    <div class="recharge-group">
      <div
        v-for="item in list"
        :key="item.type"
        class="recharge-item"
      >
        <div class="recharge-item-content">
          <div class="recharge-image">
            <img class="icon-recharge" :src="item.icon" />
          </div>
          <div class="recharge-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineOptions({
  name: 'RechargeGroup'
})

defineProps({
  list: Array
})

defineEmits(['change'])

</script>

<style lang="less" scoped>
@import './index.less';
</style>

