import React from "react";
import Post from "./Post";
import "./Timeline.scss";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import  { PostsConverter } from "../../firebaseConverter"
import { Posts } from "types"
import { collection, getDocs } from "firebase/firestore"

async function getPosts(): Promise<Posts[]> {
  const collRef = collection(db, '/books').withConverter(PostsConverter)
  const snapshot = await getDocs(collRef)
  return snapshot.docs.map((doc) => doc.data())
}

const Timeline = () => {

  return (
    <div className="timeline">
      <div className="timeline-header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      <Post
        displayName="プログラミングチュートリアル"
        username="Ma_araki"
        verified={true}
        text="初めてのツイート"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://source.unsplash.com/random"
      />
    </div>
  );
}

export default Timeline;
