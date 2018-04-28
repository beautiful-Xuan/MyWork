import request from './request'

export function login(params) {
    let url = '/api/design_institute/public/admin/Company/company_list'
    let param = params || {}
    return request.get(url, param)
}
export function sysIdex(params) {
    // let url = '/api/design_institute/public/admin/Company/company_list'
    let param = params || {}
    return request.get(url, param)
}
export function limitLists(params) {
    // let url = '/api/design_institute/public/admin/Company/company_list'
    let param = params || {}
    return request.get(url, param)
}
export function roleList(params) {
    // let url = '/api/design_institute/public/admin/Company/company_list'
    let param = params || {}
    return request.get(url, param)
}