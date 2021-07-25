const gulp = require('gulp');

const scripts = ()=>
    gulp.src('./src/scripts/**/*.js').
        pipe(gulp.dest("dist/js/"));

gulp.task('scripts',scripts);

const img =()=>
    gulp.src('./src/img/**/*.{jpg,png}').
        pipe(gulp.dest("dist/img/"));

gulp.task('img',img);

gulp.task('movefiles',gulp.series('img','scripts'));