import React from 'react'
import PropTypes from 'prop-types'
import { browserHistory, withRouter } from 'react-router'
import { searchPetitions } from '../actions/petitionActions.js'

import StateSelect from './form/state-select'

const smallStateSelectStyle = {
  width: '20%',
  marginRight: '5px'
}

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query: '',
      select_state: ''
    }
  }
  componentWillMount() {
    const self = this
    const { dispatch, query, history } = this.props
  }

  selectQuery(e) {
    e.preventDefault()
    const q = e.target.value
    this.setState({
      query: q
    })
    console.log('this.state.query:', this.state.query);
  }

  selectState(e){
    e.preventDefault()
    let selectedState = e.target.value
    this.setState({
      select_state: selectedState
    })
    console.log('this.state.select_state', this.state.select_state);
  }

  submitQuery(e){
    const query = this.state.query
    const selState = this.state.select_state

    let targetValue = document.getElementById('searchValue').value

    debugger;

    if(query != '' && selState === ''){
      console.log('this.props.router:', this.props.router);
      this.setState({
        query: targetValue
      })
      this.props.router.push('/find/?query=' + `${this.state.query}`)
    } else if(query != '' && selState === ''){

      this.props.router.push(`${this.state.query}`)
    } else if(query == '' && selState === ''){
      console.log('this.props.router:', this.props.router);
      this.setState({
        query: targetValue
      })
      this.props.router.push('find/?query=' + `${this.state.query}`)
    } else {
      console.log('this.props.router:', this.props.router);
      this.props.router.push('find/?query=' + `${this.state.query}` + '&' + 'state=' + `${this.state.select_state}`)
    }

    searchPetitions(query)
    e.preventDefault()
  }


  render() {
    const { size, selectedState } = this.props
    console.log('selectedState:', selectedState);

    const longSearchBar = (
      <div className='container'>
        <div className='row'>
          <div className='span7 control-group bump-top-1'>
            <form className='search'>
              <div className='search'>
                <input id='searchValue' placeholder='Search Petitions' onChange={this.selectQuery.bind(this)} type='text' className='margin-right-1 ' />
                <StateSelect selectText='All States' style={smallStateSelectStyle} onChange={this.selectState.bind(this)} />
                <button type="button" onClick={this.submitQuery.bind(this)} className='background-moveon-dark-blue margin-left-1'>Search</button>
              </div>
            </form>
          </div>
          <p className='lanky-header size-medium-small lh-24 bump-top-1'>Search for petitions by any keyword.</p>
        </div>
      </div>
    )

    const shortSearchBar = (
      <div id='search-form-div'>
        <form className='form-vertical'>
          <div className='search'>
            <input id='searchValue' name='query' type='text' onChange={this.selectQuery.bind(this)} className='margin-top-0 margin-right-2' />
            <button type="button" onClick={this.submitQuery.bind(this)} className='background-moveon-dark-blue'>Search</button>
          </div>
          <div className='clear'></div>
        </form>
      </div>
    )

    return (
      <div>
        {size === 'long' ? longSearchBar : shortSearchBar}
      </div>
    )
  }
}

SearchBar.propTypes = {
  size: PropTypes.string,
  router: PropTypes.object
}

const mapDispatchToProps = (dispatch) => ({
  searchPetitions: (query) =>
    dispatch(searchPetitions(query))
})

export default withRouter(SearchBar)
