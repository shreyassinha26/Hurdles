class Form{
    constructor(){
        this.title;
        this.greeting;
        this.reset = createButton("Reset");
    }
    display(){
        this.title = createElement("h2");
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-100 , displayHeight/10);
        var input = createInput("name");
        var button = createButton("play");
        this.greeting = createElement("h1");
        input.position(displayWidth/2-100 , displayHeight/5);
        button.position(displayWidth/2-100 , displayHeight/3);
        button.mousePressed(()=>{
            input.hide();
            button.hide();
            player.name = input.value();
            playerCount++;
            player.index = playerCount;
            player.update(player.name);
            player.updateCount(playerCount);
            //title.hide();
            //greeting.hide();
            //var name = input.value();
            //playerCount++;
            //player.update( name);
            //player.updateCount(playerCount);
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2-100 , displayHeight/2-100);
            clicked = true;
        } ); 
        this.reset.position(displayWidth-100 , 20);
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        });
        /*function (){
            input.hide();
            button.hide();
            title.hide();
            //greeting.hide();
            var name = input.value();
            playerCount++;
            player.update( name);
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + name);
            greeting.position(230 , 280);
        }*/
    }
    hide(){
        this.greeting.hide();
        this.title.hide();

    }

}