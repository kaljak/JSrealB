var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');
 
gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('minify-featurejson', function () {
    gulp.src(['./data/feature.json', './data/feature-pp.json'])
    .pipe(concat('feature.json'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-lexenjson', function () {
    gulp.src(['./data/lex-en.json', './data/lex-en-pp.json'])
    .pipe(concat('lex-en.json'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-lexfrjson', function () {
    gulp.src(['./data/lex-fr.json', './data/lex-fr-pp.json'])
    .pipe(concat('lex-fr.json'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-ruleenjson', function () {
    gulp.src(['./data/rule-en.json', './data/rule-en-pp.json'])
    .pipe(concat('rule-en.json'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-rulefrjson', function () {
    gulp.src(['./data/rule-fr.json', './data/rule-fr-pp.json'])
    .pipe(concat('rule-fr.json'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('move-scripts', function () {
    gulp.src(['./static/js/JSrealB.js', './static/js/util.js'])
    .pipe(concat('JSrealB.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-scripts', function () {
    gulp.src(['./static/js/JSrealB.js', './static/js/util.js'])
    .pipe(uglify())
    .pipe(concat('JSrealB.min.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', [
                       'minify-featurejson',
                       'minify-lexenjson',
                       'minify-lexfrjson',
                       'minify-ruleenjson',
                       'minify-rulefrjson',
                       'move-scripts',
                       'minify-scripts'
                     ]);