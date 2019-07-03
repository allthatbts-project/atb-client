import React, {Component} from 'react';
import PostWrapper from 'components/Post/PostWrapper';
import Post from 'components/Post/Post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as mainActions from 'store/modules/main';
import * as api from 'lib/api';
import queryString from 'query-string';



class PostContainer extends Component {

    constructor(props) {
        super();
        // initializes component state
        this.state = {
            postId: 1,
            fetching: false, // tells whether the request is waiting for response or not
            post: {
                title: null,
                body: null
            },
            comments: []
        };
        
    }

    componentDidMount() {
        console.log(this.props.match.params);
        this.fetchPostInfo(1);
    }

    fetchPostInfo = async (postId) => {

        this.setState({
            fetching: true // requesting..
        });

        // wait for two promises
        const info = await Promise.all([
            api.getPost(postId),
            api.getComments(postId)
        ]);

        // Object destructuring Syntax,
        // takes out required values and create references to them
        const {title, body} = info[0].data; 
                                            
        const comments = info[1].data;

        this.setState({
            postId,
            post: {
                title, 
                body
            },
            comments,
            fetching: false // done!
        });

    }

    render() {
        const {postId, fetching, post, comments} = this.state;

        return (
            <PostWrapper>
                <Post
                    title={post.title}
                    body={post.body}
                    comments={comments}
                />
            </PostWrapper>
        );
    }
}

export default PostContainer;