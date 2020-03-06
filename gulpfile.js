'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
gulp.task('sass', function(){
    return gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('css'))
});

gulp.task('html', function(){
    return gulp.src('**/*.html')
});

gulp.task('watch', function(){
    gulp.watch('sass/**/*.sass', gulp.parallel('sass'))
    gulp.watch('**/*.html', gulp.parallel('html'))
});