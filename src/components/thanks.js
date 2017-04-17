import React from 'react';
import PropTypes from 'prop-types';

class Thanks extends React.Component {

  textSelect () {
    this.focus();
    this.select();
    record_share_click('email', 's.em.cp');
  }

  render () {
    const {petition} = this.props;

    return (
      <div className="container" role="main">
        <div className="row share-header">
          <div className="col-sm-6 area">
            <h1 className="heading-xl">Thank You!</h1>
            <p>Now you can <strong className="text-info">multiply your impact</strong> by spreading the word.</p>
          </div>
          <div className="col-sm-6 share-embed">
            <div className="percent-90 padding-left-15 bump-top-1">
              <h3 className="heading-sm">Embed This petition</h3>
              <div id="embedbox" className="codebox percent-95 hidden-phone moveon-track-click">
              &lt;iframe src="http://petitions.moveon.org/embed/widget.html?v=3&amp;name=NAMEHERE" className="moveon-petition" id="petition-embed" width="300px" height="500px"&gt;&lt;/iframe&gt;
              </div>
            </div>
          </div>
        </div>

        <div className="row share-group petition-share clearfix">
          <div className="share-section col-xs-12 col-sm-12 col-lg-4">
            <h4>Tell your friends:</h4>
            <div className="row">
              <div className="share-button col-xs-12 col-sm-6 col-lg-12">
                <p><a className="btn-share btn-icon btn-facebook" href="/share/link?type=fb&amp;page_name=ohio-against-hate-signup_copy&amp;action_id=&amp;akid=None" target="_blank">Share on Facebook</a></p>
              </div>
              <div className="share-button col-xs-12 col-sm-6 col-lg-12">
                <p><a className="btn-share btn-icon btn-twitter" href="/share/link?type=tw&amp;page_name=ohio-against-hate-signup_copy&amp;action_id=&amp;akid=None" target="_blank">Share on Twitter</a></p>
              </div>
            </div>
          </div>
          <div className="share-section share-section-email col-xs-12 col-sm-12 col-lg-8">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-lg-6">
                <h4 className="email-label">Email your friends, family and colleagues:</h4>
                <p><a id="email-button" href="MAILTOHERE" className="btn-share btn-email btn-icon">Email your friends</a></p>
              </div>
              <div className="share-email-message col-xs-12 col-sm-12 col-lg-6">
                <label className="disclaimer" htmlFor="email-textarea">Or copy and paste the text below into a message:</label>
                <textarea className="share-email" id="email-textarea" onClick={this.textSelect} defaultValue="MESSAGE HERE"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 area">
            <form className="floating-progress ak-hidden-mobile" name="taf">
              <input type="hidden" name="page" value="ohio-against-hate-signup_copy" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Thanks.propTypes = {
  petition: PropTypes.object
};

export default Thanks;
