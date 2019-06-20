var db = require('../db');
// console.log(db);
module.exports = {
  messages: {
    get: function(cb, res) {
      console.log('this is working maybe');
      db.query('SELECT * FROM messages', (err, rows) => {
        if (err) {
          cb(err);
        } else {
          // console.log(res);
          res.send(JSON.stringify(rows));
        }

        console.log(`success! these are our rows: \n${rows}`);
      });
    }, // a function which produces all the messages
    post: function() {
      db.query('SELECT * FROM messages', (err, rows) => {
        if (err) {
          throw err;
        }

        console.log(`success! these are our rows: \n${rows}`);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {},
    post: function() {}
  }
};
