import React from 'react'
import PropTypes from 'prop-types'

import { Victories as VictoriesComponent } from 'Theme/victories'

const victories = [
  {
    link: 'https://front.moveon.org/category/victories/#.U4z0eK1dUuo',
    image: {
      src:
        'https://front.moveon.org/wp-content/uploads/2014/06/CCMC.So_.Cal_.Summit.2014.04.06.1.jpg',
      alt: 'Cal_Summit'
    },
    title: 'VICTORY: Gov. Brown Signs Dark Money Disclosure Bill into Law',
    text: `In the wake of the large sums of out-of-state anonymous donations that
        flooded into California during the 2012 election, the Legislature took
        up SB27, which would require political nonprofits to identify their
        donors in California elections. So Trent Lange of the California Clean
        Money Campaign, along with allies including California Common Cause,
        Credo Action, Courage Campaign, MoveOn.org, and others, launched a
        campaign to get the bill passed.`
  },
  {
    link:
      'https://front.moveon.org/victory-hawaii-increases-the-minimum-wage/#.U4z2KK1dUuo',
    image: {
      src:
        'https://front.moveon.org/wp-content/uploads/2014/06/HI.needs_.a.raise_-620x394.jpg',
      alt: 'HI_minwage'
    },
    title: 'VICTORY: Hawaii Increases the Minimum Wage!',
    text: `When the Hawaii Legislature took up an important bill to raise the
        minimum wage, Drew Astolfi of the organization Faith Action for
        Community Equity, along with allies and the Hawaii MoveOn Council,
        launched a campaign to raise wages for workers in the state.`
  },
  {
    link:
      'https://front.moveon.org/victory-ny-times-works-to-inform-readers-on-budget/?rc=petitionshp',
    image: {
      src: 'https://front.moveon.org/wp-content/uploads/2013/11/NYTimes.jpg',
      alt: 'Tribune'
    },
    title: 'VICTORY: New York Times Works to Inform Readers on Budget',
    text: `The New York Times&#39; tendency to report on budget numbers without
        contextualizing them was a problem - especially in light of the recent
        federal budget crisis. MoveOn member (and former staffer) Daniel Mintz
        and Robert Naiman of Just Foreign Policy started MoveOn Petitions to
        Times Public Editor Margaret Sullivan, asking her to institute a policy
        of always reporting budget numbers with percentages or comparisons.`
  },
  {
    link:
      'https://front.moveon.org/victory-governor-corbett-releases-education-dollars-to-philadelphia-schools/?rc=petitionshp',
    image: {
      src: 'https://front.moveon.org/wp-content/uploads/2013/11/Philly.jpg',
      alt: 'Tribune'
    },
    title:
      'VICTORY: Governor Corbett Releases Education Dollars To Philadelphia Schools',
    text: `In October 2013, a student at one Philadelphia school suffered from an
        asthma attack that led to her death. If there had been a school nurse on
        campus that day, she might still be alive. This tragedy motivated
        Philadelphia parent Jesse Bacon to start a MoveOn Petition to Governor
        Tom Corbett, asking him to stop withholding $45 million of funding from
        Philadelphia schools.`
  },
  {
    link: 'https://front.moveon.org/51832/?rc=petitionshp',
    image: {
      src:
        'https://front.moveon.org/wp-content/uploads/2013/09/Los_Angeles_Times_interior_with_globe.1.jpg',
      alt: 'Tribune'
    },
    title: 'VICTORY: Tribune Papers Spared From Koch Empire',
    text: `When the Tribune Company went up for sale, it was widely reported that
        the Koch brothers were interested in acquiring its newspapers -
        including the Los Angeles Times and the Chicago Tribune. The billionaire
        Kochs and their tea party politics presented a clear threat to
        independent journalism, so several organizations, including Forecast the
        Facts, Courage Campaign, and Working Families started MoveOn Petitions
        asking Tribune Company CEO Peter Liguori not to sell to the Koch
        brothers.`
  },
  {
    link:
      'https://front.moveon.org/victory-defend-the-vote-campaign-secures-support-for-voting-rights-amendment-act/#.U4z4Ia1dUup',
    image: {
      src:
        'https://front.moveon.org/wp-content/uploads/2014/02/DefendVote-V10.png',
      alt: 'voting_rights'
    },
    title:
      'VICTORY: Defend the Vote Campaign Secures Support for Voting Rights Amendment Act',
    text: `All around the country, voting rights are under attack—but MoveOn
        members are fighting back by running hundreds of campaigns to defend
        these critical rights as a part of our Defend the Vote campaign.`
  }
]

export const Victories = ({ className }) => (
  <VictoriesComponent className={className} victories={victories} />
)

Victories.propTypes = {
  className: PropTypes.string
}

export default Victories
