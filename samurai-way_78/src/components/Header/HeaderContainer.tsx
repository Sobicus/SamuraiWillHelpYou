import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {authStateType, getAuthUserDataTC, logoutTC, setAuthUserDataAC} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logoutTC}/>
        )
    }
}

type HeaderContainerType = {
    isAuth: boolean
    login: string
    getAuthUserDataTC: () => void
    logoutTC:()=>void
}
let mapStateToProps = (state: AppStateType) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

)
export default connect(mapStateToProps, {
    getAuthUserDataTC: getAuthUserDataTC,
    logoutTC: logoutTC
})(HeaderContainer)