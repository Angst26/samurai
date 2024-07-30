import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { connect, MapStateToProps } from 'react-redux';
import { rootState } from '../redux/reduxStore';


const mapStateToPropsForRedirect= (state) => ({
    isAuth: state.auth.isAuth,
});


export function withAuthRedirect(WrappedComponent) {
    class RedirectComponent extends React.Component {
        render() {
            const { isAuth, ...restProps } = this.props;

            if (!isAuth) return <Navigate to='/login' />;

            return <WrappedComponent {...(restProps)} />;
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
