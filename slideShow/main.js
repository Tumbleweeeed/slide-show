var slide = document.querySelector('.box-slide');
var left = document.querySelector('.box-left');
var right = document.querySelector('.box-right');
var font = document.querySelector('.box-dot');
var dot = font.querySelectorAll('span');
var img = slide.querySelectorAll('img');
var j = 0,
	n = 0,
	k = 45;

function removeClass(){
	for(x=0;x<img.length;x++){
		dot[x].classList.remove('active');
	}
}

right.onclick = function(){
	j++;
	if(j>7){
		j=0;
	}
	removeClass();
	dot[j].classList.add('active');
	n++;
	slide.style.transform = "rotateY(" + n*k +"deg)";
}

left.onclick = function(){
	j--;
	if(j<0){
		j=7;
	}
	console.log(j);
	removeClass();
	dot[j].classList.add('active');
	n--;
	slide.style.transform = "rotateY(" + n*k +"deg)";

}

console.log(dot);
console.log(img[1]);

for(var i=0;i<img.length;i++){
	(function(i){
			dot[i].onclick = function(){
				slide.style.transform = "rotateY("+ i*k +"deg)";
				removeClass();
				dot[i].classList.add('active');
				j=i;
			}
		})(i);
}

// 待完成
// for(i=0;i<img.length;i++){
// 	imgDeg = img[i].style.transform;
// 	if(imgDeg == "rotateY(45deg)"){
// 		removeClass();
// 		dot[i].classList.add('active');
// 	}
// }
