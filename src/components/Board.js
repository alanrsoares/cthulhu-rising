import React, { Component } from 'react'
import Game from '../lib/Game'

export default class Board extends Component {
	componentDidMount () {
		this.paintCanvas()
	}

	componentDidUpdate () {
		if (module.hot) {
			this.refs.game.removeChild(this.refs.game.firstChild)
			this.paintCanvas()
		}
	}

	render () {
		return <div ref="game"></div>
	}

	paintCanvas () {
		new Game(this.refs.game, this.props.width, this.props.height).start()
	}
}
