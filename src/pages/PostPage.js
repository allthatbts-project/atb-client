import React from "react";
import PageTemplate from "components/common/PageTemplate";
import PostContainer from "containers/post/PostContainer";

const PostPage = ({match}) => {
  return (
    <PageTemplate>
      <PostContainer postId={match.params.id}/>
    </PageTemplate>
  );
};

export default PostPage;
