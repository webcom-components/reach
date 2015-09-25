"use strict";

let gulp			= require('gulp'),
    browserify      = require('browserify'),
    babelify        = require('babelify'),
    collapser		= require('bundle-collapser/plugin'),
    source          = require('vinyl-source-stream'),
    buffer          = require('vinyl-buffer'),
    concat          = require('gulp-concat'),
    size            = require('gulp-size'),
    merge           = require('merge-stream'),
    replace         = require('gulp-replace'),
    swig            = require('gulp-swig'),
    data            = require('gulp-data'),
    uglify          = require('gulp-uglify'),
    version         = require('../../package.json').version;


import config from '../config';

function getLicense() {
    return gulp.src(['./gulp/license.tpl'])
        .pipe(data(function() {
            return {
                version: version
            };
        }))
        .pipe(swig());
}


/**
 * Build ComSDK library (debug mode)
 */
function build() {
    let babelOptions = {};

    /*jshint laxcomma: true */
    babelOptions.optional = [
        'utility.inlineEnvironmentVariables'
        , 'minification.deadCodeElimination'
        , 'runtime'
        , 'minification.memberExpressionLiterals'
        , 'minification.propertyLiterals'
    ];
    babelOptions.modules = 'common';

    let bundle = browserify({
        debug: true,
        entries: ['./src/index.js'],
        standalone: config.name,
        bundleExternal: true,
        output: config.distFolder,
        outputName: config.devOutputName,
        detectGlobals: true,
        builtins: []
    })
        .transform(babelify.configure(babelOptions))
        .plugin(collapser)
        .bundle()
        .pipe(source(config.devOutputName))
        .pipe(buffer())
        .pipe(size())
        .pipe(replace(/_SDK_VERSION_/g, version));

    return merge([
        getLicense(),
        bundle
    ])
        .pipe(concat(config.devOutputName))
        .pipe(gulp.dest(config.distFolder));

}

/**
 * Build  release library. Use debug version and uglify it.
 */
function release() {
    var filename = `${config.distFolder}/${config.devOutputName}`,
        license = getLicense(),
        lib = gulp.src(filename)
            .pipe(uglify(config.releaseOutputName, {
                mangle: true,
                compress: {
                    screw_ie8: true,
                    drop_debugger: true,
                    join_vars: true,
                    dead_code: true,
                    drop_console: true
                }
            }))
            .pipe(size());

    return merge(license, lib)
        .pipe(concat(config.releaseOutputName))
        .pipe(gulp.dest(config.distFolder));
}

gulp.task('build:debug', () => {
    return build();
});

gulp.task('build:release', ['build:debug'], () => {
    return release();
});