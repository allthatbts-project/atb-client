import React, { Component } from "react";
import styles from "./BoardWrapper.scss";
import BoardItem from "components/Board/BoardItem";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Table from 'react-bootstrap/Table';

const cx = classNames.bind(styles);

const BoardWrapper = ({ BoardItemList }) => {
  const handleClick = () => {
    alert("글쓰기");
  };

  return (
    <div>
      <div className="BoardList">
        <Table responsive className="BoardTable">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>추천수</th>
              <th>작성일시</th>
            </tr>
          </thead>
          <tbody>
            <BoardItem
              id={1}
              subject={"테스트1"}
              writer={"글쓴이"}
              readCount={"1"}
              recommendCount={"3"}
              createDate={"2019-05-02"}
            />
            <BoardItem
              id={2}
              subject={"테스트2"}
              writer={"글쓴이"}
              readCount={"1"}
              recommendCount={"3"}
              createDate={"2019-05-02"}
            />
            <BoardItem
              id={3}
              subject={"테스트3"}
              writer={"글쓴이"}
              readCount={"1"}
              recommendCount={"3"}
              createDate={"2019-05-02"}
            />
            <BoardItem
              id={4}
              subject={"테스트4"}
              writer={"글쓴이"}
              readCount={"1"}
              recommendCount={"3"}
              createDate={"2019-05-02"}
            />
            <BoardItem
              id={5}
              subject={"테스트5"}
              writer={"글쓴이"}
              readCount={"1"}
              recommendCount={"3"}
              createDate={"2019-05-02"}
            />
          </tbody>
        </Table>
        <div className="ButtonArea">
        <Link to="/">
          <button className="Write">글쓰기</button>
        </Link>
        </div>
      </div>
      
    </div>
  );
};

export default BoardWrapper;
