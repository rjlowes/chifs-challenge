const gulp = require('gulp');


gulp.task('watch', () => {
    gulp.watch('client/src/sass/**/*.scss', ['sass:dev']);
    gulp.watch('./client/src/scripts/**/*.js', ['scripts:dev']);
    gulp.watch('client/src/images/**/*.*', ['images:copy']);
    gulp.watch('client/src/fonts/**/*.*', ['fonts:copy']);
    gulp.watch('client/src/svg/**/*.svg', ['svg:copy:dev']);
});