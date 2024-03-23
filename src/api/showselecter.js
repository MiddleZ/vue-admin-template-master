import request from '@/utils/request'

export default{
    getSelecter(){
        console.log("getSelecter");
        return request({
            url:'/users/selecter/provinces',
            method:'get'
        });
    },
    getSelecterByProvince(provinceID){
        return request({
            url:`/users/selecter/provinces/${provinceID}/university`,
            method:'get',
        })
    }
}