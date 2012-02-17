/**
 * Created by JetBrains WebStorm.
 * User: tuba
 * Date: 12-2-17
 * Time: 上午9:36
 * To change this template use File | Settings | File Templates.
 */

var http = require("http");   // 引用http模块

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);