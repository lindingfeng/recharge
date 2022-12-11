import axios from 'axios'
import { useUserStore } from '@/store/user'
import { getUserInfo } from '@/helper/loginManage'
// import { createFormData, createApiSign, randomWord } from '@/utils'
import { createApiSign, randomWord } from '@/utils'

/**
 * @function http基类
 * @param {Object} config Axios配置项
 * @param {Object} hooks 各节点hooks
 * @param {String} appSecret 接口验签key
 * @param {Function} userRequeset 自定义请求
 * @param {Function} userResponse 自定义响应
 */
export default class BaseService {
  constructor ({
    config = {},
    hooks = {},
    appId = '',
    appSecret = '',
    userRequeset,
    userResponse
  }) {
    this.userRequeset = userRequeset
    this.userResponse = userResponse
    this.config = config
    this.hooks = hooks
    this.appId = appId
    this.appSecret = appSecret
    this.service = null
    this.initBase()
  }
  /**
   * 创建http实例
   */
  initBase () {
    this.service = axios.create({
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      timeout: 60000,
      ...this.config
    })
    // Request拦截器
    this.service.interceptors.request.use(
      this.userRequeset || this.defaultRequest.bind(this),
      this.defaultRequestError.bind(this)
    )
    // Response拦截器
    this.service.interceptors.response.use(
      this.userResponse || this.defaultResponse.bind(this),
      this.defaultResponseError.bind(this)
    )
  }
  /**
   * 配置hooks
   */
  setHooks (hooks = {}) {
    Object.assign(this.hooks, hooks)
  }
  /**
   * 签名数据
   */
  _getSignData () {
    return {
      appId: this.appId,
      timeStamp: parseInt(new Date() / 1000, 10),
      nonceStr: randomWord(false, 6)
    }
  }
  /**
   * 默认Request处理
   */
  defaultRequest (config) {
    const userStore = useUserStore()

    const signData = this._getSignData()
    
    // config.data = config.data || {}
    // config.data.token = userStore.userInfo?.token || getUserInfo('token')
    // config.data.sign = createApiSign(this.appSecret, Object.assign({}, signData))
    // config.data = createFormData(config.data)
    // Object.assign(config.data, signData)

    config.params = config.params || {}
    config.params.token = userStore.userInfo?.token || getUserInfo('token') || '123456789'
    config.params.sign = createApiSign(this.appSecret, Object.assign({}, signData))
    Object.assign(config.params, signData)

    this.hooks.onBeforeRequest && this.hooks.onBeforeRequest(config)
    
    return config
  }
  /**
   * 默认Request Error处理
   */
  defaultRequestError (error) {
    this.hooks.onRequestError && this.hooks.onRequestError(error)
  }
  /**
   * 默认Response处理
   */
  defaultResponse (response) {
    console.log('response', response)
    // if (response.data._code === '200002' && response.data._msg === '登录失效，请重新登录') {
    //   const userStore = useUserStore()
    //   const globalStore = useGlobalStore()
    //   userStore.logout()
    //   userStore.isNeedLogin = true
    //   if (this.hooks.onAfterLoginFailure) {
    //     this.hooks.onAfterLoginFailure(globalStore, userStore)
    //   }
    // }
    return [response.data, null]
  }
  /**
   * 默认Response Error处理
   */
  defaultResponseError (error) {
    this.hooks.onResponseError && this.hooks.onResponseError(error)
    return Promise.resolve([{}, error])
  }
}