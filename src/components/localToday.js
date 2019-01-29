import React, { Component } from 'react'
import EventMap from './eventMap'
import { events, weekDays } from '../data'


class LocalToday extends Component {
  state = {
      event: {}
    }

  componentDidMount() {
    const today = new Date().getDay()
    const day = weekDays[today]

    this.setState({event: events[day]})
  }

  render() {
    const { event } = this.state

    return (
      <div className="locationContainer">
        <h1 style={{fontFamily: `monospace`}}>Today: {event.local}</h1>
        <EventMap
          location={event.local}
          time={event.time}
          url={event.url}
          width='500'
          height='300'
        />
      </div>
    )
  }
}

export default LocalToday