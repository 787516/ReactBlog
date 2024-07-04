import React, { useEffect, useState } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsAndPhotos = async () => {
      try {
        const [postsResponse, photosResponse] = await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/posts'),
          axios.get('https://jsonplaceholder.typicode.com/photos')
        ]);

        const postsWithImages = postsResponse.data.map((post, index) => ({
          ...post,
          image: photosResponse.data[index]?.url
        }));

        setPosts(postsWithImages);
        setLoading(false);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchPostsAndPhotos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-wrap justify-between md:justify-center sm:justify-center w-full">
      {posts.map(post => (
        <div key={post.id} className="max-w-sm m-2 bg-white border border-zinc-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700">
          <a href="#">
            <img className="rounded-t-lg" src={post.image} alt={post.title} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {post.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-zinc-700 dark:text-zinc-400">
              {post.body}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-900 dark:hover:bg-indigo-800 dark:focus:ring-indigo-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
