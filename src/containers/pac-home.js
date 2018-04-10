import React from 'react'
import PropTypes from 'prop-types'

import { Home } from 'Theme/home'

const PacHome = ({ params }) => <Home params={params} isPac />

PacHome.propTypes = {
  params: PropTypes.object
}

export default PacHome
