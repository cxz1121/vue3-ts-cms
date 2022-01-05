import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '../types'
import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  getters: {},
  mutations: {
    saveUserList(state, list: any[]) {
      state.userList = list
    },
    saveUserCount(state, count: number) {
      state.userCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      const { list, totalCount } = pageResult.data
      commit('saveUserList', list)
      commit('saveUserCount', totalCount)
    }
  }
}

export default systemModule
