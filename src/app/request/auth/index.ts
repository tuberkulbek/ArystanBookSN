import { instance } from "../../api"

export type ResponeAuthType<T> = {
    resultCode: number,
    messages: [],
    data: T
}
export type LoginDataTypes = {
    id: number | null,
    login: string,
    email: string,
}

export const AUTHmeAPI = {
    getIsAUTH(){
        return instance.get('auth/me').then((r: ResponeAuthType<LoginDataTypes>)=>r.data)
    },
    logIn(data: LoginDataTypes) {
        return instance.post('auth/login', data).then(
            (r: ResponeAuthType<{userId: number}>) => r.data)
    },
    logOut() {
        return instance.delete('auth/login').then((r:ResponeAuthType<{}>)=>r.data)
    }
}