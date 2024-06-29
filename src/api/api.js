import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8f870be1-6617-437e-b439-4be6615cc3cb'
    },
    withCredentials: true,
})

export const api = {
    getUsers(page = 1, pageSize = 10) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            })
    },

    getUserData() {
        return instance.get('auth/me')
            .then((response) => {
                return response;
            })
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
            .then((response) => {
                return response.data.resultCode;
            })
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data.resultCode;
            })
    },

    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                debugger
                return response.data;
            })
    }
}



