import PetitionLoader from '../loaders/petition.js';

class Petition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tite: '', summary: '', target: ''};
  }

  componentWillMount() {
    this.props.petitionLoader().then((deps) => {
      this.SignatureCount = deps.SignatureCount.default;
      this.forceUpdate();
    });
  }

  componentDidMount() {
    this.timer = setTimeout(
      () => this.setStateFromAPI(),
      500
    );
  }

  setStateFromAPI() {
    this.setState({
      title: "Tell U.S. Mayors: Protect Undocumented Immigrants - Declare Your City a Sanctuary of Safety!  #HereToStay",
      summary: "Trump has said he will deport millions, and anti-immigrant harassment is already out of control. It is time to declare America's cities as sanctuaries of safety and not allow local police to do the work of immigration agents. If your city is not already, declare it a sanctuary city. And if it is, commit to do everything in your power to maintain your sanctuary status and protect your undocumented residents from a Trump administration.",
      target: "U.S. Mayors",
      background: "<p>Mayors across the country must stand with their undocumented immigrant residents in this moment of crisis." + "<br /><br />" +
      "Undocumented Immigrants like me are under attack: Donald Trump has already said that in the first 100 days of office he would cancel DACA, a program that provides undocumented youth with work permits and protection from deportation, and begin deporting 2 million undocumented immigrants. But we can change this if we pressure mayors to declare their cities as sanctuaries of safety.</p>" +
      "<p>In a sanctuary city, officials implement policies to restrict local police from turning immigrants over to federal immigration agents and declare in no uncertain terms that immigrants are welcome. Without them, undocumented immigrants like me and my family are left vulnerable to racial profiling, detention and deportation.</p>" +
      "<p>We salute the mayors of cities like Seattle, San Jose, San Francisco, and Oakland who have been quick to stand with their undocumented residents.</p>" +
      "<p>This is just the beginning - we can make our cities and states safe for all!</p>",
      signatureGoal: 225000,
      signatureCount: 224693
    });
  }

  render() {
    if (this.SignatureCount) {
      return (
        <div className="row row-fluid">
          <div className="span8 pull-right petition-info-top">
            <div className="form-wrapper responsive">
              <div className="petition-top hidden-phone">
                <h1 id="petition-title" className="moveon-bright-red big-title">{this.state.title}</h1>
              </div>

              <div id="pet-statement-box" className="lh-36 blockquote hidden-phone">
                <h3 className="visible-phone moveon-bright-red">Petition Statement</h3>
                <div id="pet-statement">{this.state.summary}</div>
              </div>

              <this.SignatureCount current={this.state.signatureCount} goal={this.state.signatureGoal} />
            </div>

            <div className="petition-top">
              <p id="to-target" className="lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer">To be delivered to <span className="all-targets"><strong>{this.state.target}</strong></span></p>
              <p id="by" className="byline lh-20">Petition by <a href="/contact_creator.html?petition_id=95935" className="underline">Jo Comerford</a></p>
            </div>

            <div className="clear"></div>

            <div id="pet-explain" className="background-moveon-white bump-top-1">
              <div className="widget">
                <div className="widget-top">
                  <h3 className="moveon-bright-red">Petition Background</h3>
                </div>
                <div dangerouslySetInnerHTML={{__html: this.state.background}}></div>
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
      );
    }
    else {
      return (
        <div className="row row-fluid">
          <div className="span8 pull-right petition-info-top">
            <div className="form-wrapper responsive">
              <div className="petition-top hidden-phone">
                <h1 id="petition-title" className="moveon-bright-red big-title">{this.state.title}</h1>
              </div>

              <div id="pet-statement-box" className="lh-36 blockquote hidden-phone">
                <h3 className="visible-phone moveon-bright-red">Petition Statement</h3>
                <div id="pet-statement">{this.state.summary}</div>
              </div>

            </div>

            <div className="petition-top">
              <p id="to-target" className="lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer">To be delivered to <span className="all-targets"><strong>{this.state.target}</strong></span></p>
              <p id="by" className="byline lh-20">Petition by <a href="/contact_creator.html?petition_id=95935" className="underline">Jo Comerford</a></p>
            </div>

            <div className="clear"></div>

            <div id="pet-explain" className="background-moveon-white bump-top-1">
              <div className="widget">
                <div className="widget-top">
                  <h3 className="moveon-bright-red">Petition Background</h3>
                </div>
                <div dangerouslySetInnerHTML={{__html: this.state.background}}></div>
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
      );
    }
  }

}

Petition.propTypes = {
  petitionLoader: React.PropTypes.func.isRequired
};

Petition.defaultProps = {
  petitionLoader: PetitionLoader
};

export default Petition;
