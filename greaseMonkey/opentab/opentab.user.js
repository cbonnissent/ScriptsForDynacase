// ==UserScript==
// @name           openTab
// @namespace      http://bonnissent.fr/
// @include        http://*/*id=*
// @include        https://*/*id=*
// ==/UserScript==

function addJsInline(text) {
	var GM_JQ = document.createElement('script');
	GM_JQ.type = 'text/javascript';
	GM_JQ.textContent = text;
	document.getElementsByTagName('head')[0].appendChild(GM_JQ);
}

addJsInline("function getUrlVars() {\
	var vars = {};\
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,\
			function(m, key, value) {\
				vars[key] = value;\
			});\
	return vars;\
}");

var GM_BUTTON = document.createElement('button');

GM_BUTTON.setAttribute("onclick" ,"window.open('./?app=FDL&action=FDL_CARD&id='+getUrlVars()['id'])");
GM_BUTTON.textContent = "Détacher";
GM_BUTTON.setAttribute("style" ,"color:red");
GM_BUTTON.setAttribute("title" ,"added by GreaseMonkey");

document.getElementsByTagName('body')[0].appendChild(GM_BUTTON);
