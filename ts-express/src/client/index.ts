import { axiosInstance } from './api'

const elem = document.getElementById('ping')
if (elem) {
  elem.addEventListener('click', () => {
    axiosInstance.get('/api/health').then(({ data }) => {
      console.log(data.message)
    })
  })
}