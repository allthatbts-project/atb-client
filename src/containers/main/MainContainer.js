import React, {Component} from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class MainContainer extends Component {

    render() {
        const { } = this;
        const { } = this.props;

        return (
            <div>
                Main Body</div>
        );
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(MainContainer);