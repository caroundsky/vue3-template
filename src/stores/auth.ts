import { defineStore } from 'pinia'

import { getCurrentUser } from '@/api/main'

export const authStore = defineStore('authInfo', {
  state: () => {
    return {
      currentUser: {},
    }
  },

  getters: {
    loggedIn: (state) => Object.keys(state.currentUser).length !== 0,
  },

  actions: {
    // 获取当前登录用户
    async getUserInfo() {
      const res = await getCurrentUser()
      this.currentUser = res
    },
  },
})
