if (window.top === window) {
	
	// Inject the bridge script
	var changerScript = document.createElement('script');
	changerScript.type = 'text/javascript';
	changerScript.src = chrome.extension.getURL('changer.js');
	(document.head||document.documentElement).appendChild(changerScript);

}