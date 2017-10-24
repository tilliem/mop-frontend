import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { text2paraJsx } from '../lib.js'
import { thanksLoader } from '../loaders/petition.js'
import SignatureAddForm from './signature-add-form.js'
import SignatureCount from './signature-count.js'
import { loadPetitionSignatures } from '../actions/petitionActions.js'

class Petition extends React.Component {
  componentDidMount() {
    const { loadSignatures, petition } = this.props
    loadSignatures(petition.slug, 1)
    // lazy-load thanks page component
    thanksLoader()
  }

  render() {
    const { petition: p, signatures } = this.props
    const statement = text2paraJsx(p.summary)

    return (
      <div className='container background-moveon-white' role='main'>
        <div className='row row-fluid'>
          <SignatureAddForm petition={p} />
          <div className='span8 pull-right petition-info-top'>
            <div className='form-wrapper responsive'>
              <div className='petition-top hidden-phone'>
                <h1 id='petition-title' className='moveon-bright-red big-title'>{p.title}</h1>
              </div>

              <div id='pet-statement-box' className='lh-36 blockquote hidden-phone'>
                <h3 className='visible-phone moveon-bright-red'>Petition Statement</h3>
                <div id='pet-statement'>{statement}</div>
              </div>
              <SignatureCount current={p.signatureCount} goal={p.signatureGoal} />
            </div>

            <div className='petition-top'>
              <p id='to-target' className='lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer'>To be delivered to <span className='all-targets'><strong>
                    {p.target.map((t) => t.name).join(', ')}
              </strong></span></p>
              <p id='by' className='byline lh-20'>Petition by <a href='/contact_creator.html?petition_id=95935' className='underline'>{p.contact_name}</a></p>
            </div>

            <div className='clear'></div>

            <div id='pet-explain' className='background-moveon-white bump-top-1'>
              <div className='widget'>
                <div className='widget-top'>
                  <h3 className='moveon-bright-red'>Petition Background</h3>
                </div>
                <div dangerouslySetInnerHTML={{ __html: p.description }}></div>
              </div>

              <div className='widget'>
                <div className='widget-top'>
                  <h3 className='moveon-bright-red'>Current petition signers</h3>
                </div>
                <div id='pet-signers-loading' className='bump-top-1'><b>Loading...</b></div>

                <div>
                  <div id='pet-signers' className='bump-top-1'>
                  </div>
                  <form id='flag-comment-form' action='/flag_comment.html' method='POST'>
                    <input id='flag-comment-user-id' type='hidden' name='user_id' value='' />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Petition.propTypes = {
  petition: PropTypes.object.isRequired,
  loadSignatures: PropTypes.func,
  signatures: PropTypes.object
}

const mapStateToProps = (store, ownProps) => ({
  signatures: store.petitionStore.petitionSignatures[ownProps.petition.slug]
})

const mapDispatchToProps = (dispatch) => ({
  loadSignatures: (petitionSlug, page) =>
    dispatch(loadPetitionSignatures(petitionSlug, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Petition)
