// ==UserScript==
// @name           PropertiesInsideMe
// @namespace      http://bonnissent.fr/
// @include        http://*/*action=FDL_CARD*id=*
// ==/UserScript==

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
			function(m, key, value) {
				vars[key] = value;
			});
	return vars;
}

var GM_IFRAME = document.createElement('iframe');

GM_IFRAME.setAttribute("src" ,"./?sole=Y&&app=FDL&action=IMPCARD&zone=FDL:VIEWPROPERTIES:T&id="+getUrlVars()['id']);
GM_IFRAME.setAttribute("style" ,"width: 500px; height: 400px;");

document.getElementsByTagName('body')[0].appendChild(document.createElement('br'));
document.getElementsByTagName('body')[0].appendChild(GM_IFRAME);