var randomNmber1=Math.random()*5+1;
randomNmber1= Math.round(randomNmber1);
//console.log(randomNmber1);

var randomImage="images/dice"+randomNmber1+".png";
var img1=document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNmber2=Math.random()*5+1;
randomNmber2= Math.round(randomNmber2);

var randomImage2 ="images/dice"+randomNmber2+".png";
var img2=document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNmber1>randomNmber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(randomNmber2>randomNmber1){
  document.querySelector("h1").innerHTML="🚩 Player 2 wins";
}
else {
  document.querySelector("h1").innerHTML="Draw";
}
