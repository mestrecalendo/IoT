# IoT
<hr>
 Trabalho da faculdade, da matéria de internet das coisas, tem como finalidade integrar um Arduino a uma pagina web.<br>
 Criamos um mapa interativo para monitorar os casos de COVID-19 nos bairros de Porto Velho - RO, os LED's, que estão conectados no Arduino, acionarão dependendo da quantidade de infectados que o bairro possui.
 
 
 <h3>O que foi usado:</h3>
 
 - Utilizamos o <a href="https://leafletjs.com/">Leaflet</a> para fazer o mapa, baseado neste <a href="https://leafletjs.com/examples/choropleth/">tutorial</a>.
 
 ![image](https://user-images.githubusercontent.com/57951365/114478735-fae6de80-9bcc-11eb-8da2-30d5fbf2e8c2.png)
 
 Node.js e as bibliotecas:<br>
    -<a href="https://nodemon.io/">Nodemon</a>: Para facilitar minha vida :)<br>
    -<a href="https://expressjs.com/pt-br/">Express</a>: Criar um servidor http<br>
    -<a href="https://socket.io/">Socket.IO</a>: Comunicação entre o cliente e o servidor, para enviar os dados para o Arduino<br>
    -<a href="https://www.arduino.cc/en/reference/firmata">Firmata</a>: Para permitir a programação do Arduino em Javascript, utilizei esse <a href="http://ramon-barros.com/arduino/2018/07/31/arduino-node-js.html">tutorial</a>.
    -<a href="http://johnny-five.io/">Johnny-five</a>: Para programar o Arduino em Javascript.
    
