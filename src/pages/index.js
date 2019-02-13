import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LocalToday from '../components/localToday'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`greek`, `gryo`, `souvlaki`, 'pita']}
    />
    <div className="map">
      <LocalToday/>
    </div>
    <Link to="/location/">
      <button
        style={{
          marginTop: 40,
          backgroundColor: `transparent`,
          color: `#222`,
          border:  `1px solid blue`,
          height: 40,
          width: 200,
          cursor: `pointer`
      }}>
        See All Locations
      </button>
    </Link>
  </Layout>
)

export default IndexPage
