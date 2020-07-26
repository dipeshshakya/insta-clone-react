import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import firebase from "firebase";

import { Button, Input } from "@material-ui/core";

function Post({ postId, key, user, username, imageUrl, caption }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("post")
        .doc("postId")
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();
    const valueadd = db
      .collection("post")
      .doc("postId")
      .collection("comments")
      .add({
        text: comment,
        username: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setComment("");
    console.log(valueadd);
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt={username} src={username} />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt={username} />
      <h4 className="post__title">
        <strong>{username}</strong>
        {caption}
      </h4>
      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong>
            {comment.text}
          </p>
        ))}
      </div>
      <form action="" className="post__commentBox">
        <Input
          className="post__input"
          type="text"
          placeholder="Add a Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          className="post_button"
          disable={!comment}
          type="submit"
          onClick={postComment}
        ></Button>
      </form>
    </div>
  );
}

export default Post;
