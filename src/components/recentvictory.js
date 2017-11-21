import React from 'react'
import PropTypes from 'prop-types'


const imgArticle = {
  width: '75% !important',
}
export default class RecentVictoryList extends React.Component {

  render() {
    return (
      <div id="current-stories" className="span6 widget clearfix pull-left">
        <div className="widget-top clearfix">
          <h3>Recent Victories</h3>
          <a className="more-small" href="http://front.moveon.org/category/victories/">+more</a>
        </div>
        <article className="blurb-block">
          <a href="http://front.moveon.org/category/victories/#.U4z0eK1dUuo">
            <img src="http://front.moveon.org/wp-content/uploads/2014/06/CCMC.So_.Cal_.Summit.2014.04.06.1.jpg" style={imgArticle} className="attachment-featured_thumb wp-post-image" alt="Cal_Summit"/>
            <h4>VICTORY: Gov. Brown Signs Dark Money Disclosure Bill into Law</h4>
          </a>
          <p className="blurb">
            In the wake of the large sums of out-of-state anonymous donations that flooded into California during the 2012 election, the Legislature took up SB27, which would require political nonprofits to identify their donors in California elections. So Trent Lange of the California Clean Money Campaign, along with allies including California Common Cause, Credo Action, Courage Campaign, MoveOn.org, and others, launched a campaign to get the bill passed.
            <a href="http://front.moveon.org/category/victories/#.U4z0eK1dUuo">(Read More)</a>
          </p>
        </article>

        <article className="blurb-block">
          <a href="http://front.moveon.org/victory-hawaii-increases-the-minimum-wage/#.U4z2KK1dUuo">
            <img src="http://front.moveon.org/wp-content/uploads/2014/06/HI.needs_.a.raise_-620x394.jpg" style={imgArticle} className="attachment-featured_thumb wp-post-image" alt="HI_minwage"/>
            <h4>VICTORY: Hawaii Increases the Minimum Wage!</h4>
          </a>
          <p className="blurb">
            When the Hawaii Legislature took up an important bill to raise the minimum wage, Drew Astolfi of the organization Faith Action for Community Equity, along with allies and the Hawaii MoveOn Council, launched a campaign to raise wages for workers in the state.
            <a href="http://front.moveon.org/victory-hawaii-increases-the-minimum-wage/#.U4z2KK1dUuo">(Read More)</a>
          </p>
        </article>

        <article className="blurb-block">
          <a href="http://front.moveon.org/victory-ny-times-works-to-inform-readers-on-budget/?rc=petitionshp">
            <img src="http://moveon.wpengine.netdna-cdn.com/wp-content/uploads/2013/11/NYTimes.jpg" style={imgArticle} className="attachment-featured_thumb wp-post-image" alt="Tribune"/>
            <h4>VICTORY: New York Times Works to Inform Readers on Budget</h4>
          </a>
          <p className="blurb">
            The New York Times' tendency to report on budget numbers without contextualizing them was a problem - especially in light of the recent federal budget crisis. MoveOn member (and former staffer) Daniel Mintz and Robert Naiman of Just Foreign Policy started MoveOn Petitions to Times Public Editor Margaret Sullivan, asking her to institute a policy of always reporting budget numbers with percentages or comparisons.
            <a href="http://front.moveon.org/victory-ny-times-works-to-inform-readers-on-budget/?rc=petitionshp">(Read More)</a>
          </p>
        </article>

        <article className="blurb-block">
          <a href="http://front.moveon.org/victory-governor-corbett-releases-education-dollars-to-philadelphia-schools/?rc=petitionshp">
            <img src="http://moveon.wpengine.netdna-cdn.com/wp-content/uploads/2013/11/Philly.jpg" style={imgArticle} className="attachment-featured_thumb wp-post-image" alt="Tribune" height="200"/>
            <h4>VICTORY: Governor Corbett Releases Education Dollars To Philadelphia Schools</h4>
          </a>
          <p className="blurb">
            In October 2013, a student at one Philadelphia school suffered from an asthma attack that led to her death. If there had been a school nurse on campus that day, she might still be alive. This tragedy motivated Philadelphia parent Jesse Bacon to start a MoveOn Petition to Governor Tom Corbett, asking him to stop withholding $45 million of funding from Philadelphia schools.
            <a href="http://front.moveon.org/victory-governor-corbett-releases-education-dollars-to-philadelphia-schools/?rc=petitionshp">(Read More)</a>
          </p>
        </article>


        <article className="blurb-block">
          <a href="http://front.moveon.org/51832/?rc=petitionshp">
            <img src="http://moveon.wpengine.netdna-cdn.com/wp-content/uploads/2013/09/Los_Angeles_Times_interior_with_globe.1.jpg" style={imgArticle} className="attachment-featured_thumb wp-post-image" alt="Tribune"/>
            <h4>VICTORY: Tribune Papers Spared From Koch Empire</h4>
          </a>
          <p className="blurb">
            When the Tribune Company went up for sale, it was widely reported that the Koch brothers were interested in acquiring its newspapers - including the Los Angeles Times and the Chicago Tribune. The billionaire Kochs and their tea party politics presented a clear threat to independent journalism, so several organizations, including Forecast the Facts, Courage Campaign, and Working Families started MoveOn Petitions asking Tribune Company CEO Peter Liguori not to sell to the Koch brothers.
            <a href="http://front.moveon.org/51832/?rc=petitionshp">(Read More)</a>
          </p>
        </article>


        <article className="blurb-block">
          <a href="http://front.moveon.org/victory-defend-the-vote-campaign-secures-support-for-voting-rights-amendment-act/#.U4z4Ia1dUup">
            <img src="http://front.moveon.org/wp-content/uploads/2014/02/DefendVote-V10.png" style={imgArticle} className="attachment-featured_thumb wp-post-image" alt="voting_rights"/>
            <h4>VICTORY: Defend the Vote Campaign Secures Support for Voting Rights Amendment Act</h4>
          </a>
          <p className="blurb">
            All around the country, voting rights are under attack—but MoveOn members are fighting back by running hundreds of campaigns to defend these critical rights as a part of our Defend the Vote campaign.
            <a href="http://front.moveon.org/victory-defend-the-vote-campaign-secures-support-for-voting-rights-amendment-act/#.U4z4Ia1dUup">(Read More)</a>
          </p>
        </article>
      </div>
    )
  }
}
