import Nav from '../components/nav.js';
import Footer from '../components/footer.js';
import React from 'react';

class Thanks extends React.Component {
  constructor (props) {
    super(props);
    this.state = { petition: null };
  }

  render () {
    if (this.state.petition == null) {
      return (
        <div>
          <Nav />
          <div>test, without petition loaded</div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <div>test, with petition loaded</div>
          <Footer />
        </div>
      );
    }
  }

}

export default Thanks;
