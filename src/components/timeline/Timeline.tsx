import React, { useState, useEffect, useRef } from "react";
import Post from "./Post";
import "./Timeline.scss";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import  { PostsConverter } from "../../firebaseConverter"
import { Posts } from "types"
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore"
import FlipMove from "react-flip-move"

const Timeline = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  const didLogRef = useRef(false);
  useEffect(() => {
    if (didLogRef.current === false) {
      const collRef = collection(db, '/posts').withConverter(PostsConverter)
      const q = query(collRef, orderBy("timestamp", "desc"))
      onSnapshot(q, (querySnapShot) => {
        setPosts(querySnapShot.docs.map((doc) => doc.data()))
      })
    }
  }, []);

  return (
    <div className="timeline">
      <div className="timeline-header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Timeline;
