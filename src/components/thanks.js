import React from 'react';
import {connect} from 'react-redux';

class Thanks extends React.Component {

  render () {
    let p = this.props.petition;

    return (
        <div className="container background-moveon-white" role="main">
          Thanks Yo! {p.petition_id}
        </div>
    );
  }
}

Thanks.propTypes = {
  petition: React.PropTypes.object
};

export default Thanks;
