const gulp = require('gulp');
const clean = require('gulp-clean');


gulp.task('clean:dev', () => 
    gulp.src('./server/static')
        .pipe(clean()));

gulp.task('clean:dist', () => 
    gulp.src('./client/src/dist')
        .pipe(clean()));