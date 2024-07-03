import React from 'react';
import {Component} from 'react'
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = state => ({isAuth: state.auth.isAuth})

export const withAuthRedirect = Component => {

    class redirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(redirectComponent)
}