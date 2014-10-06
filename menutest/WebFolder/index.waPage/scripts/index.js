
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock
$(window).resize(function(){
	$$('container3').setHeight($$('container1').getHeight());
	console.log('main:' + $$('container1').getHeight());
	console.log('body:' + $$('container3').getHeight());
});
// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		console.log($$('container1').getHeight());
		console.log($$('container3').getHeight());

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
