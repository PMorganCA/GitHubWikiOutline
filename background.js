//////////////////////////////////////////////////
// deal with background stuff in the GitHub wiki
//


chrome.webNavigation.onHistoryStateUpdated.addListener (
	function(details) 
	{
		chrome.tabs.executeScript (null, {file:"gitHubWikiOutline.js", runAt:"document_end"});
	}
);

