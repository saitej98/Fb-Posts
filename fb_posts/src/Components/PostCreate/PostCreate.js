import { useContext, useState } from "react";
import axios from "axios";
import { PostContext } from "../PostProvider";
import Logo from "../Images/Gif.png";
import Profile from "../Images/profile.png";
import Image from "../Images/image.png";
import Live from "../Images/live.png";
import Writepost from "../Images/post.png";

export const CreatePostCard = () => {
  const { post, setPost } = useContext(PostContext);
  const [postText, setPostText] = useState("");
  const [selectedGif, setSelectedGif] = useState("");
  const [results, setResults] = useState([]);

  const gifFetch = async (e) => {
    try {
      const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "ezuCIXZ4JeIk9Kd7AYIQStIcWIKdMME9",
          q: e.target.value,
          limit: 30,
        },
      });
      setResults(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container2_head">
        <img className="gif_img" src={Writepost} alt="" />
        <label>Create Post</label>
        &nbsp; &nbsp; &nbsp;
        <img className="gif_img" src={Image} alt="" />
        <label> Photo/Video </label>
        &nbsp; &nbsp; &nbsp;
        <img className="gif_img" src={Live} alt="" />
        <label>Live video </label>
      </div>

      <div>
        <img className="profile" src={Profile} alt="" />
        <input
          className="form-control"
          placeholder="Type Your Post Here..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        ></input>
      </div>

      <div className="preview">
        {selectedGif ? (
          <img src={selectedGif} className="search-gif" alt="search-gif" />
        ) : (
          <></>
        )}
        &nbsp;
        <img className="gif_img" src={Logo} alt="" />
        GIF
        <ul className="dropdown-menu" id="dropdown-menu">
          <li>
            <input
              className="gifInput"
              type="text"
              placeholder="Search for Gif"
              onChange={(e) => {
                gifFetch(e);
              }}
            />
          </li>

          {results?.map((gif) => {
            return (
              <div key={gif.id}>
                {!!gif.images.fixed_height.url ? (
                  <img
                    onClick={() => {
                      setSelectedGif(gif.images.fixed_height.url);
                    }}
                    src={gif.images.fixed_height.url}
                    className="search-gif_d"
                    alt="search-gif"
                  />
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="container2">
        <button
          className="post-btn"
          onClick={() => {
            setPost([
              ...post,
              {
                postText,
                selectedGif,
              },
            ]);
            setPostText("");
            setSelectedGif("");
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};
