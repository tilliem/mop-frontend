class SignatureCount extends React.Component {
  constructor(props) {
    super(props);
  }

  formatted(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  percent() {
    var number = 0;
    if (this.props.goal > 0) {
      number = 100 * (this.props.current / this.props.goal);
    }
    if (number > 100) {
      number = 100;
    }
    return number.toFixed(2).toString() + '%';
  }

  render() {
    if (typeof this.props.current !== 'undefined') {
      return (
        <div id="therm" className="bump-top-2">
          <div className="progress-status clearfix">
            <div className="progress-stat progress-current">
              <em>Current</em>
              <strong>{this.formatted(this.props.current)}</strong>
            </div>
            <div className="progress-stat progress-goal">
              <em>Goal</em>
              <strong>{this.formatted(this.props.goal)}</strong>
            </div>
          </div>
          <div className="progress progress-danger no-bottom-margin">
            <div className="bar" style={{width: this.percent()}}></div>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default SignatureCount;
