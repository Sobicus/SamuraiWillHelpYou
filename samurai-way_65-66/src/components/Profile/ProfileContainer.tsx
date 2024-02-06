import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '24027'
        }
        profileAPI.getProfileById(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}
type PathParamsType = {
    userId: string
}
type OwnPropsType = RouteComponentProps<PathParamsType> & ProfileContainerType
let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default withRouter((connect(mapStateToProps, {setUserProfile: setUserProfileAC}))(ProfileContainer))


