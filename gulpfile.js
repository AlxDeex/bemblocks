let bemBuilder = require('gulp-bem-bundle-builder');
let bemBundlerFs = require('gulp-bem-bundler-fs');
let gulp = require('gulp');
let concat = require('gulp-concat');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

const builder = bemBuilder({
    levels: [
        './',
        'common.blocks'
    ],
    techMap: {
        js: ['js'],
        css: ['css']
    }
});

function bemBundle(cb) {
    bemBundlerFs('bundles/*')
        .pipe(builder({
            css: bundle => bundle.src('css').pipe(concat(bundle.name + '.css')).pipe(gulp.dest('./css')),
            js: bundle => bundle.src('js').pipe(concat(bundle.name + '.js')).pipe(gulp.dest('./js'))
        }));

    cb()
}

exports.bem = bemBundle;
exports.default = defaultTask;