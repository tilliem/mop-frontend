import React from 'react'
import DocumentTitle from 'react-document-title'

import CreatePetitionForm from 'LegacyTheme/create-petition-form'

class CreatePetition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'title',
      nationalOpen: false,
      stateOpen: false,
      customOpen: false
    }
    this.setSelected = this.setSelected.bind(this)
    this.setRef = this.setRef.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  setSelected(name) {
    return () => this.setState({ selected: name })
  }

  setRef(name) {
    return input => input && (this[name] = input)
  }
  toggleOpen(section) {
    return () => this.setState(prevState => {
      const prev = prevState[section]
      return { [section]: !prev }
    })
  }

  render() {
    const elementByField = {
      title: this.titleInput,
      statement: this.statementInput,
      'target-national': this.nationalInput,
      'target-state': this.stateInput,
      'target-custom': this.customInput,
      about: this.aboutInput
    }

    const instructionStyle = { position: 'relative', top: -45 }
    const selectedElement = elementByField[this.state.selected]
    const bodyTop = document.body.getBoundingClientRect().top + 175

    if (typeof selectedElement !== 'undefined') {
      instructionStyle.top = selectedElement.getBoundingClientRect().top - bodyTop
    }

    return (
      <DocumentTitle title='MoveOn Petitions - Start your petition!'>
        <div className='moveon-petitions'>
          <CreatePetitionForm
            setSelected={this.setSelected}
            setRef={this.setRef}
            toggleOpen={this.toggleOpen}
            selected={this.state.selected}
            nationalOpen={this.state.nationalOpen}
            stateOpen={this.state.stateOpen}
            customOpen={this.state.customOpen}
            instructionStyle={instructionStyle}
          />
        </div>
      </DocumentTitle>
    )
  }
}

export default CreatePetition
