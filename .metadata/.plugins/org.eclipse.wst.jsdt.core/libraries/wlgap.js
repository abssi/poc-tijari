/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/**
 * @class
 * IBM&reg; Worklight&reg; provides a number of methods for supported push notification mechanisms.
 * Push notifications are supported on iOS, Android, and Windows Phone 8 devices.
 * SMS push notifications are supported on iOS, Android, Windows Phone 8, and BlackBerry devices that support SMS functions.
 * @note {Note} Subscription, and unsubscription, to SMS notifications can also be performed by making HTTP GET requests to the subscribe SMS servlet. 
 * The subscribe SMS servlet can be used for SMS subscriptions without the requirement for a user to have an app installed on their device. 
 * @name WL.Client.Push
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__Push = function() {

	/**
	 * Checks whether SMS push notifications are supported.
	 * @description Returns <code>true</code> if the IBM&reg; Worklight&reg; JavaScript API supports SMS push notifications in the current environment.
	 * 
	 * @methodOf WL.Client.Push#
	 */
	this.isPushSMSSupported = function() {
	};

	/**
	 * Checks whether push notification is supported.
	 * @description Returns <code>true</code> if the IBM&reg; Worklight&reg; JavaScript API supports push notifications in the current environment.
	 * @methodOf WL.Client.Push#
	 */
	this.isPushSupported = function() {
	};
	
	/**
	 *Checks whether current user is subscribed to an SMS event source.
	 * @description Returns whether the currently logged-in user is subscribed to the SMS event source alias
	 * @param alias
	 *           Mandatory string. The event source alias.
	 * @methodOf WL.Client.Push#
	 */
	this.isSMSSubscribed = function(alias){
	};
	
	
	/**
	 * Checks whether current user is subscribed to an event source.
	 * @description Returns whether the currently logged-in user is subscribed to the specified event source alias
	 * @param alias
	 *           Mandatory string. The event source alias.
	 * @methodOf WL.Client.Push#
	 */
	this.isSubscribed = function(alias){
	};

	/**
	 * Checks whether the device is subscribed to a tag.
	 * @description Returns whether the device is subscribed to a tag with the given tagName
	 * @param tagName
	 *           Mandatory string. The name of the tag.
	 * @methodOf WL.Client.Push#
	 */
	this.isTagSubscribed = function(tagName){
	};
	

	/**
	 * @description A callback function to notify that a device is ready to subscribe to push notifications. You must declare it outside any function. 
	 * @example 
	 * WL.Client.Push.onReadyToSubscribe= function () {
	 * // You can enable the Subscribe button here or call WL.Client.Push.subscribe() or WL.Client.Push.subscribeTag()
	 * // This callback is useful in case your app needs to call subscribe() upon startup.
	 * WL.Client.Push.registerEventSourceCallback ('myAlias', 'myAdapter', 'myEventSource', notificationArrived);
	 * }
	 * 
	 * function notificationArrived(props, payload){
	 * alert("Provider notification data: " + Object.toJSON(props));
	 * alert("Application notification data: " + Object.toJSON(payload));
	 * }
	 * @methodOf WL.Client.Push#
	 */
	this.onReadyToSubscribe = function(){
	};
	
	/**
	 * @description A callback function to notify that push notification is arrived. You must declare it outside any function. 
	 * @param props A JSON block that contains the notifications properties of the platform.
     * @param payload A JSON block that contains other data that is sent from the IBM Worklight Server. It also contains the tag name for tag and broadcast notification. 
     * 				 The tag name appears in the "tag" element. For broadcast notification, default tag name is Push.ALL.
	 * @example 
	 * WL.Client.Push.onMessage= function (props, payload) {
	 * alert("Provider notification data: " + Object.toJSON(props));
	 * alert("Application notification data: " + Object.toJSON(payload));
	 * }
	 * @methodOf WL.Client.Push#
	 */
	this.onMessage = function(props, payload){
	};	
	
	/**
	 * Registers a callback method that is called whenever a notification arrives from the specified event source.
	 * @description 
	 * 		<p>
	 * 			<dl class="detailList">
	 * 			<dt class="heading">iOS and Android</dt>
	 * 			<dd> Registers a callback method that is called whenever a notification arrives from the specified event source. 
	 * 				If the notification arrives while the application is not running, the mobile OS starts the application at the specified callback.
	 * 			<dt class="heading">Windows Phone 8</dt>
	 * 			<dd> Registers a callback method that is called whenever a raw notification or a toast notification arrives and the application is running. 
	 * 				If the notification arrives when the application is not running, then the callback method is not called. 
	 * 				This behavior is defined in the Microsoft OS and cannot be changed.
	 * 			</dd>
	 * 			</dl>
	 * 		</p>
	 * @param alias Mandatory string. A short ID that is used to identify the event source when the push notification arrives. Because notification text is usually limited in length, 
	 * 		providing a short alias, rather than the entire adapter and event source names, can free more space in the notification text.
	 * @param adapter Mandatory string. The name of the adapter that contains the event source.
	 * @param eventSource Mandatory string. The name of the event source.<br />
	 * @param callback Mandatory function. The function that is called if a notification arrives. The function receives two parameters when invoked:
	 * 		<ul>
	 * 			<li><b>props </b> A JSON block, containing the notification properties from the platform.</li>
	 * 			<li><b>payload</b> A JSON block, containing other data that is sent from the IBM&reg; Worklight&reg; Server.</li>
	 * 		</ul>
	 * 		
	 * 
	 * @methodOf WL.Client.Push#
	 */
	this.registerEventSourceCallback = function(alias, adapter, eventSource, callback){
	};
	
	/**
	 * Subscribe to an event source.
	 * @description Subscribes the user to the event source with the specified alias.
	 * @param alias
	 *           Mandatory string. The event source alias, as defined in the invocation of <code> WL.Client.Push.onReadyToSubscribe </code>.
	 * @param options Optional. A standard <b>options</b> object. Custom subscription parameters that are supported by the event source in the adapter can also be included in this options object.
	 * 
	 * @example 
	 * if (WL.Client.Push.isPushSupported()){ 
	 * WL.Client.Push.subscribe( 'myAlias', {foo: 'bar', onFailure : notificationSubscriptionError});
	 * }
	 * 
	 * function notificationSubscriptionError(response) {
	 * alert("Error registering for push notifications. " + response.errorMsg);
	 * }
	 * @methodOf WL.Client.Push#
	 */
	this.subscribe = function(alias, options){
	};
	
	/**
	 * Subscribe to a tag.
	 * @description Subscribes the device to a tag defined for the application.
	 * @param tagName
	 *           Mandatory string. The name of the tag, as defined in the invocation of <code> WL.Client.Push.onReadyToSubscribe </code>.
	 * @param options Optional. A standard <b>options</b> object.
	 * 
	 * @example 
	 * if (WL.Client.Push.isPushSupported()){ 
	 * WL.Client.Push.subscribeTag( 'Tag1', {onFailure : notificationSubscriptionError});
	 * }
	 * 
	 * function notificationSubscriptionError(response) {
	 * alert("Error registering for push notifications. " + response.errorMsg);
	 * }
	 * @methodOf WL.Client.Push#
	 */
	this.subscribeTag = function(tagName, options){
	};
	
	/**
	 * Subscribe to an SMS event source.
	 * @description Subscribes the user to the SMS event source with the specified alias.
	 * @param alias
	 *           Mandatory string. A short ID defining the event source.
	 * @param adapterName Mandatory String. The name of the adapter that sets up the event source and communicates with the Worklight&reg; server.
	 * @param eventSource Mandatory String. The name of the event source.
	 * @param phoneNumber Mandatory string. User phone number to which SMS notifications are sent. 
	 * 		The phone number is provided by the user and can contain digits (0-9), plus sign (+), minus sign (-), and space ( ) characters only.
	 * @param options Optional. A standard <b>options</b> object. Custom subscription parameters that are supported by the event source in the adapter can also be included in this options object.
	 * 
	 * @example 
	 * if (WL.Client.Push.isPushSMSSupported()){
	 * 	WL.Client.Push.subscribeSMS( “myAlias”,”SMSAdapter”,”SMSEventSource”, “1234567890”,
	 * 	{onSuccess: notificationSubscriptionSuccess, 
	 * 	onFailure : notificationSubscriptionError
	 * 	});
	 * } 
	 * 
	 * function notificationSubscriptionSuccess(response){
	 * 	alert(“Registered for SMS push notification”);
	 * }
	 * 
	 * function notificationSubscriptionError(response) { 
	 * 	alert("Error registering for SMS push notifications. " + response.errMsg); 
	 * }
	 * 				
	 * @methodOf WL.Client.Push#
	 */
	this.subscribeSMS = function(alias, adapterName, eventSource, phoneNumber, options){
	};
	
	/**
	 * Unsubscribe from an event source.
	 * @description Unsubscribes the user from the event source with the specified alias
	 * @param alias
	 *           Mandatory string. The event source alias, as defined in the invocation of <code> WL.Client.Push.onReadyToSubscribe </code>.
	 * @param options Optional. A standard <b>options</b> object. Custom subscription parameters that are supported by the event source in the adapter can also be included in this options object.
	 * @methodOf WL.Client.Push#
	 */
	this.unsubscribe = function(alias){
	};
	
	/**
	 * Unsubscribe from a tag.
	 * @description Unsubscribes the device from the specified tag
	 * @param tagName
	 *           Mandatory string. The name of the tag, as defined in the invocation of <code> WL.Client.Push.onReadyToSubscribe </code>.
	 * @param options Optional. A standard <b>options</b> object.
	 * @methodOf WL.Client.Push#
	 */
	this.unsubscribeTag = function(tagName){
	};
	
	/**
	 * Unsubscribe from an SMS event source.
	 * @description Unsubscribes the user from the SMS event source with the specified alias.
	 * @param alias Mandatory string. The alias defined when subscribing.
	 * @param options Optional. A standard <b>options</b> object. Custom subscription parameters that are supported by the event source in the adapter can also be included in this options object.
	 * @methodOf WL.Client.Push#
	 */
	this.unsubscribeSMS = function(alias, options){
	};
	
};

