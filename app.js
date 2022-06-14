// const { POINT_CONVERSION_UNCOMPRESSED } = require("constants");
// const fs= require("fs");
// const http= require("http");

// const hostname = '127.0.0.1';
// const port = 3000;

// const home= fs.readFileSync('./index.html');
// const about= fs.readFileSync('./aboutPage.html');
// const blog= fs.readFileSync('./blog.html');
// const contact= fs.readFileSync('./contact.html');
// const course= fs.readFileSync('./coursesPage.html');

// const server= http.createServer((req, res)=>{
//     res.statusCode = 200;
//     const url = req.url;
//   res.setHeader('Content-Type', 'html');
//   if(url == '/'){

//     res.end(home);
//   }
//   else if(url == '/index.html'){

//     res.end(home);
//   }
//   else if(url == '/blog.html'){
//     res.end(blog);
//   }
//   else if(url == '/aboutPage.html'){
//     res.end(about);
//   }
//   else if(url == '/contact.html'){
//     res.end(contact);
//   }
//   else if(url == '/coursesPage.html'){
//     res.end(course);
//   }
//   else{
//     res.statusCode=404;
//     res.end(" <h1> Error 404: Not Found </h1>");
//   }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });

// -------------------------Using Express Module------
const express = require("express");
const app = express();
const port =80;
const fs= require("fs");
const home= fs.readFileSync('./index.html');
const about= fs.readFileSync('./aboutPage.html');
const blog= fs.readFileSync('./blog.html');
const contact= fs.readFileSync('./contact.html');
const course= fs.readFileSync('./coursesPage.html');
app.get("/index.html",(req, res)=>{
    res.status(200).send(home);

});
app.get("/aboutPage.html", (req, res)=>{
    res.status(200).send(about);
});
app.get("/contact.html", (req, res)=>{
    res.status(200).send(contact);
});

app.get("/blog.html", (req, res)=>{
    res.status(200).send(blog);
});
app.get("/coursePage.html", (req, res)=>{
    res.status(200).send(course);
});

app.listen(port, ()=>{
    console.log(`app is running at ${port}`);
});
