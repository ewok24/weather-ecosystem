var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var ngAnnotate = require('browserify-ngannotate');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
// var merge         = require('merge-stream');
// var Server        = require('karma').Server;

var jsFiles = 'src/legacy/src/js/**/*.js';
var viewFiles = 'src/legacy/src/js/**/*.html';
var scssFiles = 'src/legacy/src/scss/**/*.scss';

var entry = {
  images: './src/legacy/src/images/**/*.+(png|jpg|gif|svg)',
  js: './src/legacy/src/js/app.js',
  index: './src/legacy/src/index.html',
};
var output = {
  dist: './../../dist/apps/weather-angular-js',
  build: './../../dist/apps/weather-angular-js/build/'
}

var interceptErrors = function (error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify
    .onError({
      title: 'Compile Error',
      message: '<%= error.message %>',
    })
    .apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

// Generate HTML Templates
gulp.task('views', function () {
  return gulp
    .src(viewFiles)
    .pipe(
      templateCache({
        standalone: true,
      })
    )
    .on('error', interceptErrors)
    .pipe(rename('app.templates.js'))
    .pipe(gulp.dest('./src/js/config/'));
});

gulp.task(
  'browserify',
  gulp.series('views', function () {
    return browserify(entry.js)
      .transform(babelify, { presets: ['env'] })
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      .pipe(source('main.js'))
      .pipe(gulp.dest('./build/'));
  })
);

gulp.task('html', function () {
  return gulp
    .src(entry.index)
    .on('error', interceptErrors)
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function () {
  return gulp
    .src(scssFiles)
    .pipe(
      sass({
        includePaths: ['node_modules/angular-material'],
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest('./build'));
});

gulp.task('images', function () {
  return gulp
    .src(entry.images)
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
});

gulp.task(
  'build',
  gulp.series('images', 'sass', 'html', 'browserify', function () {
    var html = gulp.src('build/index.html').pipe(gulp.dest('./dist/'));
    var js = gulp
      .src('build/main.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist/'));
    var css = gulp.src('build/main.css').pipe(gulp.dest('./dist/'));
    var images = gulp
      .src('build/images/**/*.+(png|jpg|gif|svg)')
      .pipe(gulp.dest('./dist/images'));

    browserSync.init(['./dist/**/**.**'], {
      server: './dist',
      port: 3000,
      notify: false,
      ui: {
        port: 3001,
      },
    });
  })
);

// gulp.task('test', function (done) {
//   new Server({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: false
//   }, done).start();
// });

gulp.task(
  'default',
  gulp.series('images', 'sass', 'html', 'browserify', function () {
    browserSync.init(['./build/**/**.**'], {
      server: './build',
      port: 4000,
      notify: false,
      ui: {
        port: 4001,
      },
    });

    gulp.watch(entry.index, gulp.series('html'));
    gulp.watch(scssFiles, gulp.series('sass'));
    gulp.watch(viewFiles, gulp.series('views'));
    gulp.watch(jsFiles, gulp.series('browserify'));
  })
);
