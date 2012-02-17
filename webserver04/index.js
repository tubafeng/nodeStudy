/**
 * Created by JetBrains WebStorm.
 * User: tuba
 * Date: 12-2-17
 * Time: 上午10:30
 * To change this template use File | Settings | File Templates.
 */

var server = require("./server");
var router = require("./route");

server.start(router.route);