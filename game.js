class mainScene {
  preload() {
    this.load.image('player', 'assets/terry3.gif');
    this.load.image('coin', 'assets/cia1.png');
  }
  create() {
    // player
    this.player = this.physics.add.sprite(100, 100, 'player');
    // coin
    this.coin = this.physics.add.sprite(5, 5, 'coin');
    // score
    this.score = 0;
    let style = { font: '20px Arial', fill: '#fff' };
    this.scoreText = this.add.text(10, 300, 'score: ' + this.score, style);
    // movement
    this.arrow = this.input.keyboard.createCursorKeys();
  }
  update() {
    if (this.physics.overlap(this.player, this.coin)) {
    this.hit();
    }
    if (this.arrow.right.isDown) {
        this.player.x += 3;
    } else if (this.arrow.left.isDown) {
        this.player.x -= 3;
    } 
    if (this.arrow.down.isDown) {
        this.player.y += 3;
    } else if (this.arrow.up.isDown) {
        this.player.y -= 3;
    }
  }
  hit() {
    // change the position x and y of the coin randomly
    this.coin.x = Phaser.Math.Between(100, 600);
    this.coin.y = Phaser.Math.Between(100, 300);

    // increment the score by 10
    this.score += 10;

    // display the updated score on the screen
    this.scoreText.setText('score: ' + this.score);

    this.tweens.add({
    targets: this.player, // on the player 
    duration: 200, // for 200ms 
    scaleX: 1.2, // that scale vertically by 20% 
    scaleY: 1.2, // and scale horizontally by 20% 
    yoyo: true, // at the end, go back to original scale 
    });
  }
}
new Phaser.Game({
  width: 800, // width of the game in pixels
  height: 500, // height of the game in pixels
  backgroundColor: 'black', // the background color (blue)
  scene: mainScene, // the name of the scene we created
  physics: { default: 'arcade' }, // The physics engine to use
  parent: 'game', // create the game inside the <div id="game"> 
});