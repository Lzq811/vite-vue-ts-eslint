import axios from 'axios'

import { ElMessage } from 'element-plus'

interface IParams {}

const ajax = (url: string, data: IParams = {}, type: string = 'POST') => {
  return new Promise((resolve: any) => {
    let promise
    if (type === 'GET') {
      promise = axios.get(url, { params: data })
    } else if (type === 'POST') {
      promise = axios.post(url, data)
    }
    promise
      ?.then((response: any) => {
        resolve(response.data)
      })
      .catch((error: any) => {
        ElMessage.error('数据获取失败!')
        console.log(error)
      })
  })
}

export default ajax
