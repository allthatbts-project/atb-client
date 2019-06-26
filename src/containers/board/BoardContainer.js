import React, {Component} from 'react';
import BoardWrapper from 'components/Board/BoardWrapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as mainActions from 'store/modules/main';


class BoardContainer extends Component {

    render() {

        return (
            <BoardWrapper/>
        );
    }
}

export default BoardContainer;