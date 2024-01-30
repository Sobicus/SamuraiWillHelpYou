import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
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
//let WithUrlDataContainerComponent= withRouter(ProfileContainer)
//export default withRouter(connect(mapStateToProps,{setUserProfile:setUserProfileAC})(ProfileContainer))
export default compose<React.ComponentType>(connect(mapStateToProps, {setUserProfile: setUserProfileAC}), withRouter)(ProfileContainer)


