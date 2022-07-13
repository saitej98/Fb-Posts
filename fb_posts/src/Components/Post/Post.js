import React from "react";
import profile from "../Images/profile.png";

const Post = ({ post }) => {
  return (
    <>
      <div className="col">
        <div className="card-ps">
          {!!post.selectedGif ? (
            <img src={post.selectedGif} alt="..." />
          ) : (
            <></>
          )}
          <div>
            <p>
              <img className="profile_post" src={profile} alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              {post.postText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
