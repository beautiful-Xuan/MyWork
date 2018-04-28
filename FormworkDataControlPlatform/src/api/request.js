import vue from 'vue'
import axios from 'axios'

// 创建axios默认请求
const service = axios.create({
    // baseURL: "http://120.25.74.178",
    timeout: 5000, // request timeout,
})
export default {
    //get请求
    get (url,param) {
        console.log('aaaa')
        return new Promise((resolve,reject) => {
            service({
                method: 'get',
                url,
                params: param,
            }).then(res => {
                resolve(res)
            }).catch(error=>{
                reject(error)
            })
        })
    },
    //post请求
    post (url,param) {
        return new Promise((resolve,reject) => {
            service.post(
                url,
                param,
            ).then(res => {
                resolve(res)
            }).catch(error=>{
                reject(error)
            })
        })
    }
}
