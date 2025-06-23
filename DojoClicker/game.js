// Creating variables
var NX = 50,NY = 390,BX=NX,BY=NY+75,PBX=400,PBY=315,pts=0,kpC=0;
var dojo=new Image();
dojo.src="Dojo.jpg";
 window.alert("Welcome to Dojo Clicker! Move to the left with A and to the right with D. To kick you should press L and to punch-S, but be close to the punching bag so you get points! Get 600 points to get The Dagger and get 3800 points to recieve the black punching bag!");
function update() {
if(NX>=315){
NX=315;
BX=315;
}
if(NX>=750){
NX=750;
BX=750;
}
if(NX<=40){
NX=40;
BX=40;
}
if(isKeyPressed[68]){
NX=NX+2;
BX=BX+2;
}
if(isKeyPressed[65]){
NX=NX-2;
BX=BX-2;
}
}

function draw() {
    // This is how you draw a rectangle
    context.drawImage(dojo,0,0);
    context.fillStyle="#5d5d5d";
    context.fillRect(NX,NY,40,150);
    context.fillStyle="#5d5d5d";
    context.fillRect(425,0,10,330);
    context.fillStyle="white";
    context.fillRect(PBX,PBY,60,150);
    context.font="40px Title";
    context.fillText("points:",0,40);
    context.fillText(pts,120,40);
    if(isKeyPressed[83]){
    context.fillStyle="#5d5d5d";
    context.fillRect(NX,420,85,15);
    }
    if(isKeyPressed[76]){
    context.fillStyle="#5d5d5d";
    context.fillRect(NX,455,110,15);
    }
    context.fillStyle="black";
    context.fillRect(BX,BY,40,10);
    if(pts>=200){
    context.fillStyle="yellow";
    context.fillRect(PBX,PBY,60,150);
    }
    if(pts>=400){
    context.fillStyle="orange";
    context.fillRect(PBX,PBY,60,150);
    }
    if(pts>=600){
    context.fillStyle="green";
    context.fillRect(PBX,PBY,60,150);
    if(isKeyPressed[83]){
    context.fillStyle="#5d5d5d";
    context.fillRect(NX,420,85,15);
    context.fillStyle="white";
    context.fillRect(NX+70,420,20,15);
    }
    }
    if(pts>=1000){
    context.fillStyle="blue";
    context.fillRect(PBX,PBY,60,150);
    }
    if(pts>=1400){
    context.fillStyle="purple";
    context.fillRect(PBX,PBY,60,150);
    }
    if(pts>=2000){
    context.fillStyle="red";
    context.fillRect(PBX,PBY,60,150);
    }
    if(pts>=2600){
    context.fillStyle="brown";
    context.fillRect(PBX,PBY,60,150);
    }
    if(pts>=3800){
    context.fillStyle="black";
    context.fillRect(PBX,PBY,60,150);
    context.fillStyle="#bebe00";
    context.font="35px Title";
    context.fillText("Congratulations! You completed the Dojo Clicker!",80,150);
    context.fillText("Expect future updates and surprises! You",100,250);
    context.fillText("completed the game with",100,350);
    context.fillText(kpC,460,350);
    context.fillText("kicks and punches! Try to beat your record!",100,450);
    }
};

function keyup(key) {
    if(key==76 && areColliding(NX,NY,40+70,120,PBX,PBY,35,130)){
    pts=pts+2;
    kpC=kpC+1;
    if(pts>=600){
    pts=pts+2;
    }
    if(pts>=1400){
    pts=pts+2;
    }
    }
    if(key==83 && areColliding(NX,NY,40+50,120,PBX,PBY,35,130)){
    pts=pts+2;
    kpC=kpC+1;
    if(pts>=600){
    pts=pts+2;
    }
    if(pts>=1400){
    pts=pts+2;
    }
    }
    
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
