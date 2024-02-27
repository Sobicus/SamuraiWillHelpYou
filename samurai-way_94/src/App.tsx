import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from './components/Settings/Settings';
import {DialogsContainer as Foo} from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializedAppTC} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";


//const DialogsContainer = React.lazy(() => import( './components/Dialogs/DialogsContainer'))
 const DialogsContainer = React.lazy(() => Promise.resolve(
     {default: Foo}
 ))
const ProfileContainer = React.lazy(() => import( './components/Profile/ProfileContainer'))

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializedAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => {
                        return <React.Suspense fallback={<Preloader/>}
                        ><ProfileContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/dialogs'
                           render={() =>{
                               return <React.Suspense fallback={<Preloader/>}
                               ><DialogsContainer/>
                               </React.Suspense>
                           } }/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>


                </div>

            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedAppTC: initializedAppTC}),
)(App)

type AppType = {
    initializedAppTC: () => void
    initialized: boolean
}