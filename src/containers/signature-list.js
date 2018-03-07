import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SignatureListPage from 'LegacyTheme/signature-list-page.js'
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
    const { loadSignatures, signatures, petition } = this.props
    if (typeof signatures === 'undefined' || typeof signatures[page] === 'undefined') {
      loadSignatures(petition, page)
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
    const previousButton = ((page < 2) ? '' : (
      <li className='previous'>
        <a onClick={this.previousPage}>&lt; &lt; Previous</a>
      </li>
    ))
    const nextButton = (((startNumber + 10) > signatureCount) ? '' :
      <li className='next'>
        <a onClick={this.nextPage}>Next &gt; &gt;</a>
      </li>
    )
    return (
      <div>
        <SignatureListPage
          signatures={signatures[page]}
          startNumber={startNumber}
        />
        <ul className='pager'>
          {previousButton}
          {nextButton}
        </ul>
      </div>
    )
  }
}

SignatureList.propTypes = {
  petition: PropTypes.object,
  signatureCount: PropTypes.number,
  signatures: PropTypes.object,
  loadSignatures: PropTypes.func
}

const mapStateToProps = (store, ownProps) => ({
  signatures: store.petitionStore.petitionSignatures[ownProps.petition.slug]
})

const mapDispatchToProps = (dispatch) => ({
  loadSignatures: (petition, page) =>
    dispatch(loadPetitionSignatures(petition, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignatureList)
