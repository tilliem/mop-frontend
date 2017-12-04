import React from 'react'
import StateSelect from './form/state-select'

const SearchBar = () => (
  <div className='container'>
    <div className='row'>
      <div className='span7 control-group bump-top-1'>
        <form className='search' method='get' action='/find/'>
          <div className='search'>
            <input name='q' placeholder='Search Petitions' type='text' className='margin-right-1 ' />
            <StateSelect />
            <button className='background-moveon-dark-blue margin-left-1' type='submit'>Search</button>
          </div>
        </form>
      </div>
      <p className='lanky-header size-medium-small lh-24 bump-top-1'>Search for petitions by any keyword.</p>
    </div>
  </div>
)


export default SearchBar
