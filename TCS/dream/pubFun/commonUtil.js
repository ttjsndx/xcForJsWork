var PF_bascDate = {}; //所有的基础数据都是该json数据的一个value值，避免命名重复

/**
 * 判断字符是否未定义或者 为null或者长度为0，是则返回ture
 * [isBank description]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
function isBank(value){
	try{
		var undefined = void(0);
		if(value === undefined || value == null || value == ""){
			return true;
		}
		return false;
	}catch(e){
		alert("下面的值在判断非空是出错：" + value + "，请联系管理员");
	}
	
}

