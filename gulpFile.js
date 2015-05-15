var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('move', function () {
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    gulp.src(['./Kafle/*.js', './Kafle/*.html', './Kafle/*.jpg', './Kafle/*.css', './Kafle/*.JPG', './Kafle/*.png'])
        .pipe(gulp.dest('./Server/static'));
});


gulp.task('clean', function () {
    return gulp.src('./Server/static', { read: false })
        .pipe(clean());
});