import React from 'react'
import PropTypes from 'prop-types'

class PetitionFlagForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       display: 'none'
    }
  }

  submitFlag(reason) {
    console.log(reason)
    // TODO:
    // * form submit with val
    // * implement flag.html
  }

  render() {
    const p = this.props.petition
    const flagReasons = [ ['spam', 'Commercial/spam'],
                          ['offensive', 'Offensive'],
                          ['language', 'Profane'],
                          ['hate', 'Hate speech'],
                          ['illegal', 'Illegal'] ]
    const self = this
    return (
      <div>
        <span className='bell'>MoveOn has not yet reviewed this petition. If you agree with it, please sign it!</span>
        <a id="flag" className="" onClick={() => {this.setState({display: 'block'})}} style={{marginLeft:'15px', marginTop:'-5px'}} >
          <i className="icon-flag"></i> flag the petition
        </a>
        <div id="flag-petition-reasons" style={{display: this.state.display}}>
          <span>Choose reason:</span>
          {flagReasons.map( ( [reason, description] ) => (
          <span key={reason}><button className="button background-moveon-bright-red" style={{margin: '2px'}}
                        onClick={() => this.submitFlag(reason)}>{description}</button></span>
          ))}
          <span className="flag-petition-close-item"
                ><a onClick={() => {this.setState({display: 'none'})}}
              className="flag-petition-close"><small>never mind</small></a></span>
        </div>
        <form id="flag-petition-form" method="POST" action="/flag.html">
          <input type="hidden" name="petition_id" value={p.petition_id} />
          <input id="flag-petition-form-reason" type="hidden" name="reason" value="" />
        </form>
      </div>
      )
      }
}

PetitionFlagForm.propTypes = {
  petition: PropTypes.object.isRequired
}

export default PetitionFlagForm
