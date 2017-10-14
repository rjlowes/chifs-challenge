const fs = require('fs');
const gulp = require( 'gulp' );
const awspublish = require('gulp-awspublish');

 
gulp.task('aws:publish', () => {
    let credentials = JSON.parse(fs.readFileSync('aws-credentials.json'));
    let publisher = awspublish.create(credentials);
 
  return gulp
    .src('./client/dist/**')
    .pipe(publisher.publish())
    .on('error', function(err) { console.error('failed to publish err code: ', err.statusCode); } )
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});