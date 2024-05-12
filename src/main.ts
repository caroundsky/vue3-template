/**
 * Element-plus 通过`unplugin-element-plus/vite`和`unplugin-vue-components/vite`
 * 实现自动按需引入，因此无需在入口文件手动引入
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/style/index.less'
// 自定义nprogress样式
import '@/utils/nprogress'
import router from './router'
import dialogService from '@caroundsky/el-plus-dialog-service'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.config.globalProperties.$dialogService = dialogService

app.mount('#app')
