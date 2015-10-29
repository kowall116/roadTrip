'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Roadtriplayout, app, auth, database) {

  app.get('/api/trips', function(req, res, next) {
    res.json({ message: 'TESTING' });
  });

  app.get('/api/trips/pacific-north-west', function(req, res, next) {
    res.json({ 
      cities: {

      } 
    });
  });

};