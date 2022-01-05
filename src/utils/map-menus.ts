import { IBreadcurmb } from '@/base-ui/breadcrumb'
import type { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

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
        if (!firstMenu) {
          firstMenu = menu
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

export function pathMapToBreadcrumb(
  userMenus: any[],
  currentPath: string
): any {
  const breadcrumb: IBreadcurmb[] = []
  pathMapToMenus(userMenus, currentPath, breadcrumb)
  return breadcrumb
}

export function pathMapToMenus(
  userMenus: any[],
  currentPath: string,
  breadcrumb?: IBreadcurmb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenus(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumb?.push({ name: menu.name })
        breadcrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }
