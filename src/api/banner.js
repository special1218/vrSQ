import request from '../utils/request'

//获取轮播图数据
export function bbsslide(query){
    return request({
        url: '/bbsslide/list',
        methods: 'get',
        params: query
    })
}