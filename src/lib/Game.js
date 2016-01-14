import GameState from './GameState'

export default class Game extends Phaser.Game {
	constructor(root, width, height) {
		super(+width, +height, Phaser.AUTO, root, null)
		this.state.add('GameState', GameState, false)
	}

  start() {
    this.state.start('GameState')
  }
}
