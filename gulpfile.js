var gulp = require('gulp');
const del = require("del");
var ts = require("gulp-typescript");
var tsProject = ts.createProject('tsconfig.json');
var merge = require('merge2');
var root = 'src/node_modules/grey-message/**/*.ts*';

// 编译 ts
gulp.task('default', async () => {

    await del(["bin/"])

    var tsResult = gulp.src(root)
        .pipe(tsProject())

    gulp.src("package.json")
        .pipe(gulp.dest("bin"))

    gulp.src("README.md")
        .pipe(gulp.dest("bin"))

    return merge([
        tsResult.dts.pipe(gulp.dest('bin')),
        tsResult.js.pipe(gulp.dest('bin'))
    ]);
});