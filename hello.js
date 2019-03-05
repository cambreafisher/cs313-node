

function onRequest(req, res) {
   var url = require('url');

   var addr = url.parse(req.url, true);

   console.log(addr.pathname);

   if(addr.pathname == "/home") {
    console.log("home");

    res.write("<html><body>");
    res.write("<h1>Welcome to the Home Page</h1>");
    res.write("</body></html>");
    return res.end();
   }
   else if (addr.pathname == "/getData") {
       console.log("getData");
       var name = "Br. Burton";
       var classname = "cs313";
       var json = JSON.stringify({
          name: name,
          class: classname
       });
       return res.end(json);
   }
   else {
       res.writeHead(404, {'Content-Type':'text/html'});
       return res.end("404 Not Found");
   }
}

const http = require('http');

const server = http.createServer(onRequest);

server.listen(5000);

console.log("The web server is now listening on port 5000");

