import xzRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  return xzRequest.post({
    url: url,
    data: queryInfo
  })
}
