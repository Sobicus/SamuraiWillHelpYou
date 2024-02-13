import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatusTC, getUserProfileTC, setUserProfileAC, updateStatusTC} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {profileAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '24027'
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
    status:string
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}
type PathParamsType = {
    userId: string
}
type OwnPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
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

