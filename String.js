String.js
/**
 *统计字符串中每个字母出现的次数
 */
function statistics(str) {
        str = str || ""; //处理在不传递参数的情况下不报错
        var obj = {};
        for (var i = 0; i < str.length; i++) {
                var element = str[i];
                obj[element] = !obj[element] ? 1 : obj[element] + 1;
        }
        return obj;
}