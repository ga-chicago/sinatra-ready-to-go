var gulp       = require('gulp');
    browserify = require('browserify'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream');

gulp.task('react', function() {
  return browserify('./clientReact/app.js')
          .transform('babelify', {presets: ["react", "es2015"]})
          .bundle()
          .pipe(source('build.js'))
          .pipe(gulp.dest('./app/public/js'))
});


gulp.task('watch', function() {
  gulp.watch(['./clientReact/*.js'], ['react'])
});


gulp.task('default', ['watch', 'react']);
