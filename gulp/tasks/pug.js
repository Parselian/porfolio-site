module.exports = () => {
  $.gulp.task('pug', () => {
    return $.gulp.src('src/pug/*.pug') /* take .pug filed */
      .pipe($.gp.pug({
        pretty: true /* disabling markup minification */
      }))
      .pipe($.gp.rename({
        extname: '.php'
      }))
      .pipe($.gulp.dest('build')) /* return compiled .html files */
      .on('end', $.browserSync.reload);
  });
}