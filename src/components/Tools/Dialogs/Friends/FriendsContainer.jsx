import {connect} from "react-redux";
import Friends from "./friends";
import {Navigate} from "react-router";
import React from "react";
import {withAuthNavigate} from "../../../../HOC/authNavigate";
import {compose} from "redux";

class MessagesContainer extends React.Component{
    render(){
        return <Friends {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage.friendData
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withAuthNavigate
)(MessagesContainer);