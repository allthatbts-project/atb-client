import React, {Component} from 'react';
import Header from 'components/common/Header';
import { withRouter } from 'react-router-dom';

import * as baseActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, fromJS } from 'immutable';

class HeaderContainer extends Component {

    handleLoginClick = () => {
        const {logged} = this.props;
        const { BaseActions, history } = this.props;
        sessionStorage.removeItem('userInfo');
        if(logged){
            try{
                window.location.reload();
            }catch(e){console.log(e);
            }
            return;
        }
        BaseActions.showModal('login');
    };
    render() {
        const { handleLoginClick } = this;
        const { logged, userInfo } = this.props;
        return (
            <Header
                logged={logged} userInfo={userInfo}
                onLoginClick={handleLoginClick}
            />
        );
    }
}

export default connect(
    (state) => ({
        userInfo: sessionStorage.getItem('userInfo'),
        logged: sessionStorage.getItem('userInfo') !== null,
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(withRouter(HeaderContainer));