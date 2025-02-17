import { defineStore } from 'pinia'
import type { IUser } from '@/components/sidebar/models/user'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      firstName: 'Бернаби',
      lastName: 'Мармадюк',
      role: 'Преподаватель',
    }
  }),

  getters: {
    getUserInfo(): IUser {
      return this.user
    }
  },

  actions: {
    setUserInfo() {
      /* запрос на сервер */
    },

    clearUserInfo(): void {
      this.user = {
        firstName: '',
        lastName: '',
        role: '',
      }
    }
  }
})
