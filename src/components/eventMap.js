import React from 'react'
import PropTypes from 'prop-types'

const EventMap = ({location, time, url, width, height}) => {
  return (
    <div className="location">
      {time === ''
        ? <img src={url} className='closed' style={{width: `500px`}}/>
        : <iframe src={url} width={width} height={height} frameBorder="0" style={{border: '5px solid #444'}} allowFullScreen></iframe>
      }
      <p>{time}</p>

    </div>
  )
}

EventMap.propTypes = {
  location: PropTypes.string,
  time: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

EventMap.defaultProps = {
  location: '',
  time: '',
  url: '',
  width: '300',
  height: '200'
}

export default EventMap