import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatusTC, getUserProfileTC,  updateStatusTC} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId + ''
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusTC}/>
        )
    }
}

type ProfileContainerType = {
    profile: ProfileType
    getUserProfileTC: (userId: string) => void
    status: string
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
    authorizedUserId: number
    isAuth: boolean
}
type PathParamsType = {
    userId: string
}
type OwnPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC: getUserProfileTC,
        getStatusTC: getStatusTC,
        updateStatusTC: updateStatusTC
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

