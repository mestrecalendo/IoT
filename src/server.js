var express = require("express");
const path = require("path");
var app = express();



//app.get("/", function(req, res){
  //  res.sendFile("C:/Users/Calendoscopio/Desktop/IoT/public/index.html")
//});
  //utilizando arquivos estaticos
  //.use(express.static("public"))
  //utilizar body do req
 
  

  //conf template engine
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: false}));
  //criar rotas
 





app.listen(5500,() => {
    console.log('Servidor rodando na porta 5500...')
});
//localhost:5500

