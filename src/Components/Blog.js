import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

function Blog() {
  const posts = [
    { id: 1, title: "title 1" },
    { id: 2, title: "title 2" },
    { id: 3, title: "title 3" },
  ];

  return (
    <>
      <h1>BLogs</h1>
      <ul>
        {posts.map((post) => (
          <li>
            {" "}
            <Link to={`/post/${post.id}`}> {post.title} </Link>{" "}
          </li>
        ))}
      </ul>
      <Button> <Link to="/">home</Link> </Button>
    </>
  );
}
export default Blog;
