const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('FileSystem/example.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.end('Internal Server Error');
                return;
            }
            res.end('File content: ' + data);
        });
    }
});

const port = 3000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
