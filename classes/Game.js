class Game{
    constructor(){

    }
    readGamestate(){
        var gamestateRef = database.ref('gamestate');
        gamestateRef.on('value' , function (data){
            gamestate = data.val();
            
        } , function(){
            console.log("Error");
        } );
    }
    update(state){
        database.ref('/').update({'gamestate' : state});
    }
    async start(){
        if(gamestate === 0 ){
            
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once('value');
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            //player.getCount();
            //console.log(playerCount);
            form = new Form();
            
            form.display();
            
            console.log(playerCount);
           //await player.getCount();
           
        
            
        }
        
    }
    play(){
        
        if(gamestate ===1){
            database.ref('/').update({'gamestate' : 1});
        form.hide();
        text("game start" , 10 , 10);
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
            var index = 0;
            var y =0;
            var x ;
            
            var displayPosition = 130;
            for(var i in allPlayers){
                index++;
                y+=200;
                x = displayWidth+allPlayers[i].distanceCovered;
                if(player.distanceCovered===0){
                    
                    cars[index-1 ].y = y;
                }
                cars[index-1].x = x;
                if(cars[index-1].isTouching(hurdleGrp)){
                    player.hit===true;
                    
                }
                //console.log(index + " " + player.index);
                if(index === player.index){
                    stroke(10);
                    fill("red");

                    cars[index-1].shapeColor = "red";
                    
                    
                    //scamera.position.y = displayWidth/2;
                    camera.position.x = cars[index-1].x;
                    //ellipse(x , y , 60 , 60);
                }
                if(i === 'player' + player.index){
                    //fill("red");
                    //ellipse(x , y , 60 , 60);
                    
                }
                else{
                    fill(0);
                }
                displayPosition+=20;
                text(allPlayers[i].name + " : " + allPlayers[i].distanceCovered , 120 , displayPosition);
                //console.log("index : " + index + " , player.index : " + player.index);

            }
        }
        
        if(keyCode === 39 && player.index !== null && player.hit===false){
            player.distanceCovered+=10;
            player.updateDistance();
            //keyCode=null;
        }
        
        if(player.distanceCovered>3860){
            gamestate = 2;
            this.end();
        }
        
        }
        

    }
    end(){
        console.log("game Ended");
        game.update(2);
        
    }
    
}