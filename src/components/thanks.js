import React from 'react'
import PropTypes from 'prop-types'

const Thanks = ({ petition }) => (
  <div className='container background-moveon-white' role='main'>
    Thanks Yo! {petition.petition_id}
  </div>
)

Thanks.propTypes = {
  petition: PropTypes.object
}

export default Thanks
