// ==UserScript==
// @name           Export Me
// @namespace      http://bonnissent.fr/
// @include        http://*/*dirid=*
// @include        https://*/*dirid=*
// ==/UserScript==

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
			function(m, key, value) {
				vars[key] = value;
			});
	return vars;
}

function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}


var url = './?sole=Y&app=FREEDOM&action=EDITEXPORT&id='+getUrlVars()['dirid']

var GM_BUTTON = document.createElement('button');

GM_BUTTON.setAttribute("onclick" ,"window.open('"+url+"', '"+S4()+"', 'width=700,height=300')");
GM_BUTTON.textContent = "Export Me";
GM_BUTTON.setAttribute("style" ,"color:red");
GM_BUTTON.setAttribute("title" ,"added by GreaseMonkey");

document.getElementsByTagName('body')[0].appendChild(GM_BUTTON);