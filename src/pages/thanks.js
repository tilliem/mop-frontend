import React from 'react';

import {ThanksLoader} from '../loaders/petition.js';

class ThanksPage extends React.Component {
  componentWillMount () {
    let self = this;
    ThanksLoader().then((deps) => {
      self.Thanks = deps.Thanks.default;
      self.forceUpdate();
    })
  }

  render () {
    let x = {'foo': 'lbah'};
    return (
        <div>
          <div>test loaded</div>
        { (this.Thanks ?
           <this.Thanks petition={x} />
           : '')}
        </div>
    );
  }

}

export default ThanksPage;
