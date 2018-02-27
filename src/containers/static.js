import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadStaticPage } from '../actions/staticPageActions'

const getId = routes => routes[routes.length - 1].wordpressId

class Static extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadStaticPage(getId(this.props.routes)))
  }
  render() {
    if (!this.props.page) return <div />
    return (
      <div className='container background-moveon-white bump-top-1'>
        <div className='row'>
          <div
            className='span10 offset1'
            dangerouslySetInnerHTML={{
              __html: this.props.page.content.rendered
            }}
          />
        </div>
      </div>
    )
  }
}
function mapStateToProps(store, { routes }) {
  return {
    page: store.staticPageStore[getId(routes)]
  }
}

Static.propTypes = {
  page: PropTypes.object,
  dispatch: PropTypes.func,
  routes: PropTypes.array
}

export default connect(mapStateToProps)(Static)
