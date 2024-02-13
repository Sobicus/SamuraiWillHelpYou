import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logoutTC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logoutTC}/>
        )
    }
}

type HeaderContainerType = {
    isAuth: boolean
    login: string
    logoutTC:()=>void
}
let mapStateToProps = (state: AppStateType) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

)
export default connect(mapStateToProps, {
    logoutTC: logoutTC
})(HeaderContainer)