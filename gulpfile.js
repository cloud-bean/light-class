var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('watch', function () {    // 这里的watch，是自定义的，写成live或者别的也行
    
    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch(['./**/*.*'],['html','js']);
});


gulp.task('html', function () {
  gulp.src('./**/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./**/*.js')
    .pipe(connect.reload());
});


gulp.task('connect', function () {
  connect.server({
    root: './',
    livereload: true
  });
});


gulp.task('default', ['connect', 'watch']);