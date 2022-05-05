import gulp from "gulp"
import browserSync from "browser-sync"
import { path } from "./gulp/config/path.js"
import { plugins } from "./gulp/config/plugins.js"
//Tasks
import { img } from "./gulp/tasks/img.js"
import { html } from "./gulp/tasks/html.js"
import { js } from "./gulp/tasks/js.js"
import { reset } from "./gulp/tasks/reset.js"
import { css } from "./gulp/tasks/css.js"
import { bootstrap } from "./gulp/tasks/bootstrap-css.js"
import { server } from "./gulp/tasks/server.js"


global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path,
    gulp,
    plugins
}
function watcher() {
    gulp.watch(path.watch.img, img)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.css, css)
    gulp.watch(path.watch.bootstrap, bootstrap)
    gulp.watch(path.watch.js, js)
}

const mainTasks = gulp.parallel(img, html, css, bootstrap, js)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)

export {dev}
export {build}

gulp.task('default', dev)