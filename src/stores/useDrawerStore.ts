import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
  state: () => ({
    drawer: true
  }),

  getters: {
    getDrawer(): boolean {
      return this.drawer
    }
  },

  actions: {
    changeDrawerState(): void {
      this.drawer = !this.drawer
    }
  }
})
