import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { flagPetition } from '../actions/petitionActions'
import { PetitionFlag } from 'Theme/petition-flag'

class PetitionFlagForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      flagged: false
    }
    this.submitFlag = this.submitFlag.bind(this)
  }

  submitFlag(reason) {
    const { petition, dispatch } = this.props
    dispatch(flagPetition(petition.petition_id, reason))
    this.setState({ flagged: true })
  }

  render() {
    return (
      <PetitionFlag
        petition={this.props.petition}
        reasonsArray={[
          ['spam', 'Commercial/spam'],
          ['offensive', 'Offensive'],
          ['language', 'Profane'],
          ['hate', 'Hate speech'],
          ['illegal', 'Illegal']
        ]}
        isOpen={this.state.open}
        setOpen={() => this.setState({ open: true })}
        setClosed={() => this.setState({ open: false })}
        flagged={this.state.flagged}
        submitFlag={this.submitFlag}
      />
    )
  }
}

PetitionFlagForm.propTypes = {
  petition: PropTypes.object.isRequired,
  dispatch: PropTypes.func
}

export default connect()(PetitionFlagForm)
export const WrappedComponent = PetitionFlagForm
