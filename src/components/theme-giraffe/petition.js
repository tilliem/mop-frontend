import React from 'react'
import PropTypes from 'prop-types'

import {
  Message,
  Card,
  Details,
  SignColumn,
  InfoColumn
} from 'GiraffeUI/petition'

import { text2paraJsx, splitIntoSpansJsx, ellipsize } from '../../lib'
import SignatureAddForm from '../../containers/signature-add-form'
import SignatureList from '../../containers/signature-list'

const Petition = ({ petition: p, query, petitionBy, outOfDate }) => (
  <div className='mo-container'>
    <Message outOfDate={outOfDate} petition={p} isFwd={query.fwd} />
    <InfoColumn>
      <Card
        heading={splitIntoSpansJsx(p.title)}
        currentSignatures={p.total_signatures}
        goalSignatures={p.signature_goal}
      >
        <p>To be delivered to {p.target.map(t => t.name).join(', ')}</p>

        {p.featured_image_url && <Card.Media imageUrl={p.featured_image_url} />}

        <Card.Description>
          {text2paraJsx(ellipsize(p.summary, 500))}
        </Card.Description>
      </Card>

      <Details>
        <Details.Narrative heading='Background'>
          <div dangerouslySetInnerHTML={{ __html: p.description }} />
        </Details.Narrative>

        <Details.Comments heading='What Others Are Saying'>
          <SignatureList
            petitionSlug={p.slug}
            signatureCount={p.total_signatures}
          />
        </Details.Comments>

        <Details.Author
          name={petitionBy}
          link={`/contact_creator.html?petition_id=${p.petition_id}`}
        />
        <Details.Share className='petition-details' hasLabels />
        <Details.Disclaimer />
      </Details>
    </InfoColumn>
    <SignColumn>
      <SignatureAddForm petition={p} query={query} />
    </SignColumn>
  </div>
)

Petition.propTypes = {
  petition: PropTypes.object.isRequired,
  query: PropTypes.object,
  petitionBy: PropTypes.string,
  outOfDate: PropTypes.string
}

export default Petition
