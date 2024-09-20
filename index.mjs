import { createServer } from 'node:http';


const PORT = 3000

const server = createServer((req, res)=>{
    const url = req.url
    console.log(url)
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.end('<h1>this is the home page </h1>');
    }
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });  
        res.end("This is the about page");  
    }
    else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });  
        res.end("This is the contact page");  
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
})

server.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`);
});
