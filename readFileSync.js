const http=require('http');
const fs=require('fs');
const server=http.createServer((res,req)=>
{
    if(req.url==='/')
    {
        try{
            const data=fs.readFileSync('FileSystem.example.txt','utf8');
            res.end('File content'+data);
        }
        catch (err){
            console.error(err);
            res.end('Internal server error');
        }
    }
});
const port=3000;
server.listen(port,()=>console.log(`server is running on http://localhost:${port}`));