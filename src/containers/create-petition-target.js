import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadTargets } from '../actions/createPetitionActions'

import { TargetForm } from 'LegacyTheme/form/target-select'
import NationalTargetSelect from 'LegacyTheme/form/target-select/national'
import StateTargetSelect from 'LegacyTheme/form/target-select/state'
import { getStateFullName } from '../lib'

const NATIONAL = [
  {
    label: 'The entire U.S. House',
    default: true,
    checked: false
  },
  {
    label: 'The entire U.S. Senate',
    default: true,
    checked: false
  },
  {
    label: 'President Donald Trump',
    default: true,
    checked: false
  }
]

const STATE = [
  {
    label: 'The entire __STATE__ House',
    default: true,
    checked: false
  },
  {
    label: 'The entire __STATE__ Senate',
    default: true,
    checked: false
  },
  {
    label: 'Governor of __STATE__',
    default: true,
    checked: false
  }
]

class CreatePetitionTarget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nationalOpen: false,
      stateOpen: false,
      customOpen: false,
      national: NATIONAL,
      geoState: null,
      geoStateSelected: []
    }

    this.toggleOpen = this.toggleOpen.bind(this)
    this.onSelect = this.onSelect.bind(this)
    this.getAllCheckedTargets = this.getAllCheckedTargets.bind(this)
    this.renderNational = this.renderNational.bind(this)
    this.renderGeoState = this.renderGeoState.bind(this)
  }

  componentDidMount() {
    // Preload congress for autocomplete
    this.props.dispatch(loadTargets('national'))
  }

  onSelect(group) {
    return target => {
      if (!target.label) return

      this.setState(
        state => {
          const newGroup = [...state[group]]
          // Try to up the existing index by label
          const existing = newGroup.findIndex(old => old.label === target.label)

          if (existing === -1) {
            // Add it if the target isn't in the list
            newGroup.push(target)
          } else {
            // Else replace the target with new data ("checked" may have changed)
            newGroup[existing] = target
          }
          return { [group]: newGroup }
        },
        () =>
          this.props.onChange({
            target: {
              name: 'target',
              value: this.getAllCheckedTargets()
            }
          })
      )
    }
  }

  getAllCheckedTargets() {
    const groups = [this.state.national, this.state.geoStateSelected]
    return groups.reduce(
      (acc, group) => [...acc, ...group.filter(obj => obj.checked)],
      []
    )
  }

  toggleOpen(key) {
    return () => this.setState(prev => ({ [key]: !prev[key] }))
  }

  renderNational() {
    const { nationalOpen, national } = this.state
    if (!nationalOpen) return null
    return (
      <NationalTargetSelect
        selected={national}
        onSelect={this.onSelect('national')}
      />
    )
  }

  renderGeoState() {
    const { stateOpen, geoState, geoStateSelected } = this.state
    if (!stateOpen) return null
    return (
      <StateTargetSelect
        selected={geoStateSelected}
        onSelect={this.onSelect('geoStateSelected')}
        geoState={geoState}
        onChangeGeoState={event => {
          const { value } = event.target
          this.props.dispatch(loadTargets('state', value))
          this.setState({
            geoState: value,
            geoStateSelected: STATE.map(obj => ({
              ...obj,
              label: obj.label.replace('__STATE__', getStateFullName(value))
            }))
          })
        }}
      />
    )
  }

  render() {
    const { setSelected, setRef } = this.props
    const openVars = {
      customOpen: this.state.customOpen,
      toggleOpen: this.toggleOpen
    }
    return (
      <TargetForm
        setSelected={setSelected}
        setRef={setRef}
        renderNational={this.renderNational}
        renderGeoState={this.renderGeoState}
        {...openVars}
      />
    )
  }
}

CreatePetitionTarget.propTypes = {
  setSelected: PropTypes.func,
  setRef: PropTypes.func,
  onChange: PropTypes.func,
  dispatch: PropTypes.func
}

export default connect()(CreatePetitionTarget)
