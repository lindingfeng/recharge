<template>
  <div class="country-input-group-component">
    <div class="country-input-group">
      <div
        v-if="commonStore.selectCountry.country_name_zh"
        class="select-country-body"
        @click="searchCountry"
      >
        <img
          class="select-country-image"
          :src="`http://dbt971.top/static/images/national_flags/32x32/${commonStore.selectCountry.country_iso_code2.toLowerCase()}.png`"
        />
        <div class="select-country-name">{{ commonStore.selectCountry.country_name_zh }}</div>
        <img
          class="close-image"
          src="@/assets/imgs/common/icon_close.png"
          @click.stop="removeSelectCountry"
        />
      </div>
      <div class="input-body">
        <Field
          ref="fieldRef"
          v-model="inputs"
          :placeholder="commonStore.selectCountry.country_name_zh ? '' : '支持选择或搜索国家/地区'"
          @focus="data.countryVisible = true"
        />
      </div>
      <div class="down-image">
        <img class="icon-down" src="@/assets/imgs/common/icon_down.png" />
      </div>
    </div>
    <div v-if="data.countryVisible" class="country-list-body">
      <ul
        class="country-list"
        @click="selectCountry"
      >
        <li
          v-for="(item, index) in commonStore.countryList"
          :key="item.country_iso_code3"
          :data-index="index"
          :data-code="item.country_iso_code3"
          class="country-item"
        >
          <img
            :src="`http://dbt971.top/static/images/national_flags/32x32/${item.country_iso_code2.toLowerCase()}.png`"
            class="country-image"
          />
          <span class="country-name">{{ item.country_name_zh }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Field } from 'vant'
import { ref, reactive } from 'vue'
import { useCommonStore } from '@/store/common'
import { getNodeByBubbleOfEvent } from '@/composables/node'

const commonStore = useCommonStore()

defineOptions({
  name: 'CountryInputGroup'
})

defineProps({
  list: Array
})

const fieldRef = ref(null)

const inputs = ref('')

const data = reactive({
  countryVisible: false
})

function removeSelectCountry () {
  commonStore.selectCountry = {}
  searchCountry(true)
}

function searchCountry (auto = false) {
  if (data.countryVisible || !auto) {
    data.countryVisible = false
    fieldRef.value && fieldRef.value.blur()
  } else {
    fieldRef.value && fieldRef.value.focus()
  }
}

function selectCountry (e) {
  const finalEle = getNodeByBubbleOfEvent(e.target, 'li')
  commonStore.selectCountry = commonStore.countryList[finalEle.dataset.index]
  data.countryVisible = false
}

</script>

<style lang="less" scoped>
@import './index.less';
</style>

