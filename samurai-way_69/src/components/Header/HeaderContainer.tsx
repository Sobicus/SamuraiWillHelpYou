import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {authStateType, getAuthUserDataTC, setAuthUserDataAC} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        //axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        /*authAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })*/
        this.props.getAuthUserDataTC()
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        )
    }
}

type HeaderContainerType = {
   /* setAuthUserData: (id: number, login: string, email: string) => void*/
    isAuth: boolean
    login: string
    getAuthUserDataTC:()=>void
}
let mapStateToProps = (state: AppStateType) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

)
export default connect(mapStateToProps, {
    getAuthUserDataTC:getAuthUserDataTC
   /* setAuthUserData: setAuthUserDataAC*/
})(HeaderContainer)