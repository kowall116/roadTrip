'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Roadtriphomepage = new Module('roadtriphomepage');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Roadtriphomepage.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Roadtriphomepage.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Roadtriphomepage.menus.add({
    title: 'roadtriphomepage example page',
    link: 'roadtriphomepage example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Roadtriphomepage.aggregateAsset('css', 'roadtriphomepage.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Roadtriphomepage.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Roadtriphomepage.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Roadtriphomepage.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Roadtriphomepage;
});
