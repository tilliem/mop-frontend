import React from 'react'

const billboardButton = {
  fontSize: '90%'
}

export default class BillBoard extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="span12 billboard-background bump-bottom-1 clearfix">
            <div className="billboard-video text-center center clearfix">
                <div className="billboard-content">
                  <span className="billboard-video">
                    <iframe width="500" height="380" src="//www.youtube.com/embed/oMHH7FL66fo" frameBorder="0" allowFullScreen></iframe>
                  </span>
                </div>
              <div className="billboard-text">
                <h1 className="white big-title">People Powered Petitions</h1>
                <p className="white size-medium-large">There are more than 8 million MoveOn members. Tap into our shared people power and create progressive change.</p>
                <a href="/create_start.html?source=petitionshomepage" className="button button-xl background-moveon-bright-red" style={billboardButton}>
                  Start a Petition Campaign
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
