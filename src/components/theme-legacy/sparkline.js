import React from 'react'
import PropTypes from 'prop-types'

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines'

const Sparkline = ({ data }) => (
  <div>
    {data.reduce((a, b) => a + b)}
    <Sparklines data={data} width={30} svgWidth={30} height={23} svgHeight={23}>
      <SparklinesLine style={{ fill: 'none' }} />
      <SparklinesSpots />
    </Sparklines>
  </div>
)

Sparkline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number)
}

export default Sparkline
