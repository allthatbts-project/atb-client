import React, {Component} from 'react';
import Header from 'components/common/Header';
import { withRouter } from 'react-router-dom';

import * as baseActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeaderContainer extends Component {
    handleLoginClick = () => {
        const logged = localStorage.logged;
        const { BaseActions, history } = this.props;
        if(logged){
            try{
                localStorage.removeItem("accessToken");
                localStorage.logged = '';
                window.location.reload();
            }catch(e){console.log(e);
            }
            return;
        }
        BaseActions.showModal('login');
        BaseActions.initializeLogin();
    }
    render() {
        const { handleLoginClick } = this;
        const { match } = this.props;
        const logged = localStorage.logged;
        return (
            <Header
                logged={logged}
                onLoginClick={handleLoginClick}
            />
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(withRouter(HeaderContainer));