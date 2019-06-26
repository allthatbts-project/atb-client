import React from 'react';
import { Link } from "react-router-dom";

const BoardItem = ({id, subject, writer, readCount, recommendCount, createDate}) => {
    return (
        <tr>
            <td>{id}</td>
            <td><Link to={`/post/${id}`}>{subject}</Link></td>
            <td>{writer}</td>
            <td>{readCount}</td>
            <td>{recommendCount}</td>
            <td>{createDate}</td>
        </tr>
    );
};

export default BoardItem;