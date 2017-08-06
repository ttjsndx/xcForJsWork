/**
 * 组件库，组件库越完善，系统开发越轻松
 * 这个是窗口类组建库
 */

/**
 * 展示 页面加载时的等待画面
 * [showLoading description]
 * @return {[type]} [description]
 */
function XR_showLoading(){
	showLoading(400,300,'../dream/imag/pageInitLoading.gif',"zhegaiId");
}

/**
 * 关闭 页面加载时的等待画面
 * [closeLoading description]
 * @return {[type]} [description]
 */
function XR_closeLoading(){
	closeLoading("zhegaiId");
} 

/**
 * 将指定的消息展示在页面上
 * [XR_alert description]
 * @param {[type]} info [description]
 */
function XR_alert(info){
	showInfo(info);
}