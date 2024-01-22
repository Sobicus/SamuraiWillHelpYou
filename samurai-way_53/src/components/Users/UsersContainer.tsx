import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)