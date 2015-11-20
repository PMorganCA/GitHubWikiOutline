// place a hide/show icon in the Pages panel
//

var url = chrome.extension.getURL ('resources/gfx/slideRight.png');

var slideRIcon = document.createElement ("img");
slideRIcon.setAttribute ("src", url);
slideRIcon.setAttribute ("alt", "Hide Panel\>\>");
slideRIcon.setAttribute ("class", "slideIcon");

var collapseLink = document.createElement ("a");
collapseLink.setAttribute("href", "http://www.w3schools.com");

var counterSpan = (document.getElementsByClassName ("counter"))[0];
//var counterSpan = document.getElementById ("wiki-rightbar");

collapseLink.appendChild (slideRIcon);

counterSpan.parentElement.appendChild (collapseLink);

