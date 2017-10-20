import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Thanks extends React.Component {

  render() {
    const p = this.props.petition

    return (
        <div className='container background-moveon-white' role='main'>
          Thanks Yo! {p.petition_id}
        </div>
    )
  }
}

Thanks.propTypes = {
  petition: PropTypes.object
}

export default Thanks
