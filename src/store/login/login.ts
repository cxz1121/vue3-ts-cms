import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  getUserById,
  getUserMenus
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
import router from '@/router/index'
import { mapMenuToRoutes } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    saveToken(state, token: string) {
      state.token = token
    },
    saveInfo(state, info: any) {
      state.userInfo = info
    },
    saveUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenuToRoutes(userMenus)
      //将所有匹配的路由添加到router里面 routes => children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      //1.实现账号密码登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('saveToken', token)
      localCache.setCache('token', token)

      //2.请求用户信息
      const userInfo = await getUserById(id)
      commit('saveInfo', userInfo)
      localCache.setCache('userInfo', userInfo.data)

      //3.用户菜单树
      const userMenus = await getUserMenus(userInfo.data.role.id)
      console.log(userMenus)
      commit('saveUserMenus', userMenus.data)
      localCache.setCache('userMenus', userMenus.data)

      //4.跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('saveToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('saveInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('saveUserMenus', userMenus)
      }
    },

    phoneLoginAction({ commit }, payload: IAccount) {
      console.log('phoneLoginAction', payload)
    }
  }
}

export default loginModule
