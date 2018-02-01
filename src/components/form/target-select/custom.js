import React from 'react'

const StateTargetSelect = () => (
  <div className='more_options'>
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

export default StateTargetSelect
