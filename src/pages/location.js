import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { events } from '../data'

const Location = () => {
  const days = Object.keys(events)
  return (
    <Layout>
      <SEO
        title="Find Us"
        keywords={['find', 'map', 'schedule', 'san diego']}
        description="Find us at multiple locations in San Diego County"
      />
      <h1 style={{fontFamily: `monospace`}}>Where You Can Find Us 📍</h1>
      <hr style={{maxWidth: 500, width: `100%`, margin: `0 auto`}}/>
      <div className="schedule" style={{display: `flex`, justifyContent: `center`}}>
        <ul style={{listStyle: `none`, textAlign: `left`, paddingTop: 40}}>
          {
            days.map(day => <li>{day}: {events[day].local} {events[day].time ? `| ${events[day].time}` : ''}</li>)
          }
        </ul>
      </div>

    </Layout>
  )
}

export default Location