/**
 * @class
 * IBM&reg; Worklight&reg; provides an API for managing the tab bar on Android and iPhone.<br />
 * This section applies to Android and iPhone only.<br />
 * The Android and iPhone tab bars are graphical elements which look and work very much like the tab bars of regular web or desktop applications. IBM Worklight provides a client-side API for managing the tab bar. 
 * On iPhone, this API serves as a proxy to the native iPhone tab bar object; on Android, it is implemented as an HTML element.<br />
 * 				<dl class="detailList">
 * 					<dt class="heading">Fixing the Tab Bar on the Screen – Android 2.2 and Above</dt>
 * 					<dd>Fix the position of the tab bar by updating HTML and CSS.
 * 						<dl class="detailList">
 * 							<dt class="heading">About this task</dt>
 * 							<dd>To fix the tab bar in one location on the screen on Android 2.2 and above, perform the following steps:
 * 								<dl class="detailList">
 * 									<dt class="heading">Procedure</dt>
 * 									<dd>
 * 										<ol>
 * 											<li>Add the following meta tag to the HTML HEAD section:<br />
 * 												<code> &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" /&gt;</code>
 * 											</li>
 * 											<li>Update the Android CSS BODY tag to also apply to the HTML tag, as follows:<br />
 * 												<code>html, body { height: auto; overflow: auto; }</code>
 * 											</li>
 * 										</ol>
 * 									</dd>
 * 								</dl>
 * 							</dd>
 * 						</dl>
 * 					</dd>
 * 				</dl>
 * @name WL.TabBar
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__TabBar = function() {
	/**
	 * Add an item to the tab bar. 
	 * @description Adds an item to the tab bar. Can be called only after the tab bar is initialized. Items are displayed in the tab bar according to the order in which they were added to the tab bar.
	 * @param id Mandatory string. Identifies the tab.
	 * @param callback Mandatory function. The callback function that is invoked when the user touches the tab.
	 * @param title Mandatory string. The title of the tab. If null is passed, no title is displayed.
	 * @param options Options for customizing the tab item.
	 * 		<ul>
	 * 			<li> On iPhone: 
	 * 				<ul>
	 * 					<li>
	 * 						<code>image:</code> String. File name or path relative to the application root directory, 
	 * 						with a PNG image for the tab or an internal identifier for standard tabs. See the list of standard tabs in the next section.
	 * 					</li>
	 * 					<li>
	 * 						badge: String. A string to display in the optional circular badge on the item; if null or unspecified, no badge is displayed.
	 * 					</li>
	 * 				</ul>
	 * 			</li>
	 * 			<li> On Android: 
	 * 				<ul>
	 * 					<li>
	 * 						<code>image:</code> String. File name or path relative to the application root directory, with a PNG image for the tab in unselected mode.
	 * 					</li>
	 * 					<li>
	 * 						ImageSelected: String. File name with an image for the tab in selected mode.
	 * 					</li>
	 * 				</ul>
	 * 			</li>	
	 * 		</ul>
	 * 		<b>Note:</b> On iPhone, if the supplied image name is one of the labels in the following list, this method constructs a tab button by using the standard system buttons. 
	 * 			If you use one of the system images, then the title you supply is ignored.
	 * 		<ul>
	 * 			<li> tabButton:More </li>
	 * 			<li> tabButton:Favorites </li>
	 * 			<li> tabButton:Featured </li>
	 * 			<li> tabButton:TopRated </li>
	 * 			<li> tabButton:Recents </li>
	 * 			<li> tabButton:Contacts </li>
	 * 			<li> tabButton:History </li>
	 * 			<li> tabButton:Bookmarks </li>
	 * 			<li> tabButton:Search </li>
	 * 			<li> tabButton:Downloads </li>
	 * 			<li> tabButton:MostRecent </li>
	 * 			<li> tabButton:MostViewed </li>
	 * 		</ul>
	 * @returns A {@link WL.TabBarItem} object.
	 * @example 
	 * //iPhone
	 * function selectCredit(){
	 * 	alert("the CREDIT tab was selected!");
	 * }
	 * var creditTab = WL.TabBar.addItem("CREDIT", selectCredit, "Visa", {image:"images/credit.png", badge: "2"});
	 * 
	 * //Android
	 * var tabFeeds = WL.TabBar.addItem (
	 * 	'tab2',
	 * 	function(){worklightStarterApplication.selectTab('feedsWrapper'); }, 
	 * 	"Engadget Feeds", 
	 * 	{image:"images/feed.png", imageSelected:"images/feed.png"}
	 * );
	 * @methodOf WL.TabBar#
	 */
	this.addItem = function(id, callback, title, options){
	};
	/**
	 * Initialize the tab bar.
	 * @description Initializes the tab bar, enabling it, but keeping it invisible. Must be called before any other function, except setParentDivId on Android.
	 * @methodOf WL.TabBar#
	 * @name WL.TabBar#init
	 */
	this.init = function(){
	};
	/**
	 * Returns whether the Android tab bar is visible.
	 * @description Returns whether the Android tab bar is visible. Can be called only after the tab bar is initialized. 
	 * @methodOf WL.TabBar#
	 */
	this.isVisible = function(){
	};
	
	/**
	 * 
	 * Enables or disables the tab bar. Returns whether the Android tab bar is visible.
	 * @description Enables or disables the tab bar. When the tab bar is disabled, it is still visible, but all its items are disabled. However, the selected item remains selected.
	 * @param isEnabled Mandatory Boolean. 
	 * 		<ul>
	 * 			<li><code>true:</code> Enable the tab bar.</li>
	 * 			<li><code>false:</code> Disable the tab bar. </li> 
	 * 		</ul>
	 * @methodOf WL.TabBar#
	 * @name WL.TabBar#setEnabled
	 */
	this.setEnabled = function(isEnabled){
	};
	/**
	 * Remove all items from a tab bar
	 * @description Removes all the previously added items from the tab bar. The effect is immediate.
	 * @methodOf WL.TabBar#
	 */
	this.RemoveAllItems = function(){
	};
	/**
	 * Place the tab bar within another element.
	 * @description This method applies to Android only.</br>
	 * By default the tab bar is added to the element with ID content.
	 * In the application template that is generated by Worklight&reg; Studio, the <body> element has this ID. Use this function to place the tab bar within an arbitrary element. This function is useful when the location of the tab bar is not at the top of the application screen.
	 * @param parentId Mandatory. Identifies the division in which the tab bar is placed. 
	 * @deprecated This method is deprecated.
	 * @methodOf WL.TabBar#
	 */
	this.setParentDivId = function(parentId){
	};
	
	/**
	 * Selects an item in the tab bar.
	 * @description Selects the specified item of the tab bar, deselecting any other item. If the ID does not specify an existing tab, nothing happens.
	 * @param id Mandatory. The ID of the tab to be selected. 
	 * @returns Integer: the ID of the selected tab. 
	 * @methodOf WL.TabBar#
	 */
	this.setSelectedItem = function(id){
	};
	/**
	 * Makes the tab bar visible or invisible.
	 * @description Determines whether the tab bar is visible. Call this method after the tab bar is initialized and all necessary tabs are added.
	 * @param isVisible Mandatory Boolean. 
	 * 		<ul>
	 * 			<li><code>true:</code> Shows the tab bar. </li>
	 * 			<li><code>false:</code> Hides the tab bar. </li> 
	 * 		</ul>
	 * @methodOf WL.TabBar#
	 */
	this.setVisible = function(isVisible){
	};
	
};
/**
 * @class 
 * Do not create a TabBarItem manually.<br />
 * Objects of this type are returned by the WL.TabBar.addItem function and must not be created manually.
 * 
 * @name WL.TabBarItem
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__TabBarItem = function(){

	/**
	 * Enables or disables a tab bar item.
	 * @description Enables or disables the tab bar item.
	 * @param isEnabled Mandatory Boolean. 
	 * 		<ul>
	 * 			<li><code>true:</code> Enable the tab bar item.</li>
	 * 			<li><code>false:</code> Disable the tab bar item. </li> 
	 * 		</ul>
	 * @example 
	 * //For iPhone:
	 * var creditTab = WL.TabBar.addItem("CREDIT", selectCredit, "Visa", {image:"images/credit.png", badge: "2"});
	 * creditTab.setEnabled(false);
	 * 
	 * //For Android:
	 * var tabFeeds = WL.TabBar.addItem (
	 * 	'tab2',
	 * 	function(){worklightStarterApplication.selectTab('feedsWrapper');},
	 * 	"Engadget Feeds", 
	 * 	{image:"images/feed.png",imageSelected:"images/feed.png"}
	 * );
	 * tabFeeds.setEnabled(false);
	 * @methodOf WL.TabBarItem#
	 * @name WL.TabBarItem#setEnabled
	 */
	this.setEnabled = function(isEnabled){
	};

	/**
	 * On iOS only, updates the badge value on a tab bar item.
	 * @description This method applies only to iOS.<br />
	 * 		Updates the badge value that is displayed on the tab bar item.
	 * @param badge Optional string. The badge value to display on the item. If null or not specified, no badge value is displayed.
	 * @example 
	 * var creditTab = WL.TabBar.addItem("CREDIT", selectCredit, "Visa", {image:"images/credit.png", badge: "2"});
	 * creditTab.updateBadge("3");
	 * 
	 * // using null will remove the badge from the TabBar Item
	 * creditTab.updateBadge(null);
	 * @methodOf WL.TabBarItem#
	 */
	this.updateBadge = function(badge){
	};
};

