/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
/**
 * @name WL.App
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 * @class
*/
__WLApp = function(){
	
	/**
	 * @description Shows the default IBM Worklight splash screen on the activity that was passed as a parameter
	 * @methodOf WL.App#
	 * @name WL.App#showSplashScreen
	 */
	this.showSplashScreen = function (){};

	/**
	 * @description Hides the default IBM Worklight splash screen if it is shown, 
	 * and does nothing if the default Worklight splash screen is already hidden
	 * @methodOf WL.App#
	 * @name WL.App#hideSplashScreen
	 */	
	this.hideSplashScreen = function (){};
	
	/**
	 * @deprecated Deprecated.
	 * @description Quits the application.
	 * @note {Note} According to iOS Human Interface Guidelines, an iOS app must not contain an Exit button. The device's Home button is used for this purpose instead. 
	 * 		Apps that contain an Exit button might be rejected upon submission to the Apple App Store. On iOS, nothing happens upon tapping a button that is implemented with this API method.
	 * @methodOf WL.App#
	 * @name WL.App#close
	 */
	this.close = function (){};
	
	/**
	 * 
	 * This method is applicable to iOS and Android.
	 * @description
	 * It copies the specified string to the clipboard.
	 * 
	 * @param {String} string Mandatory. The text to be copied to the clipboard.
	 * @param callback Optional. For Android environments only. The callback function that is called after the data is copied to the clipboard.
	 *@methodOf WL.App#
	 */
	this.copyToClipboard = function (string){};
	
	/**
	 * Returns the language code.
	 * @description 
	 * Returns the language code according to user device settings, for example: en.
	 * @methodOf WL.App#
	 * @name WL.App#getDeviceLanguage
	 */
	this.getDeviceLanguage = function (){};
	
	
	/**
	 * Returns the locale code (or device language on BlackBerry).
	 * @description
	 * Returns the locale code according to user device settings, for example: en_US.
	 * @note {Note} On BlackBerry 6 and 7, this method returns the device language (for example, en), not the device locale.
	 * @methodOf WL.App#
	 * @name WL.App#getDeviceLocale
	 */
	this.getDeviceLocale = function (){};
	 
	 
	/**
	 * Extracts a string that contains an error message.
	 * @description 
	 * <p>
	 * Extracts a string that contains the error message within the specified exception object. 
	 * Use for exceptions that are thrown by the IBM&reg; Worklight&reg; client runtime framework.</p>
	 * @param {exception} exception Mandatory. The exception object from which the error string is extracted.
	 * @methodOf WL.App#
	 * @name WL.App#getErrorMessage
	 */
	this.getErrorMessage = function (exception){};
	 
	 
	/**
	 * Open a URL. The behavior depends on the application platform.
	 * @description 
	 * <p>Opens the specified URL according to the specified target and options (specs). The behavior of this method depends on the application environment, as follows:</p>
	 * <p><table border="1">
		<tr>
		<th><b>Environment</b></th>
		<th><b>Description</b></th>
		</tr>
		<tr>
		<td>Adobe AIR</td>
		<td>Opens a new browser window at the specified URL. The target and options parameters are ignored.</td>
		</tr>
		<tr>
		<td>Android</td>
		<td>Replaces the application with a new default browser window at the specified URL. 
		The target and options parameters are ignored. The application is not closed; 
		pressing Back on the phone brings the user back to the application.</td>
		</tr>
		<tr>
		<td>BlackBerry 6 and 7</td>
		<td>Replaces the application with a new default browser window at the specified URL. The target and options parameters are ignored.</td>
		</tr>
		<tr>
		<td>iPhone, iPad</td>
		<td>Replaces the application with a new Safari window at the specified URL. The target and options parameters are ignored.</td>
		</tr>
		<tr>
		<td>Mobile web apps</td>
		<td>Opens a new browser window at the specified URL. 
		Whether the target and options parameters are ignored or not depends on the specific mobile browser.</td>
		</tr>
		<tr>
		<td>Windows Phone 8</td>
		<td>Replaces the application with a new Internet Explorer window at the specified URL. The target and options parameters are ignored.</td>
		</tr>
		<tr>
		<td>Windows 8</td>
		<td>Replaces the application with a new Internet Explorer window at the specified URL. The target and options parameters are ignored.</td>
		</tr>
		<tr>
		<td>Other environments</td>
		<td>If the value of the target parameter is _self or unspecified, replaces the application iframe with the specified URL. Otherwise, opens a new browser window with the specified URL.
		 The target and options parameters are NOT ignored.</td>
		</tr>
		</table>
		</p>
	 * 
	 * @param url Mandatory. The URL of the web page to be opened.
	 * @param target Optional. The value to be used as the target (or name) parameter of the JavaScript window.open method. If no value is specified, _self is used.
	 * @param options Optional. The value to be used as the options (or specs) parameter of the JavaScript window.open method.<br>
	 * 		If no value is specified, the following options are used:<br>
	 * 		status=1, toolbar=1, location=1, menubar=1, directories=1, resizable=1, scrollbars=1
	 * 
	 * @returns A reference to the newly opened window, or NULL if no window was opened.
	 * @methodOf WL.App#
	 * @name WL.App#openURL
	 */
	this.openURL = function (url, target, options){};
	 
	 
	/**
	 * Overrides the default behavior of the Back button on Android, and Windows Phone 8.
	 * 
	 * @description 
	 * Overrides the default behavior of the Back button on Android, and Windows Phone 8 devices, calling the callback function whenever Back is pressed.
	 * @note {Note} This method applies to Android,and Windows Phone 8 only.
	 * 
	 * @example
	 * WL.App.overrideBackButton(backFunc);
	 * function backFunc(){
	 * 	alert('you hit the back key!');
	 * }
	 * @param callback Mandatory. Function. The function that is called when <b>Back</b> is pressed.
	 * @methodOf WL.App#
	 */
	this.overrideBackButton = function (callback){};
	 
	/**
	 * 
	 * Resets the original Back button behavior.
	 * @description Resets the original Back button behavior after it was changed by the overrideBackButton method.
	 * @note {Note} This method applies to Android, (deprecated in IBM&reg; Worklight&reg; V6.0.0), and Windows Phone 8 only.
	 * 
	 * @methodOf WL.App#
	 */
	this.resetBackButton = function (){}; 
	

	/**
     * @description Sends an action and optional data object to native action receivers. 
     * @note {Note} If there are no native action receivers registered, the action 
     * is queued until a native action receiver is registered. 
     * @param {String} action Custom string that represents an action. All receivers registered 
     * with the specified action receive the message.
     * @param data Optional parameter: custom JSON object containing key-value pairs.
     * @example {}
     * WL.App.sendActionToNative(“doSomething”);
     * WL.App.sendActionToNative(“doSomething”, { customData: 12345} );
     * @methodOf WL.App#
     * @name WL.App#sendActionToNative
     * 
     */
    this.sendActionToNative = function(action, data) {};

    /**
     * @description Registers an action receiver. 
     * @note {Note} In JavaScript code, a receiver must be implemented as a callback that can
     * receive an object.
     * @param {String} id. A string parameter used to uniquely identify receiver function, to be able 
     * to remove it at later stages.
     * @param {Function} callback Mandatory. The JavaScript function that is called by the 
     * Worklight framework when an action is sent from native code to JavaScript code.
     * @example {}
     * WL.App.addActionReceiver(“MyReceiver”, function (receivedActon){
     *	// process receivedAction
     * });
     * @methodOf WL.App#
     * @name WL.App#addActionReceiver
     */
    this.addActionReceiver = function (id, callback) {};

    /** 
     * @description Removes a previously added receiver. After this API is called, the receiver identified 
     * by receiverId no longer receives actions.
     * @param {String} id. A string parameter used to uniquely identify a previously 
     * registered receiver function.
     * @example {}
     * WL.App.removeActionReceiver(“MyReceiver”);
     * @methodOf WL.App#
     * @name WL.App#removeActionReceiver
     */
    this.removeActionReceiver = function (id) {};
};




