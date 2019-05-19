import gulp from "gulp";
import cp from "child_process";
import gutil from "gulp-util";
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import cssnext from "postcss-cssnext";
import BrowserSync from "browser-sync";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";
import svgstore from "gulp-svgstore";
import svgmin from "gulp-svgmin";
import inject from "gulp-inject";
import cssnano from "cssnano";

const browserSync = BrowserSync.create();
const defaultArgs = ["-d", "../dist", "-s", "site"];

var hugoBin = `./bin/hugo.${process.platform === "win32" ? "exe" : process.platform}`;

if (process.env.HUGO_VERSION) {
  hugoBin = "hugo";
}

if (process.env.DEBUG) {
  defaultArgs.unshift("--debug");
}

gulp.task("hugo", (cb) => {
  let baseUrl = process.env.NODE_ENV === 'production' ? process.env.URL : process.env.DEPLOY_PRIME_URL;
  let args = baseUrl ? ['-b', baseUrl] : [];

  buildSite(cb, args);
});

gulp.task("hugo-preview", (cb) => {
  let args = ['--buildDrafts', '--buildFuture'];
  if (process.env.DEPLOY_PRIME_URL) {
    args.push('-b')
    args.push(process.env.DEPLOY_PRIME_URL)
  }

  buildSite(cb, args)
});

gulp.task("css", () => (

  gulp.src("./src/css/*.css")
    .pipe(postcss([
      cssImport({from: "./src/css/main.css"}),
      cssnext(),
      cssnano()
    ]))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
));

gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    browserSync.reload();
    cb();
  });
});

gulp.task("svg", () => {
  const svgs = gulp
    .src("site/static/img/icons-*.svg")
    .pipe(svgmin())
    .pipe(svgstore({inlineSvg: true}));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src("site/layouts/partials/svg.html")
    .pipe(inject(svgs, {transform: fileContents}))
    .pipe(gulp.dest("site/layouts/partials/"));
});

gulp.task("server", gulp.series("svg", gulp.parallel("hugo", "css", "js"), () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("./src/js/**/*.js", gulp.series("js"));
  gulp.watch("./src/css/**/*.css", gulp.series("css"));
  gulp.watch("./site/static/img/icons-*.svg", gulp.series("svg"));
  gulp.watch("./site/**/*", gulp.series("hugo"));
}));

function buildSite(cb, options) {
  const args = options ? defaultArgs.concat(options) : defaultArgs;

  return cp.spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload("notify:false");
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}

gulp.task("build", gulp.parallel("css", "js", "hugo"));
gulp.task("build-preview", gulp.parallel("css", "js", "hugo-preview"));
