const gulp = require('gulp');


gulp.task('svg:copy:dev', () => {
    gulp.src('./client/src/svg/*.svg')
        .pipe(gulp.dest('./server/static/svg'));
});

gulp.task('svg:copy:dist', () => {
    gulp.src('./client/src/svg/*.svg')
        .pipe(gulp.dest('./client/dist/svg'));
});

