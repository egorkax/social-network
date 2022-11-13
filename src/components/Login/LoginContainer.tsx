import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {Login} from "./Login";
import {logIn} from "../../redux/auth-reduser";


let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const LoginContainer = connect(mapStateToProps, {logIn})(Login)


//type
type mapStateToPropsType = {}

