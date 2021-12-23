import type { RouteRecordRaw } from 'vue-router'

export function mapMenuToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //遍历所有路由
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  //根据userMenus菜单获取对应的路由
  const recurseGetRoutes = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        //查找到allRoutes中和userMenus所匹配的route
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        recurseGetRoutes(menu.children)
      }
    }
  }

  recurseGetRoutes(userMenus)

  console.log(routes)

  return routes
}
