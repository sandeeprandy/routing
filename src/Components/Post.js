import { Button,Flex } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

function Posts() {
  const [post, setpost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const fetchpost = async () => {
      const getpost = {
        id: postId,
        title: `title is ${postId}`,
        content: `this is post ${postId}`,
      };
      setpost(getpost);
    };
    fetchpost();
    
  }, [postId]);

  if (!post) {
    return (
      <div>
        <h1>loading....</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p> {post.content} </p> 
      <Flex gap="large">
      <Button> <Link to="/">home</Link> </Button>
      <Button type="primary"  > <Link  to="/Blog">Blogs</Link> </Button>
      </Flex>
    </div>
  );
}
export default Posts;
