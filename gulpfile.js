var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('watch', function () {    // 这里的watch，是自定义的，写成live或者别的也行
    
    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch(['./**/*.*'],['reload']);
});


gulp.task('reload', function () {
  gulp.src('./**/*.*')
    .pipe(connect.reload());
});




gulp.task('connect', function () {
  connect.server({
    root: './',
    livereload: true
  });
});


gulp.task('default', ['connect', 'watch']);