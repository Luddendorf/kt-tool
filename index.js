//Неправильно отображает,да и вообще всё через (_!_)

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/" || req.url === "/index.html") {
//     fs.readFile("./index.html", (err, data) => {
//       if (err) {
//         throw err;
//       }

//       res.writeHead(200, {
//         "Content-Type": "text/html",
//       });
//       res.end(data);
//     });
//   } else if (req.url === "/child") {
//     fs.readFile('./child.html', (err, data) => {
//       if (err) {
//         throw err;
//       }

//       res.writeHead(200, {
//         "Content-Type": "text/html",
//       });
//       res.end(data);
//     });
//   }
// });
// const PORT = process.env.PORT || 3000

// server.listen(PORT, () => {
//   console.log(`Server has been started on ${PORT}...`)
// })