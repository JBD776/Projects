window.onload = rotate;

let theAd = 0; 

let imgs = new Array('imgs/superhero1.png', 'imgs/superhero2.png', 'imgs/superhero3.png', 'imgs/superhero4.png', 
'imgs/superhero5.png', 'imgs/superhero6.png');

function rotate(){
    theAd ++;
    if (theAd == imgs.length){
        theAd = 0;
    }
    document.getElementById("addBanner").src = imgs[theAd];
}

setTimeout(rotate, 3* 1000);


