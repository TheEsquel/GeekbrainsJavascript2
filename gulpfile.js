let gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifyJs = require('gulp-uglifyjs'),     //  модуль для сжатия   JS
    rename = require('gulp-rename'),
    htmlMin = require('gulp-htmlmin'),
    delFiles = require('del'),               //  удаление  файлов
    browserSync = require('browser-sync'),   //  веб сервер
    cssMinify = require('gulp-csso'),
    babel = require('gulp-babel');           //  преобразование  ES6 (ES2015) в ES5

/**

    Команды  Gulp

        1.  gulp.task()   создание  новой gulp  задачи
        2.  gulp.src()    выбор файлов для преобразования
        3.  gulp.dest()   сохрааняет преобразованные файлы
        4.  gulp.watch()  отслеживает изменения


 */

gulp.task('default',['html', 'sass', 'js'], function () {
    console.log('Default message!');

});

gulp.task('html', function () {
    gulp.src(['./app/*.html'])
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
    browserSync.reload({
        stream: false
    })
});

gulp.task('sass', function () {
    gulp.src('./app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(cssMinify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
    browserSync.reload({
        stream: false
    })
});



gulp.task('js', function () {
    gulp.src('./app/js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglifyJs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
    browserSync.reload({
        stream: false
    })
});

// gulp.task('watchFiles', function () {
//     gulp.watch(['./app/index.html'], ['html']);
//     gulp.watch('./app/sass/style.sass', ['sass']);
//     gulp.watch('./app/js/*.js', ['js']);
// });

// gulp.task('server', function () {
//     browserSync({
//         server: {
//             baseDir: './dist'
//         }
//     })
// });