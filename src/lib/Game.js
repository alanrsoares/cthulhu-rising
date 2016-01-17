import GameState from './GameState'

const { Game, AUTO } = window.Phaser

export default class GameRoot extends Game {
  constructor (root, width, height) {
    super(+width, +height, AUTO, root, null)
    this.state.add('GameState', GameState, false)
  }

  start () {
    this.state.start('GameState')
  }
}
