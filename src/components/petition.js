import React from 'react';
import PetitionLoader from '../loaders/petition.js';

function text2paras (str) {
  return str.split(/\n+/);
}

class Petition extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    this.timer = setTimeout(function () {
      // do non-blocking things while loader is called
    }, 500);
    // after we show the petition, THEN we can load Signature Count
    // for patterns where we need the SignatureCount module first, then this should
    // be in componentWillMount
    this.props.petitionLoader().then((deps) => {
      this.SignatureCount = deps.SignatureCount.default;
      this.forceUpdate();
    });
  }

  render () {
    let p = this.props.petition;

    return (
        <div className="container background-moveon-white" role="main">
          <div className="row row-fluid">
            <div className="span8 pull-right petition-info-top">
              <div className="form-wrapper responsive">
                <div className="petition-top hidden-phone">
                  <h1 id="petition-title" className="moveon-bright-red big-title">{p.title}</h1>
                </div>

                <div id="pet-statement-box" className="lh-36 blockquote hidden-phone">
                  <h3 className="visible-phone moveon-bright-red">Petition Statement</h3>
                  <div id="pet-statement">{text2paras(p.summary).map(
                    (para) =>
                    <p>{para}</p>
                    )}
                  </div>
                </div>
                { ((this.SignatureCount)
                ? <this.SignatureCount current={p.signatureCount} goal={p.signatureGoal} />
                : '')
                }
              </div>

              <div className="petition-top">
                <p id="to-target" className="lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer">To be delivered to <span className="all-targets"><strong>
                      {p.target.map((t) => t.name).join(', ')}
                </strong></span></p>
                <p id="by" className="byline lh-20">Petition by <a href="/contact_creator.html?petition_id=95935" className="underline">{p.contact_name}</a></p>
              </div>

              <div className="clear"></div>

              <div id="pet-explain" className="background-moveon-white bump-top-1">
                <div className="widget">
                  <div className="widget-top">
                    <h3 className="moveon-bright-red">Petition Background</h3>
                  </div>
                  <div dangerouslySetInnerHTML={{__html: p.description}}></div>
                </div>

                <div className="widget">
                  <div className="widget-top">
                    <h3 className="moveon-bright-red">Current petition signers</h3>
                  </div>
                  <div id="pet-signers-loading" className="bump-top-1"><b>Loading...</b></div>

                  <div>
                    <div id="pet-signers" className="bump-top-1">
                    </div>
                    <form id="flag-comment-form" action="/flag_comment.html" method="POST">
                      <input id="flag-comment-user-id" type="hidden" name="user_id" value=""/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Petition.propTypes = {
  petitionLoader: React.PropTypes.func.isRequired,
  petition: React.PropTypes.object.isRequired
};

Petition.defaultProps = {
  petitionLoader: PetitionLoader
};

export default Petition;
