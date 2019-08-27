import React from "react";
import PageTemplate from "components/common/PageTemplate";
import WriteContainer from "containers/post/WriteContainer";

const WritePage = ({match}) => {
  return (
    <PageTemplate>
      <WriteContainer boardId={match.params.boardId}/>
    </PageTemplate>
  );
};

export default WritePage;
