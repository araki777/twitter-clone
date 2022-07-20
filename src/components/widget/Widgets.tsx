import Search from "@mui/icons-material/Search";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.scss";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <Search className="widgets-searchIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>
      <div className="widgets-widgetContainer">
        <h2>いまどうしてる？</h2>
        <TwitterTweetEmbed tweetId={"1548694112446324737"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="unkochan1234567"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/HgyUpHAzY9TNwLe"}
          options={{ text: "#React.js勉強中", via: "HgyUpHAzY9TNwLe" }}
        />
      </div>
    </div>
  );
};
export default Widgets;
