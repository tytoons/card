window.onload=function(){

    var canvas = document.getElementById("Canvas");
    stage = new createjs.Stage(canvas)


    function setup() {
        spritesheet = new createjs.SpriteSheet({
                "images": ["classic.png"],
                "frames": {"height": 780, "count": 13, "width": 560},
                "animations": { clubs: [0,13]}
            });
            character = new createjs.Sprite(spritesheet);
            character.scaleX = character.scaleY = 0.2;

            //character.framerate = 30; 
            //character.x = (stageWidth / 2) - characterWidth;
            //character.y = characterGround;
            stage.addChild(character);
        
        createjs.Ticker.addEventListener("tick", tick);
        document.onkeydown = handleKeyDown;
        document.onkeyup = handleKeyUp;

    }

    function handleKeyDown(e) {
        switch (e.keyCode) {
            case 87:  // W
                break;
            case 65:  // A
                break;
            case 68:  // D
                break;
        }
     
    }

    function handleKeyUp(e) {
        switch (e.keyCode) {
            case 87:  // W
                break;
            case 65:  // A
                break;
            case 68:  // D
                break;
                
        }
    }

    function tick(event) {
        stage.update();
    }

    setup();
}