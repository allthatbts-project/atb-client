import React, { Component } from "react";
import styles from "./PostWrapper.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PostWrapper = ({children}) => {
  return (
    <div className="PostWrapper">
            {children}
    </div>
  );
};

export default PostWrapper;
