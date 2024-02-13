const http=require('http');
const server=http.createServer((res,req)=>{
    res.end("this is your server");
});
const port=3000;
server.listen(port,()=>console.log(`server is runnig on http://localhost:${port}`));