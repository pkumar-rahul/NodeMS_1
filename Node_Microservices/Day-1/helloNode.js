console.log("My first Day in Marcel course.");
console.log("Rahul");

const { default: axios } = require("axios");
const math = require("./math-module");
console.log(math.addition(3,1));
console.log(`The addition is ${math.addition(3,5)}`);
//const axios = require("axios"); //npm package
axios
    .get("https://api.github.com/users")
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
