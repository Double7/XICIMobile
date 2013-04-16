// xm 是 xici mobile的简写
var xm = xm || {};

// 基础信息结构
if(!xm.info)
	xm.info = {
		"Version" : 1
	};

// CSS的选择器
if(!xm.selector || （typeof(xm.selector）== "object"){
	xm.selector = function (selector) {
		if(typeof(selector) == "string"){
			return document.querySelectorAll(selector);
		}
	};
}



// 事件托管部分
if(!xm.event || (typeof(xm.event) == "object"))
	xm.event = {};

