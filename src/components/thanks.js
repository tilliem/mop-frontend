import React from 'react'
import PropTypes from 'prop-types'

const Thanks = ({ petition }) => (
  <div className='container background-moveon-white' role='main'>
    Thanks Yo! <a href={petition._links.url} >{petition.petition_id}</a>
  </div>
)

Thanks.propTypes = {
  petition: PropTypes.object
}

export default Thanks
