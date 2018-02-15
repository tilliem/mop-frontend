import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'

const Video = () => (
  <div className='billboard-content' style={{ lineHeight: 0 }}>
    <span className='billboard-video'>
      <ResponsiveEmbed src='https://www.youtube.com/embed/oMHH7FL66fo' allowFullScreen />
    </span>
  </div>
)

export default Video