/**
 * @class 
 * Change an item’s title, or icon, or enables or disables an item.
 * @note {Note} You cannot instantiate a new WL.Item object; you can receive one as a result of calling <code>WL.OptionsMenu.getItem()</code>.
 * @example 
 * var itemOne = WL.OptionsMenu.getItem('first');
 * itemOne.setEnabled(false);
 * @name WL.Item
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__Item = function(){

	/**
	 * Set title of Item.
	 * @param title Mandatory string. The title of the item.
	 * @methodOf WL.Item#
	 */
	this.setTitle = function(title){
	};
	/**
	 * Set path to the icon.
	 * @param imagePath Mandatory string. The path to the icon.<br />
	 * 		See WL.OptionsMenu.addItem for an explanation of the icon path and format for Android), 
	 * 		Windows Phone 8, and Windows 8.
	 * 
	 * @methodOf WL.Item#
	 */
	this.setImagePath = function(imagePath){
	};
	
	/**
	 * Enable of Disable item.
	 * @param isEnable Mandatory Boolean. Defines whether the item is enabled or disabled.
	 * @methodOf WL.Item#
	 * @name WL.Item#setEnabled
	 */
	this.setEnabled = function(isEnabled){
	};

};


__WL.prototype.Push = new __Push;
__WL.prototype.TabBar = new __TabBar;
__WL.prototype.TabBarItem = new __TabBarItem;
__WL.prototype.Item = new __Item;


	