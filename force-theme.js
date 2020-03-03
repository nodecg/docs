const path = require('path');

// Primarily used by tests.
module.exports = function (context, options) {
	return {
		name: 'force-theme',
		injectHtmlTags() {
			return {
				headTags: [`<script>(() => {
					const url = new URL(window.location.href);
					const urlParams = new URLSearchParams(url.search);
					if (urlParams.has('theme')) {
						localStorage.setItem('theme', urlParams.get('theme'));
					}
				})()</script>`],
			};
		},
	};
};
