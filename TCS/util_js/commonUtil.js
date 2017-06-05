/**
 * 版权所有方：XXX
 * 底层工具类 
 * 页面中代码，复用性高的部分，可以提出来放在这里面，其他场景再遇到的时候，就可以直接调用了
 */
var messageWindowId = "messageWindowId"; //页面每次只能展示一个消息提示框


/*
 * 页面加载时遮盖 展现方法
 */
function showLoading(width,height,imageUrl,id){
	if(document.getElementById(id)){ //如果ID存在，则直接展示
		document.getElementById(id).style.display = "";
		return;
	}

	/*
	 * 如果不存在，那就先做一个居中的div吧
	 * 每次做居中的div都要去百度一下各种方法，很费时间
	 * 所以为什么不第一次做的时候多花点时间，做一个公用方法，
	 * 给这个公用方法传个高和宽进去，它就能返回一个 指定大小居中的div出来，。
	 * 多爽
	 */
	var myLoadingDiv = getCenterDiv(width,height,id);
	//myLoadingDiv.style.background = "red";
	document.body.appendChild(myLoadingDiv);   //然后把div塞给页面

	/**
	 * 这里为什么没有直接用上面的myLoadingDiv来添加动态图
	 * 而是用了 document.getElementById(id)，涉及到的是对象方面的知识
	 * 这个太复杂了我也搞不怎么懂
	 * 反正 myLoadingDiv 是js里面创建的一个对象模板。用来告诉html我们需要一个什么样的标签
	 * 而我们现在需要修改的是页面展示的dom.那我们可以在document.body.appendChild(myLoadingDiv)之前
	 * 修改 myLoadingDiv 对象吗。肯定是可的。但是不能用myLoadingDiv.style.backgroundImage去修改
	 * 因为这些方法是js提供给程序员修改 页面dom的接口，而myLoadingDiv只是一个js里面自己创建的dom
	 * 还没有加载到 页面上。所以如果想直接修改的话，就只能给getCenterDiv传入更多的参数来满足更多的需求
	 * 
	 * 用下面这种方法修改的话，会影响 页面性能哦。。因为现在js中最影响性能的步骤就是从页面获取dom,
	 * 但是getCenterDiv已经有3个参数了，再传肯定会越来越复杂，可读性越来越低。可能会出现，我为了一个小的
	 * 弹出框，需要去理解十几种不同类型的弹出框。这个就涉及到了 组件库的可读性和复用性问题，16年末接着微信
	 * 小程序越来越火的react.js就是用来解决这个问题。
	 */
	document.getElementById(id).style.backgroundImage = "url(" + imageUrl + ")"; //添加一个有趣的等待页面加载 动态图吧
}

/*
 * 页面加载时遮盖 隐藏方法
 */
function closeLoading(id){
	var myLoadingDiv = document.getElementById(id);
	if(myLoadingDiv != null){
		myLoadingDiv.style.display = "none";
	}
	
}


/**
 * [getCenterDiv description]
 * @param  {[type]} width  [description]
 * @param  {[type]} height [description]
 * @return DOM
 * 定制 指定 宽高 的div;
 */
function getCenterDiv(width,height,id){
	var top = (window.screen.availHeight - 20 - height) / 2;
	var left = (window.screen.availWidth - 10 - width) / 2;
	var myDiv = document.createElement("div");
	myDiv.innerHTML = "<div style='position:absolute"
								+ ";width:" + width 
								+ "px;height:" + height
								+ "px;top:" + top
								+ "px;left:" + left
								+ "px;'" 
						  +"id = '" + id + "' >" 
					+ "</div>";
	return myDiv;
}

/**
 * 判断是否是 未定义
 * [isUndefined description]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
function isUndefined(value){
  //获得undefined，保证它没有被重新赋值
  try{
  	var undefined = void(0);
  	return value === undefined;
  }catch{
  	return false;
  }
}

/**
 * 判断字符是否未定义或者 为null或者长度为0，是则返回ture
 * [isBank description]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
function isBank(value){
	try{
		if(isUndefined(value) || value == null || value == ""){
			return true;
		}
		return false;
	}catch{
		alert("下面的值在判断非空是出错：" + value + "，请联系管理员");
	}
	
}

/**
 * 展示指定内容,根据指定内容长度，生成合适的长宽
 * [showInfo description]
 * @param  {[type]} info [description]
 * @return {[type]}      [description]
 */
function showInfo(info){
	var infoLength = info.length;
	var height = 15;
	if(infoLength > 10){
		height = Math.ceil(Math.sqrt(infoLength/3))*15 ;
	}
	var width = height*3;
	var top = (window.screen.availHeight - 20 - height) / 2;
	var left = (window.screen.availWidth - 10 - width) / 2;
	var myDiv = document.createElement("div");

	myDiv.innerHTML = "<div style='position:absolute"
								+ ";width:" + width 
								+ "px;height:" + height
								+ "px;top:" + top
								+ "px;left:" + left
								+ "px;'  id=''>" 
						+ "<div> "
							+ info 
						+ "</div>"
						+ "<div> "
							+ "<input type='button' onclick='' >"
						+ "</div>" 
					+ "</div>";
	
}