
Tributary.plugin("screenshot", tributaryScreenshotPlugin);

function tributaryScreenshotPlugin(tributary, plugin)	{
	var el;
	plugin.activate = function()	{
		console.log("hi from screenshot plugin");
		el = document.getElementById(plugin.elId);
		d3.select("#thumbnail-content").node().appendChild(d3.select(el).select("#screenshot").node());
		d3.select("#screenshot").on("click", handleScreenshot);
		var link = tributary.model.get("thumbnail");
		if (link)	{
			d3.select("#thumbnail-content").select("img").attr("src", link).style("display", "");
		}
	}
	plugin.deactivate = function()	{
		el = document.getElementById(plugin.elId);
		el.innerHTML = "";
	}

	function handleScreenshot() {
		svg = d3.select("#display").html();
		findstring = '<svg xmlns="http://www.w3.org/2000/svg" xlink:xlink="http://www.w3.org/1999/xlink" class="tributary_svg" width="100%" height="100%">';
		svg2 = svg.replace(findstring,'<svg>');
	 	canvas = document.getElementById('pngit');
		canvg(canvas, svg2, {renderCallback: function() {
			var len = "data:image/png;base64,".length;
			var img = canvas.toDataURL("image/png").substring(len);
			tributary.events.trigger("imgur", img);
		}});
	}

	return plugin;
}
