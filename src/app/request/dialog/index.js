import { instance } from "../../api"

export const dialogAPI = {
    getDialogs(){
        return instance.get('dialogs').then((r)=>r.data)
    },
    getDialogWithUser(userId, data){
        return instance.post(`dialogs/${userId}/messages`, data).then((r)=>r.data)
    },
} 