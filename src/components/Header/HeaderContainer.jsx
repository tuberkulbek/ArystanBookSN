import {connect} from "react-redux";
import React from "react";
import Header from "./header";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect (mapStateToProps, {})(HeaderContainer)
