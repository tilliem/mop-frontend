"use strict";

/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

import React, {PropTypes} from 'react';
import Nav from './nav.js';
import Footer from './footer.js';

class Wrapper extends React.Component {
	render() {
    return(
      <div>
        <Nav/>

            <main className="main">

                {this.props.children}

            </main>

        <Footer/>
      </div>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.object.isRequired
};

export default Wrapper;
