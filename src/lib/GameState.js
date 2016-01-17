const { State, Physics, Keyboard } = window.Phaser

export default class GameState extends State {
  preload () {
    this.game.load.image('phaser', 'assets/sprites/phaser-dude.png')
    this.game.load.image('bullet', 'assets/misc/bullet0.png')
  }

  create () {
    this.bulletTime = 0
    this.game.stage.backgroundColor = '#2d2d2d'
    this.bullets = this.game.add.group()
    this.bullets.enableBody = true
    this.bullets.physicsBodyType = Physics.ARCADE

    for (let i = 0; i < 20; i++) this.makeBullet(i)

    this.sprite = this.game.add.sprite(400, 550, 'phaser')
    this.game.physics.enable(this.sprite, Physics.ARCADE)
    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.game.input.keyboard.addKeyCapture([ Keyboard.SPACEBAR ])
  }

  update () {
    this.sprite.body.velocity.x = 0
    this.sprite.body.velocity.y = 0

    if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -300
    } else if (this.cursors.right.isDown) {
      this.sprite.body.velocity.x = 300
    }

    if (this.cursors.up.isDown) {
      this.sprite.body.velocity.y = -300
    } else if (this.cursors.down.isDown) {
      this.sprite.body.velocity.y = 300
    }

    if (this.game.input.keyboard.isDown(Keyboard.SPACEBAR)) {
      this.fireBullet()
    }
  }

  makeBullet (i) {
    const bullet = Object.assign(this.bullets.create(0, 0, 'bullet'), {
      name: 'bullet' + i,
      exists: false,
      visible: false,
      checkWorldBounds: true
    })

    bullet.events.onOutOfBounds.add(this.resetBullet, this)
  }

  fireBullet () {
    if (this.game.time.now <= this.bulletTime) { return }

    this.bullet = this.bullets.getFirstExists(false)

    if (this.bullet) {
      this.bullet.reset(this.sprite.x + 6, this.sprite.y - 8)
      this.bullet.body.velocity.y = -300
      this.bulletTime = this.game.time.now + 150
    }
  }

  resetBullet (bullet) {
    bullet.kill()
  }
}
