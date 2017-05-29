var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	minifyCSS = require("gulp-minify-css"),
	plumber = require("gulp-plumber"),
	concat = require("gulp-concat");

//Concat Script Task
gulp.task("concatJS", function() {
	return gulp.src(["JS/DC.js", "JS/appDCB.js"])
	.pipe(plumber())
	.pipe(concat("DCB-scripts.js"))
	.pipe(gulp.dest("JS"))
});

//Concat Styles Task
gulp.task("concatCSS", function() {
	return gulp.src(["CSS/DC.css", "CSS/themes/comicList.css", "CSS/themes/jquerymobileicons.css"])
	.pipe(plumber())
	.pipe(concat("DC-styles.css"))
	.pipe(gulp.dest("CSS"))
});
	
//Uglify Scripts Task
gulp.task("scripts", function() {
	return gulp.src(["JS/DC.js", "JS/appDCB.js"])
	.pipe(plumber())
	.pipe(concat("miniDCB-scripts.js"))
	.pipe(uglify())
	.pipe(gulp.dest("JS"));
});

//Minify Styles Task
gulp.task("minify-css", function() {
	return gulp.src(["CSS/DC.css", "CSS/themes/comicList.css", "CSS/themes/jquerymobileicons.css"])
	.pipe(plumber())
	.pipe(concat("minifiedstyles.css"))
	.pipe(minifyCSS())
	.pipe(gulp.dest("CSS"))
});

//Watch Tasks
gulp.task("watch", function() {
	gulp.watch("JS/*.js", ["concatJS"]);
	gulp.watch("CSS/*.css", ["concatCSS"]);
	gulp.watch("JS/*.js", ["scripts"]);
	gulp.watch("CSS/*.css", ["minify-css"]);
});

gulp.task("default", ["watch", "concatJS", "concatCSS", "scripts", "minify-css"]);