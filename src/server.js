var express = require("express");
var app = express(); // E inicie esse servidor
const http = require("http");
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server);

//------------ arduino board -------------
var five = require("johnny-five");

var board = new five.Board();
//----------------------------------------

app.get("/", function (req, res) {
  // o que acontece quando vamos a `/`
  console.log("Oi do `server.js`!");
  res.send("Oi do `server.js`!"); // Devolve um texto de resposta
});
app.use("/public", express.static(__dirname + "/../public")); // Rota publica para carregar os arquivos estaticos

app.get("/index", function (req, res) {
  //  vamos ao `index`
  console.log("index.html");
  res.sendFile("index.html", { root: "." }); 
});

board.on("ready", () => {
  console.log("Board ready!");

  var led1 = new five.Led(11);
  var led2 = new five.Led(7);// amarelo
  var led3 = new five.Led(4); //vermelho
 
 
  
  //Whenever someone connects this gets executed
  io.on("connection", function (socket) {
    console.log("A user connected");

    //Whenever someone disconnects this piece of code executed
    socket.on("disconnect", function () {
      console.log("A user disconnected");
    });
    socket.on("infectados", (infec) => {
      
      if (infec >= 0 && infec <= 500) {
        //console.log(infec + ": blik 1x");
        led1.off();
        led2.on();
        led3.off();
        
        
      } else if (infec > 500 && infec <= 1000) {
        //console.log(infec + ": blik 2x");
        led1.on();
        //led2.on();
        led2.on();
        
      } else if (infec > 1000) {
        //console.log(infec + ": blik 3x");
        led1.on();
        led3.on();
        
        
      }
    });
  });
});

server.listen(5500, () => {
  console.log("Servidor rodando na porta 5500...");
});
