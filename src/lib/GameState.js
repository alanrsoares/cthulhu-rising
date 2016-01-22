const {
  State, Physics, Keyboard
} = window.Phaser

import frames from '../sprites/cthulhu'

const { assign } = Object

const call = (method, ...args) => x => x[method](...args)

export default class GameState extends State {
  preload () {
    this.game.load.image('bullet', 'assets/misc/bullet0.png')
  }

  create () {
    frames.forEach((frame, i) => this.game.create.texture('cthulhu' + i, frame, 4, 4, 0))

    this.bulletTime = 0
    this.game.stage.backgroundColor = '#2d2d2d'
    this.bullets = assign(this.game.add.group(), {
      enableBody: true,
      physicsBodyType: Physics.ARCADE
    })

    for (let i = 0; i < 20; i++) this.makeBullet(i)

    this.player = this.game.add.sprite(400, 550, 'cthulhu0')
    this.player.anchor.set(0.5)
    this.game.physics.enable(this.player, Physics.ARCADE)
    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.game.input.keyboard.addKeyCapture([Keyboard.SPACEBAR])
  }

  update () {
    assign(this.player.body.velocity, { x: 0, y: 0 })

    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -300
    } else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = 300
    }

    if (this.cursors.up.isDown) {
      this.player.body.velocity.y = -300
    } else if (this.cursors.down.isDown) {
      this.player.body.velocity.y = 300
    }

    if (this.game.input.keyboard.isDown(Keyboard.SPACEBAR)) {
      this.fireBullet()
    }
  }

  makeBullet (i) {
    const bullet = assign(this.bullets.create(0, 0, 'bullet'), {
      name: 'bullet' + i,
      exists: false,
      visible: false,
      checkWorldBounds: true
    })

    bullet.events.onOutOfBounds.add(call('kill'), this)
  }

  fireBullet () {
    if (this.game.time.now <= this.bulletTime) {
      return
    }

    this.bullet = this.bullets.getFirstExists(false)

    if (this.bullet) {
      this.bullet.reset(this.player.x - 7, this.player.y - 15)
      this.bullet.body.velocity.y = -300
      this.bulletTime = this.game.time.now + 150
    }
  }
}
