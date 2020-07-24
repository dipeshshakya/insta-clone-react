import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts] = useState([
    {
      username: "dipesh",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eos?",
      imageUrl:
        "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?cs=srgb&dl=closeup-photo-of-short-coated-white-and-gray-dog-825947.jpg&fm=jpg",
    },
    {
      username: "jhon",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eos?",
      imageUrl:
        "https://images.pexels.com/photos/2947337/pexels-photo-2947337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ]);
  return (
    <div className="App">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          className="app__headerImage"
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
