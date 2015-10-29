'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Roadtriphomepage, app, auth, database) {

  app.get('/api/roadtriphomepage/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/api/roadtriphomepage/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/roadtriphomepage/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/roadtriphomepage/example/render', function(req, res, next) {
    Roadtriphomepage.render('index', {
      package: 'roadtriphomepage'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
