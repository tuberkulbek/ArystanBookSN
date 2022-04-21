import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":"216a9e41-b89c-4efe-8cc2-c828cb6a1b4b"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

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

export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/`+ userId).then(r=>r.data)
    },
    getUserStatus(userId){
        return instance.get(`profile/status/${userId}`).then(r=>r.data)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status}).then(r=>r.data)
    }
}

export const AUTHmeAPI = {
    getIsAUTH(){
        return instance.get('auth/me').then(r=>r.data)
    }
}