var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      console.log('messages.get');
      models.messages.get((err, data) => {
        if (err) {
          res.status(404);
          res.json(err);
        } else {
          console.log('anything');
          res.status(200);

          // res.send(JSON.stringify(data));
          res.end();
        }
      }, res);
      // res.status(200);
      // res.json(models.messages.get);
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      res.status(201);
      console.log('Post messages!');
      res.send(models.messages.post);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      res.status(200);
      res.send(models.messages.user);
    },
    post: function(req, res) {
      res.status(201);
      res.send(models.messages.user);
    }
  }
};
