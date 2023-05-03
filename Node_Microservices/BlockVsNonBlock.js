const fs = require("fs");
//Blocking/Sync way
const dataFile = fs.readFileSync("input.txt", {encoding: "utf-8"});
console.log(dataFile);
console.log("Program completed for blocking");

//Non-Blocking/Async 
// via callback function (Req/Resp, All or None, No Partial Data)
fs.readFile("input.txt", (err, data) => {
    if(err){
        console.log("Error : " + err);
    } else {
        console.log("Result " + data);
    }
});
console.log("Program completed for unblocking");
// via event emitter (Publish/Subscribe, In chunks, Partial Data)
//Publish
const EventEmitter = require("events").EventEmitter;
function GetCount() {
    let e = new EventEmitter();
    setTimeout(() => {
        e.emit("count", 1);
    }, 2000);
    //or
    //process.nextTick(() => {
    //  e.emit("count", 1);
    return e;
}

//Subscribe
const evt = GetCount();
evt.on("count", currCount => {
    console.log(`The count is ${currCount}`);
});