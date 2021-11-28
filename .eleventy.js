module.exports = function(eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

	eleventyConfig.addPassthroughCopy("img");

	return {
	  passthroughFileCopy: true
	};

};