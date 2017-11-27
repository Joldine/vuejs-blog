import axios from 'axios'

const API_ROOT = 'https://api.github.com'
const OWNER = 'Joldine'
const REPO = 'joldnine.github.io'
// prevent github token blocking
const ACCESS_TOKEN = '31ac025ebb27c898d056' + 'e7b7bc9f4ab52a8d3c50'

export function getArticleListApi ({ page = 1, size = 5 }) {
  const params = {
    filter: 'created',
    page: page,
    per_page: size,
    access_token: ACCESS_TOKEN
  }
  return axios.get(API_ROOT + '/repos/' + OWNER + '/' + REPO + '/issues', { params })
}

export function getArticleApi (number) {
  const params = {
    number: number,
    access_token: ACCESS_TOKEN
  }
  return axios.get(API_ROOT + '/repos/' + OWNER + '/' + REPO + '/issues', { params })
}
