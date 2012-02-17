/**
 * Created by JetBrains WebStorm.
 * User: tuba
 * Date: 12-2-17
 * Time: 上午9:59
 * To change this template use File | Settings | File Templates.
 */

var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
