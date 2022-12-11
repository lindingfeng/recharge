import IconHomeNor from '@/assets/imgs/tabBar/icon_home_nor.png'
import IconHomeSel from '@/assets/imgs/tabBar/icon_home_sel.png'
import IconContactNor from '@/assets/imgs/tabBar/icon_contact_nor.png'
import IconContactSel from '@/assets/imgs/tabBar/icon_contact_sel.png'
import IconUserNor from '@/assets/imgs/tabBar/icon_user_nor.png'
import IconUserSel from '@/assets/imgs/tabBar/icon_user_sel.png'

import IconTelRecharge from '@/assets/imgs/common/icon_tel_recharge.png'
import IconFlowRecharge from '@/assets/imgs/common/icon_flow_recharge.png'
import IconNetworkRecharge from '@/assets/imgs/common/icon_network_recharge.png'
import IconFixRecharge from '@/assets/imgs/common/icon_fix_recharge.png'
import IconNolRecharge from '@/assets/imgs/common/icon_nol_recharge.png'
import IconCardRecharge from '@/assets/imgs/common/icon_card_recharge.png'
import IconSalikRecharge from '@/assets/imgs/common/icon_salik_recharge.png'
import IconTrafficRecharge from '@/assets/imgs/common/icon_traffic_recharge.png'

import IconRechargeOrder from '@/assets/imgs/common/icon_recharge_order.png'
import IconPromoteRecord from '@/assets/imgs/common/icon_promote_record.png'

// export const apiHost = 'http://topuphub.top'
export const apiHost = '/'
export const appId = 'topuphubYIW5MTXU5tglVWjK'
export const appSecret = 'LaPGqlPtzeqPrWkt'

export const tabBarList = [
  { routerName: 'Home', name: '首页', icon: IconHomeNor, selIcon: IconHomeSel },
  { routerName: 'Contact', name: '客服', icon: IconContactNor, selIcon: IconContactSel },
  { routerName: 'User', name: '我的', icon: IconUserNor, selIcon: IconUserSel }
]

export const rechargeList = [
  { type: '1', name: '手机话费', icon: IconTelRecharge },
  { type: '2', name: '手机流量', icon: IconFlowRecharge },
  { type: '3', name: '网络缴费', icon: IconNetworkRecharge },
  { type: '4', name: '固话缴费', icon: IconFixRecharge },
  { type: '5', name: 'NOL卡', icon: IconNolRecharge },
  { type: '6', name: '买充值卡', icon: IconCardRecharge },
  { type: '7', name: 'Salik PIN', icon: IconSalikRecharge },
  { type: '8', name: '交通罚款', icon: IconTrafficRecharge }
]

export const userMenuList = [
  { name: '充值订单', icon: IconRechargeOrder, path: '/recharge/list' },
  { name: '我的推广', icon: IconPromoteRecord, path: '/promote' }
]