import { instance } from "../../api"

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