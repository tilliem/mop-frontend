import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import PetitionSelector from './petition-selector'

const PetitionOverview = ({
  petition: p,
  otherPetitions,
  onSelectPetition
}) => (
  <div>
    <div className='row'>
      <div className='span12' />
    </div>

    <div className='row'>
      <div className='span12'>
        <h3 style={{ borderBottom: 'solid 1px #4d4d4d' }}>
          Campaign Management Dashboard
        </h3>
        <h1 className='big-title'>
          <Link style={{ color: '#c22326' }} to={`/sign/${p.name}?source=c.em`}>
            {p.title}
          </Link>
        </h1>
      </div>
    </div>

    <div className='row'>
      <div className='span3'>
        <h3 className='stumpy'>Created by</h3>

        <div>{p.contact_name}</div>

        <div className='size-small'>
          <Link to={`/edit_coadmins.html?petition_id=${p.petition_id}`}>
            add co-leaders
          </Link>
        </div>
      </div>

      <div className='span3'>
        <h3 className='stumpy'>Signatures</h3>

        <div className='size-xl font-medium'>{p.total_signatures}</div>

        <div className='size-small'>
          <Link to={`/petition_report.html?petition_id=${p.petition_id}`}>
            see detailed report
          </Link>
        </div>
      </div>

      <div className='span3'>
        <h3 className='stumpy'>Need help?</h3>

        <div>
          <a
            className='button background-moveon-bright-red'
            href='mailto:petitions@moveon.org'
          >
            Email support for help
          </a>
        </div>

        <div className='size-small'>
          <Link to='/campaign_tips.html'>
            campaign tips
          </Link>
        </div>
      </div>
      <div>
        <PetitionSelector
          currentPetition={p}
          otherPetitions={otherPetitions}
          onSelectPetition={onSelectPetition}
        />
      </div>
    </div>

    <div className='row'>
      <div className='span12'>
        <h3 className='stumpy'>Petition Text</h3>

        <div className='font-lighter lh-24'>{p.summary}</div>

        <div className='size-small'>
          <Link to={`/edit.html?petition_id=${p.petition_id}`}>
            edit petition
          </Link>
        </div>
      </div>
    </div>
  </div>
)

PetitionOverview.propTypes = {
  petition: PropTypes.object,
  otherPetitions: PropTypes.array,
  onSelectPetition: PropTypes.func
}

export default PetitionOverview
