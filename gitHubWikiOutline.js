// place a hide/show icon in the Pages panel
//

var url = chrome.extension.getURL ('resources/gfx/slideRight.png');

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
slideRIcon.setAttribute ("src", url);
slideRIcon.setAttribute ("alt", "Hide Panel\>\>");
slideRIcon.setAttribute ("class", "slideIcon");

var collapseLink = document.createElement ("a");
collapseLink.setAttribute("id", "slidePanelRightLink");
collapseLink.setAttribute("href", "http://www.w3schools.com");

var sliderLocation = document.getElementById ("wiki-rightbar").getElementsByTagName ("h3")[0];

// ...assemble the tags in the document
//
collapseLink.appendChild (slideRIcon);
sliderLocation.appendChild (collapseLink);

// next step... an event page to process clicks on collapseLink
// https://developer.chrome.com/extensions/event_pages