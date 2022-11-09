import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '465ddff0-680d-4b84-80cc-310f282f5928'
    }

})


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 8) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

    },
    getUserProfile(userId: number) {
        return instance.get(`/profile/${userId}`)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`/auth/me`)
    }
}

