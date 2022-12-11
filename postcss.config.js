module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "iOS >= 10",
        "Android >= 5"
      ]
    },
    'postcss-pxtorem': {
      rootValue: 75,
      // 需要转px转rem的css属性，*代表所有属性
      propList: ['*'],
      // 不需要需要转px转rem的css属性，可使用正则
      selectorBlackList: [
        /\.no-pxtorem_[0-9a-z_\-]+$/
      ]
    }
  }
}