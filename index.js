const http = require('http');
const file = require('fs')
const port = 8080
const server = http.createServer(function(req,res){
    let some;
    if (req.url === '/'){
        res.setHeader("Content-Type", "text/html");
        const data = file.readFileSync('index.html');
        res.write(data);
    }
    if (req.url === '/source/index.css'){
        res.setHeader("Content-Type", "text/css");
        const cs = file.readFileSync('source/index.css');
        res.write(cs);
        }
    if (req.url === '/source/register.html'){
        res.setHeader("Content-Type", "text/html");
        some = file.readFileSync('source/register.html');
        res.write(some);
        }
    if (req.url === '/source/registered.html'){
        res.setHeader("Content-Type", "text/html");
        some = file.readFileSync('source/registered.html');
        res.write(some);
        }
    if (req.url === '/source/script.html'){
        res.setHeader("Content-Type", "text/javascript");
        some = file.readFileSync('source/script.js');
        res.write(some);
        }
    res.end();
});
server.listen(port ,() => {
    console.log(`Server running at http://localhost:${port}/`);
   });
