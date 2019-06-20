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
          res.send(JSON.stringify(rows));
        }

        console.log(`success! these are our rows: \n${rows}`);
      });
    }, // a function which produces all the messages
    post: function() {
      db.query(`INSERT INTO messages (message, user_id) VALUES (${message}, 1)`, (err, rows) => {
        if (err) {
          throw err;
        }

        console.log(`success! these are our rows`);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {},
    post: function() {}
  }
};
