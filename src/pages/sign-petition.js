import Nav from '../components/nav.js';
import Footer from '../components/footer.js';
import Petition from '../components/petition.js';
import 'whatwg-fetch';

class SignPetition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    fetch('https://testpet2.moveon.org/petitions/economic-disparity-campaign')
      .then(function(response) {
        // console.log(response);
        // this.setProp();
      });
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
