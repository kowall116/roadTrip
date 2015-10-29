'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Roadtriplayout, app, auth, database) {

  app.get('/api/roadtriplayout/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/api/roadtriplayout/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/roadtriplayout/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/roadtriplayout/example/render', function(req, res, next) {
    Roadtriplayout.render('index', {
      package: 'roadtriplayout'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
