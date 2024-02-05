import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'db07c6a7-891d-4014-9ee2-3c493ee207a3'
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
    }
}
export const profileAPI = {
    getProfileById(userId: string) {
        return instance.get(`/profile/${userId}`)
            .then(res => res.data)
    }
}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}

