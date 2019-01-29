import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contact'

const Catering = () => (
  <Layout>
    <SEO
      title="Catering"
      keywords={['cater', 'private', 'parties', 'events', 'festivals']}
      description="Cater your next event with Nostimo. We provide the full food service experience including staff and equipment rentals"
    />
    <p style={{width: `60%`, margin: `0 auto`, paddingBottom: 40}}>
      Have a special event coming up? Let us do all the hard work for you!
      We offer a wide range of party packages to handle everything you need.
      Send us a quick message and tell us about your next event for a free quote!
    </p>
    <Contact/>
  </Layout>
)

export default Catering