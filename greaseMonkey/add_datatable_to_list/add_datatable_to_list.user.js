// ==UserScript==
// @name           Add Datatable to list
// @namespace      http://bonnissent.fr
// @author        Charles bonnissent
// @homepage      http://www.bonnissent.fr
// @include        http://*/*dirid=*
// @include        https://*/*dirid=*
// @resource    JQUERY_JS http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @resource    DATATABLE  http://datatables.net/download/build/jquery.dataTables.js
// @resource    DATATABLE_CSS  http://live.datatables.net/media/css/demo_table.css
// ==/UserScript==


function addJsInline(text) {
	var GM_JQ = document.createElement('script');
	GM_JQ.type = 'text/javascript';
	GM_JQ.textContent = text;
	document.getElementsByTagName('head')[0].appendChild(GM_JQ);
}

function addCssInline(text) {
	var GM_JQ = document.createElement('style');
	GM_JQ.type = 'text/css';
	GM_JQ.textContent = text;
	document.getElementsByTagName('head')[0].appendChild(GM_JQ);
}



addJsInline("if (window.jQuery == undefined) { "+GM_getResourceText ("JQUERY_JS")+"}");
addJsInline(GM_getResourceText("DATATABLE"));
//addCssInline(GM_getResourceText("DATATABLE_CSS"));

addJsInline("$(document).ready( function() { \
	var tab = $('table#terrible');\
var nbColomn = $(tab.find('tr')[0]).find('td').length;\
var thead = '<thead><tr>';\
for( var i = 0; i < nbColomn; i++) {\
    thead += '<th></th>';\
}\
thead += '</tr></thead>';\
tab.append(thead);\
tab.dataTable({'sPaginationType': 'full_numbers'});\
});");