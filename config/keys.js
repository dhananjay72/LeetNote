//keys.js -figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  //we are in production enviornment
  module.exports = require("./prod");
} else {
  //we are in production enviornment
  module.exports = require("./dev");
}

//module.exports = require("./dev");
