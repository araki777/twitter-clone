import React from 'react'
import "./Timeline.scss"
import TweetBox from './TweetBox'

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
    </div>
  )
}

export default Timeline
