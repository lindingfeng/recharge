<template>
  <div class="contact-page">
    <div class="contact-body">
      <div class="contact-header">
        <img class="icon-logo" src="@/assets/imgs/common/icon_contact_logo.png" />
        <span class="contact-name">全酋付客服</span>
      </div>
      <div class="contact-qrcode">
        <QrcodeVue
          class="custom-qrcode"
          value="https://www.baidu.com"
          :size="180"
        />
      </div>
      <div class="contact-footer">扫一扫上面的二维码图案，加我微信</div>
    </div>
  </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'

</script>

<style lang="less" scoped>
@import './index.less';
</style>

