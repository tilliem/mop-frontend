import React from 'react'
import PetitionMessage from 'LegacyTheme/petition-message'
import PropTypes from 'prop-types'
import Scrollchor from 'react-scrollchor'

import {
  Card,
  Details,
  Container,
  SignColumn,
  InfoColumn
} from 'GiraffeUI/petition'
import { Modal } from 'GiraffeUI/modal'

import { text2paraJsx, splitIntoSpansJsx, ellipsize } from '../../lib'
import SignatureAddForm from '../../containers/signature-add-form'
import SignatureList from '../../containers/signature-list'

const Petition = ({
  petition: p,
  query,
  petitionBy,
  outOfDate,
  isSignModalOpen,
  onClickFloatingSign,
  setRef,
  closeModal
}) => (
  <Container>
    <InfoColumn>
      <PetitionMessage outOfDate={outOfDate} petition={p} isFwd={query.fwd} />
      <Card
        heading={splitIntoSpansJsx(p.title)}
        currentSignatures={p.total_signatures}
        goalSignatures={p.signature_goal}
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
          <SignatureList petition={p} signatureCount={p.total_signatures} />
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
      <SignatureAddForm setRef={setRef} petition={p} query={query} />
    </SignColumn>
    <button onClick={onClickFloatingSign} className='sign-form__modal-toggle'>
      Sign Now
    </button>
    <Modal
      heading='Sign Now'
      className='sign-form-modal'
      onClose={closeModal}
      visible={isSignModalOpen}
    >
      <SignatureAddForm petition={p} query={query} />
    </Modal>
  </Container>
)

Petition.propTypes = {
  petition: PropTypes.object.isRequired,
  query: PropTypes.object,
  petitionBy: PropTypes.string,
  outOfDate: PropTypes.string,
  isSignModalOpen: PropTypes.bool,
  onClickFloatingSign: PropTypes.func,
  closeModal: PropTypes.func,
  setRef: PropTypes.func
}

export default Petition
