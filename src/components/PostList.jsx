import React from 'react';
import PostItem from './PostItem';

// Component to display a list of posts
// it receives an array of post objects as a prop
// it uses the map function to display each post using the PostItem component
// it uses the post id as a key prop to uniquely identify each post

const PostList = ({ posts }) => {
  return (
    <section className="post-list">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostList;
