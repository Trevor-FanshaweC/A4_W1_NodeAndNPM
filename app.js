const http = require('http'); // like a PHP require

const port = process.env.PORT || 3000; // localhost:300
const stream = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let url = req.url;

    switch (url){
        case '/contact':
            stream.readFile('contact.html', null, ((err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.write('404 not found');
                } else {
                    res.write(data);
                }
            }))
        break;

        case '/contact':
            stream.readFile('contact.html', null, ((err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.write('404 not found');
                } else {
                    res.write(data);
                }
            }))
        break;

        default:
        res.end('8 days and counting til the World freakin parties cuz the orange idiot will be gone!');
    }    
});

server.listen(port, () => {
    console.log(`Server running at ${port}/`);
});