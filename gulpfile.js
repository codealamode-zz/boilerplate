var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

var paths = {
	scripts: ['dev/js/jquery.js', 'dev/js/modernizr.js', 'dev/js/mustache.js', 'dev/js/app.js'],
	styles: ['dev/css/reset.less','dev/css/functions.less','dev/css/config.less', 'dev/css/typography.less', 'dev/css/app.less'],
	images: ['dev/img/**/*']
};

gulp.task('js', function(){

	return gulp.src(paths.scripts)
    .pipe(uglify({
    	outSourceMaps:true,
    	//compress: false
    }))
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('build/js'));

});

gulp.task('css', function(){

	return gulp.src(paths.styles)
	.pipe(less())
	.pipe(minifyCSS())
	.pipe(concat('all.min.css'))
	.pipe(gulp.dest('build/css'))

});

gulp.task('img', function() {
 return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});


gulp.task('default', ['js', 'css', 'img']);