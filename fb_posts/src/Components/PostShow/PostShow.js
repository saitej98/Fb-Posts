import { useContext } from "react";
import { CreatePostCard } from "../PostCreate/PostCreate";
import Post from "../Post/Post";
import { PostContext } from "../PostProvider";

export const Show = () => {
  const { post } = useContext(PostContext);
  return (
    <>
      <div className="container page">
        <CreatePostCard />
        {post?.map((post) => {
          return (
            <div className="row mt-4" key={post.selectedGif}>
              <div className="col-sm-3"></div>
              <Post post={post} />
              <div className="col-sm-3"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};