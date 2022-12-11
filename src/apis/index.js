import { apiHost as baseURL, appId, appSecret } from '@/config'
import HttpService from '@/apis/creator'

const http = new HttpService({
  appId,
  appSecret,
  config: {
    baseURL
  }
})

export { http }

export default {
  // 登录
  login (body) {
    return http.service.get(`/common/test_sign`, body);
  },
  // 获取用户信息
  getUserInfo (body) {
    return http.service.post(`/api/user/getUserInfo`, body);
  }
}