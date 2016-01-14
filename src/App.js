import React, { Component, PropTypes } from 'react'
import GameState from './GameState'

class Game extends Phaser.Game {
	constructor(root) {
		super(500, 500, Phaser.AUTO, root, null)
		this.state.add('GameState', GameState, false)
	}

  start() {
    this.state.start('GameState')
  }
}

export class App extends Component {
  componentDidMount() {
    new Game(this.refs.game).start()
  }

  render () {
    return (
      <div>
        <div ref="game" className="game-root"></div>
      </div>
    )
  }
}
