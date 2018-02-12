import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'

import Config from '../../../config.js'

const container = {
  marginTop: '-3px',
  padding: '2px',
  borderRadius: '4px',
  position: 'absolute',
  border: '1px solid #aaaaaa',
  background: '#fff',
  backgroundImage: 'url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/themes/base/images/ui-bg_flat_75_ffffff_40x100.png) 50% 50% repeat-x',
  color: '#222222',
  fontFamily: 'Verdana,Arial,sans-serif',
  fontSize: '1.1em',
  cursor: 'default'
}

const hover = {
  border: '1px solid #999999',
  background: '#dadada url(http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/themes/base/images/ui-bg_glass_75_dadada_1x400.png) 50% 50% repeat-x',
  color: '#212121',
  margin: '-1px'
}

const itemStyle = {
  borderRadius: '4px',
  padding: '.2em .4em',
  lineHeight: 1.5
}

const itemHover = { ...itemStyle, ...hover }

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
                    style={highlightedIndex === index ? itemHover : itemStyle}
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
