import React from 'react';
import Avatar from '@mui/material/Avatar';

// Component to display a single post
// it receives a post object as a prop
// it displays the post title, author name, publish date, summary, and categories
// it uses the Avatar component from material-ui to display the author's avatar
// it uses the map function to display the categories
// it uses the toLocaleString function to format the publish date
// it uses the toISOString function to format the date-time attribute
// it uses the key prop to uniquely identify each category
const PostItem = ({ post }) => {
  return (
    <article className="post-item">
      <header className="post-header">
        <Avatar src={post.author.avatar} alt={post.author.name} />
        <h1>{post.title}</h1>
      </header>
      <section>
        <span><strong>Name : </strong>{post.author.name}</span>
        <p>
          <time dateTime={new Date(post.publishDate).toISOString()}>
            <strong>Date :</strong> {new Date(post.publishDate).toLocaleString()}
          </time>
        </p>
        <p><strong>Summary : </strong>{post.summary}</p>
        <div>
          <strong>Categories : </strong>
          {post.categories.map(category => (
            <span key={category.name}><br />- {category.name}</span>
          ))}
        </div>
      </section>
    </article>
  );
};

export default PostItem;
