// ==UserScript==
// @name           Add jQuery, Sugar and data and current Doc
// @namespace      http://bonnissent.fr
// @author        Charles bonnissent
// @homepage      http://www.bonnissent.fr
// @description    Insert the jQuery script so that we can run commands in Firebug
// @include        http://*/*id=*
// @resource    JQUERY_JS http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @resource    SUGAR_JS  https://raw.github.com/andrewplummer/Sugar/master/release/sugar-0.9.4.min.js
// @resource    DATA_JS  https://wdesk.anakeen.com/lib/data/fdl-data.js
// ==/UserScript==


function addJsInline(text) {
	var GM_JQ = document.createElement('script');
	GM_JQ.type = 'text/javascript';
	GM_JQ.textContent = text;
	document.getElementsByTagName('head')[0].appendChild(GM_JQ);
}



addJsInline("if (window.jQuery == undefined) { "+GM_getResourceText ("JQUERY_JS")+"}");
addJsInline(GM_getResourceText ("SUGAR_JS"));
addJsInline(GM_getResourceText ("DATA_JS"));

addJsInline("function getUrlVars() {\
	var vars = {};\
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,\
			function(m, key, value) {\
				vars[key] = value;\
			});\
	return vars;\
}\
$(document).ready( function() { \
C = new Fdl.Context({url:window.location.protocol+'//'+window.location.hostname+window.location.pathname.substr(0,window.location.pathname.indexOf('/lib/'))});\
	var docRef = {\
			id : getUrlVars()['id']\
	};\
	currentDoc = C.getDocument(docRef);\
});");