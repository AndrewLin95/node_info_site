const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 8080
const page404 = fs.readFileSync("page404.html", "utf-8", (err, data) => {
    if (err) throw err;
    return data;
});

const homePage = fs.readFileSync('index.html',"utf-8", (err, data) => {
    if (err) throw err;
    return data;
});

const server = http.createServer((req, res) => {
  const myURL = url.parse(req.url, true);
  let filename = '.' + myURL.pathname;

  if (myURL.pathname === '/'){
    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(homePage);
        return res.end();
    })
  } else {
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(page404);
        return res.end(myURL.pathname);
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    })
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
});