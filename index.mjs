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

    // Post request 
    else if (parseurl.pathname === '/user' && req.method === 'POST') {
        let body = ''
        req.on('data', chunk=>{
            body += chunk.toString();
        })
        req.on('end', ()=>{
            const newItems = JSON.parse(body)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({message: "Post request user added successfull" , data:newItems}))
        })
    } 

    // Put request 
    else if (parseurl.pathname.startsWith('/update/user') && req.method === 'PUT') {
       
        console.log('Requested URL:', parseurl.pathname); 
        console.log('Request method:', req.method);
    
        let body = '';
        const itemId = parseurl.pathname.split('/').pop();  
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const updatedItem = JSON.parse(body);  
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: `PUT request - Updating item ${itemId}`, data: updatedItem }));
            } catch (err) {
                res.statusCode = 400;  
                res.end(JSON.stringify({ message: 'Invalid JSON format' }));
            }
        });
    }
    


    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
})

server.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`);
});
