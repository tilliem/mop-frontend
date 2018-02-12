import React from 'react'
import PropTypes from 'prop-types'

const OrganizationHeader = ({ orgData }) => (
  <div className='organization-header'>
    <h2>{orgData.organization}</h2>
    {orgData.description ||
      `${
        orgData.organization
      } is a MoveOn MegaPartner, an invite-only program that lets a partner organization&#39;s members and activists set up their own MoveOn petitions in partnership with the original organization.`}
    <p className='pull-right'>
      <a
        href='create_start.html'
        className='button background-moveon-bright-red'
      >
        Create a petition
      </a>
    </p>
  </div>
)

OrganizationHeader.propTypes = {
  orgData: PropTypes.object.isRequired
}

export default OrganizationHeader
