import { createServer } from 'node:http';


const PORT = 3000

const server = createServer((req, res)=>{
    const url = req.url
    console.log(url)
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.end('<h1>this is the home page </h1>');
    }
})

server.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`);
});
