import React from "react";
import Post from "./Post";
import "./Timeline.scss";
import TweetBox from "./TweetBox";

function Timeline() {
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
