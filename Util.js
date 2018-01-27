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