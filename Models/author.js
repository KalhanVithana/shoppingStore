const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let author = new Schema(
  {
    title: {
      type: String,
    },
   
    author: {
      type: String,
    },

    cost: {
      type: String,
    },
    newbook: {
      type: String,
    }
  },
  {
    collection: "author",
  }
);

module.exports = mongoose.model("author", author);
