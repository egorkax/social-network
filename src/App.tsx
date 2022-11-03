import React from 'react';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Setting/Setting";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Messages/Dialogs";
import {Users} from "./components/Users/Users";


export const App = (props: any) => {

    return (
        <div className={'appWrapper'}>
            <div className={'header'}><Header/></div>
            <div className={'content'}>
                <Navbar/>
                <div className={'contentInfo'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile posts={props.appState.profilePages} addPost={props.addPost}/>}/>
                        <Route path={'/dialogs'} element={<Dialogs dialogs={props.appState.dialogPages}/>}/>
                        <Route path={'/users'} element={<Users/>}/>
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

