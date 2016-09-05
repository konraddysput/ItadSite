var gulp = require('gulp'), 				// importing gulp package
	uglify =require('gulp-uglify'),			//importing gulp uglify to minify javascrit[]
	sass = require('gulp-ruby-sass'),		// importing gulp sass compiler
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload'),
	concat = require('gulp-concat');

//concat js
gulp.task('scripts', function(){
	  return gulp.src(['build/scripts/jquery-1.10.2.min.js','build/scripts/!(jquery-1.10.2.min.js)*.js'])
    		.pipe(concat('site.js'))
		    .pipe(gulp.dest('scripts'));
});

//Styles task
//Uglify sass to css
gulp.task('custom-styles', function(){
	 return sass('build/styles/*.scss',{
	 	style:'compressed'
	 })
	.pipe(plumber())
    .on('error', sass.logError)
    .pipe(gulp.dest('build/styles'))
    .pipe(livereload());
});

//concat css files
gulp.task('styles', function(){
	setTimeout(function(){
		console.log("Delay");
		 return gulp.src('build/styles/*.css')
    		.pipe(concat('site.css'))
		    .pipe(gulp.dest('styles')); }, 3000);

	
	 	// gulp.src('build/styles/*.css')				//load files
		// .pipe(plumber())
		// .pipe(gulp.dest('build/styles'))		//we saving them - output
		// .pipe(livereload()); 	

});
//uglify fonts
gulp.task('fonts', function(){
	 	gulp.src('build/fonts/*.css')				//load files
		.pipe(plumber())
		.pipe(gulp.dest('build/styles'))		//we saving them - output
		.pipe(livereload()); 	

});


//Watch task
//JS watch
//SCSS watch
gulp.task('watch', function(){
	var server = livereload();

	gulp.watch('build/scripts/*.js', ['scripts']);
	gulp.watch('build/styles/*.scss',['custom-styles','styles']);
})




gulp.task('default', ['scripts','custom-styles','fonts','styles','watch']); //default - task name, array is a task array that have to be minified

