var gulp = require('gulp'), 						// gulp
	util = require('gulp-util'), 					// gulp常用的工具库——gulp-util
	// CSS预处理任务
	sass = require('gulp-ruby-sass'), 					// sass编译——gulp-sass
	// 特殊任务
	watchPath = require('gulp-watch-path');		    // watch监控——gulp-watch-path

// Sass编译任务
gulp.task('sass', function () {
	return gulp.src('sass/*.sass')
		// 输出格式 + 错误输出
		.pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
		// 输出位置
		.pipe(gulp.dest('css'))
});
// 在命令行使用 gulp watch 启动此任务
gulp.task('watch', function() {
    // 监听Sass文件修改，当文件被修改则执行 sass 任务
    gulp.watch('sass/*.sass', ['sass']);
});
