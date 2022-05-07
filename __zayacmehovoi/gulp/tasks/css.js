import cleanCSS from 'gulp-clean-css'

export const css = () => {
    return app.gulp.src(app.path.src.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(app.gulp.dest(app.path.build.css))
}