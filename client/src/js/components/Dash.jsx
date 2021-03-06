import React, { Component } from 'react'
import Websocket from './WebSocket.jsx'

import Auth from '../modules/auth'

class Dash extends Component {
  render () {
    return (
      <div>
        {(this.props.name === 1) && (<h2>You are not the admin of any organizations</h2>) }
        {(this.props.name !== 1) && (<h2>Dash of {this.props.name}</h2>)}
        {(this.props.name !== 1 && this.props.messages.length === 0) && <p>No new events</p>}
        {(this.props.name !== 1 && this.props.messages.length > 0) && <p>New events!</p>}
        {(this.props.name !== 1 && this.props.messages.length > 0) && (this.props.messages.reverse().map((event, index) => { return (<div className='event' key={index}><p className='time'>{event.time}</p><p><span className='user'>{event.user}</span> did a <span className='type'>{event.type}</span> in <span className='repo'>{event.repo}</span></p></div>) }))}
        {(this.props.name !== 1) &&
        <Websocket
          url='wss://gh-dash-api.herokuapp.com/'
          auth={Auth.getToken()}
          organization={this.props.name}
          onEvent={this.props.onEvent}
    />}
      </div>
    )
  }
}

export default Dash
