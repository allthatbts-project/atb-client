import React from 'react';
import styles from "./Comment.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Comment = () => {
    return (
        <li className="Comment">
            <p>
                <b>name</b> body
            </p>
        </li>
    );
};

export default Comment;