
/**
 * 将child节点插入到parent中，使其成为第n个子节点
 * @param  {[type]} parent [description]
 * @param  {[type]} child  [description]
 * @param  {[type]} n      [description]
 * @return {[type]}        [description]
 */
function insertAt(parent, child, n) {
    if (n < 0 || n > parent.childNodes.length) {
        throw new Error("invalid index");
    } else if (n == parent.childNodes.length) {
        parent.appendChild(child);
    } else {
        parent.insertBefore(child, parent.childNodes[n]);
    }
}


/**
 * 倒序排列节点n的子节点
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
 */
function reverse(n) { //创建一个DocumentFragment作为临时容器
    var f = document.createDocumentFragment(); //从后至前循环子节点，将每一个子节点移动到文档片段中
    //n的最后一个节点变成f的第一个节点，反之亦然
    //注意，给f添加一个节点，该节点自动地会从n中删除
    while (n.lastChild) f.appendChild(n.lastChild); //最后，把f的所有子节点一次性全部移回n中
    n.appendChild(f);
}


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



/**
 *优雅的图片翻转实现方式
 *
 *要创建图片翻转效果，将此模块引入到HTML文件中
 *然后在任意＜img＞元素上使用data-rollover属性来指定翻转图片的URL即可
 *如下所示:
 *
 *<img src="normal_image.png "data-rollover="rollover_image.png">
 *
 */
function changeImage() { //所有处理逻辑都在一个匿名函数中:不定义任何符号
    //遍历所有的图片，查找data-rollover属性
    for (var i = 0; i < document.images.length; i++) {
        var img = document.images[i];
        var rollover = img.getAttribute("data-rollover");
        if (!rollover) continue; //跳过没有data-rollover属性的图片
        //确保将翻转的图片缓存起来
        (new Image()).src = rollover; //定义一个属性来标识默认的图片URL
        img.setAttribute("data-rollout", img.src); //注册事件处理函数来创建翻转效果
        img.onmouseover = function () {
            this.src = this.getAttribute("data-rollover");
        };
        img.onmouseout = function () {
            this.src = this.getAttribute("data-rollout");
        };
    }
}
