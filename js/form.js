class Form{
constructor(){

this.title =createElement("h2")
this.text = createInput("Name")
this.button = createButton("PLAY")
this.greeting = createElement("h1")
this.reset = createButton("RESET")
}
display(){

    this.title.html("Butterfly Catching")
    this.title.position(width/2-100,height/2-350)


    this.text.position(width/2-100,height/2-100)


    this.button.position(width/2-40,height/2-10)

    this.button.mousePressed(()=>{

        this.text.hide()
        this.button.hide()

    player.name = this.text.value()

   
    this.greeting.html("Hey "+player.name+ "  Waiting for other players to join....")
    this.greeting.position(width/2-300,height/2-100)

    playerCount = playerCount+1
    player.updatePlayerCount(playerCount)
    player.index = playerCount
    player.updatePlayerDetails()
 
})

this.reset.position(width/2-50,height/2+130)
this.reset.mousePressed(()=>{

player.updatePlayerCount(0)
game.updateGameState(0)
})


}
hide(){
    this.text.hide()
    this.button.hide()
    this.greeting.hide()
    
}

}