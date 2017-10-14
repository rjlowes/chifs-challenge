const gulp = require('gulp');


gulp.task('fonts:copy:dev', () => 
    gulp.src('./client/src/fonts/**/*.*')
    .pipe(gulp.dest('./server/static/fonts')));


gulp.task('fonts:copy:dist', () => 
    gulp.src('./client/src/fonts/**/*.*')
    .pipe(gulp.dest('./client/dist/fonts')));