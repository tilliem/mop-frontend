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
    const {dispatch, params} = this.props;
    dispatch(petitionActions.loadPetition(params.petition_slug));
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('sign-petition.componentWillUpdate', nextProps, nextState);
    if (nextProps.sign_success === 'success') {
      appLocation.push('thanks.html?petition_id='
                       + nextProps.petition.petition_id
                       + '&name=' + nextProps.petition.name
                      );
    }
  }

  render () {
    console.log('rendering', this.props);
    if (!this.props.petition) {
      return (
        <div>
        </div>
      );
    } else {
      return (
        <div>
          <Petition petition={this.props.petition} />
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

export default connect(mapStateToProps)(SignPetition);
