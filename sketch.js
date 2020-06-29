
var database;
var position;
var gamestate = 0;
var playerCount;
var game;
var form;
var player;
var allPlayers;
var value ;
var car1 , car2 , car3 , car4;
var cars = [car1 , car2 , car3 , car4];
var car1Img , car2Img , car3Img , car4Img , groundImg , track1Img , track2Img;
var clicked = false;
var created = false;
var ground1,ground2,ground3,ground4;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12;
var hurdleGrp;
function setup(){
    createCanvas(displayWidth-50,displayHeight-200);
    database = firebase.database();
    game = new Game();
    //player = new Player();
    //form = new Form();
    game.readGamestate();
    game.start();
    hurdleGrp = createGroup()
    //gamestate = database.ref('');
    
}

function draw(){
    background("skyBlue");
    //ballPosition.on('value' , readPosition , showError); 
    if(playerCount >= 4 ){
        game.update(1);
        player.updateCount(0);
        player.getCount();
    }
    if(gamestate === 1 && created === false){
        
        car1 = createSprite(100 , 200 , 25 , 25);
        car2 = createSprite(300 , 200, 25 , 25);
        car3 = createSprite(500 , 200, 25 , 25);
        car4 = createSprite(700 , 200, 25 , 25);
        ground1 = createSprite(3500 , 230 , 5000 , 25);
        ground2 = createSprite(3500 , 430 , 5000 , 25);
        ground3 = createSprite(3500 , 630 , 5000 , 25);
        ground4 = createSprite(3500 , 830 , 5000 , 25);
       // ground4.shapeColor = "red";
        car1.collide(ground1);
        car2.collide(ground2);
        car3.collide(ground3);
        car4.collide(ground4);
        
        cars = [car1 , car2 , car3 , car4];
        created = true;
        Player.getPlayerInfo();
        obstacle1 = new Obstacle(2000 , 220);
        obstacle2 = new Obstacle(3000 , 220);
        obstacle3 = new Obstacle(4000 , 220);
        obstacle4 = new Obstacle(2000 , 420);
        obstacle5 = new Obstacle(3000 , 420);
        obstacle6 = new Obstacle(4000 , 420);
        obstacle7 = new Obstacle(2000 , 620);
        obstacle8 = new Obstacle(3000 , 620);
        obstacle9 = new Obstacle(4000 , 620);
        obstacle10 = new Obstacle(2000 , 820);
        obstacle11 = new Obstacle(3000 , 820);
        obstacle12 = new Obstacle(4000 , 820);
        obstacle11.sprite.shapeColor = "red";
        hurdleGrp.add(obstacle1.sprite);
        hurdleGrp.add(obstacle2.sprite);
        hurdleGrp.add(obstacle3.sprite);
        hurdleGrp.add(obstacle4.sprite);
        hurdleGrp.add(obstacle5.sprite);
        hurdleGrp.add(obstacle6.sprite);
        hurdleGrp.add(obstacle7.sprite);
        hurdleGrp.add(obstacle8.sprite);
        hurdleGrp.add(obstacle9.sprite);
        hurdleGrp.add(obstacle10.sprite);
        hurdleGrp.add(obstacle11.sprite);
        hurdleGrp.add(obstacle12.sprite);
    }
    else{
        game.readGamestate();
    }
        
    if(keyCode === 32){
        value = 32;
    }
    if(gamestate===2){
        Player.getPlayerInfo();
        var a = allPlayers[player1][distanceCovered];
        var b = allPlayers[player2][distanceCovered];
        var c = allPlayers[player3][distanceCovered];
        var d = allPlayers[player4][distanceCovered];
        if(a>b>c>d){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank(1);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank(2);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank(3);
            }
            else{
                player.setRank(4);
            }
        }
        else if(a>b>d>c){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank(1);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank(2);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank(4);
            }
            else{
                player.setRank(3);
            }
        }
        else if(a>d>c>b){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank(1);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank(4);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank(3);
            }
            else{
                player.setRank(2);
            }
        }
        else if(a>d>b>c){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank(1);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank(3);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank(4);
            }
            else{
                player.setRank(2);
            }
        }
        else if(a>c>d>b){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank(1);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank(4);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank(2);
            }
            else{
                player.setRank(3);
            }
        }
        else if(a>c>b>d){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank(1);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank(3);
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank(2);
            }
            else{
                player.setRank(4);
            }
        }
        else if(b>a>c>d){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(b>d>c>a){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(b>d>a>c){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(b>c>d>a){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(b>c>a>d){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(b>a>d>c){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(c>b>a>d){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(c>b>d>a){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(c>a>b>d){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(c>a>d>b){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(c>d>a>b){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(c>d>b>a){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(d>b>c>a){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(d>b>a>c){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(d>c>a>b){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(d>c>b>a){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else if(d>a>c>b){
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        else {
            if(allPlayers['player'+player.index]['distanceCovered']===a){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===b){
                player.setRank();
            }
            else if(allPlayers['player'+player.index]['distanceCovered']===c){
                player.setRank();
            }
            else{
                player.setRank();
            }
        }
        
        

    }
    if(/*value === 32 &&*/ gamestate === 1){
        clear();
        game.play();
        cars[player.index-1].velocityY+=0.8;
        console.log(cars[player.index-1].isTouching(hurdleGrp));
        if(car1.isTouching(ground1)){
            car1.velocityY = 0;
        }
        if(car2.isTouching(ground2)){
            car2.velocityY = 0;
        }
        if(car3.isTouching(ground3)){
            car3.velocityY = 0;
        }
        if(car4.isTouching(ground4)){
            car4.velocityY = 0;
        }
        if(cars[player.index-1].isTouching(hurdleGrp)){
            player.hit=true;
            
        }
        drawSprites();
    }
    
    
}

function changePosition(x,y){
    
}
 
function readPosition(data){
    
    
    

}
function writePosition(x , y){
    
}
function showError(){
    console.log("e");
}
function keyPressed(){
    
    if(keyCode===32&&player.hit===false ){
        player.distanceCovered+=10;
        player.updateDistance();
        keyCode=null;
        cars[player.index-1].velocityY=0-9;
    }
}