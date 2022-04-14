import {connect} from "react-redux";
import React from "react";
import {getIsAUTH} from "../../redux/auth-reducer";
import Header from "./header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getIsAUTH()
    }

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

export default connect (mapStateToProps, {
    getIsAUTH
})(HeaderContainer)
