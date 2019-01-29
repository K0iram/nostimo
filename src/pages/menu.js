import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MenuSection from '../components/menuSection'
import { smallPlates, souvlakis, drinks } from '../data'


const Menu = () => (
  <Layout>
    <SEO
      title="Menu"
      keywords={['menu', 'food', 'greek', 'souvlaki', 'authentic']}
      description="Authentic greek street food made with local Southern California ingredients"
    />
    <MenuSection title="SOUVLAKI" menuItems={souvlakis}/>
    <MenuSection title="SMALL PLATES" menuItems={smallPlates}/>
    <MenuSection title="DRINKS" menuItems={drinks}/>
  </Layout>
)

export default Menu