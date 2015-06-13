/*添加窗口滚动事件，读取数据块里面的图片*/ 
waterfall('imgStage','img_box');
var dataInt={'data':[{'src':'image/view/img_show (1).jpg'},{'src':'image/view/img_show (2).jpg'},{'src':'image/view/img_show (3).jpg'}]}

window.onscroll=function(){
	if (checkscrollside()) {
		var oImgStage = document.getElementById('imgStage');
		for(var i=0; i<dataInt.data.length;i++){
			var oImgBox = document.createElement('div');
			oImgBox.className='img_box';
			oImgStage.appendChild(oImgBox);

			var oImg = document.createElement('div');
			oImg.className = 'img';
			oImgBox.appendChild(oImg);

			var Img = document.createElement('img');
			Img.src=dataInt.data[i].src;
		}
		waterfall('imgStage','img_box');
	}
}

/*瀑布流函数*/ 
function waterfall(imgStage,img_box){
	/*获取大的图片展示区域 imgStage*/ 
	var oImgStage = document.getElementById(imgStage);
	/*获取存储图片的区块 img_box*/ 
	var aImgBox = getClassObj(oImgStage,img_box);
	//假设每一个图片区块的宽度
	var Box_width = aImgBox[0].offsetWidth;
	/*计算每一行可以容纳的图片块,窗口宽度/区块宽度*/
	var num = Math.floor(document.documentElement.clientWidth/Box_width);
	oImgStage.style.cssText = 'width:'+Box_width*num+'px;margin:0 auto;';//居中样式


	var imgBoxHArr=[];//存储所有块的高度；
	//遍历所有高度
	for(var i=0; i<aImgBox.length;i++){
		var imgBoxH = aImgBox.offsetHeight;
		if (i<num) {
			imgBoxHArr.push(imgBoxH);
			// imgBoxHArr[i]=imgBoxH
		}
		else{
			var minH = Math.min.apply(null,imgBoxHArr);//计算数组里面的最小值
			var minHIndex = getMinHIndex(imgBoxHArr,minH);//通过getMinHIndex函数获取最小值
			aImgBox[i].style.position = 'absolute';
			aImgBox[i].style.top = minH + 'px';
			aImgBox[i].style.left = aImgBox[minHIndex].offsetLeft+'px';
			//计算添加新图片块后的列高
			aImgBox[minHIndex]+=aImgBox[i].offsetHeight;
		}
	}
}

// 通过父元素和子元素的class类，获取该同类子元素的数组
function getClassObj(parent,className){
	var obj = parent.getElementsByTagName('*');
	var newArr = [];
	for(var i=0;i<obj.length;i++){
		if(obj[i].className==className){
			newArr.push(obj[i]);
		}
	};
	return newArr;
}

//获取aImgBox最小高度的索引值
function getminHIndex(arr,minH){
	for(var i in arr){
		if(arr[i]==minH){
			return i;
		}
	}
}

// 鼠标滑动监听函数

function checkscrollside(){
	var oImgStage = document.getElementById('imgStage');
	var aImgBox=getClassObj(oImgStage,'img_box');
	var lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastPinH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}





























