import React, {Component} from 'react';
import Header from 'components/common/Header';
import { withRouter } from 'react-router-dom';

import * as baseActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeaderContainer extends Component {
    handleLoginClick = () => {
        const {logged} = this.props;
        const { BaseActions, history } = this.props;
        BaseActions.initializeLogin();
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
        const { logged, name, imageUrl } = this.props;
        return (
            <Header
                logged={logged} name={name} imageUrl={imageUrl}
                onLoginClick={handleLoginClick}
            />
        );
    }
}

export default connect(
    (state) => ({
        logged: state.base.getIn(['userInfo', 'token']) !== '',
        name: state.base.getIn(['userInfo', 'name']),
        imageUrl: state.base.getIn(['userInfo', 'imageUrl']),
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(withRouter(HeaderContainer));