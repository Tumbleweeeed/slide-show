var slide = document.querySelector('.box-slide');
var left = document.querySelector('.box-left');
var right = document.querySelector('.box-right');
var i = 0;
right.onclick = function(){
	i++;
	slide.style.transform = "rotateY(" + i +"deg)";
}