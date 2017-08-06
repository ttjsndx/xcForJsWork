//底层方法调用主类
var XR = {}; 

//==========需要调用的相关协助文件start=================================
document.write("<script src='../dream/pubFun/commonUtil.js' type='text/javascript'></script>");
document.write("<script src='../dream/tool/toolInte/windowTool.js' type='text/javascript'></script>");
document.write("<script src='../dream/tool/util/toolUtil.js' type='text/javascript'></script>");
document.write("<link rel='stylesheet' type='text/css' href='../dream/css/utilCss.css'>");
//===========需要调用的相关协助文件end==================================


//
/**
 * [build description] 
 * @param  {[json]} jso [description]
 * @return {[object]} XC [description]
 * 主要的建造方法
 */
XR.build = function(jso){
	if(!jso){
		XR_alert("必须输入参数");
	}

} 



XR.getDom = function(){

}

/**
 * 该方法无法在变量被申明前调用，故不能起作用，具体解决办法以后研究！！！@2wl 2017-7-20
 * [importJs description]
 * @param  {[type]} jsValue   [description]
 * @param  {[type]} importJso [description]
 * @return {[type]}           [description]
 * 导入js,会先判断该js是否已经被加载
 */
function importJs(jsValue,importJso){
	alert(111);
	if(!isBank(jsValue)){
		if(!PF_bascDate.JSARR){
			PF_bascDate.JSARR =  document.getElementsByTagName('script') ; 
		}
		for(i in PF_bascDate.JSARR) {
			if(PF_bascDate.JSARR[i].src == jsValue){
				return;			
			}
		} 
		var script = document.createElement('script') ;  
        script.type = 'text/javascript' ;  
        script.src = jsValue;
        var head = document.getElementsByTagName('head').item(0);  
        head.appendChild(script);
        script.onload();
	}
}