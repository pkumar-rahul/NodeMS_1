const fs = require("fs");

const readableStream = fs.createReadStream("read.txt");
const writableStream = fs.createWriteStream("write.txt");

let dataToWrite = "";
readableStream.on("data", chunk => {
    console.log("<<<<<<<<<<<<<<<<<<<<<  CHUNK     >>>>>>>>>>>>>>>>>>>>>>>>>");
    dataToWrite += chunk.toString();
});

readableStream.on("end", () => {
    writableStream.write(dataToWrite);
    writableStream.end();
});