import {
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  PublishOutlined,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.scss";
import { Posts } from "types"

const Post: React.FC<Posts> = forwardRef((props, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post-avatar">
        <Avatar src={props.avatar} />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>
              {props.displayName}
              <span className="post-headerSpecial">
                <VerifiedUser className="post-badge" />@{props.username}
              </span>
            </h3>
          </div>
          <div className="post-headerDescription">
            <p>{props.text}</p>
          </div>
        </div>
        <img src={props.image} />
        <div className="post-footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;
