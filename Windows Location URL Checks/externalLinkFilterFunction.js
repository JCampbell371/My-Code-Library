//Checks Hostname via URL, filters through all links, and adds "external" class to all external links

// Filter Function External Links

$("a").filter(function() {
	return this.hostname && this.hostname != location.hostname
}).addClass("external");