<template>
  <div class="recharge-page">
    <div class="recharge-header">
      <div class="recharge-money">
        <span class="money-tip">¥</span>
        <span class="money-text">22000</span>
      </div>
      <div class="recharge-tip">手机流量充值</div>
    </div>
    <div class="recharge-footer">
      <div class="recharge-way-title">支付方式</div>
      <div class="recharge-ways">
        <div
          v-for="(item, index) in rechargeWayList"
          :key="index"
          class="recharge-way-item"
          @click="changePayWay(item)"
        >
          <img class="icon-recharge" :src="item.icon" />
          <span class="recharge-name">{{ item.name }}</span>
          <img class="icon-select" :src="item.id === data.selectPay ? item.selIcon : item.norIcon" />
        </div>
      </div>
      <BaseButton
        @click="confirmRecharge"
      >
        确认充值
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import BaseButton from '@/components/common/base-button/index.vue'
import { rechargeWayList } from '@/config'

const data = reactive({
  selectPay: ''
})

function changePayWay ({ id }) {
  if (data.selectPay === id) return
  data.selectPay = id
}

function confirmRecharge () {
  window.location.href = 'http://topuphub.top/test/oauth?source_url=http%3A%2F%2F10.0.10.64%3A5173%2F'
}

</script>

<style lang="less" scoped>
.recharge-page {
  display: flex;
  flex-direction: column;
  .recharge-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 158px;
    .recharge-money {
      display: flex;
      align-items: baseline;
      font-size: 26px;
      .money-text {
        margin-left: 8px;
        font-size: 36px;
      }
    }
    .recharge-tip {
      margin-top: 8px;
      font-size: 14px;
      color: #666666;
      line-height: 20px;
    }
  }
  .recharge-footer {
    flex: 1;
    padding: 16px 24px;
    background: #FFFFFF;
    border-radius: 20px 20px 0 0;
    .recharge-way-title {
      position: relative;
      padding: 8px 13px;
      font-size: 16px;
      font-weight: bold;
      color: #222222;
      &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 50%;
        width: 5px;
        height: 16px;
        transform: translateY(-50%);
        background: linear-gradient(360deg, #218CFF 0%, #21B0FF 100%);
        border-radius: 1px;
      }
    }
    .recharge-ways {
      margin-bottom: 24px;
    }
    .recharge-way-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 72px;
      &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        transform: scaleY(.5);
        background-color: #ECECEC;
      }
      &:first-child::before {
        height: 0;
      }
      .icon-recharge {
        margin-right: 12px;
        width: 40px;
        height: 40px;
      }
      .recharge-name {
        flex: 1;
        font-size: 16px;
        font-weight: bold;
        color: #222222;
      }
      .icon-select {
        margin-left: 12px;
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>

