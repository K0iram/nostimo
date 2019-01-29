import React from 'react'
import PropTypes from 'prop-types'
import menuStyles from './menuStyle.module.css'

const MenuSection = ({title, menuItems}) => {
  return (
    <div className={menuStyles.menuSection}>
      <h2 style={{fontFamily: `monospace`}}>{title}</h2>
      <div className={menuStyles.menuItems}>
        {menuItems.map(item => {
          return (
            <div className={menuStyles.menuItem}>
              <div className="menuItemLeft">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="menuPrice">
                <p>{item.price}</p>
              </div>
            </div>

          )
        })}
      </div>
    </div>
  )
}

MenuSection.propTypes = {
  title: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
  })),
}

MenuSection.defaultProps = {
  title: '',
  menuItems: [],
}

export default MenuSection