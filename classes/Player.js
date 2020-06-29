class Player{
    constructor(){
        this.distanceCovered = 0;
        this.name = null;
        this.index = null;
        this.rank = null;
        this.hit = false;
    }
    getCarsAtEnd(){
        var carsAtEndRef = database.ref('carsAtEnd');
        carsAtEndRef.on('value' , (data)=>{
            this.rank = data.val();

        } , function showError(){
            console.log("Error")
        });
    }
    static updateCarsAtEnd(rank){
        database.ref('/').update({carsAtEnd : rank});
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value" , /*function*/ (data)=>{
            playerCount = data.val();
            
        } , function(){
            console.log("Error");
        });
    }
    update(){
        var playerIndex = 'players/player' + playerCount ;
        database.ref(playerIndex).set({'name' : this.name ,  'distanceCovered' : 0 , 'hit':false , 'rank':4});
    }
    setRank(rank){
        var playerIndex = 'players/player' + playerCount ;
        database.ref(playerIndex).set({'name' : this.name ,  'distanceCovered' : 0 , 'hit':false , 'rank':rank});
    }
    updateCount(count){
        count = count;
        database.ref('/').update({'playerCount' : count});
        
    }
    updateDistance(){
        var playersIndex = 'players/player' + this.index ;
        database.ref(playersIndex).set({name : this.name , 'distanceCovered' : this.distanceCovered, 'hit':false, 'rank':4});

    }
    static getPlayerInfo(){
        var playerRef = database.ref('players');
        playerRef.on('value' , function(data){
            allPlayers = data.val();
            
        } , function(){
            console.log("Error");
        });
    }
}