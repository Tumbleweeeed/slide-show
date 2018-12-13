var slide = document.querySelector('.box-slide');
var left = document.querySelector('.box-left');
var right = document.querySelector('.box-right');
var font = document.querySelector('.box-dot');
var dot = font.querySelectorAll('span');
var img = slide.querySelectorAll('img');
var i = 0,
	k = 45;
right.onclick = function(){
	i++;
	slide.style.transform = "rotateY(" + i*k +"deg)";
}

left.onclick = function(){
	i--;
	slide.style.transform = "rotateY("+ i*k +"deg)";
}

console.log(dot);
console.log(img[1]);


for(i=0;i<img.length;i++){
	(function(i){
			dot[i].onclick = function(){
				slide.style.transform = "rotateY("+ i*k +"deg)";
				console.log(i);
			}
		})(i);
}
