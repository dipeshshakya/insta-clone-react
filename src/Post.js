import React from "react";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Remy Sharp"
          src="https://dummyimage.com/600x400/000/fff"
        />
        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://dummyimage.com/600x400/000/fff"
        alt=""
      />
      <h4 className="post__title">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, soluta.
      </h4>
    </div>
  );
}

export default Post;
