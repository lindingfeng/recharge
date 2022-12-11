const ua = window.navigator.userAgent

export const isWechat = /MicroMessenger/i.test(ua)

export const isIOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua)

export const isAndroid = /(android)|(Android)|(Adr)/i.test(ua)