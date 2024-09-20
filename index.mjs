import { createServer } from 'node:http';


const PORT = 3000

const server = createServer((req, res)=>{
    
    const baseUrl = `http://${req.headers.host}`
    const parseurl = new URL(req.url , baseUrl)

    //  Create multiple pages 
    
    
    if (parseurl.pathname === '/' && req.method ==='GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.end('<h1>this is the home page </h1>');
    }
    else if (parseurl.pathname === '/about' && req.method==='GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });  
        res.end("This is the about page");  
    }
    else if (parseurl.pathname === '/contact' && req.method==="GET") {
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
