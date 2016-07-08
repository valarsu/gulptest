//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),//压缩js
    jshint = require('gulp-jshint'),//检验js语法
    liveReload = require('gulp-livereload'),//自动刷新
    rev = require('gulp-rev'),//添加MD5后缀
    revCollector = require('gulp-rev-collector');//路径替换
//jst
gulp.task('minify', function () {
    gulp.src('src/resources/scripts/*.js')
        .pipe(uglify({
          mangle: false,//修改变量名
          compress: true,//压缩
          preserveComments: 'all'//保留注释
        }))//压缩
        .pipe(jshint())//检查js语法
        .pipe(rev())//添加MD5后缀
        .pipe(gulp.dest('src/assets/scripts'))
        .pipe(rev.manifest())//生成一个rev-mainfest.json          
        .pipe(gulp.dest('src/assets/rev'))//将json保存到rev路径
        .pipe(liveReload());
});

gulp.task('rev', function() {
        //读取json文件和需要引用压缩后md5的文件
      gulp.src(['src/assets/rev/*.json', 'src/htmls/*.html'])
          .pipe(revCollector({
              replaceReved: true,
              dirReplacements: {
                  '/src/resources/scripts/': '/src/assets/scripts/'
              }
          }))//执行替换引用文件的名字
          .pipe(gulp.dest('src/h5-out'));//替换后输出目录
});


//监听
gulp.task('watch', function () {
    gulp.watch('src/resources/scripts/*.js', ['minify']);
    gulp.watch('src/resources/scripts/*.js', ['rev']);
});
gulp.task('default', ['minify', 'rev', 'watch']);