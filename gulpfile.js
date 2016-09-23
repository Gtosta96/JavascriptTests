//TODO: check npm event-stream
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var runSequence = require('run-sequence');

gulp.task('lint', function() {
    return gulp.src('ABKJ/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
	gulp.watch('ABKJ/**/*.js', ['lint']);
});

gulp.task('clean', function() {
    return gulp.src('ABKJ/dist')
    .pipe(clean());
});

gulp.task('uglify', function() {
    return gulp.src('ABKJ/**/*.js')
	.pipe(uglify())
	.pipe(concat('scripts.js'))
    .pipe(gulp.dest('ABKJ/dist/js'));
});

gulp.task('htmlmin', function() {
	return gulp.src('ABKJ/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('ABKJ/dist/html'));
});

gulp.task('cssmin', function() {
	return gulp.src('ABKJ/**/*.css')
	.pipe(cleanCss())
	.pipe(concat('styles.min.css'))
	.pipe(gulp.dest('ABKJ/dist/css'))
});

//gulp.task('default', ['jshint', 'uglify', 'htmlmin', 'cssmin']);
gulp.task('default', function(callback) {
	return runSequence('clean', ['jshint', 'uglify', 'htmlmin', 'cssmin'], callback);
});
