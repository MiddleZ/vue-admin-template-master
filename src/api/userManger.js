import request from '@/utils/request'

export default{
    searchUser(userid){
        return request({
            url:'/Umanager/search',
            method:'get',
            params:{
                userid:userid
            }
        });
    },
}