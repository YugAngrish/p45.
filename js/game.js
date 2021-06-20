class Game{
    constructor(){


    }
    display(){


    }
      getGameState(){
          var gameStateRef = database.ref("gameState")
           gameStateRef.on("value",function(data){

            gameState = data.val()

           })
      } 
      updateGameState(state){
          database.ref("/").update({
       "gameState" : state

          })
      } 
      start(){
     if(gameState===0){
      
        form = new Form()
        form.display()
       
        player = new Player()
        player.getPlayerCount()
     }
        girl1 = createSprite(270,displayHeigh-20,50,50)
        girl1.addImage(girlImg1)

        girl2 = createSprite(440,displayHeigh-20,50,50)
        girl2.addImage(girlImg2)

        girls = [girl1,girl2]

    }
     play(){
         form.hide()
         Player.getPlayerDetails()
         player.getRank()
         if(allPlayers!==undefined){
             image(gardenImg,0,displayHeight*-1,displayWidth,displayHeight)
             var index = 0
             var y = displayHeight
             var x = 100
             var dist = 0

             for(var i in allPlayers){
                 console.log(i)
                x = x+30
                y = displayHeight-allPlayers[i].distance
                 index = index+1
                 if(index ===player.index){

                     girls[index-1].x=x
                     girls[index-1].y=y

                     fill("red")
                     ellipse(x,y,60,60)

                     camera.position.x=displayWidh/2
                     camera.position.y=girls[index-1].y
                 }
              
                 }
                
             }
             if(keyWentDown("space")&&player.distance===0){

                player.distance=player.distance+10
                player.updatePlayerDetails()
             }
             if(keyWentUp("space")&&player.distance===10){

                player.distance=player.distance-10
                player.updatePlayerDetails()
             }
             if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                player.distance = 10
                player.updatePlayerDetails();
            }
            if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                player.distance += 10
                player.updatePlayerDetails();
            }

             if (frameCount % 50 === 0) {
                butterfly1 = createSprite( displayWidth,random(100, 1000), 100, 100);
                butterfly1.velocityY = 6;
                butterfly1.addAnimation(b1)
                butterfly1Group.add(butterfly1);
                
            }
            if (frameCount % 350 === 0) {
                butterfly2 = createSprite( -displayWidth,random(100, 1000), 100, 100);
                butterfly2.velocityY = -6;
                butterfly2.addAnimation(b2)
                butterfly2Group.add(butterfly2);
                
            }
            if (player.index!==null) {
                for (var j = 0; j < butterfly1Group.length; j++) {
                               if (butterfly1Group.get(j).isTouching(players)) {
                                butterfly1Group.get(j).destroy();
                                 player.score = player.score+10
                                   player.updatePlayerDetails();
                               }
                               
                           }
                         }
            if (player.index !== null) {
                 for (var ik = 0; k < butterfly2Group.length; k++) {
                                 if (butterfly2Group.get(k).isTouching(players)) {
                                    butterfly2Group.get(k).destroy();
                                  player.score = player.score+50
                                    player.updatePlayerDetails();
                               }
                                           
                        }
                      }

            if(player.score===150){
                gameState = 2
                player.rank = player.rank + 1
                player.updateRank(player.rank)
            }          
             drawSprites()
         }
         end(){
             console.log("Game Ended")
         }
     }
      
    
