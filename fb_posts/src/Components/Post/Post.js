import React from "react";
import profile from "../Images/profile.png";

const Post = ({ post }) => {
    return (
      <>
   
  
        <div className="col">
  
          <div className="card-ps">
            {!!post.selectedGif ? (
              <img
                src={post.selectedGif}
                className="card-img-top post-img"
                alt="..."
              />
            ) : (
              <></>
            )}
            <div className="card-body post-card-body text-start">
              <h5 className="card-title">
                {" "}
              </h5>
  
  
              <p className="card-text">
              <img className="avatar_post" src={profile} alt=""/>
              &nbsp;&nbsp;
  
              {post.postText}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Post;

