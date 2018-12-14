const gulp = require("gulp"),
  stylus = require("gulp-stylus"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  babel = require("gulp-babel"),
  plumber = require("gulp-plumber"),
  minify = require("gulp-minify"),
  rename = require("gulp-rename"),
  gutil = require("gulp-util"),
  browserSync = require("browser-sync").create(),
  cp = require("child_process"),
  htmlmin = require("gulp-htmlmin"),
  strip = require("gulp-strip-comments")

// Path variables
const base_path = "./",
  src = base_path + "_dev/src",
  dist = base_path + "assets",
  paths = {
    html: "./_site/**/*.html",
    js: src + "/js/*.js",
    stylus: src + "/css/style.styl",
    jekyll: [
      "index.html",
      "_posts/**/*",
      "_layouts/*",
      "_includes/*",
      "assets/*",
      "assets/**/*",
      "_config.yml",
      "*.md",
      "portfolio/**/*.md",
      "blog/**/*.md"
    ]
  }

gulp.task("compile-html", () => gulp
  .src(paths.html)
  .pipe(strip())
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest("./_site/"))
)

gulp.task("compile-scripts", () => gulp
  .src([paths.js])
  .pipe(plumber())
  .pipe(
    babel({
      presets: ["env"]
    })
  )
  .pipe(minify({ noSource: true }))
  .pipe(rename({ dirname: dist + "/js" }))
  .pipe(gulp.dest("./"))
)

gulp.task("distjs", () => gulp
  .src(dist + "/js/*")
  .pipe(gulp.dest("_includes/"))
)

gulp.task("compile-stylus", () => {
  var plugins = [
    autoprefixer({ browsers: ["last 3 versions"] }),
    cssnano({ discardUnused: false })
  ]
  return gulp
    .src(paths.stylus)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(postcss(plugins))
    .pipe(rename({ dirname: dist + "/css" }))
    .pipe(gulp.dest("./"))
})

gulp.task("distcss", () => gulp
  .src(dist + "/css/*")
  .pipe(gulp.dest("_includes/"))
)

gulp.task("build-jekyll", code => cp
  // Adding incremental reduces build time apparently.
  .spawn("bundle", ["exec", "jekyll", "build", "--incremental"], { stdio: "inherit" })
  .on("error", error => gutil.log(gutil.colors.red(error.message)))
  .on("close", code)
)

gulp.task("server", () =>
  browserSync.init({
    server: {
      proxy: 4000,
      baseDir: "./_site",
      middleware: function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "https://api.twitter.com")
        next()
      }
    }
  })
)

gulp.task("watch", () => {
  gulp.watch(paths.js, ["compile-scripts", "distjs"])
  gulp.watch("./_dev/src/css/**/*.styl", ["compile-stylus", "distcss"])
  gulp.watch(paths.jekyll, ["build-jekyll"])
  gulp.watch(paths.html, ["compile-html"])
  gulp.watch(["./_site/assets/*"]).on("change", browserSync.reload)
})

gulp.task("default", [
  "compile-scripts",
  "compile-stylus",
  "build-jekyll",
  "server",
  "watch"
])