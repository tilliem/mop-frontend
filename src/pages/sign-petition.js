import 'whatwg-fetch';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import React from 'react';

import Nav from '../components/nav.js';
import Footer from '../components/footer.js';
import Petition from '../components/petition.js';
import {actions as petitionActions} from '../actions/petitionActions.js';

class SignPetition extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.actions.loadPetition(this.props.params.petition_slug)
  }

  render () {
    console.log('rendering', this.props)
    if (!this.props.petition) {
      return (
        <div>
          <Nav />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <Petition petition={this.props.petition} />
          <Footer />
        </div>
      );
    }
  }

}

function mapStateToProps(state, ownProps) {
  console.log('sign-petition.js mapStatetoProps', state);
  return {
    'petition': state.petitionStore.petitions && state.petitionStore.petitions[ownProps.params.petition_slug]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(petitionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignPetition);
