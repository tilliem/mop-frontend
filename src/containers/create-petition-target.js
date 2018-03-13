import React from 'react'
import PropTypes from 'prop-types'

import { TargetForm } from 'LegacyTheme/form/target-select'
import NationalTargetSelect from 'LegacyTheme/form/target-select/national'

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

class CreatePetitionTarget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nationalOpen: false,
      stateOpen: false,
      customOpen: false,
      national: NATIONAL
    }

    this.toggleOpen = this.toggleOpen.bind(this)
    this.onSelect = this.onSelect.bind(this)
    this.renderNational = this.renderNational.bind(this)
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
          // Fire onChange with every checked/selected target
          this.props.onChange({
            target: {
              name: 'target',
              value: this.state[group].filter(obj => obj.checked)
            }
          })
      )
    }
  }

  toggleOpen(key) {
    return () => this.setState(prev => ({ [key]: !prev[key] }))
  }

  renderNational() {
    if (!this.state.nationalOpen) return null
    return <NationalTargetSelect selected={this.state.national} onSelect={this.onSelect} />
  }

  render() {
    const { setSelected, setRef } = this.props
    const openVars = {
      stateOpen: this.state.stateOpen,
      customOpen: this.state.customOpen,
      toggleOpen: this.toggleOpen
    }
    return (
      <TargetForm
        setSelected={setSelected}
        setRef={setRef}
        renderNational={this.renderNational}
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

export default CreatePetitionTarget
