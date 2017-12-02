const gulp = require("gulp"),
      stylus = require("gulp-stylus"),
      postcss = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      cssnano = require("cssnano"),
      babel = require("gulp-babel"),
      plumber = require("gulp-plumber"),
      minify = require("gulp-minify"),
      rename = require('gulp-rename'),
      gutil = require('gulp-util'),
      browserSync = require("browser-sync").create(),
      cp = require('child_process');
      htmlmin = require('gulp-htmlmin');

// Path variables
const base_path = './',
  src = base_path + '_dev/src',
  dist = base_path + 'assets',
  paths = {  
      html: './_site/**/*.html',
      js: src + '/js/*.js',
      stylus: src +'/css/style.styl',
      jekyll: ['index.html', '_posts/**/*', '_layouts/*', '_includes/*' , 'assets/*', 'assets/**/*', '_config.yml', '*.md']
  };

// JS Task
gulp.task("compile-scripts", () => {
  return gulp
    .src(paths.js)
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(minify({ noSource: true }))
    .pipe(rename({dirname: dist + '/js'}))
    .pipe(gulp.dest('./'));
});

// CSS Task
gulp.task("compile-stylus", () => {
  var plugins = [
    autoprefixer({ browsers: ["last 3 versions"] }),
    cssnano({ discardUnused: false })
  ];
  return gulp
    .src(paths.stylus)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(postcss(plugins))
    .pipe(rename({dirname: dist + '/css'}))
    .pipe(gulp.dest('./'));
});

// Build Jekyll
gulp.task('build-jekyll', (code) => {
  return cp.spawn('jekyll', ['build', '--incremental'], { stdio: 'inherit' }) // Adding incremental reduces build time apparently.
    .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
    .on('close', code);
})

// Server
gulp.task("server", () => {
  browserSync.init({
    server: {
      proxy: 4000,
      baseDir: "./_site"
    }
  });
});

// Watch files
gulp.task('watch', () => {  
  gulp.watch(paths.js, ["compile-scripts"]);
  gulp.watch(paths.stylus, ["compile-stylus"]);
  gulp.watch(paths.jekyll, ["build-jekyll"]);
  gulp.watch(["./_site/assets/*"]).on("change", browserSync.reload);
});

// Start Everything with the default task
gulp.task('default', [ 'compile-scripts', 'compile-stylus', 'build-jekyll', 'server', 'watch' ]);