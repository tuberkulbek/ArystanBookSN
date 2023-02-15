import { instance } from "../../api"

export const usersAPI = {
    getIsAUTH(){
        return instance.get('auth/me').then(r=>r.data)
    },
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(r=>r.data)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`).then(r=>r.data)
    },
    follow(id){
        return instance.post(`follow/${id}`, {}).then(r=>r.data)
    },
    addPhoto(userId){
        return instance.put(`profile/${userId}`, {}).then(r=>r.data)
    }
}