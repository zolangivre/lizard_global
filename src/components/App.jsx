import React, { useState } from 'react';
import PostList from '../components/PostList';
import Filter from '../components/Filter';
import LoadMore from './LoadMore';
import data from '../mock/data.json';

// Main component of the application
// it uses the useState hook to manage the selected categories and the visible posts
// it uses the Filter, PostList, and LoadMore components
// it receives the list of posts from the data.json file
// it filters the posts based on the selected categories
// it displays the filtered posts using the PostList component
// it displays the Filter component to allow users to select categories
// it displays the LoadMore component to allow users to load more posts

function App() {
  // State variables to manage the selected categories and the visible posts
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);

  // Handle the change of selected categories
  const handleCategoryChange = (categoryName) => {
    setSelectedCategories(prevState =>
      prevState.includes(categoryName)
        ? prevState.filter(cat => cat !== categoryName)
        : [...prevState, categoryName]
    );
    setVisiblePosts(5);
  };

  // Get a list of unique categories from the posts
  const categories = [...new Set(data.posts.flatMap(post => post.categories.map(cat => cat.name)))];

  // Filter the posts based on the selected categories
  const filteredPosts = data.posts.filter(post =>
    selectedCategories.length === 0 ||
    post.categories.some(category => selectedCategories.includes(category.name))
  );

  // Load more posts when the user clicks the Load More button
  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 5);
  };

  // Check if there are more posts to load
  const hasMore = visiblePosts < filteredPosts.length;

  return (
    <main className="container">
      <header>
        <h1>List of publications</h1>
      </header>

      <aside>
        <Filter
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
      </aside>

      <section className="post-section">
        <PostList posts={filteredPosts.slice(0, visiblePosts)} />
        <LoadMore loadMore={loadMorePosts} hasMore={hasMore} />
      </section>
    </main>
  );
}

export default App;
