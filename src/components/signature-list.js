import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SignatureListPage from './signature-list-page.js'
import { loadPetitionSignatures } from '../actions/petitionActions.js'

class SignatureList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { page: 1 }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }

  componentDidMount() {
    this.loadSignaturesIfNeeded(this.state.page)
  }

  loadSignaturesIfNeeded(page) {
    const { loadSignatures, signatures, petitionSlug } = this.props
    if (typeof signatures === 'undefined' || typeof signatures[page] === 'undefined') {
      loadSignatures(petitionSlug, page)
    }
  }

  nextPage() {
    this.loadSignaturesIfNeeded(this.state.page + 1)
    this.setState((prevState) => ({
      page: prevState.page + 1
    }))
  }

  previousPage() {
    this.loadSignaturesIfNeeded(this.state.page - 1)
    this.setState((prevState) => ({
      page: prevState.page - 1
    }))
  }

  render() {
    const { signatures, signatureCount } = this.props
    const { page } = this.state
    if (typeof signatures === 'undefined' || typeof signatures[page] === 'undefined') {
      return (
        <div id='pet-signers-loading' className='bump-top-1'><b>Loading...</b></div>
      )
    }
    const startNumber = ((page - 1) * 10) + 1
    const previousButton = (page < 2) ? '' : (
      <span className='previous'>
        <a onClick={this.previousPage}>Previous</a>
      </span>
    )
    const nextButton = ((startNumber + 10) > signatureCount) ? '' : (
      <span className='next'>
        <a onClick={this.nextPage}>Next</a>
      </span>
    )
    return (
      <div>
        <SignatureListPage
          signatures={signatures[page]}
          startNumber={startNumber}
        />
        <div className='pager'>
          {previousButton}
          {nextButton}
        </div>
      </div>
    )
  }
}

SignatureList.propTypes = {
  petitionSlug: PropTypes.string,
  signatureCount: PropTypes.number,
  signatures: PropTypes.object,
  loadSignatures: PropTypes.func
}

const mapStateToProps = (store, ownProps) => ({
  signatures: store.petitionStore.petitionSignatures[ownProps.petitionSlug]
})

const mapDispatchToProps = (dispatch) => ({
  loadSignatures: (petitionSlug, page) =>
    dispatch(loadPetitionSignatures(petitionSlug, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignatureList)
