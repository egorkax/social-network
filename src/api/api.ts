import axios from "axios";
import {UpdateUserProfileType, UserProfileType} from "../redux/profile-reduser";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c2552144-2a3f-4ed6-b1f2-2eb2edcd9913'
    }

})


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 8) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)

    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})

    },
    getUserProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI = {
    savePhoto(photoFile: any) {
        const formDara = new FormData()
        formDara.append("image", photoFile)
        return instance.put(`profile/photo`, formDara, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profile: UpdateUserProfileType) {
        return instance.put('profile', profile)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(data: LoginDataType) {
        return instance.post(`auth/login`, data)
    },
    logOut() {
        return instance.delete(`auth/login`)
    },
}

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}