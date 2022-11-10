import {Navigate} from "react-router-dom";
import React from "react";

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>;
    }
    return RedirectComponent;
}