function showBigImg(){
	var aImg = document.getElementById("imgStage").getElementsByTagName("img");
	// console.log(oImg);
	for(var i=0; i<aImg.length;i++){
		aImg[i].onclick=function(){
			// alert("ok");
			// window.open(this.src);
			// 创建遮罩层
			var oShowBox = document.createElement('div');
			
			oShowBox.setAttribute("id","showBox");
			document.body.appendChild(oShowBox);
			var windowH = document.body.clientHeight || document.documentElement.clientHeight;
			// console.log(windowH);
			oShowBox.style.height = windowH + 'px';
			// oShowBox.setAttribute("height",windowH);
			

			// 创建图片
			var oImg = document.createElement('img');
			oImg.setAttribute("id","showImg");
			var ImgSrc = this.getAttribute("src");
			oImg.setAttribute("src", ImgSrc);
			oShowBox.appendChild(oImg);
			// var oImgH = oImg.offsetHeight;
			// var oImgW = oImg.offsetWidth;
			// console.log(oImgW);
			// console.log(oImgH);
			//创建一个图片盒子
			var oClose = document.createElement('div');
			oClose.setAttribute("id","close")
			oClose.style.width = 58+'px';
			oClose.style.height = 58+'px';
			// imgBox.setAttribute("background-image","image/view/close.png");
			// console.log(imgBox.offsetWidth);
			// console.log(imgBox.offsetHeight);
			// var oClose = document.createElement("img");
			// oClose.setAttribute("id","close");
			// oShowBox.appendChild(oClose);
			

			oShowBox.appendChild(oClose);
			

			oClose.onclick=function(){
			
			document.body.removeChild(oShowBox);
			
		}
		}
		
	}

}

//绑定多个函数 
function addonloadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
addonloadEvent(showBigImg);