const http = require("http");
const fs = require("fs");
const socket = require("socket.io");
const { kStringMaxLength } = require("buffer");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        //res.end("Hello World !!!");
        let readableStream = fs.createReadStream("src/clientpeer.html");
        readableStream.pipe(res);
    }else if(req.url == "/products") {
        let products = [
            { id: 1, title: "MacbookPro", Price : 2000},
            { id: 2, title: "MacbookAir", Price : 5000},
        ];
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(products));
    }else {
        res.statusCode = 404;
        res.end("Resource Not Found");
    }
});

var io = socket(server);
io.sockets.on("connection", skt => {
    setInterval(() => {
        var dataToSent = new Date();
        skt.emit("Msg_From_Server_Peer", dataToSent);
    }, 2000);

    skt.on("Msg_From_Client_Peer", dataReceived => {
        console.log(dataReceived);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});