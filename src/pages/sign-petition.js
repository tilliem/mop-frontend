import Nav from '../components/nav.js';
import Footer from '../components/footer.js';
import Petition from '../components/petition.js';
import 'whatwg-fetch';

let API_URI = process.env.API_URI;

class SignPetition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {petition:null};
  }

  componentWillMount() {
    console.log(this.props.params);
    let urlKey = 'petitions/' + this.props.params.petition_slug;
    if (window.preloadObjects && window.preloadObjects[urlKey]) {
      console.log('using preloadedData');
        this.setState({'petition': window.preloadObjects[urlKey]});
    } else {
      fetch(API_URI+'/api/v1/' + urlKey).then(function(remoteData) {
        this.setState({'petition': remoteData});
      });
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Petition petition={this.state.petition} />
        <Footer />
      </div>
    );
  }

}

export default SignPetition;
