/*完美运动框架*/
//getStyle()函数 用于兼容IE和FF：获取 对象的 非行间样式中的属性的值。 obj：元素对象。 name：属性名。
function getStyle(obj,name){
        if(obj.currentStyle){
            return obj.currentStyle[name];//for IE
        }else{
            return getComputedStyle(obj,false)[name];//for FF
        }
    }

function startMove(obj,json,fnEnd){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var bStop=true;

        for(var attr in json){
            //取得现有样式的具体值
            var cur = 0;
            if(attr=='opacity'){
                cur=Math.round(parseFloat(getStyle(obj, attr))*100);
            }
            else{

                cur=parseInt(getStyle(obj, attr));
            }




            //计算速度
            var speed=(json[attr]-cur)/10;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(cur!=json[attr])
            bStop=false;


            //计算运动过程
            if(attr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else
            {
                obj.style[attr]=cur+speed+'px';
            }

        }

        if(bStop)
        {
            clearInterval(obj.timer);

            if(fnEnd)fnEnd();
        }
    },30)
}