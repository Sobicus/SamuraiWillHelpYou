import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
}
type ProfileContainerType={
    setUserProfile:(profile: ProfileType)=>void
    profile: ProfileType
}
let mapStateToProps=(state: AppStateType)=>({
    profile:state.profilePage.profile
})
export default connect(mapStateToProps,{setUserProfile:setUserProfileAC})(ProfileContainer)