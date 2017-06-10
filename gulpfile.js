var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require('gulp-notify'),
    bower = require('gulp-bower');

var config = {
    sassPath: './content/sass',
    bowerDir: './bower_components',
    nodeDir: './node_modules'
}
// create a task to do bower install
gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});

// Copy js files to public folder
gulp.task('js', function () {
    return gulp.src([
        config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        config.bowerDir + '/jquery/dist/jquery.min.js',
        config.bowerDir + '/metisMenu/dist/metisMenu.min.js'
    ])
        .pipe(gulp.dest('./public/content/js'));
});

// Copy rain bow language js files to public folder
gulp.task('js2', function () {
    return gulp.src([
        config.bowerDir + '/rainbow/js/language/generic.js',
        config.bowerDir + '/rainbow/js/language/html.js',
        config.bowerDir + '/rainbow/js/language/csharp.js',
        config.bowerDir + '/rainbow/js/language/css.js',
        config.bowerDir + '/rainbow/js/language/php.js',
        config.bowerDir + '/rainbow/js/language/python.js',
        config.bowerDir + '/rainbow/js/language/scheme.js',
        config.bowerDir + '/rainbow/js/language/shell.js'
    ])
        .pipe(gulp.dest('./public/content/js/lang'));
});

// Copy fontawesome icons to public/fonts folder
gulp.task('icons', function () {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/content/fonts'));
});

gulp.task('css', function () {
    return sass(config.sassPath + '/style.scss', { // Our coustom sass
        style: 'compressed', // minify css
        loadPath: [ // load paths to easy use import in resources/sass
            config.bowerDir + '/bootstrap-sass/assets/stylesheets', // bootstrap sass files
            config.bowerDir + '/font-awesome/scss' // awesome icons sass files
        ]
    })
        .on('error', notify.onError(function (error) {
            return 'Error: ' + error.message;
        }))
        .pipe(gulp.dest('./public/content/css'));
});


// Copy css to content folder
gulp.task('css2', function () {
    return gulp.src([
        config.nodeDir + '/react-metismenu/dist/react-metismenu-standart.min.css',
        config.nodeDir + '/dropzone/dist/min/basic.min.css',
        config.nodeDir + '/dropzone/dist/min/dropzone.min.css',
        config.nodeDir + '/react-dropzone-component/styles/filepicker.css'
    ])
        .pipe(gulp.dest('./public/content/css'));
});

// Copy fontawesome icons to public/fonts folder
gulp.task('icons', function () {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/content/fonts'));
});

// Copy fontawesome icons to public/fonts folder
gulp.task('icons2', function () {
    return gulp.src(config.bowerDir + '/bootstrap-sass/assets/fonts/bootstrap/**.*')
        .pipe(gulp.dest('./public/content/fonts/bootstrap'));
});

// Rerun the task when a file changes
// Run this task : gulp watch
gulp.task('watch', ['css'], function () {
    gulp.watch([config.sassPath + '/**/*.scss'], ['css']);
    gulp.watch(config.htmlPath, ['html']);
});

// Run this task : gulp
// OR gulp default
gulp.task('default', ['bower', 'icons', 'css', 'js', 'js2']);
