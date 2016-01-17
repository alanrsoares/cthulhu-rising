import React, { Component } from 'react'
import Board from './components/Board'

export class App extends Component {
  render () {
    return (
      <div>
        <div>Cthulhu Rising</div>
        <Board width="800" height="600"/>
      </div>
    )
  }
}
