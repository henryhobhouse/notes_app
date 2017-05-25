var http = require('http');
var url = require('url');
var ecstatic = require('ecstatic')({ root: __dirname + '/app/public' });

function start(route, handle) {

  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("request for  " + pathname + " received!")
    if (pathname.substring(0, 4) == "/js/" || pathname.substring(0, 5) == "/css/") {
      ecstatic(request, response);
    } else {
      route(handle, pathname, response);
    }
  }

  http.createServer(onRequest).listen(3000);
  console.log("Server has started");
}

exports.start = start;
