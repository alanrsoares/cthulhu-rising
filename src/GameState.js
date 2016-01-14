import RainbowText from './RainbowText'

export default class GameState extends Phaser.State {
	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let text = new RainbowText(this.game, center.x, center.y, '- Hello Phaser -\nwith a sprinkle of\nES6 dust!!!')
		text.anchor.set(0.5)
	}
}
