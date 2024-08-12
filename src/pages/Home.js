import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard } from "../components";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const postRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postRef);
      setPosts(data.docs.map((document) => ({
        ...document.data(),
        id: document.id
      })));
    };
    getPosts();
  }, []);

  console.log(posts);

  return (
    <main>
      {posts.map(post => 
        <PostCard key={post.id} post={post} />
      )}
    </main>
  )
}
