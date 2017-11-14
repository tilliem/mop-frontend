import React from 'react'
import PropTypes from 'prop-types'

const Thanks = ({ petition, user }) => (
  <div className='container background-moveon-white' role='main'>
    <div>
    Thank You
    {((user.full_name || user.given_name) ?
      <span>, {user.full_name || user.given_name}</span>
      : '')}!
    </div>
    <a href={petition._links.url} >{petition.petition_id}</a>
  </div>
)

Thanks.propTypes = {
  petition: PropTypes.object,
  user: PropTypes.object
}

export default Thanks
