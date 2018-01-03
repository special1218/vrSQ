import request from '../utils/request'

//获取广告地址
export function imgList(query){
    return request({
        url: '/bbsads/list',
        methods: 'get',
        params: query
    })
}