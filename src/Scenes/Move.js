
class move extends Phaser.Scene {
    constructor() {
        super("moveScene");
        this.my = {sprite: {} };  // Create an object to hold sprite bindings
        this.bullet;

        this.startX = config.width / 2;
        this.startY = config.height - (config.height / 6);

        // A - move left // D - move right          
        this.aKey = null;
        this.dKey = null;
        // Space - shoot
        this.spaceKey = null;

        this.horizontalSpeed = 10;
        this.verticalSpeed = 10;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // fish
        this.load.image("fish", "./assets/fish.png");
        // bubble
        this.load.image("bubble", "./assets/bubble.png");
       
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        
        // fish
        my.sprite.body = this.add.sprite(this.startX, this.startY, "fish");
        // bullet
        this.bullet = this.add.sprite(my.sprite.body.x, my.sprite.body.y, "bubble");
        this.bullet.visible = false;

        // A - move left // D - move right         
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // Space - shoot
        //this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.spaceKey =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        // W - move up
        if(this.aKey.isDown && my.sprite.body.x > 0){
            my.sprite.body.x -= this.horizontalSpeed;
        }
        
        // S - move down
        if(this.dKey.isDown && my.sprite.body.x < config.width){
            my.sprite.body.x += this.horizontalSpeed;
        }

        // Space - shoot
        if(Phaser.Input.Keyboard.JustDown(this.spaceKey)){
            this.bullet = this.add.sprite(my.sprite.body.x, my.sprite.body.y, "bubble");
        }
        this.bullet.y -= this.verticalSpeed;
        
    }
}