import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import PostCard from './PostCard';
import {getUsers, getPosts} from './Services';

function Exercise() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getPosts();
        setPosts(postData);
      } catch (error) {
        console.error(
          "[Component] Gagal menampilkan post:",
          error.message
        );
        setError("Gagal mengambil data post.");
      }

      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error(
          "[Component] Gagal menampilkan user:",
          error.message
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Post Cards
      </h1>

      {error && (
        <p className="text-center text-red-600 mb-6">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      <h1 className="text-3xl font-bold text-center my-10 text-blue-700">
        User Cards
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>

    </div>
  );
}


export default Exercise
