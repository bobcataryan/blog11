canvas= document.getElementById("canvas1");
ctx = canvas.getContext("2d");

car1_width= 100;
car1_height= 90;
car2_width= 100;
car2_height= 90;
car2_x= 10;
car2_y= 130;
car1_x= 10;
car1_y= 10;
bg_img= "bg_race_track.png";
car1_img= "carplayer1.png";
car2_img= "carplayer2.png"
function add() {
    bg_imgtag= new Image();
    bg_imgtag.onload= uploadbg;
    bg_imgtag.src=bg_img;

    car1_imgTag= new Image();
    car1_imgTag.onload= uploadcar1;
    car1_imgTag.src= car1_img;
    
    car2_imgTag= new Image();
    car2_imgTag.onload= uploadcar2;
    car2_imgTag.src= car2_img
}
function uploadbg() {
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
    console.log("bg uploaded")
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
    console.log("car1 uploaded")
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
    console.log("car2 uploaded")
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e) {
    keyPressed= e.keyCode;
    console.log(keyPressed)
    if (keyPressed == "38"){
        up();
        console.log("up");
    }
    if (keyPressed == "40"){
        down();
        console.log("down");
    }
    if (keyPressed == "37"){
        left();
        console.log("left");
    }
    if (keyPressed == "39"){
        right();
        console.log("right");
    }
    if (keyPressed == "87"){
        up2();
        console.log("up car 2");
    }
    if (keyPressed == "65"){
        left2();
        console.log("left car 2");
    }

    if (keyPressed == "83"){
        down2();
        console.log("down car 2");
    }
    
    if (keyPressed == "68"){
        right2();
        console.log( "right car 2");
    }
}
function up(){
    if (car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("x coordinates of car1 are " +car1_x + "y coordinates of car1 are " + car1_y);
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function down(){
    if (car1_y <= 510){
        car1_y = car1_y + 10;
        console.log("x coordinates of car1 are " + car1_x + "y coordinates of car1 are " + car1_y);
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function right(){
    if (car1_x <= 700){
        car1_x = car1_x + 10;
        console.log("x coordinates of car1 are " + car1_x + "y coordinates of car1 are " + car1_y);
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function left(){
    if (car1_x >= 0){
        car1_x = car1_x - 10;
        console.log("x coordinates of car1 are " + car1_x + "y coordinates of car1 are " + car1_y);
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function up2(){
    if (car2_y >= 140){
        car2_y = car2_y - 10;
        console.log("x coordinates of car2 are " + car2_x + "y coordinates of car2 are " + car2_y);
        uploadbg();
        uploadcar2();
        uploadcar1();
    }
}
function down2(){
    if (car2_y <= 510){
        car2_y = car2_y + 10;
        console.log("x coordinates of car2 are " + car2_x + "y coordinates of car2 are " + car2_y);
        uploadbg();
        uploadcar2();
        uploadcar1();
    }
}
function right2(){
    if (car2_x <= 700){
        car2_x = car2_x + 10;
        console.log("x coordinates of car2 are " + car2_x + "y coordinates of car2 are " + car2_y);
        uploadbg();
        uploadcar2();
        uploadcar1();
    }
}
function left2(){
    if (car2_x >= 0){
        car2_x = car2_x - 10;
        console.log("x coordinates of car2 are " + car2_x + "y coordinates of car2 are " + car2_y);
        uploadbg();
        uploadcar2();
        uploadcar1();
    }
}


