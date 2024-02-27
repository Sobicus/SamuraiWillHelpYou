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
        return instance.post<FollowUnfollowType>(`/follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<FollowUnfollowType>(`/follow/${userId}`)
    }
}
export const profileAPI = {
    getProfileById(userId: string) {
        return instance.get(`/profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('/profile/status', {status})
    }
}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('/auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('/auth/login',)
    }
}

export type FollowUnfollowType = {
    resultCode: number
    messages: Array<string>
    data: {}
}