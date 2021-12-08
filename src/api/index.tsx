import ajax from './ajax'

/* import.meta.env.VITE_HOST vite获取环境变量 */
// 后台地址
const BASE: any = import.meta.env.VITE_HOST || `https://默认地址.com`

interface IParrms {
  username: string
  password: string
}
// ajax接三个参数，url必填, params默认空对象可以不写, get或者post默认post可以不写,
// 登陆login
export const ReqLogin = (params: IParrms) => ajax(`${BASE}/login`, params)

// 测试获取狗狗照片 到App.vue中执行获取动作
export const ReqGetDogs = () => ajax(`${BASE}`, {}, 'GET')
