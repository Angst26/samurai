import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8f870be1-6617-437e-b439-4be6615cc3cb'
    },
    withCredentials: true,
})



export const usersAPI = {
    getUsers(page = 1, pageSize = 10) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then((response) => {
                return response.data;
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
        console.warn('Obsolete method.Please use profileAPI obj instead.')
        return profileAPI.getProfile(id)
    }
}

export const authAPI = {

    me() {
        return instance.get('auth/me')
            .then((response) => {
                return response;
            })
    },
    getMyId(){
        return instance.get('auth/me')
            .then((response) => {
                console.log(response.data)
                return response.data.data.id;
            })
    },

    login(email, password){
        return instance.post(`auth/login`, {password, email})
        .then((response) => {
            return response.data;
        })
    }

}

export const profileAPI = {
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status})
    },

    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data;
            })
    }
}


