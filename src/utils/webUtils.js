export const fromWeiToBNB = (hexValue) => {
  const isHexType = window.Web3.utils.isHex(hexValue)
  if (!isHexType) return '0'
  // 超过4位小数是，四舍五入保留4位小数
  const convertValue = window.Web3.utils.fromWei(window.Web3.utils.hexToNumberString(hexValue))
  if (/^\d+\.\d{5,}$/.test(convertValue)) {
    return Number(convertValue).toFixed(4)
  }
  return convertValue
};

export const fromHexToWei = (hexValue) => {
  const isHexType = window.Web3.utils.isHex(hexValue)
  if (!isHexType) return '0'
  // 使用hexToNumber会有报错的可能性
  return window.Web3.utils.hexToNumberString(hexValue)
};

export const numberToHex = (value) => {
  const isHexType = window.Web3.utils.isHex(value)
  if (isHexType) return value
  return window.Web3.utils.toHex(window.Web3.utils.toWei(String(value), 'ether'))
};

export const fromWei = (value, unit = 'ether') => {
  if (!value) return '0'
  return window.Web3.utils.fromWei(String(value), unit)
};

export const toWei = (value, unit = 'ether') => {
  if (!value) return '0'
  return window.Web3.utils.toWei(String(value), unit)
};
