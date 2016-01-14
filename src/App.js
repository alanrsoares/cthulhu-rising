import React, { Component, PropTypes } from 'react'
import Board from './components/Board'

export class App extends Component {
  render () {
    return (
      <div>
        <div>Cthulhu Rising</div>
        <Board width="500" height="500"/>
      </div>
    )
  }
}
