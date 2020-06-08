const {dest, watch, src} = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');

const compileSass = () =>

  src("sass/main.scss")

    .pipe(
      sass({outputStyle: "expanded"})
    )

    .pipe(
      autoprefixer(
        ['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8']
      )
    )

    .pipe(dest("css"));

const watchSassFiles = () => watch("sass", compileSass);

exports.default = watchSassFiles;