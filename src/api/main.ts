import templateRequest from './request'
import apiConfig from '@/api.config'

const apiPrefix = apiConfig.main

export function getCurrentUser() {
  return templateRequest({
    apiPrefix,
    url: '/getUser',
    method: 'get',
    transformResponse: res => {
      return res
    },
  })
}

export function getImages(data: {
  pageIndex: number
  pageSize: number
  tag?: number
  order?: string
}) {
  const _data = JSON.parse(JSON.stringify(data))
  Object.keys(_data).forEach(key => {
    if (['', -1].includes(_data[key])) {
      delete _data[key]
    }
  })
  return templateRequest({
    apiPrefix,
    url: '/api/get-images',
    method: 'post',
    data: _data,
    silent: true
  })
}

export function getTag() {
  return templateRequest({
    apiPrefix,
    url: '/api/get-tag',
    method: 'get',
    silent: true
  })
}
