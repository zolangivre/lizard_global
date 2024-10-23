import React from 'react';
import Button from '@mui/material/Button';

// Component to display a button to load more posts
// it receives a function to load more posts and a boolean to check if there are more posts to load
// it uses the Button component from material-ui to display the button

const LoadMore = ({ loadMore, hasMore }) => {
  return (
    hasMore && (
      <section className="load-more-section">
        <Button variant="contained" onClick={loadMore}>Load more</Button>
      </section>
    )
  );
};

export default LoadMore;
