import {connect} from "react-redux";
import * as axios from "axios";
import React from "react";
import {setLoginData} from "../../redux/auth-reducer";
import Header from "./header";
import {usersAPI} from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.getIsAUTH().then( data=> {
            if(data.resultCode === 0){
                let {id, email, login} = data.data
                this.props.setLoginData(id, email, login)
            }
        })
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
    setLoginData
})(HeaderContainer)
