import React from 'react';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {Profile} from "./components/Profile/Profile";
import {DialogsContainer} from "./components/Messages/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


export const App = (props: any) => {

    return (
        <div className={'appWrapper'}>
            <div className={'header'}><Header/></div>
            <div className={'content'}>
                <Navbar/>
                <div className={'contentInfo'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/setting'} element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
            {/*<div className={'footer'}><Footer/></div>*/}
        </div>
    );
};

