const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const minifycss = require('gulp-minify-css');
const sassVariables = require('gulp-sass-variables');


gulp.task('sass:dev', () => {
    gulp.src('./client/src/sass/**/*.scss')
        .pipe(sassVariables({
           $env: 'development'
         }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./server/static/css'));
});

gulp.task('sass:dist', () =>
    gulp.src('./client/src/sass/**/*.scss')
        .pipe(sassVariables({
           $env: 'production'
        }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(minifycss({keepBreaks:false}))
        .pipe(gulp.dest('./client/dist/css')));