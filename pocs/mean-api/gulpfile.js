var gulp = require('gulp');

var clean = require('gulp-clean');
var pug = require('gulp-pug');
var connect = require('gulp-connect');

var source = 'client/';
var dist = 'public/';

gulp.task('clean', function() {
    return gulp.src(dist)
        .pipe(clean());
});

gulp.task('copy-js', function() {
    gulp.src([source + '**/*.js'])
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('copy-css', function() {
    gulp.src([source + '**/*.css'])
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('copy-pug', function() {
    gulp.src([source + '**/*.pug'])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('copy', ['copy-js','copy-css','copy-pug']);
gulp.task('build', ['copy']);

gulp.task('watch', function() {
    gulp.watch(source + '**/*', ['build']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        port: 4000,
        livereload: true
    })
});

gulp.task('serve', ['connect','watch']);
