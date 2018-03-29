import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

export const Blurb = ({ title, statement, url, by }) => (
  <div>
    <article>
      <div>
        <h4>
          <Link to={url} className='signthistitle'>
            {title}
          </Link>
        </h4>
        <div className='blurb'>{statement}</div>
      </div>
      <div className='pull-left'>
        <Link to={url} className='button background-moveon-bright-red'>
          Sign this petition
        </Link>
      </div>
      <div className='pull-left petition-byline'>
        <p className='byline lh-14'>by {by}</p>
      </div>
    </article>
    <div className='clear' />
  </div>
)

Blurb.propTypes = {
  title: PropTypes.string,
  statement: PropTypes.node,
  url: PropTypes.string,
  by: PropTypes.string
}
