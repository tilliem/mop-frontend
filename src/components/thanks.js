import React from 'react';
import {connect} from 'react-redux';

class Thanks extends React.Component {

  render () {
    let p = this.props.petition;

    return (
        <div className="container background-moveon-white" role="main">
          Thanks Yo!
        </div>
    );
  }
}

Thanks.propTypes = {
  petition: React.PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) {
  return {};
}

export default connect(mapStateToProps)(Thanks);
