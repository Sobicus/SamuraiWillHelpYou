import {AppStateType} from "../../redux/redux-store";
import {
    followAC, followTC, getUsersTC,
    setCurrentPageAC,
    toggleIsFollowingProgressAC,
    unfollowAC, unFollowTC,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";

class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        /*this.props.toggleIsFetching(true)
        //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials:true})
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.items.totalCount)
            })*/
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
        /*this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                }
            )*/
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching ?
                        <Preloader/>
                        : null
                }
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalCount={this.props.totalCount}
                    currentPage={this.props.currentPage}
                    //follow={this.props.follow}
                    //unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    //toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    followTC={this.props.followTC}
                    unFollowTC={this.props.unFollowTC}
                />

            </>
        )
    }
}

type UsersContainerType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    //follow: (userId: number) => void
    //unfollow: (userId: number) => void
    //setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    //setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
    //toggleIsFetching: (isFetching: boolean) => void
    //toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC:(userId:number)=>void
    unFollowTC:(userId:number)=>void
}
let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    //follow: followAC,
    //unfollow: unfollowAC,
    // setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    // setTotalUsersCount: setUsersTotalCountAC,
    // toggleIsFetching: toggleIsFetchingAC,
    //toggleIsFollowingProgress: toggleIsFollowingProgressAC,
    getUsersTC: getUsersTC,
    followTC:followTC,
    unFollowTC:unFollowTC
})(UsersContainer)
