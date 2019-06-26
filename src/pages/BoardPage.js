import React, { Component } from "react";
import PageTemplate from "components/common/PageTemplate";
import BoardContainer from "containers/board/BoardContainer";

const BoardPage = () => {
  return (
    <PageTemplate>
      <BoardContainer />
    </PageTemplate>
  );
};

export default BoardPage;
