const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
let initialState: UsersStateType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
        //     followed: true,
        //     fullName: 'Maks',
        //     status: 'I am a boss',
        //     location: {city: 'Kyiv', country: 'Ukraine'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
        //     followed: true,
        //     fullName: 'Viktoriia',
        //     status: 'I am a boss',
        //     location: {city: 'Odessa', country: 'Ukraine'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
        //     followed: false,
        //     fullName: 'Mark',
        //     status: 'I am a boss',
        //     location: {city: 'Dnipro', country: 'Ukraine'}
        // },
    ]
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, status: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, status: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {type: FOLLOW, userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: SET_USERS, users} as const
}
type ActionType = followACType | unfollowACType | setUsersACType
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

type UsersStateType = {
    users: Array<UserType>
}
export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}