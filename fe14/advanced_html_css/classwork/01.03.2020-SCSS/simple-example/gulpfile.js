const gulp = require('gulp');
const sass = require('gulp-sass');

const CSS = () =>
    gulp.src('./src/scss/**/*.scss').
        pipe(sass()).
        pipe(gulp.dest('./dist/css'));

const HTML = () =>
    gulp.src("./src/task.html").
        pipe(gulp.dest("./dist"));

const watch = () => {
        gulp.watch('./src/scss/**/*.scss', CSS);
        gulp.watch('./src/scss/**/task.html', HTML);
}

gulp.task('build', gulp.parallel(CSS, HTML));
gulp.task('dev', gulp.series("build", watch));
