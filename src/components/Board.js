import React, { Component } from 'react'
import Game from '../lib/Game'

export default class Board extends Component {
	componentDidMount() {
    new Game(this.refs.game, this.props.width, this.props.height).start()
  }

	componentDidUpdate() {
		if (module.hot) {
			this.refs.game.removeChild(this.refs.game.firstChild)
			new Game(this.refs.game, this.props.width, this.props.height).start()	
		}
	}

  render() {
		return <div ref="game"></div>
  }
}
