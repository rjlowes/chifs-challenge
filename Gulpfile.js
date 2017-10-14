'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const fs = require("fs");
const requireDir = require('require-dir');
const dir = requireDir('./client/gulp');


gulp.task('default', () => 
	runSequence('clean:dev', 'sass:dev', 'scripts:dev', 'fonts:copy:dev', 'images:copy:dev', 'svg:copy:dev', 'watch'));


gulp.task('dist', () => 
    runSequence('clean:dist', 'sass:dist', 'scripts:dist', 'fonts:copy:dist', 'images:copy:dist', 'svg:copy:dist'));

// Copy dist to dev for testing
gulp.task('dist:copy', () => {
    gulp.src('./client/dist/**')
        .pipe(gulp.dest('./active/static'));
})