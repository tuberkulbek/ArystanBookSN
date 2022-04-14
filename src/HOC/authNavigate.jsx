import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if(!this.props.isAuth){
                return <Navigate to={"/login"}/>
            }
            return <Component {...this.props}/>
        }
    }
    let ConnectedNavigateComponent = connect(mapStateToProps)(NavigateComponent)
    return ConnectedNavigateComponent
}