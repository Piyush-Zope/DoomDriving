var plr,plri

var road,roadi

var obs1,obs1i;
var obs2,obs2i;
var obs3,obs3i;
var obs4,obs4i;
var obs5,obs5i;
var obs6,obs6i;
var obs7,obs7i;
var obs8,obs8i;
var obs9,obs9i;

var cloud,cloudi

function preload() {
roadi = loadImage("road.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 


}

function draw() {
  background(255,255,255);  
  road = createsprite(500,500,500,500)
  road.addImage("road1",roadi)
  drawSprites();
}