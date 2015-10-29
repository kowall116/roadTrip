'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Roadtriplayout = new Module('roadtriplayout');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Roadtriplayout.register(function(system, app, auth, database) {

  // Override layout
  app.set('views', __dirname + '/server/views');

  //We enable routing. By default the Package Object is passed to the routes
  Roadtriplayout.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Roadtriplayout.menus.add({
    title: 'roadtriplayout example page',
    link: 'roadtriplayout example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Roadtriplayout.aggregateAsset('css', 'roadtriplayout.css');
  Roadtriplayout.aggregateAsset('css', 'main.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Roadtriplayout.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Roadtriplayout.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Roadtriplayout.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Roadtriplayout;
});
