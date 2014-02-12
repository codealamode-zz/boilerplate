var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

var paths = {
	scripts: ['public/dev/js/jquery.js', 'public/dev/js/modernizr.js', 'public/dev/js/mustache.js', 'public/dev/js/app.js'],
	styles: ['public/dev/css/reset.less','public/dev/css/functions.less','public/dev/css/config.less', 'public/dev/css/typography.less', 'public/dev/css/app.less'],
	images: ['public/dev/img/**/*']
};

gulp.task('js', function(){

	return gulp.src(paths.scripts)
    .pipe(uglify({
    	outSourceMaps:true,
    	//compress: false
    }))
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('public/build/js'));

});

gulp.task('css', function(){

	return gulp.src(paths.styles)
	.pipe(less())
	.pipe(minifyCSS())
	.pipe(concat('all.min.css'))
	.pipe(gulp.dest('public/build/css'))

});

gulp.task('img', function() {
 return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('public/build/img'));
});


gulp.task('default', ['js', 'css', 'img']);