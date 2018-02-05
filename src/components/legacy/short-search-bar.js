import React from 'react'

const ShortSearchBar = ({submit, query, change}) =>
  <div>
    <form className='form-vertical' onSubmit={submit}>
      <div className='search'>
        <input name='q' type='text' id='search-box2' className='margin-top-0 margin-right-2' value={query} onChange={change} />
        <button type='submit' className='background-moveon-dark-blue'> Search</button>
      </div>
    </form>
  </div>

export default ShortSearchBar
