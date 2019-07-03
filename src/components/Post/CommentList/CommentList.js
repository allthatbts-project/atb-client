import React from "react";
import styles from "./CommentList.scss";
import classNames from "classnames/bind";
import Comment from "components/Post/Comment";

const cx = classNames.bind(styles);

const CommentList = ({comments}) => {

    // map data to components
    const commentList = comments.map(
        (comment, index)=>(
            <Comment 
                name={comment.name}
                body={comment.body} 
                key={index}
            />
        )
    );

    return (
        <ul className="CommentList">
            {commentList}
        </ul>
    );
};

export default CommentList;
