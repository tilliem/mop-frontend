import React from 'react'
import PropTypes from 'prop-types'

const formatNumber = number =>
  String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const percent = (current, goal) => {
  if (goal <= 0) {
    return '0%'
  }

  const v = Math.min(1, current / goal) * 100
  return `${v.toFixed(2)}%`
}

const SignatureCount = ({ current, goal }) => current !== undefined && (
  <div id='therm' className='bump-top-2'>
    <div className='progress-status clearfix'>
      <div className='progress-stat progress-current'>
        <em>Current</em> <strong>{formatNumber(current)}</strong>
      </div>
      <div className='progress-stat progress-goal'>
        <em>Goal</em> <strong>{formatNumber(goal)}</strong>
      </div>
    </div>
    <div className='progress progress-danger no-bottom-margin'>
      <div className='bar' style={{ width: percent(current, goal) }}></div>
    </div>
  </div>
)

SignatureCount.propTypes = {
  current: PropTypes.number,
  goal: PropTypes.number
}

export default SignatureCount
