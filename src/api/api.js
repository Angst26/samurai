import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8f870be1-6617-437e-b439-4be6615cc3cb'
    },
    withCredentials: true,
})


export const getUsers = (page = 1, pageSize = 10) => {
    return instance.get(`users?page=${page}&count=${pageSize}`)
        .then((response) => {
            return response.data;
        })
}

export const followUser = (id,) => {
    return instance.post(`follow/${id}`)
        .then((response) => {
            return response.data.resultCode;
        })
}

export const unFollowUser = (id,) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data.resultCode;
        })
}