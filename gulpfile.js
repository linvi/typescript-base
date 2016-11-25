var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('child_process').exec;
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('default', ['typescript', 'sass', 'watch']);

gulp.task('typescript', function () {
    gutil.log('Building Typescript....')

    exec('tsc', function (err, stdout, stderr) {

        console.log('');
        if (err == null) {
            gutil.log('Typescript : BUILD SUCCEEDED')
        } else {
            gutil.log('Typescript : BUILD FAILED')

            if (stdout) {
                gutil.log(stdout);
            }

            if (stderr) {
                gutil.log(stderr);
            }
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('./src/styles.scss')
        .pipe(sass({

            // THIS DOES NOT WORK
            onSuccess: () => {
                gutil.log('GG!');
                console.log('salkut les gars!');

            }
        }).on('error', sass.logError))
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./build'))
        .pipe(noti);
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['typescript'])
    gulp.watch('src/**/*.scss', ['sass']);
});

