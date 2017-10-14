const gulp = require('gulp');
const imagemin = require('gulp-imagemin');


gulp.task('images:copy:dev', () => 
    gulp.src('./client/src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./server/static/images')));

gulp.task('images:copy:dist', () => 
    gulp.src('./client/src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./client/dist/images')));
