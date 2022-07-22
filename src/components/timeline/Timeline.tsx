import React, { useState, useEffect, useRef } from "react";
import Post from "./Post";
import "./Timeline.scss";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import  { PostsConverter } from "../../firebaseConverter"
import { Posts } from "types"
import { collection, getDocs } from "firebase/firestore"

const Timeline = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  const collRef = collection(db, '/posts').withConverter(PostsConverter)
  const didLogRef = useRef(false);
  useEffect(() => {
    if (didLogRef.current === false) {
      async function getPosts() {
        const snapshot = await getDocs(collRef)
        console.log(snapshot)
        setPosts(snapshot.docs.map((doc) => doc.data()))
      }
      getPosts()
    }
  }, []);

  return (
    <div className="timeline">
      <div className="timeline-header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Timeline;
