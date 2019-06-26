import React, {Component} from 'react';
import PostWrapper from 'components/Post/PostWrapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as mainActions from 'store/modules/main';


class PostContainer extends Component {

    render() {

        return (
            <PostWrapper/>
        );
    }
}

export default PostContainer;