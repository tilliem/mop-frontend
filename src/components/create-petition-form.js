import React from 'react'

import About from './form/instructions/about'
import Statement from './form/instructions/statement'
import TargetCustom from './form/instructions/target-custom'
import TargetNational from './form/instructions/target-national'
import TargetState from './form/instructions/target-state'
import Title from './form/instructions/title'
import CustomTargetSelect from './form/target-select/custom'
import NationalTargetSelect from './form/target-select/national'
import StateTargetSelect from './form/target-select/state'
import StateSelect from './form/state-select'

const instructionsByField = {
  title: <Title />,
  statement: <Statement />,
  'target-national': <TargetNational />,
  'target-state': <TargetState />,
  'target-custom': <TargetCustom />,
  about: <About />
}

class CreatePetitionForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: 'title',
      nationalOpen: false,
      stateOpen: false,
      customOpen: false
    }
  }

  render() {
    const { selected, nationalOpen, stateOpen, customOpen } = this.state
    const instructions = instructionsByField[selected]
    const elementByField = {
      title: this.titleInput,
      statement: this.statementInput,
      'target-national': this.nationalInput,
      'target-state': this.stateInput,
      'target-custom': this.customInput,
      about: this.aboutInput
    }
    const national = (!nationalOpen) ? '' : <NationalTargetSelect />
    const state = (!stateOpen) ? '' : <StateTargetSelect />
    const custom = (!customOpen) ? '' : <CustomTargetSelect />
    const instructionStyle = { position: 'relative', top: -45 }
    const selectedElement = elementByField[selected]
    const bodyTop = document.body.getBoundingClientRect().top + 175

    if (typeof selectedElement !== 'undefined') {
      instructionStyle.top = selectedElement.getBoundingClientRect().top - bodyTop
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='background-moveon-light-gray span6 start-form'>
            <form id='petition_form'>
              <input value='' name='targets' id='targets_json' type='hidden' />
              <input value='' name='skin' type='hidden' />
              <input value='' name='source' type='hidden' />
              <input value='' name='cloned_from_id' type='hidden' />
              <input value='' name='solicit_id' type='hidden' />
              <fieldset id='start'>
                <span className='circle-number'>1</span><span className='lanky-header moveon-dark-blue'> Start your petition!</span>
                <div className='text wrapper big' id='text_name_wrapper'>
                  <input name='name' id='name_field' className='span6' type='text' title='Your Petition Title' placeholder='Petition title' onClick={() => this.setState({ selected: 'title' })} ref={(input) => { this.titleInput = input }} />
                </div>
                <div className='text wrapper' id='text_statement_wrapper'>
                  <textarea className='span6 ' name='text_statement' placeholder='What&rsquo;s the text of your petition? (Try to keep it to 1-2 sentences.)' id='text_statement_field' title='Text of your Petition' onClick={() => this.setState({ selected: 'statement' })} ref={(input) => { this.statementInput = input }}></textarea>
                </div>
              </fieldset>
              <div id='target_wrapper' className='' title='Choosing a Target'>
                <fieldset id='target' className=''>
                  <span className='circle-number'>2</span>
                  <span className='lanky-header moveon-dark-blue'>Who&#39;s the target of your petition?</span>
                  <div className='checkbox wrapper' id='national_group_wrapper' title='Targeting the White House or Congress' onClick={() => this.setState({ selected: 'target-national' })}>
                    <label htmlFor='national_group' id='national_group_label'><input name='national_group_checkbox' id='national_group' type='checkbox' className='reveal_more_options' onClick={() => this.setState(prevState => ({ nationalOpen: !prevState.nationalOpen }))} ref={(input) => { this.nationalInput = input }} /> The White House or Congress</label>
                    {national}
                  </div>
                  <div className='checkbox wrapper' id='state_group_wrapper' title='Targeting Your Governor or State Legislature' onClick={() => this.setState({ selected: 'target-state' })}>
                    <label htmlFor='state_group' id='state_group_label'><input name='state_group' id='state_group' type='checkbox' className='reveal_more_options' onClick={() => this.setState(prevState => ({ stateOpen: !prevState.stateOpen }))} ref={(input) => { this.stateInput = input }} /> Your governor or state legislature</label>
                    {state}
                  </div>
                  <div className='checkbox wrapper' id='checkbox_custom_group_wrapper' onClick={() => this.setState({ selected: 'target-custom' })}>
                    <label htmlFor='custom_group' id='checkbox_custom_group_label'>
                      <input name='checkbox_custom_group' id='custom_group' type='checkbox' className='reveal_more_options' onClick={() => this.setState(prevState => ({ customOpen: !prevState.customOpen }))} ref={(input) => { this.customInput = input }} /> Someone else (like a local official or corporate CEO)
                    </label>
                    {custom}
                  </div>
                </fieldset>
              </div>
              <fieldset id='statement'>
                <span className='circle-number'>3</span>
                <span className='lanky-header moveon-dark-blue'>Why are you starting this petition?</span>
                <div className='text wrapper' id='text_about_wrapper'>
                  <textarea className='span6' name='text_about' id='text_about_field' placeholder='What&rsquo;s your petition about? Have you been personally affected by the issue?' title='Petition Background' onClick={() => this.setState({ selected: 'about' })} ref={(input) => { this.aboutInput = input }}></textarea>
                </div>
              </fieldset>
              <button type='button' className='xl300 center display-block background-moveon-bright-red' value='Preview The Petition' name='submit_button' id='submit_button'>Preview Petition <span className='triangle'>&#9654;</span></button>
            </form>
          </div>
          <div className='span5 hidden-phone' style={instructionStyle}>
            <span className='icon-arrow-red-left hidden-phone' style={{ position: 'relative', top: 88 }}></span>
            <div className='hint'>
              {instructions}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default CreatePetitionForm
