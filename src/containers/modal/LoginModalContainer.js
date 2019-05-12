import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

import LoginModal from "../../components/modal/LoginModal/LoginModal";

class LoginModalContainer extends Component {
    handleLogin = async (e) => {
        const { BaseActions, password } = this.props;
        const { name } = e.target;
        try{
            window.location.href = "/oauth2/authorization/" + name;
            //await BaseActions.login(name);
            BaseActions.hideModal('login');
            localStorage.logged = "true";
        } catch(e) {
            console.log(e);
        }
    };

    testConnect = async () => {
        const { BaseActions } = this.props;
        try{
            await BaseActions.testConnect();
        } catch(e) {
            console.log(e);
        }
    };

    handleCancel = () => {
        const { BaseActions } = this.props;
        BaseActions.hideModal('login');
    };
    handleChange = (e) => {
        const { value } = e.target;
        const { BaseActions } = this.props;
        BaseActions.changePasswordInput(value);
    };
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleLogin();
        }
    };

    render() {
        const {
            handleLogin, handleCancel, handleChange, handleKeyPress, testConnect
        } = this;
        const { visible, error, password } = this.props;

        return (
            <LoginModal
                onLogin={handleLogin} onCancel={handleCancel}
                onChange={handleChange} onKeyPress={handleKeyPress}
                onTestConnect={testConnect}
                visible={visible} error={error} password={password}
            />
        )
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['modal', 'login']),
        password: state.base.getIn(['loginModal', 'password']),
        error: state.base.getIn(['loginModal', 'error'])
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(LoginModalContainer);