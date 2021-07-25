const gulp = require('gulp');
const sass = require('gulp-sass');

const CSS = () => gulp.src('./src/scss/**/*.scss').
    pipe(sass()).
    pipe(gulp.dest('./dist/css'));

gulp.task('CSS', CSS);
