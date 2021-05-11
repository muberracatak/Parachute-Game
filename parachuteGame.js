var game = document.getElementById("parachuteGame");
var context = game.getContext("2d");


var character = new Image();
var kotu = new Image();
var arkaplan = new Image();
var solTugla = new Image();
var sagTugla = new Image();

character.src = "pictures/character.png";
kotu.src = "pictures/kotu.png";
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
     /*   for(var a=0;a< arrayForMove.length;a+=3){
            context.drawImage(kotu,arrayForMove[a].x+solTugla.width+30,arrayForMove[a].y+250);

           //s arrayForMove[i].y--;
        if(((distanceY + character.height == arrayForMove[a].y+250) && (distanceY <= arrayForMove[a].y+140 + kotu.height) &&  
        ( (distanceX  <= arrayForMove[a].x+solTugla.width+30 ) || (distanceX+character.width >= arrayForMove[a].x+solTugla.width+30))
        ))
            location.reload(); 
        }*/
        arrayForMove[i].y--;
        
        if( arrayForMove[i].y == 350 ){
            arrayForMove.push({
                x : Math.floor(Math.random()*solTugla.width)-solTugla.width,
                y : game.height
            }); 
        }
        

    if( ((distanceY + character.height == arrayForMove[i].y) && (distanceY <= arrayForMove[i].y + solTugla.height) && 
        ((distanceX  <= arrayForMove[i].x + solTugla.width) || (distanceX+character.width >= arrayForMove[i].x+sbtdeger)
        )) 
         )
        {
            location.reload(); 
        }
       
   
    }


    context.drawImage(character,distanceX,distanceY);
    requestAnimationFrame(draw);
    
}

draw();
 























