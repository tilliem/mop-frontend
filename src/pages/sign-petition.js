import Nav from '../components/nav.js';
import Footer from '../components/footer.js';
import Petition from '../components/petition.js';
import 'whatwg-fetch';

let API_URI = process.env.API_URI;

class SignPetition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log(this.props.params);
    let loadData = function(response) {
        // console.log(response);
        // this.setProp();
    };
    let urlKey = 'petitions/' + this.props.params.petition_slug;
    if (window.preloadObjects && window.preloadObjects[urlKey]) {
      console.log('using preloadedData');
      loadData(window.preloadObjects[urlKey]);
    } else {
      fetch(API_URI+'/api/v1/' + urlKey).then(loadData);
    }
  }


  render() {
    return (
      <div>
        <Nav />
        <Petition />
        <Footer />
      </div>
    );
  }

}

export default SignPetition;
