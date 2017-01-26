//////////////////////////////////////////////////
// place a hide/show icon in the Pages panel
//

////////////////////
// functions to do the work
//

	var aEQb = 0;
	var aLTb = -1;
	var aGTb = 1;

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

function tocCompare (a, b)
{
	var rtn = aEQb;
	
	if (a < b) rtn = aLTb;
	else if (a > b) rtn = aGTb;
	
	return rtn;
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
	slideLocation.insertBefore (slideRIcon, slideLocation.children[0]);
	slideLocation.insertBefore (slideLIcon, slideLocation.children[0]);

	
	// next step... sort the Table of Contents
	var wpCollections = mainContent.getElementsByClassName ("wiki-pages");
	if (null != wpCollections  &&  wpCollections.length == 1)
	{
		console.log ("there is " + wpCollections.length + " element where class=\"wiki-pages\"");
		
		var oldPageNamesUL = wpCollections[0];
		
		// the following code runs error free but does nothing 
		// the sort function, in the end relys on a string compare which is really the reason it's not sorted properly to begin with
		// recommend: write a custom slice() that creates an array of new objects that contain the LI and the parsed out toc number
		//           and then the sort can properly look at the number levels
		
		// if (oldPageNamesUL.tagName == "UL")
		// {
			// // get an array from the list of LI nodes in the ToC UL
			// var oldPageNameLIs = Array.prototype.slice.call (oldPageNamesUL.getElementsByTagName ("LI"));
			// oldPageNameLIs.sort (
				// function (a, b)
				// {					
					// var rtn = aEQb; // default, they are equal
					// var aString = a.getElementsByTagName ("A")[0].innerHTML;
					// var bString = b.getElementsByTagName ("A")[0].innerHTML;
					
					// if (aString == "Home")
					// {
						// rtn = aLTb;
					// }
					// else if (bString == 'Home')
					// {
						// rtn = aGTb;
					// }
					// else
					// {
						// rtn = tocCompare (aString, bString);
					// }
				// });
			// // get a new UL with the same class & attributes as the one contaning the T0C, but no children
			// var sortedPageNamesUL = oldPageNamesUL.cloneNode (false); 
			
			// var nextItem = oldPageNameLIs[0];
			// var liClone = nextItem.cloneNode (true);
		// }
	}
}