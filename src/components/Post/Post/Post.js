import React from 'react';
import styles from "./Post.scss";
import CommentList from "components/Post/CommentList";

const Post = ({title, body, comments}) => (
    <div className="Post">
        <h1>{title}</h1>
        <p>
            {body}
        </p>
        <CommentList comments={comments}/>
    </div>
);

export default Post;