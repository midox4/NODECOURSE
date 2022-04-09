//default server in nodejs with http
//npm i -g nodemon installer une fois pour toute sur mac 
//framework expressJS : npm i express --save

const http = require('http')  // nedilou module http https http2  let ou var const c'est stable non modifiable 

//http object possede des fonctions 

const server = http.createServer((req, res)=>{
    //serveur reponse function callback
    //console.log(res)
    
   /* res.statusCode= 200 
    res.setHeader('content-type', 'text/html')
    res.write('welcome to my \n\n')
    res.write('welcome to tunisia ')

    res.end()*/
    //request talab tawa 

    //
    //res.write(req.url)     // appel url page 
    if(req.url== '/home') {
        res.statusCode= 200

        res.write('welcome to home page')
    }else if(req.url=='/contact') {
        res.statusCode= 200

        res.write('welcome to contact page')
    }else if (req.url=='/help'){
        res.statusCode= 200

        res.write('welcome to help page ')

    }else {
        res.statusCode= 404
        res.write('page not found ')

    }




    res.end()


})

server.listen(1500,()=>{
    console.log('serveur running avec succes au port 1500')
})