const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    else if(req.url === '/about'){
        res.end('Welcome to our about page')
    }
    else {res.end(`<h1>Oops!</h1><br><p>We can't seem to find the page that you are looking for</p><br><a href="/">back home</a>`)}
})

//5000 is arbitrary port
server.listen(5555)