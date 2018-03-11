Util.js

/**
 * 得到对象类型
 */

function type(obj) {
	var toString = Object.prototype.toString;
	var map = {
	    '[object Boolean]'  : 'boolean', 
	    '[object Number]'   : 'number', 
	    '[object String]'   : 'string', 
	    '[object Function]' : 'function', 
	    '[object Array]'    : 'array', 
	    '[object Date]'     : 'date', 
	    '[object RegExp]'   : 'regExp', 
	    '[object Undefined]': 'undefined',
	    '[object Null]'     : 'null', 
	    '[object Object]'   : 'object'
	};
	if(obj instanceof Element) {
        return 'element';
	}
	return map[toString.call(obj)];
}

/**
 * 对象和数组的深拷贝
 */


function deepClone(data) {
	var t = type(data), o, i, ni;
	
	if(t === 'array') {
	    o = [];
	}else if( t === 'object') {
	    o = {};
	}else {
	    return data;
	}
	
	if(t === 'array') {
	    for (i = 0, ni = data.length; i < ni; i++) {
	        o.push(deepClone(data[i]));
	    }
	    return o;
	}else if( t === 'object') {
	    for( i in data) {
	        o[i] = deepClone(data[i]);
	    }
	    return o;
	}
}

/**
 * 数组去重
 */

var unique = function(arr) {
    var result = [], json = {};
    for (var i = 0, len = arr.length; i < len; i++){
        if (!json[arr[i]]) {
            json[arr[i]] = 1;
            result.push(arr[i]);  //返回没被删除的元素
        }
    }
    return result;
};

/**
 * 判断数组元素是否重复
 */

var isRepeat = function(arr) {  //arr是否有重复元素
    var hash = {};
    for (var i in arr) {
        if (hash[arr[i]]) return true;
        hash[arr[i]] = true;
    }
    return false;
};

 
/**
 * 根据数组对象某一属性排序  data.sort(keysrt("firstWord"));
 */
var keysrt = function(propertyName) {
  return function(object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];
    if (value2 < value1) {
      return 1;
    } else if (value2 > value1) {
      return -1;
    } else {
      return 0;
    }
  }
}

/**
 * 完美判断是否为网址
 */
function IsURL(strUrl) {
    var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
    if (regular.test(strUrl)) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * 检验URL链接是否有效
 * 
 * .Open("GET",URL, false) true:异步；false:同步
 */
function getUrlState(URL) {
    var suc = false;
    var xmlhttp = new ActiveXObject("microsoft.xmlhttp");
    xmlhttp.Open("GET", URL, false);
    try {
        xmlhttp.Send();
    } catch (e) {
    } finally {
        var result = xmlhttp.responseText;
        if (result) {
            if (xmlhttp.Status == 200) {
                suc = true;
            } else {
                suc = false;
            }
        } else {
            suc = false;
        }
    }
    return suc;
}


/**
 * jquery 序列化表单转化为json数据格式
 */

$.fn.serializeObject = function()
            {
                var o = {};
                var a = this.serializeArray();
                $.each(a, function() {
                    if (o[this.name] !== undefined) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || '');
                    } else {
                        o[this.name] = this.value || '';
                    }
                });
                return o;
            };
});