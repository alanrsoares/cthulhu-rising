import RainbowText from './RainbowText'

export default class GameState extends Phaser.State {
	create() {
		const { centerX, centerY } = this.game.world
		const text = new RainbowText(this.game, centerX, centerY, '- Hello Phaser -\nPraise Cthulhu!')
		text.anchor.set(0.5)
	}
}
