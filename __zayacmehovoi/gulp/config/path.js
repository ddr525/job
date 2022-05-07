import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './__zayacmehovoi'
const sourceFolder = './src'

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/styles/`,
        bootstrap: `${buildFolder}/styles/bootstrap/`,
        js: `${buildFolder}/scripts/`,
        img: `${buildFolder}/img/`,
    },
    src: {
        html: `${sourceFolder}/*.html`,
        css: `${sourceFolder}/styles/*.css`,
        bootstrap: `${sourceFolder}/styles/bootstrap/*.*`,
        js: `${sourceFolder}/scripts/*.js`,
        img: `${sourceFolder}/img/*.*`,
    },
    watch: {
        img: `${sourceFolder}/img/*.*`,
        html: `${sourceFolder}/*.html`,
        css: `${sourceFolder}/styles/*.css`,
        bootstrap: `${sourceFolder}/styles/bootstrap/*.*`,
        js: `${sourceFolder}/scripts/*.js`
    },
    clean: [
        `${buildFolder}**.html`,
        `${buildFolder}/styles/*.css`,
        `${buildFolder}/styles/bootstrap/*.*`,
        `${buildFolder}/scripts/*.js`,
        `${buildFolder}/img/*.*`,
    ],
    buildFolder,
    sourceFolder,
    rootFolder,
}