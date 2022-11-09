//require is inbuilt function is used to import module
var http =require('http');


var onReceive=function(request,response){
    
    response.write("<h1>Ecommerce Web Site</h1>");
    response.write("<hr/>")
    response.write("<ol>"+
    "<li>cloths</li>"+
    "<li>shoes</li>"+
    "</ol>");
    response.end();
       }
    


var server=http.createServer(onReceive);
server.listen(8000);
console.log("server is listening  8000");