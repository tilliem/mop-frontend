import React from 'react'
import { Share as MoShare } from 'GiraffeUI/petition'

export const Share = ({ hasLabels, className }) => (
  <MoShare className={className} hasLabels={hasLabels}>
    <MoShare.Mail />
    <MoShare.Facebook />
    <MoShare.Twitter />
    <MoShare.CopyLink />
  </MoShare>
)