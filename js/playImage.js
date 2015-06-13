function playImage(){
	var oImgBox = document.getElementById("imageBox");
	var oUl = oImgBox.getElementsByTagName("ul")[0];
	var oInfor = document.getElementById("banner_infor");
	//console.log(oUl);
	var aPages = oImgBox.getElementsByTagName("ol")[0].getElementsByTagName("li");
	// alert("ok");
	// console.log(aPages);
	var now = 0;
	for(var i=0;i<aPages.length;i++){
		aPages[i].index=i;
		aPages[i].onclick=function(){
			now=this.index;
			pageChange();
		}
	}

	function pageChange(){
		for(var i=0;i<aPages.length;i++){
			aPages[i].className="";
		}

		aPages[now].className='active';
		startMove(oUl,{top: -356*now});
		startMove(oInfor,{right: -320*now});
	}

	function nextPage(){
		now++;
		if(now==aPages.length){
			now=0;
		}
		pageChange();
	}
	var timer = setInterval(nextPage,2000);
	oImgBox.onmouseover=function(){
		clearInterval(timer);
	}
	oImgBox.onmouseout=function(){
		timer = setInterval(nextPage,2000);
	}
}
// 鼠标移入，图片放大
function zoomImage(){
	var oColumnBox = document.getElementById("column_box")
	// console.log(column_box);
	var aColumn = oColumnBox.getElementsByClassName("column");
	var aImg = oColumnBox.getElementsByTagName("img");
	//console.log(aColumn);
	// console.log(aImg);
	var nowIndex=0;
	for(var i=0; i<aColumn.length; i++){
		aColumn[i].index=i;
		aColumn[i].onmouseover=function(){
			nowIndex=this.index;
			startMove(aImg[nowIndex],{width: 110, height:110});
		}
		aColumn[i].onmouseout=function(){
			nowIndex=this.index;
			startMove(aImg[nowIndex],{width: 96, height:96});
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

addonloadEvent(playImage);
addonloadEvent(zoomImage);
// window.onload=playImage;