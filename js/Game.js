class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      car1=createSprite(100,200)
      car2=createSprite(300,200)
      car3=createSprite(500,200)
      car4=createSprite(700,200)
cars=[car1,car2,car3,car4]
      

    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
var x=0;
var y;
    if(allPlayers !== undefined){
      var display_position = 130;
      for(var i=1;i<=4;i++){
        var playerIndex="player"+i
        y=displayHeight-allPlayers[playerIndex].distance
        x=x+200
        cars[i-1].x=x 
        cars[i-1].y=y
        if (player.index==i ){
          fill("red")
         // text(allPlayers[playerIndex].name + ": " + allPlayers[playerIndex].distance, 120,display_position)
         text(allPlayers[playerIndex].name,cars[i-1].x,cars[i-1].y+75);
         camera.position.x=displayWidth/2
         camera.position.y=cars[i-1].y
         
        }
          else{
          fill("black");
          text(allPlayers[playerIndex].name,cars[i-1].x,cars[i-1].y+75);

          }
       // display_position+=20;
        //textSize(15);
        //text(allPlayers[playerIndex].name + ": " + allPlayers[playerIndex].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
