import {AppStateType} from "../../redux/redux-store";
import {
    followTC, getUsersTC,
    setCurrentPageAC,
    unFollowTC,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount, getUsers
} from "../../redux/users-selectors.";

class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersTC(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsersTC(pageNumber, pageSize)
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
                    onPageChanged={this.onPageChanged}
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
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    followingInProgress: number[]
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}
let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    getUsersTC: getUsersTC,
    followTC: followTC,
    unFollowTC: unFollowTC
})(UsersContainer)
