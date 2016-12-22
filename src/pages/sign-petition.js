import Nav from '../components/nav.js';
import Footer from '../components/footer.js';
import Petition from '../components/petition.js';

class SignPetition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
