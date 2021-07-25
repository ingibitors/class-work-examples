const gulp = require("gulp");
const scss = require("gulp-sass");
const cleanCSS = require("gulp-clean-css"); // сжимает css
const clean = require('gulp-clean'); // удаляет содержимое папки
const imagemin = require("gulp-imagemin"); // оптимизирует картинки

const patch = {
        scss: "./src/scss/**/*.scss",
        img: "./src/img/**/*.{png,gif,jpg}",
        img2: "./src/img/**/*.+(jpg|jpeg|gif|png)",
        html: "./src/*.html"
}

const css = () =>
    gulp.src(patch.scss).
        pipe(scss()).
        pipe(cleanCSS()).
        pipe(gulp.dest("./dist/css"));

const html = () =>
    gulp.src(patch.html).
        pipe(gulp.dest("./dist/"));

const img = ()=>
    gulp.src(patch.img).
        pipe(imagemin()).
        pipe(gulp.dest("./dist/img"))

const cleandev = ()=> 									
    gulp.src('./dist', {allowEmpty: true, read: false})
        .pipe(clean());

const watch = () => {
        gulp.watch(patch.scss, style);
        gulp.watch(patch.img, img);
        gulp.watch(patch.html, html);
}

gulp.task("css", css);
gulp.task("img", img);
gulp.task("html", html);
gulp.task("cleandev", cleandev);

gulp.task("build", gulp.series("cleandev", gulp.parallel(css, html, img)));

gulp.task("dev", gulp.series("build", watch));


