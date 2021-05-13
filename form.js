class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset=createButton("reset");
      
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
    //  image(bgi,0,0,displayWidth,displayHeight)
     bg.shapeColor = "pink"
      this.title.html("Survival Game");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  this.reset.position(displayWidth-100,20) 
  var name = this.input.value()

  this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    this.greeting.html("welcome "+name)
    this.greeting.position(200,200);
playerCount=playerCount+1;
player.index=playerCount;
player.update()
player.updateCount(playerCount)
    
    
  //  bg.addImage(bgi);
   // bg.scale = 2.5;
    //game.start()
console.log("clicked")
  })
  //if(count==2){
    //game.start()
    //console.log("Works!!")
    //console.log(count)
      //  }
    }
}