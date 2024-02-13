const http=require('http');
const fs=require('fs');
const server=http.createServer((res,req)=>{
    if(req.url==='/'){
        const message='Hello, this is your nodeJs server.';
        try{
            fs.writeFileSync('FileSystem/output.txt',message,'utf8');
            res.end('file content: '+message);
        }
        catch (err){
            console.error(err);
            res.end('Internal server error');
        }
    }
});
const port=3000;
server.listen(port,()=>`Server is running at https://localhost:${port}`);