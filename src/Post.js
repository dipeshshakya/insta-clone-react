import React from "react";
import Avatar from "@material-ui/core/Avatar";

function Post({ key, username, imageUrl, caption }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="Remy Sharp" src={imageUrl} />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt={username} />
      <h4 className="post__title">
        <strong>{username}</strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
