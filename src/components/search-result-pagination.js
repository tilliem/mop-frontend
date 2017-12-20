import React from 'react'


const SearchResultPagination = () => (
  <div className="pagination">
    <ul>
      <li className="disabled"><a href="#" onclick="javascript: return false;">&#171;</a></li>
      <li className="active"><a href="?page=1&amp;">1</a></li>
      <li className=""><a href="?page=2&amp;">2</a></li>
      <li className=""><a href="?page=3&amp;">3</a></li>
      <li className=""><a href="?page=4&amp;">4</a></li>
      <li><a href="?page=2&">&#187;</a></li>
    </ul>

    <p><small>Found 46269 results in 0.007s.</small></p>

  </div>
)


export default SearchResultPagination
