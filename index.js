const express = require('express');
const app = express();
const path = require('path')
const port = 8080;

// res.sendFile uses the absolute path of the directory. Therefore, you need the directory path, then the subsequent file name.
// path.join combines the paths into a url like object
// path.join(<contents>) gives us the absolute path to the index.html file within the folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'))
})

app.get('/contact-me.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact-me.html'))
})

// "*" means any other get request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/page404.html'))
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
});

// Below code for non-express node.js routing 

// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// const express = require('express');

// const port = 8080
// const page404 = fs.readFileSync("page404.html", "utf-8", (err, data) => {
//     if (err) throw err;
//     return data;
// });

// const homePage = fs.readFileSync('index.html',"utf-8", (err, data) => {
//     if (err) throw err;
//     return data;
// });

// const server = http.createServer((req, res) => {
//   const myURL = url.parse(req.url, true);
//   let filename = '.' + myURL.pathname;

//   if (myURL.pathname === '/'){
//     fs.readFile(filename, function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(homePage);
//         return res.end();
//     })
//   } else {
//     fs.readFile(filename, function(err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         res.write(page404);
//         return res.end(myURL.pathname);
//       }
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     })
//   }
// });

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`)
// });