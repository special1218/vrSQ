import request from '../utils/request'
//获取社区所有板块分类
export function bbscategories(query){
    return request({
        url: '/bbscategories/list',
        methods: 'get',
        params: query
    })
}