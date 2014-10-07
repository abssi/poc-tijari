/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
/**
 * @class 
 * IBM&reg; Worklight&reg; supplies a number of methods for manipulating the Android options menu and the Windows Phone 8, and Windows 8 apps application bar.<br />
 * This section applies to Android, Windows Phone 8, and Windows 8 apps only.<br />
 * The Android options menu and the Windows Phone 8, and Windows 8 apps application bar are accessible by pressing Menu on the device. IBM Worklight provides a client-side API for managing the menu and application bar.
 * @note {Note}  If your application targets Android 3.0 (API level 11) or higher, <b>WL.OptionsMenu</b> might have no effect, depending on the device. For more information, see <a href="http://developer.android.com/guide/topics/ui/menus.html#options-menu">Creating an Options Menu in Android</a>.
 * @name WL.OptionsMenu
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__WLOptionsMenu = function(){

	/**
	 * Adds an item to the options menu or application bar.
	 * @description Adds an item to the options menu or application bar. Can be called only after the menu is initialized. 
	 * 		Items are placed in the menu in the order in which they are added. If you add an item with an existing ID, the new item replaces the existing one.
	 * @param id Mandatory string. Identifies the item. 
	 * @param callbackFunction Mandatory JavaScript function. The callback function that is invoked when the user selects the item in the options menu.
	 * @param title Mandatory string. The title of the item.
	 * @param options The <code>options</code> parameter is mandatory, and the image property within it is also mandatory. Contains the following fields:<br />
	 * 			<ul>
	 * 				<li><b>image</b><br />
	 * 					For Android, this field contains the name of the resource that contains the icon image for the item. For Windows Phone 8, and Windows 8, this field contains the path to the icon image for the item.<br /> 
	 * 					For Android, the image is located under the Android res/drawable* folders of the application. You can provide multiple images and place them in the drawable* folders that belong to the device densities your application supports.<br />
	 * 					For Windows Phone 8, the path starts from the folder <code>/nativeResources/applicationBar</code>. Do not explicitly mention this folder within the path.<br />
	 * 					For and Windows 8, the path starts from the folder <code>/Resources/applicationBar</code>. Do not explicitly mention this folder within the path.<br />
	 * 					The same set of images can be used for Android, Windows Phone 8, and Windows 8.<br />
	 * 					For Android, the image size depends on the density of the device. See the Android Options Menu documentation for details.<br />
	 * 					For Windows Phone 8, these images are 48 pixels by 48 pixels and have a white foreground on a transparent background that uses an alpha channel. 
	 * 					The Application Bar colorizes the icon according to the current style settings and colored icons can cause this effect to display unpredictably.<br />
	 * 					For Windows 8, the image size is 160x80 pixel png sprite image with a transparent background. This sprite is divided into two rows of four columns, that is, 40x40 pixel cells (Each image is centered in its respective 40x40 cell). 
	 * 					The 1st row is the normal button state, and the 2nd row is the toggled/selected state for toggle buttons.  (If you don't use a toggle button with the image, you don't need the 2nd row).  
	 * 					The columns are the rest, hover, active (pressed), and disabled states.
	 * 				</li>
	 * 				<li><b>Enable</b><br />
	 * 				Optional Boolean. Defines whether the item is enabled or disabled.
	 * 				</li>
	 * 			</ul>
	 * @example 
	 * // Android
	 * WL.OptionsMenu.addItem("first", function(){alert("hello one");}, 'one', {image: 'one.png', enabled: true});
	 * 
	 * // Windows Phone 8
	 * WL.OptionsMenu.addItem("first", function(){alert("hello one");}, one', {image: one.png', enabled: true});
	 * 
	 * // Windows 8
	 * WL.OptionsMenu.addItem("first", function(){alert("hello one");}, one', {image: one.png', enabled: true});
	 * @methodOf WL.OptionsMenu#
	 * @name WL.OptionsMenu#addItem
	 */
	this.addItem = function(id, callbackFunction, title, options){
	};
	/**
	 * Returns an item.
	 * @description Returns the item with the specified ID. You can use <code>Item</code> methods to change the properties of the item.
	 * @param id Mandatory string. The ID of the required item.
	 * @returns An Item object. If the specified ID is not found, the method returns null.<br />
	 * 			<code>var itemOne = WL.OptionsMenu.getItem('first');</code>
	 * 
	 * @methodOf WL.OptionsMenu#
	 */
	this.getItem = function(id){
	};
	
	/**
	 * Initializes and enables the options menu or application bar.
	 * @description Initializes the options menu or application bar and enables it. Must be called before it is used. 
	 * 			On Windows Phone 8, the default opacity of the application bar is 1.0 (opaque).
	 * @param options A JSON block. Options for customizing the options menu init state opcaity - a decimal
     *                number between 0.0 and 1.0 that represents the opacity factor. 1.0 is fully opaque, 0.0
     *                is fully transparent. 
     * @note {Note} JSON block is applicable only for Windows Phone 8. Default value of opacity is 1.0.
     * @example WL.OptionsMenu.init({opacity: 0.5});
	 * @methodOf WL.OptionsMenu#
	 * @name WL.OptionsMenu#init
	 */
	this.init = function(options){
	};
	
	/**
	 * Check whether the options menu or application bar is enabled.
	 * @description Returns whether the options menu or application bar is enabled. Can be called only after the menu is initialized.
	 * @param callback a callback method that accepts the state enabled as a parameter.
	 * @returns <ul>
	 * 				<li>In Android environments: true if the menu is enabled; <code>false</code> if it is not.</li>
	 * 				<li>In Windows Phone 8 environments: none. If the callback is null or undefined, the method fails and sends a message to the debugger console.</li>
	 * 			</ul>
	 * @example
	 * WL.OptionsMenu.isEnabled(isEnabledCallback);
	 * 
	 * function isEnabledCallback(enabled) {
	 * 	if (enabled) {
	 * 		// do something
	 * 	}
	 * } 
	 * 
	 * @methodOf WL.OptionsMenu#
	 */
	this.isEnabled = function(callback){
	};
	
	/**
	 * Remove an item from the options menu or application bar.
	 * @description Removes the item with the indicated ID from the options menu or application bar. Can be called only after the menu is initialized.<br />
	 * 		If no item is found with the specified ID, nothing happens.
	 * @param id Mandatory string. Identifies the item to be removed. 
	 * @methodOf WL.OptionsMenu#
	 */
	this.removeItem = function(id){
	};
	
	/**
	 * Removes all items from the options menu or application bar.
	 * @description Removes all items from the options menu or application bar. Can be called only after the menu is initialized.
	 * @methodOf WL.OptionsMenu#
	 */
	this.removeItems = function(){
	};
	/**
	 * Enable or disable the options menu or application bar.
	 * @description This method enables or disables the options menu or application bar. When the menu or bar is disabled, it might still be visible, but all its items are disabled. 
	 * 			The function disables all the items but does not change the enabled state of each Item.
	 * @param Mandatory Boolean. <br />
	 * 				<ul>
	 * 					<li> <code>true: </code> Enable the menu</li>
	 * 					<li> <code>false: </code> Disable the menu</li>
	 * 				</li>
	 * 		
	 * @methodOf WL.OptionsMenu#
	 */
	this.setEnabled = function(isEnabled){
	};
	
	/**
	 * Sets the opacity of the Windows Phone 8 application bar.
	 * @description Sets the value for the application bar opacity.
	 * @param number Mandatory. Float between 0.0 and 1.0. 0.0 is transparent; 1.0 is opaque.<br />
	 * 			When the application bar is not opaque, Windows Phone 8 devices display it as an overlay on the application. 
	 * @note {Note} This method is applicable only for the Windows Phone 8 application bar.
	 * @methodOf WL.OptionsMenu#
	 */
	this.setOpacity = function(number){
	};
	
	/**
	 * Make the options menu or application bar visible or invisible.
	 * @description Determines whether the options menu or application bar is visible. Can be called only after the options menu is initialized. 
	 * @param number Mandatory Boolean. 
	 * 				<ul>
	 * 					<li> <code>true: </code> Makes the menu visible on pressing <b>Menu</b></li>
	 * 					<li> <code>false: </code> Makes the menu invisible</li>
	 * 				</li>
	 * @note {Note}  This method is not supported on Windows 8.
	 * @methodOf WL.OptionsMenu#
	 * @name WL.OptionsMenu#setVisible
	 */
	this.setVisible = function(isVisible){
	};
};

__WL.prototype.OptionsMenu = new __WLOptionsMenu;