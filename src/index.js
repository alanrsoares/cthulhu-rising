import GameState from './GameState'

class Game extends Phaser.Game {
	constructor() {
		super(500, 500, Phaser.AUTO, 'game-root', null)
		this.state.add('GameState', GameState, false)
	}

  start() {
    this.state.start('GameState')
  }
}

new Game().start()
