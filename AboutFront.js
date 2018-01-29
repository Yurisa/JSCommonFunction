/**
 * 鼠标在可视区域内的拖拽 不兼容非标准IE
 * 目标对象的position必须为absolute或者relative
 * @param  {[Html]} obj [dom节点]
 * @return {[BOOL]}     [description]
 */
function clientDrag(obj){
	obj.onmousedown=function(ev){
	ev=ev || event;
	var ms_b=ev.clientX-obj.offsetLeft;
	var ms_t=ev.clientY-obj.offsetTop;
	document.onmousemove=function(ev){
		ev=ev || event;
		var currX=ev.clientX-ms_b;
		var currY=ev.clientY-ms_t;
		var Width=document.body.clientWidth || document.documentElement.cilentWidth;
		var Height=document.body.clientHeight || document.documentElement.cilentHeight;
		if(currX<0) {currX=0;}
		else if(currX>Width-obj.clientWidth){
			currX=Width-obj.clientWidth;
		}
		if(currY<0) {currY=0;}
		else if(currY>Height-obj.clientHeight){
			currY=Height-obj.clientHeight;
		}
		obj.style.left=currX +'px';
		obj.style.top=currY +'px';
		return false;
	}
	document.onmouseup=function(){
		document.onmousemove=document.onmouseup=null;
	}
}
}
