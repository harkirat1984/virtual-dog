var dog,dogImg,dogImg1,dog1;
var database;
var foodS,foodStock;

function preload(){
dogImg=loadImage("Images/Dog.png");
dogImg1=loadImage("Images/happy dog.png");
}
function setup() {
database=firebase.database();
createCanvas(500,500);

dog=createSprite(250,300,150,150);
dog.addImage(dogImg);
dog.scale=0.15;
foodStock=database.ref('Food');
foodStock.on("value",readStock);
textSize(20); 
}
function draw() {
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogImg1);
}
drawSprites();
fill(255,255,254);
stroke("green");
text("Food remaining : "+foodS,170,200);
textSize(13);
text(" UP_ARROW Key To Feed lucy Milk!",120,20,340,20);
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
if(x<=0){
x=0;
}else{
x=x-1;
} 
database.ref('/').update({
Food:x
})
}