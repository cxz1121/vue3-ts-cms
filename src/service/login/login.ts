import xzRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

export function accountLoginRequest(account: IAccount) {
  return xzRequest.post<IDataType<ILoginResult>>({
    url: '/login',
    data: account
  })
}

export function getUserById(id: number) {
  return xzRequest.get({
    url: '/users/' + id
  })
}

export function getUserMenus(id: number) {
  return xzRequest.get({
    url: '/role/' + id + '/menu'
  })
}
