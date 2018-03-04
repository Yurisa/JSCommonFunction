/**
 * 阿里在线编程题解答
 */

var genCssSelector = function(){
       var path = []; 
       var pathString;
       var target = arguments[0];  
       searchNode(target);
       pathString = path.join(' ');
       console.log(path)
       console.log(pathString)
      function searchNode(target) {
          if(target.nodeName.toLowerCase() == 'html'){
             path.unshift('html')
             return;
          }
        var nodeName = target.nodeName.toLowerCase();
        var nodeClassName = target.className.toLowerCase();
        var nodeId = target.id.toLowerCase();

        if(!nodeClassName){
          if(!nodeId){
             path.unshift(nodeName)
          }else{
              path.unshift('#'+id)
          }
      }else{
          path.unshift('.'+nodeClassName)
      }
      searchNode(target.parentNode)
  }
   }
document.addEventListener('click', function(e){

//点击li时，返回：html body #page .content.main .refer ul li

console.log(genCssSelector(e.target));

})