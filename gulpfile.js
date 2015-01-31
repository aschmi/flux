var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('browserify', function() {
    gulp.src('src/js/main.coffee', { read: false })
      .pipe(browserify({transform: ['coffee-reactify'], extensions: ['.coffee']}))
      .pipe(rename('main.js'))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
