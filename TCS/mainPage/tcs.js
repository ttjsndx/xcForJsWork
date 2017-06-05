/**
 * 版权所有：xxxx
 * @wwl 2017-02-22
 * 贪吃蛇 服务js
 */

//初始化方法
function init(){
	showLoading();
	// initMap(); 
	// closeLoading();
}

/**
 * [initMap description]
 * @return {[type]} [description]
 * 初始化页面
 */
function initMap(){
	//主div居中
	var mainDivDom = document.getElementById('mainDiv');	
	var clientWidth  = document.body.clientWidth;    //屏幕的宽度
	var cliengtHeight = window.screen.availHeight ;   //屏幕的高度
	mapModeJson.WINDOW_WIDTH = clientWidth;
	mapModeJson.WINDOW_HEIGHT = cliengtHeight;
	
	mainDivDom.style.left = (clientWidth*1 - 900) /2 + "px";
	mainDivDom.style.top  = (cliengtHeight*1 - 560)/2 + "px";
}

