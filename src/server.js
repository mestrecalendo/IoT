var express = require("express");
const path = require("path");
var app = express();



//app.get("/", function(req, res){
  //  res.sendFile("C:/Users/Calendoscopio/Desktop/IoT/public/index.html")
//});
app
  //utilizando arquivos estaticos
  .use(express.static("public"))
  //utilizar body do req
  .use(express.urlencoded({extended: true}))
  

  //conf template engine
  .set("views", path.join(__dirname, "views")).set("view engine", "html")

  //criar rotas
  .get("/C:\Users\Calendoscopio\Desktop\IoT\src\views\index.html")





app.listen(5500,() => {
    console.log('Servidor rodando na porta 5500...')
});
//localhost:5500

