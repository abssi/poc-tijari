/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @class
 * When an app moves to the background,  iOS keeps a snapshot of the app window, to facilitate a smoother transition back to the foreground. 
 * This class provides API to handle the background/foreground events that the user can use to disable the snapshot, and therefore prevent any sensitive data from being stored on the device.
 * @name WL.App.BackgroundHandler
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
*/
__BackgroundHandler = function(){

	/**
	 * Defines the behavior of the application before it enters the background.
	 * @description Defines the behavior of the application just before iOS takes a screen capture of it before moving it to the background.
	 * @note {Note} Applies for iOS 4 and above.
	 *   	
	 *    
	 *  @example  Use hideView
	 * <p class="code">
	 * //Example 1: 
	 * // CSS
	 * &lt;span id="moneyInTheBank" class="WLHideOnEnteringBackground"&gt;
	 * ...
	 * &lt;/span&gt;
	 * // JavaScript
	 * WL.App.BackgroundHandler.setOnAppEnteringBackground(
	 * WL.App.BackgroundHandler.hideView
	 * );
	 *  
	 * //Example 2: 
	 * // JavaScript
	 * WL.App.BackgroundHandler.setOnAppEnteringBackground(myFunc);
	 * 
	 * </p>
	 *  
	 * @param handler Function. The function that is called when the event is received from iOS that the application is about to enter background. Values:
	 * <ul>
	 * 			<li><b>WL.App.BackgroundHandler.defaultIOSBehavior</b><br />
	 * 				Uses the default behavior of iOS (which is equivalent to not doing anything).</li>
	 *			<li><b>WL.App.BackgroundHandler.hideView</b><br />
	 *				Hides the app view - prevents iOS from taking a snapshot.</li>
	 *			<li><b>WL.App.BackgroundHandler.hideElements (deprecated)</b><br />
	 *				Hides all HTML elements that have the style WLHideOnEnteringBackground.
	 *				This function is deprecated since IBM&reg; Worklight&reg; V6.0.0. Instead, use WL.App.BackgroundHandler.hideView to hide the current view.</li>
	 *     		<li><b>Custom function</b></li>
	 * </ul>
	 * @methodOf WL.App.BackgroundHandler#
	 */
 	this.setOnAppEnteringBackground = function(handler) {};
 	
 	/**
 	 * Defines the behavior of the application just before it enters the foreground. 
	 * @param handler Mandatory. Function. The function that is called when the event is received from iOS that the application is about to enter foreground. Values:
	 * <ul>
	 * 	<li><b>WL.App.BackgroundHandler.hideViewToForeground </b><br>
	 * 		Shows the app view (so that it will be visible when the app enters foreground). Default value.	 *
	 *  <li><b> Custom function </b><br>
	 *  	If "WL.App.BackgroundHandler.hideView" was used as the background handler, the custom function must return "WL.App.BackgroundHandler.hideViewToForeground()" (otherwise, the app view will be hidden when it moves to the foreground).
	 *  </li>	
	 * </ul>
	 * 
	 * @example 
	 * <code>
	 * //Example 1: 
	 * WL.App.BackgroundHandler.setOnAppEnteringForeground(myFunc);
	 * <p>
	 * 
	 * //Example 2: 
	 * // JavaScript 
	 * // Passing a custom function to setOnAppEnteringForeground() after hiding the view 
	 * WL.App.BackgroundHandler.setOnAppEnteringBackground(WL.App.BackgroundHandler.hideView);
	 * WL.App.BackgroundHandler.setOnAppEnteringForeground( function (){
	 *                    // run some code
	 *                    return WL.App.BackgroundHandler.hideViewToForeground();          
	 *  }); 
	 *  </code>
	 * @note {Note} Applies for iOS 4 and later. 
	 * 
 	 * @methodOf WL.App.BackgroundHandler#
	 */
 	this.setOnAppEnteringForeground = function(handler) {};
};

/**
 * @name WL.Badge
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 * @class
*/
__Badge = function(){
	
	/**
 	 * Sets the application badge to the number provided.
	 * @description Sets the application badge to the number provided.
	 * @note {Note} This object is only applicable to iOS and Windows Phone 8 applications.
	 * 
	 * 
	 * @param number Mandatory. Integer. An integer that is displayed as a badge over the application icon. 
	 * 		For iOS, a value lesser than or equal to 0 removes the application badge. Values that are too long (5 digits, or more) to be entirely  displayed in an iPhone device are truncated with ellipsis.
	 *      For Windows Phone 8, a value lesser than or equal to 0 removes the application badge. A number greater than 99 sets the tile count to 99.
	 * 
 	 * @methodOf WL.Badge#
	 */
	this.setNumber = function(number){
		
	};
};


__WL.prototype.App.BackgroundHandler = new __BackgroundHandler;
__WL.prototype.Badge = new __Badge;