/**
 * @name WL.NativePage
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 * @class
*/
__NativePage = function(){
	
	/**
 	 * Switches the currently displayed, web-based screen with a natively written page
	 * @param className Mandatory. String. The name of the native class. For iOS, the name of the class (for example, <code>BarCodeController</code>). 
	 * 		For Android, the complete name of the class and package (for example, <code>com.neebula.barcode.Scanner</code>). 
	 * @param callback Mandatory. Function. A function object that is called when the native page switches back to the web view. 
	 * 		This function is passed a single JSON object parameter when invoked.
	 * @param data Optional. Object. A JSON object that is sent to the native class. For iOS, The data must be single string or a flat record of strings.
	 
	 * @example 
	 * // Good
	 * WL.NativePage.show("com.scan.BarCode", function(data){alert(data);}, {key1 : 'value1'});
	 * WL.NativePage.show("com.scan.BarCode", function(data){alert(data);}, {key1 : 'value1', key2 : 'value2'});
	 *
	 * // Bad
	 * WL.NativePage.show("com.scan.BarCode", function(data){alert(data);}, {key1 : 'value1', innerStruct : {innerKey1 : 'innervalue1'}});
 	 *
 	 * @methodOf WL.NativePage#
	 * @name WL.NativePage#show
	 */
	this.show = function(className, callback, data){
		
	};
};

__WL.prototype.App = new __WLApp;
__WL.prototype.NativePage = new __NativePage;
		
		
		
	 	
		
		
	

