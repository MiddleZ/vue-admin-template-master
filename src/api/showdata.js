import request from '@/utils/request'

export default{
    getShowData(seacherModel){
        return request({
            url:'/users/comments',
            method:'get',
            params:{
                pageNo:seacherModel.pageNo,
                pageSize:seacherModel.pageSize,
                UniversityID:seacherModel.UniversityID,
            }
        });
    },
}