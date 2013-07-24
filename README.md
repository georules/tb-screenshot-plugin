# Tributary Screenshot Plugin

This screenshot plugin lets you click a button in the Config panel to automatically take a screenshot of your SVG.  When you save, this screenshot will be set as your thumbnail for your inlet.  

# Installation
+ Install a localhost 
+ Include the following libraries from in sandbox/templates/inlet.handlebars  (I put them after "UI Related")
```
<script type="text/javascript" src="http://canvg.googlecode.com/svn/trunk/rgbcolor.js"></script>
<script type="text/javascript" src="http://canvg.googlecode.com/svn/trunk/StackBlur.js"></script>
<script type="text/javascript" src="http://canvg.googlecode.com/svn/trunk/canvg.js"></script>
```
+ Put the following call in sandbox sandbox/templates/inlet.handlebars in the on "loaded" anonymous function.
```
tb.events.on("loaded", function() { 
...
	tb.loadPlugin("/static/plugins/tb-screenshot-plugin/plugin.json", {}, function(e) {console.log("callback: ",e);});
...
})
````
