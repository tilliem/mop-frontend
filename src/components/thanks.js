import React from 'react';
import PropTypes from 'prop-types';

class Thanks extends React.Component {

  render () {
    const {petition} = this.props;

    return (
        <div className="container background-moveon-white" role="main">
          Thanks Yo! {petition.petition_id}
        </div>
    );
  }
}

Thanks.propTypes = {
  petition: PropTypes.object
};

export default Thanks;
