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
        /*profileAPI.getProfileById(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
            */
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        //if(!this.props.isAuth)return <Redirect to={'/login'}/>
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusTC}/>
        )
    }
}

type ProfileContainerType = {
    /*setUserProfile: (profile: ProfileType) => void*/
    profile: ProfileType
    getUserProfileTC: (userId: string) => void
    //isAuth:boolean
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
    //isAuth:state.auth.isAuth
})

//export default withAuthRedirect(withRouter((connect(mapStateToProps,{getUserProfileTC: getUserProfileTC}))(ProfileContainer)))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC: getUserProfileTC,
        getStatusTC: getStatusTC,
        updateStatusTC: updateStatusTC
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

