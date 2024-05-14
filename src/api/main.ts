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
  pageIndex: number,
  pageSize: number
}) {
  return templateRequest({
    apiPrefix,
    url: '/api/get-images',
    method: 'post',
    data,
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
