import React from 'react'
import PetitionMessage from 'Theme/petition-message'
import PropTypes from 'prop-types'
import Scrollchor from 'react-scrollchor'

import {
  Card,
  Details,
  Container,
  SignColumn,
  InfoColumn,
  MobileSign
} from 'GiraffeUI/petition'

import { Share } from './petition-share'

import { text2paraJsx, splitIntoSpansJsx, ellipsize } from '../../lib'
import SignatureAddForm from '../../containers/signature-add-form'
import SignatureList from '../../containers/signature-list'

const Petition = ({
  petition: p,
  query,
  user,
  adminLink,
  petitionBy,
  outOfDate,
  onClickFloatingSign,
  setRef
}) => (
  <Container>
    <PetitionMessage outOfDate={outOfDate} petition={p} isFwd={query.fwd} />
    <InfoColumn>
      <Card
        heading={splitIntoSpansJsx(p.title)}
        currentSignatures={p.total_signatures}
        goalSignatures={p.signature_goal}
        renderShare={<Share className='petition-card' user={user} petition={p} />}
        renderSignersButton={({ className, CaretRight }) => (
          <Scrollchor
            className={className}
            to='#comments'
            animate={{ offset: -150 }}
          >
            MOST RECENT SIGNERS <CaretRight />
          </Scrollchor>
        )}
      >
        <p>To be delivered to {p.target.map(t => t.name).join(', ')}</p>

        {adminLink && (
          <a style={{ position: 'absolute', top: 10, right: 10 }} href={adminLink}>
            zoom &#x270e;
          </a>
        )}

        {p.featured_image_url && <Card.Media imageUrl={p.featured_image_url} />}

        <Card.Description>
          {text2paraJsx(ellipsize(p.summary, 500))}
        </Card.Description>
      </Card>

      <MobileSign>
        <SignatureAddForm setRef={setRef({ isMobile: true })} petition={p} query={query} />
      </MobileSign>

      <Details>
        <Details.Narrative heading='Background'>
          <div dangerouslySetInnerHTML={{ __html: p.description }} />
        </Details.Narrative>

        <Details.Comments heading='What Others Are Saying'>
          <SignatureList petition={p} signatureCount={p.total_signatures} />
        </Details.Comments>

        <Details.Author
          name={petitionBy}
          link={`/contact_creator.html?petition_id=${p.petition_id}`}
        />
        <Share className='petition-details' hasLabels user={user} petition={p} />
        <Details.Disclaimer />
      </Details>
    </InfoColumn>
    <SignColumn>
      <SignatureAddForm setRef={setRef({ isMobile: false })} petition={p} query={query} />
    </SignColumn>
    <button onClick={onClickFloatingSign} className='sign-form__fixed-button'>
      Sign Now
    </button>
  </Container>
)

Petition.propTypes = {
  petition: PropTypes.object.isRequired,
  user: PropTypes.object,
  adminLink: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  query: PropTypes.object,
  petitionBy: PropTypes.string,
  outOfDate: PropTypes.string,
  onClickFloatingSign: PropTypes.func,
  setRef: PropTypes.func
}

export default Petition
