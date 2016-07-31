var gulp = require('gulp');

var clean = require('gulp-clean');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

var source = 'client/';
var src_files = source + '**/*';
var dist = 'public/';
var dist_files = dist + '**/*';

gulp.task('clean', function() {
    return gulp.src(dist)
        .pipe(clean());
});

gulp.task('copy-js', function() {
    gulp.src([src_files + '.js'])
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('sass', function() {
    gulp.src([src_files + '.scss'])
        .pipe(sass({
        }))
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('copy-css', function() {
    gulp.src([src_files + '.css'])
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('pug', function() {
    gulp.src([src_files + '.pug'])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('copy', ['copy-js','copy-css','pug']);
gulp.task('build', ['sass', 'copy']);

gulp.task('watch', function() {
    gulp.watch(src_files + '.scss', ['sass']);
    gulp.watch(src_files, ['copy']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        port: 4000,
        livereload: true
    })
});

gulp.task('serve', ['connect','watch']);
