import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":"216a9e41-b89c-4efe-8cc2-c828cb6a1b4b"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
