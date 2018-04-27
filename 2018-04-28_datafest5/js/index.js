Reveal.initialize({
    width: 960,
    height: 540,
    pdfMaxPagesPerSlide: 1,
    transition: 'none',
    dependencies: [
	{
	    src: 'js/highlight.js',
	    async: true,
	    callback: function() {
		hljs.initHighlightingOnLoad();
	    }
	}
    ]
});


if (window.location.search.match(/print-pdf/gi)) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/pdf.css';
    document.getElementsByTagName('head')[0].appendChild(link);
}
