import React from 'react';

import 'whatwg-fetch';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Nav from '../components/nav.js';
import Footer from '../components/footer.js';
import Petition from '../components/petition.js';
import {appLocation} from '../routes.js';
import {actions as petitionActions} from '../actions/petitionActions.js';

class SignPetition extends React.Component {

  componentWillMount () {
    this.props.actions.loadPetition(this.props.params.petition_slug);
  }

  render () {
    if (this.props.sign_success === 'success') {
      appLocation.push('thanks.html?petition_id=' + this.props.petition.petition_id);
    }

    console.log('rendering', this.props);
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

SignPetition.propTypes = {
  petition: React.PropTypes.object
}

function mapStateToProps (store, ownProps) {
  console.log('sign-petition.js mapStatetoProps', store);
  var petition = store.petitionStore.petitions[ownProps.params.petition_slug];
  return {
    'petition': petition,
    'sign_success': petition && store.petitionStore.signatureStatus[petition.petition_id]
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    actions: bindActionCreators(petitionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignPetition);
