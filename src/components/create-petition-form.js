import React from 'react'

import StateSelect from './form/state-select'

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
    const elementByField = {
      title: this.titleInput,
      statement: this.statementInput,
      'target-national': this.nationalInput,
      'target-state': this.stateInput,
      'target-custom': this.customInput,
      about: this.aboutInput
    }
    const instructionsByField = {
      title: (
        <div>
          <h4>What is the name of your petition?</h4>
          <p>Your title should be brief, like a newspaper headline.</p>
          <h4>Example:</h4>
          <p>Mayor Jones: Save Dewey Elementary School</p>
        </div>
      ),
      statement: (
        <div>
          <h4>Text of your Petition</h4>
          <p>This is the message that petition signers are actually signing, to be delivered to the decision-maker. You will get a lot more signers if your message is short and sweet&mdash;one or two sentences at the most. The petition statement is NOT the place to make a detailed persuasive argument for your position.</p>
          <p><strong>Example:</strong> &ldquo;Stop the proposed cuts in funding for Dewey Elementary School.&rdquo;</p>
        </div>
      ),
      'target-national': (
        <div>
          <h4>Targeting the White House or Congress</h4>
          <p>If you choose <strong>The entire U.S. House</strong>, then your petition signers will be asked to sign a petition addressed to their individual representative in the U.S. House of Representatives.</p>
          <p>If you choose <strong>The entire U.S. Senate</strong>, then your petition signers will be asked to sign a petition addressed to their state's U.S. Senators.</p><p>If you choose <strong>President Donald Trump</strong>, your petition signatures will be addressed to President Donald Trump.</p>
          <p>If your petition should be addressed to <strong>a specific legislator</strong>, type his or her name in the text area. Be sure to check the spelling and use the individual&rsquo;s proper title.</p>
        </div>
      ),
      'target-state': (
        <div>
          <h4>Targeting Your Governor or State Legislature</h4>
          <p>If you choose <strong>The entire State House</strong>, then your petition signers will be asked to sign a petition addressed to their individual representative in the state house of representatives.</p>
          <p>If you choose <strong>The entire State Senate</strong>, then your petition signers will be asked to sign a petition addressed to their individual representative in the state senate.</p>
          <p>If you choose <strong>Governor of State</strong>, your petition signatures will be addressed to your state&rsquo;s governor.</p>
          <p>If your petition should be addressed to <strong>a specific legislator</strong>, type his or her name in the text area. Be sure to check the spelling and use the individual&rsquo;s proper title.</p>
        </div>
      ),
      'target-custom': (
        <div>
          <h4>Choosing a Target</h4>
          <p>When deciding who should receive your petition, think about <strong>who actually has the power</strong> to solve the problem or make the decision you want. Please be sure to check the spelling and use the individual&rsquo;s proper title.</p>
          <p>If there are multiple people who may be able to solve the problem, focus on <strong>the person who is most likely to be influenced by public opinion</strong>. For instance, an elected official is usually a better target than an unelected judge.</p>
          <p>It&rsquo;s best if you <strong>send your petition to a human being</strong>. For instance, it&rsquo;s better to address your petition to Walmart CEO Lee Scott than Walmart the corporation.</p>
        </div>
      ),
      about: (
        <div>
          <h4>Petition Background</h4>
          <p>In 2-3 sentences, why should people be concerned about this issue? Is there a deadline? Have you been <i>personally</i> affected by the issue?</p>
          <h4>Example:</h4>
          <p>&ldquo;My daughter Maria attends Dewey Elementary School, which is about to lose 10 teachers and funding for activities like chess club. Our children's education should be our top priority, and these cuts should be stopped.&rdquo;</p>
        </div>
      )
    }
    const instructions = instructionsByField[selected]
    const national = (!nationalOpen) ? '' : (
      <div>
        <div id='national_group_checkboxes'>
          <div className='checkbox wrapper' id='target_house_wrapper'>
            <label htmlFor='target_house' id='target_house_label'>
              <input name='target_house_checkbox' id='target_house' type='checkbox' /> The entire U.S. House
            </label>
          </div>
          <div className='checkbox wrapper' id='target_senate_wrapper'>
            <label htmlFor='target_senate' id='target_senate_label'>
              <input name='target_senate_checkbox' id='target_senate' type='checkbox' /> The entire U.S. Senate
            </label>
          </div>
          <div className='checkbox wrapper' id='target_president_wrapper'>
            <label htmlFor='target_president' id='target_president_label'>
              <input name='target_president_checkbox' id='target_president' type='checkbox' /> President Donald Trump
            </label>
          </div>
        </div>
        <div className='autocomplete_selected' id='national_group_autocomplete_selected'></div>
        <div id='national_group_autocomplete_wrapper' className='autocomplete_wrapper text wrapper small'>
          <input name='national_group_autocomplete' type='text' className='text autocomplete' id='national_group_autocomplete' placeholder="Or, enter a specific legislator's name" />
        </div>
      </div>
    )
    const state = (!stateOpen) ? '' : (
      <div>
        <div className='select wrapper' id='select_target_state_wrapper'>
          <label htmlFor='select_target_state' id='select_target_state_label'>Pick your state</label>
          <StateSelect
            name='select_target_state'
            id='state'
            className=''
          />
        </div>
        <div id='state_group_checkboxes'>
          <div className='checkbox wrapper' id='checkbox_state_house_wrapper'>
            <label htmlFor='target_statehouse' id='checkbox_state_house_label'>
              <input name='target_statehouse_field' id='target_statehouse' type='checkbox' /> The entire <span className='state_name'>State</span> House
            </label>
          </div>
          <div className='checkbox wrapper' id='checkbox_state_senate_wrapper'>
            <label htmlFor='target_statesenate' id='checkbox_state_senate_label'>
              <input name='target_statesenate_field' id='target_statesenate' type='checkbox' /> The entire <span className='state_name'>State</span> Senate
            </label>
          </div>
          <div className='checkbox wrapper' id='checkbox_state_governor_wrapper'>
            <label htmlFor='target_governor' id='checkbox_state_governor_label'>
              <input name='target_governor_field' id='target_governor' type='checkbox' /> Governor of <span className='state_name'>State</span>
            </label>
          </div>
        </div>
        <div className='autocomplete_selected' id='state_group_autocomplete_selected'></div>
        <div id='state_group_autocomplete_wrapper' className='autocomplete_wrapper text wrapper small'>
          <input name='state_group_autocomplete' type='text' className='text autocomplete' id='state_group_autocomplete' placeholder="Or, enter a specific legislator's name" />
        </div>
      </div>
    )
    const custom = (!customOpen) ? '' : (
      <div>
        <div id='selected_targets_div' className='selected_targets'></div>
        <div id='more_custom_group'>
          <div className='text wrapper small' id='text_custom_group_name_wrapper'>
            <input name='text_custom_group_name' id='custom_name' className='text' type='text' placeholder='Name' />
          </div>
          <div className='text wrapper small' id='text_custom_group_email_wrapper'>
            <input name='text_custom_group_email' id='custom_email' className='text' type='text' placeholder='Email Address (optional)' />
          </div>
          <div className='text wrapper small' id='text_custom_group_title_wrapper'>
            <input name='text_custom_group_title' id='custom_title' className='text' type='text' placeholder='Title or Position (optional)' />
          </div>
          <div id='someone_else_add'>
            <a href='#' className='btn' id='add_this_target'>Add another target</a>
          </div>
        </div>
      </div>
    )
    const arrowStyle = { position: 'relative', top: 88 }
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
            <span className='icon-arrow-red-left hidden-phone' style={arrowStyle}></span>
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
