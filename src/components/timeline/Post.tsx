import { ChatBubbleOutline, Repeat, FavoriteBorder, PublishOutlined, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.scss"

function Post() {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-headerText">
            <h3>プログラミングチュートリアル</h3>
            <span className="post-headerSpecial">
              <VerifiedUser className="post-badge" />
              @Ma_araki
            </span>
          </div>
          <div className="post-headerDescription">
            <p>Reactなう。</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" />
        <div className="post-footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Post
