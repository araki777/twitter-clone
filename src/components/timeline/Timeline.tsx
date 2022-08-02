import { useState, useEffect, useRef, createContext, Dispatch, SetStateAction } from "react";

import Post from "./Post";
import "./Timeline.scss";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import  { PostsConverter } from "../../firebaseConverter"
import { Posts } from "types"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

const Timeline = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [tweetAnimation, setTweetAnimation] = useState(false)

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
      <TweetBox tweetAnimation={tweetAnimation} setTweetAnimation={setTweetAnimation} />
      {posts.map((post, i) => (
        <Post
          key={post.text}
          animation={(i === 0 && tweetAnimation) ? 'fadeDown' : 'xxx'}
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
