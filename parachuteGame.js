var game = document.getElementById("parachuteGame");
var context = game.getContext("2d");


var character = new Image();
var arkaplan = new Image();
var solTugla = new Image();
var sagTugla = new Image();

character.src = "pictures/character.png";
arkaplan.src = "pictures/arkaplan.png";
solTugla.src = "pictures/solTugla.png";
sagTugla.src = "pictures/sagTugla.png";


var space = 120;
var sbtdeger;

var distanceX = 10;
var distanceY = 50;

var hareket = 0.5;

var score = 0;


var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";


function controlLeftKey() {
    distanceX -= 10;
    fly.play();
    }

    function controlRightKey() {
        distanceX += 10;
        fly.play();

    }

    function controlUpKey() {
        distanceY -= 20;
        fly.play();
    }

    function controlDownKey() {
        distanceY += 20;
        fly.play();
    }



    function keyControlCheck(evt) {
        switch (evt.keyCode) {
            case 37:
                controlLeftKey();
            break;
            case 39:
                controlRightKey();
            break;
            case 38:
                controlUpKey();
            break;
            case 40:
                controlDownKey();
            break;
            }
        };
        
          window.addEventListener('keydown', keyControlCheck);
        

var arrayForMove = [];


arrayForMove[0] = { x : 0,  y : game.height  };


function draw(){
    
    context.drawImage(arkaplan,0,0);
    
    for(var i = 0; i < arrayForMove.length; i++){
        
        sbtdeger = solTugla.width+space;

        context.drawImage(solTugla,arrayForMove[i].x,arrayForMove[i].y);
        context.drawImage(sagTugla,arrayForMove[i].x+sbtdeger,arrayForMove[i].y);
        
        arrayForMove[i].y--;
        
        if( arrayForMove[i].y == 125 ){
            arrayForMove.push({
                x : Math.floor(Math.random()*solTugla.width)-solTugla.width,
                y : game.height
            }); 
        }
        

    if( (distanceY + character.height == arrayForMove[i].y) && (distanceY <= arrayForMove[i].y + solTugla.height) && 
        ((distanceX  <= arrayForMove[i].x + solTugla.width) || (distanceX+character.width >= arrayForMove[i].x+sbtdeger)) 
        ){
            location.reload(); 
        }
   
    }


    context.drawImage(character,distanceX,distanceY);
    requestAnimationFrame(draw);
    
}

draw();
 























