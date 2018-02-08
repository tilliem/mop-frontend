import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'

import Config from '../../../config.js'

const container = {
  borderRadius: '4px',
  position: 'absolute',
  border: '1px solid #aaaaaa',
  background: '#fff'
}

const hover = {
  border: '1px solid #999999',
  background: '#dadada',
  borderRadius: '4px'
}

const filter = (items, inputValue = '') =>
  items.filter(i => i.name.toLowerCase().includes(inputValue.toLowerCase()))

class LegislatorAutocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      alerted: false
    }

    this.getLegislators = this.getLegislators.bind(this)
  }

  getLegislators() {
    if (this.state.items.length) return true // Don't refetch things we aleady have

    const { group, state } = this.props
    let url = `${Config.LEGACY_API_URI}/target_search.html?group=${group}`

    if (group === 'state') {
      if (!state) return false
      url += `&state=${state}`
    }

    return fetch(url)
      .then(res => res.json())
      .then(items => this.setState({ items }))
  }

  render() {
    const { onChange, group, state } = this.props
    const { items } = this.state
    return (
      <Downshift
        onChange={onChange}
        itemToString={item => (item ? item.name : '')}
        render={({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex
        }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Or, enter a specific legislator’s name',
                onFocus: this.getLegislators,
                onChange: () => group === 'state' &&
                  !state &&
                  alert('Please select your state above.')

              })}
            />
            {isOpen ? (
              <div style={container}>
                {filter(items, inputValue).map((item, index) => (
                  <div
                    {...getItemProps({ item })}
                    key={item.value}
                    style={highlightedIndex === index ? hover : {}}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      />
    )
  }
}

LegislatorAutocomplete.propTypes = {
  onChange: PropTypes.func,
  state: PropTypes.string,
  group: PropTypes.string.isRequired
}

export default LegislatorAutocomplete
