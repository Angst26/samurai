import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4eedc4cf-096e-4615-948c-60f40f4ecf07'
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

    login(email, password, rememberMe){
        return instance.post(`auth/login`, {password, email, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`);
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
    },
}

export const dialogsAPI = {
    getAllDialogs(){
        return instance.get(`dialogs`)
    }
}


