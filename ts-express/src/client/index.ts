import { axiosInstance } from './api'
import { Health } from '../types/api'

const elem = document.getElementById('ping')
if (elem) {
  elem.addEventListener('click', () => {
    // Genericeでレスポンス型を注入する
    axiosInstance.get<Health>('/api/health').then(({ data }) => {
      console.log(data.message)
    })
  })
}