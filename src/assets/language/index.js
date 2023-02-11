import Vue from 'vue'
// 使用插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = {
  locale: localStorage.getItem('lang') || 'zh', // 语言标识,第一次登录默认是中文
  messages: {
    zh: require('./language/local-zh'), // 中文
    en: require('./language/local-en') // 英语
  },
  silentTranslationWarn: true
}
export default i18n
