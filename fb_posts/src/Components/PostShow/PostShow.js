import { useContext } from "react";
import { CreatePostCard } from "../PostCreate/PostCreate";
import Post from "../Post/Post";
import { PostContext } from "../PostProvider";

export const Show = () => {
  const { post } = useContext(PostContext);
  return (
    <>
      <div>
        <CreatePostCard />
        {post?.map((post) => {
          return (
            <div key={post.selectedGif}>
              <Post post={post} />
            </div>
          );
        })}
      </div>
    </>
  );
};
