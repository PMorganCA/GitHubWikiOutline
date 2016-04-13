// place a hide/show icon in the Pages panel
//

// functions to do work
var hideRightBar = function ()
{
	alert ("working...");
}

var slideRImgUrl = chrome.extension.getURL ('resources/gfx/slideRight.png');

//  create the tags...
//
/* var slideRIcon = document.createElement ("svg") ;
slideRIcon.setAttribute ("width", "9");
slideRIcon.setAttribute ("height", "16");
slideRIcon.setAttribute ("viewBox", "0 0 9 16");

var rIconPath =  document.createElement ("path");
rIconPath.setAttribute ("d", "M0 2l5 7l0 14M3 2l8 7l3 14");

slideRIcon.appendChild (rIconPath);
 */

var slideRIcon = document.createElement ("img");
slideRIcon.setAttribute ("src", slideRImgUrl);
slideRIcon.setAttribute ("alt", "Hide Panel\>\>");
slideRIcon.setAttribute("id", "slidePanelRightIcon");
slideRIcon.setAttribute ("class", "slideIcon");
slideRIcon.addEventListener('click', hideRightBar);

// var collapseLink = document.createElement ("a");
// collapseLink.setAttribute("id", "slidePanelRightLink");

var sliderLocation = document.getElementById ("wiki-rightbar").getElementsByTagName ("h3")[0];

// ...assemble the tags in the document
//
// collapseLink.appendChild (slideRIcon);
// sliderLocation.appendChild (collapseLink);
sliderLocation.appendChild (slideRIcon);

// next step... hide the right panel
