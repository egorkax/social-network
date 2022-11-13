import React from 'react';
import {Navbar} from "./components/Navbar/Navbar";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Messages/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer, withRouter} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reduser";
import {AppRootStateType} from "./redux/store";
import {Preloader} from "./components/Preloader/Preloader";


class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'appWrapper'}>
                <div className={'header'}><HeaderContainer/></div>
                <div className={'content'}>
                    <Navbar/>
                    <div className={'contentInfo'}>
                        <Routes>
                            <Route path={'/profile'} element={<ProfileContainer/>}>
                                <Route path={':userId'} element={<ProfileContainer/>}/>
                            </Route>
                            <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                            <Route path={'/users'} element={<UsersContainer/>}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/setting'} element={<Setting/>}/>
                            <Route path={'/login'} element={<LoginContainer/>}/>
                        </Routes>
                    </div>
                </div>
                {/*<div className={'footer'}><Footer/></div>*/}
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        initialized: state.app.initialized
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

