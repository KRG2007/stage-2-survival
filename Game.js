class Game{
    constructor() {
        
      }
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
      start(){
        if(gameState===0){
          // creating an object Player/Form
          player=new Player()
          form= new Form()

          form.display()
        }
        knight1=createSprite(100,200,100,100)

       knight2= createSprite(300,200,100,100)
       
      }
      play(){
text("Welcome to the game", 200,200)
drawSprites();
      }

      end(){
    console.log("Game ended")
      }
}