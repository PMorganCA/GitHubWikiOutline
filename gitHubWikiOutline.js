//////////////////////////////////////////////////
// place a hide/show icon in the Pages panel
//

////////////////////
// functions to do the work
//

var hideRightBar = function ()
{
	// alert ("working...");
	$(bodyPanel).css ("margin-right", "0px");
	$(rightPanel).hide("fast");
	$(slideRIcon).hide();
	$(slideLIcon).show();
}

var showRightBar = function ()
{
	// alert ("working...");
	$(rightPanel).show("fast");
	$(bodyPanel).css ("margin-right", bodyPanelRMargin);
	$(slideLIcon).hide();
	$(slideRIcon).show();
}

////////////////////
// globally referenced elements
//

// existing elements
//

var mainContent = document.getElementById ("wiki-content");

if (mainContent != null)
{
	var slideLocation = mainContent.getElementsByClassName ("has-rightbar")[0];

	var rightPanel = document.getElementById ("wiki-rightbar");

	var bodyPanel = document.getElementById ("wiki-body");
	var bodyPanelRMargin = $(bodyPanel).css ("margin-right");



	// new elements
	//

	var slideRImgUrl = chrome.extension.getURL ('resources/gfx/slideRight.png');
	var slideLImgUrl = chrome.extension.getURL ('resources/gfx/slideLeft.png');

	// var slideRIcon = document.createElement ("svg") ;
	// slideRIcon.setAttribute ("width", "9");
	// slideRIcon.setAttribute ("height", "16");
	// slideRIcon.setAttribute ("viewBox", "0 0 9 16");

	// var rIconPath =  document.createElement ("path");
	// rIconPath.setAttribute ("d", "M0 2l5 7l0 14M3 2l8 7l3 14");

	// slideRIcon.appendChild (rIconPath);

	var slideRIcon = document.createElement ("img");
	slideRIcon.setAttribute ("src", slideRImgUrl);
	slideRIcon.setAttribute ("alt", "Hide Panel\>\>");
	slideRIcon.setAttribute("id", "slidePanelRightIcon");
	slideRIcon.setAttribute ("class", "slideIcon");
	slideRIcon.addEventListener('click', hideRightBar);

	var slideLIcon = document.createElement ("img");
	slideLIcon.setAttribute ("src", slideLImgUrl);
	slideLIcon.setAttribute ("alt", "Show Panel\>\>");
	slideLIcon.setAttribute("id", "slidePanelLeftIcon");
	slideLIcon.setAttribute ("class", "slideIcon");
	slideLIcon.addEventListener('click', showRightBar);
	$(slideLIcon).css ("display", "none");


	///////////////////
	// code to execute on doc ready

	// ...add the new elements to the document
	//
	slideLocation.insertBefore (slideRIcon, slideLocation.children[0])
	slideLocation.insertBefore (slideLIcon, slideLocation.children[0])

	// next step... sort the toc
}