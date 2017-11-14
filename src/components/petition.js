import React from 'react'
import PropTypes from 'prop-types'

import { text2paraJsx } from '../lib.js'
import { thanksLoader } from '../loaders/petition.js'
import SignatureAddForm from './signature-add-form.js'
import SignatureCount from './signature-count.js'
import SignatureList from './signature-list.js'

class Petition extends React.Component {
  componentDidMount() {
    // lazy-load thanks page component
    thanksLoader()
  }

  render() {
    const { petition: p } = this.props
    const statement = text2paraJsx(p.summary)
    return (
      <div class="container background-moveon-white bump-top-1">
        <div class="row">
          <SignatureAddForm petition={p} />


          <div class="span8 pull-right petition-info-top">
            <div class="percent-95 padding-left-15 form-wrapper responsive padding-bottom-1 padding-left-2 padding-right-3" style="margin-left:-20px; position: relative;">
              <div class="petition-top hidden-phone">

                <a style="float: right;" href="/admin/petition_zoom.html?petition_id=125956">zoom&nbsp;&#x270e;</a>


                <h1 id="petition-title" class="moveon-bright-red big-title">Demand Fox News stop censoring anti-Trump views</h1>

                <p id="by" class="byline lh-20">
                  Petition by
                  <a href="/contact_creator.html?petition_id=125956" class="underline">Tom Steyer</a>
                </p>

                <p id="to-target" class="lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer">To be delivered to
                  <span class="all-targets" style="">
                    <strong>Fox News and President Donald Trump</strong>
                  </span>
              </p>
            </div>

            <div id="pet-statement-box"  class="lh-36 blockquote">
              <h3 class="visible-phone moveon-bright-red">Petition Statement</h3>
              <div id="pet-statement">The movement to impeach Donald Trump is growing -- and Trump and his allies are frantic. Fox News banned my &quot;Need to Impeach&quot; ad from their network. They are trying to silence the movement demanding Congress impeach Trump. Send Fox News a strong message: We will not allow you to silence us.</div>
            </div>

            <div id="therm" class="span7 margin-left-0 bump-top-2">
              <div class="muted">
                There are currently 211,640 signatures.
                <span class="featured pull-right1">
                  NEW goal -
                  We need 225,000 signatures!
                </span>
              </div>

              <div class="progress progress-danger no-bottom-margin">
                <div class="bar" style="width: 94%;"></div>
              </div>
            </div>

          </div>
          <div class="clear"></div>

          <div id="pet-explain" style="margin-left:-20px;" class="background-moveon-white bump-top-1 padding-left-2">
            <div class="widget">
              <div class="widget-top">
                <h3 class="moveon-bright-red padding-bottom-1">Petition Background</h3>
              </div>

               When I launched my &quot;Need to Impeach&quot; effort just a couple weeks ago, Fox News agreed to run an ad. Our dangerous president even watched it and tweeted a personal attack on me. But now, Fox News and President Trump see the strength of our movement and that more Americans than ever agree: It’s time to impeach. Fox News is frantically changing course, refusing to let us keep our ad on their network. We need to send Fox News a strong message: Stop silencing our voices. Run the ad and let viewers make their own decisions.

            </div>

            <div class="widget hidden-phone">
              <div class="widget-top">
                <h3 class="moveon-bright-red padding-bottom-1">Current petition signers</h3>
              </div>

              <div id="pet-signers-loading" class="bump-top-1"><b>Loading...</b></div>
            <div>

            <div id="pet-signers" class="bump-top-1"></div>

            <form id="flag-comment-form" action="/flag_comment.html" method="POST">
              <input id="flag-comment-user-id" type="hidden" name="user_id" value=""/>
            </form>

          </div>

          <script type="text/javascript">
          $(function() { goto_page(1) });
          </script>

        </div>
      </div>

    </div>

          <div className='span8 pull-right petition-info-top'>
            <div className='form-wrapper responsive'>
              <div className='petition-top hidden-phone'>
                <h1 id='petition-title' className='moveon-bright-red big-title'>{p.title}</h1>
              </div>

              <div id='pet-statement-box' className='lh-36 blockquote hidden-phone'>
                <h3 className='visible-phone moveon-bright-red'>Petition Statement</h3>
                <div id='pet-statement'>{statement}</div>
              </div>
              <SignatureCount current={p.signatureCount} goal={p.signatureGoal} />
            </div>

            <div className='petition-top'>
              <p id='to-target' className='lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer'>To be delivered to <span className='all-targets'><strong>
                    {p.target.map((t) => t.name).join(', ')}
              </strong></span></p>
              <p id='by' className='byline lh-20'>Petition by <a href='/contact_creator.html?petition_id=95935' className='underline'>{p.contact_name}</a></p>
            </div>

            <div className='clear'></div>

            <div id='pet-explain' className='background-moveon-white bump-top-1'>
              <div className='widget'>
                <div className='widget-top'>
                  <h3 className='moveon-bright-red'>Petition Background</h3>
                </div>
                <div dangerouslySetInnerHTML={{ __html: p.description }}></div>
              </div>

              <div className='widget'>
                <div className='widget-top'>
                  <h3 className='moveon-bright-red'>Current petition signers</h3>
                </div>

                <SignatureList
                  petitionSlug={p.slug}
                  signatureCount={p.signatureCount}
                />

                <div>
                  <div id='pet-signers' className='bump-top-1'>
                  </div>
                  <form id='flag-comment-form' action='/flag_comment.html' method='POST'>
                    <input id='flag-comment-user-id' type='hidden' name='user_id' value='' />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Petition.propTypes = {
  petition: PropTypes.object.isRequired
}

export default Petition
