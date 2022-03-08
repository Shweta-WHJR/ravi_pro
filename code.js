function setup(){
    createCanvas(displayWidth,displayHeight);
    
      
    
    road = createSprite(width/2,displayHeight/2,10,10);
    road.addAnimation("roadimg",roadimg);
    road.scale = displayHeight/410;
  
     startgame = createSprite(width/2,displayHeight/2);
     startgame.addImage(stateimg)
      startgame.visible = false;
    
    start = createSprite(width/2,height/1.15,40,20);
    start.addImage(startimg)
    start.scale = 0.15;
    
    over = createSprite(width/2,height/10,20,20);
    over.visible = false;
    over.addImage(resetimg);
    over.scale = 0.7
    
   
    
    car100 = createSprite(displayWidth/2.1,displayHeight/1.1,10,10);
    car100.addImage(carimg);
    car100.scale = 0.150;
  
    cargroup = new Group();
    coinGroup = new Group();
    
    GAMESTATE = 3;
    PAUSESTATE = 2;
    PLAY = 1
    END = 0;
    STARTSTATE = 3;
  
    over.depth = car100.depth + 1;
    over.depth = cargroup.depth;
    over.depth = over.depth + 1;
      
  }