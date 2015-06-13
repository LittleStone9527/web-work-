window.onload=function(){
	var oNav = document.getElementById('fast_nav');
	var aBtn = oNav.getElementsByTagName('input');
	var aTab = oNav.getElementsByTagName('div');

	for(var i=0; i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			for(var i=0; i<aBtn.length; i++){
				aBtn[i].className = '';
				aTab[i].style.display = 'none'; 
			}

			this.className = 'active';
			aTab[this.index].style.display = 'block'; 
		}
	}
}

window.onscroll=function ()
{
	var oNavSide = document.getElementById('fast_nav');
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollTop == 0){
		oNavSide.style.top = 0+'px';
	}
	else{
		startMove(oNavSide, {"top": (parseInt(document.documentElement.clientHeight/2)-oNavSide.offsetHeight+scrollTop)+30});
	}
	
};