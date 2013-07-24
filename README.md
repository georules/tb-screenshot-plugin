# Tributary Screenshot Plugin

This screenshot plugin lets you click a button in the Config panel to automatically take a screenshot of your SVG.  When you save, this screenshot will be set as your thumbnail for your inlet.  

## Installation
+ Install a localhost Tributary 
+ Clone this plugin repository into static/plugins 
+ Include the following libraries from in sandbox/templates/inlet.handlebars  (I put them after "UI Related")

```
<script type="text/javascript" src="http://canvg.googlecode.com/svn/trunk/rgbcolor.js"></script>
<script type="text/javascript" src="http://canvg.googlecode.com/svn/trunk/StackBlur.js"></script>
<script type="text/javascript" src="http://canvg.googlecode.com/svn/trunk/canvg.js"></script>
```

+ Put the following call in sandbox sandbox/templates/inlet.handlebars in the on "loaded" anonymous function.

```
tb.events.on("loaded", function() { 
  [...]
	tb.loadPlugin("/static/plugins/tb-screenshot-plugin/plugin.json", {}, function(e) {console.log("callback: ",e);});
	[...]
})
```

## How to use
+ Open a tributary inlet
+ Click Config, then Screenshot
+ Click Save

## How it works
This plugin uses canvg https://code.google.com/p/canvg/ to process the svg display from Tributary.  It converts to canvas element, which is hidden, and then this is converted into a PNG.  This PNG is uploaded to imgur via Tributary's imgur event trigger.  Your github keys and imgur keys must be configured properly in settings.js to use this.

Note that when you set up your API keys with github and imgur that the callback routes for are:
+ /github-authenticated
+ /imgur-authenticated
