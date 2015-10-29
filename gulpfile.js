'use strict';

var gulp 	= require('gulp'),
	sass    = require('gulp-sass');;

var env = process.env.NODE_ENV || 'development';
/*
var defaultTasks = ['clean', 'jshint', 'csslint','serve','watch']; // initialize with development settings
if (env === 'production') { var defaultTasks = ['clean', 'cssmin', 'uglify', 'serve', 'watch'];}
if (env === 'test')       { var defaultTasks = ['env:test', 'karma:unit', 'mochaTest'];}
*/
// read gulp directory contents for the tasks...
require('require-dir')('./gulp');
console.log('Invoking gulp -',env);
gulp.task('default', ['clean'], function (defaultTasks) {
  // run with paramater
  gulp.start(env);
});

gulp.task('sass', function(){
	gulp.src(['./packages/custom/roadtriplayout/public/assets/styles/**/*.scss'])
  	.pipe(sass({ style: 'expanded' }))
  	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./packages/custom/roadtriplayout/public/assets/css'));
});

gulp.task('watch', function(){
  gulp.watch('./packages/custom/roadtriplayout/public/assets/styles/**/*.scss', ['sass']);
});
