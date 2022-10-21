const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// SCSS TASK

function scssTask() {
  return src('sass/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// JAVAscript task

function jsTask() {
  return src('js/app.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// BROWSERSYNC task

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: '.',
    },
  });
  cb();
}

// RELOAD Browser

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// WATCH task

function watchTask() {
  watch('*.html', browsersyncReload);
  watch(
    ['sass/**/*.scss', 'js/**/*.js'],
    series(scssTask, jsTask, browsersyncReload)
  );
}

exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);
