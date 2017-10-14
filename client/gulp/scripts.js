const gulp = require('gulp');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');


gulp.task('scripts:dev', () => {
    browserify("./client/src/scripts/main.js")
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("./server/static/scripts"));    
});

gulp.task('scripts:dist', () => {
    browserify("./client/src/scripts/main.js")
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("./client/dist/scripts"));    
});