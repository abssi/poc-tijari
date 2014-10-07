/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */


WL.BusyIndicator = Class.create();
WL.BusyIndicator.prototype = {
    /**
     * @class
     * <p>
     * Display an indication that the application is busy.<br />
     * Use the <code>WL.BusyIndicator</code> object to display a modal, dynamic graphical image when the application is temporarily "busy", that is, not responsive to user input.
     * </p>
     * <p>
     * <code>WL.BusyIndicator</code> is implemented natively in the following environments: iOS, Android, Windows Phone 8 and Windows 8. For a list of available options, review the Constructor Details section below.<br />
     * WL.BusyIndicator is implemented using JavaScript in the remaining environments: Mobile Web, Desktop Browser, BlackBerry 6/7/10 and preview. <br />
     * To change the appearance of the busy indicator in these environments, override the following CSS selectors:  <code> #WLbusyOverlay, #WLbusy, and #WLbusyTitle</code>.
     * </p>
     * 
	 * <dl class="detailList">
	 * 		<dt class="heading">Showing and Hiding the Busy Indicator</dt>
	 * 		<dd>Methods of WL.BusyIndicator<br />
	 * 			After the indicator is instantiated with a constructor:<br />
	 * 				<code>var busyInd = new WL.BusyIndicator ("content", {text: "Please wait..."});</code><br />
	 * 			<br />
	 * 			You can use the following functions to show and hide the busy indicator: <br />
	 * 				 <code>busyInd.show();<br>
	 * 					   busyInd.hide();</code><br />
	 * 			<br />
	 * 			To test whether the busy indicator is visible: <code> if(busyInd.isVisible()) {...};</code><br />
	 * 		</dd>
	 * </dl>
     * @param containerId - Optional string. The name of the HTML element in which the indicator is displayed. 
	 * 		The indicator is centered horizontally and vertically within the element. If not provided or null, the element with ID 'body' is used.<br />
	 * 		Not relevant where the busy indicator is implemented natively, that is, on iOS, Android, Windows Phone 8, and Windows 8; however, even if not relevant, you must add this parameter if you also use the options parameter.<br />
     * @param options Optional. A JSON hash object. See details in the following section.<br />
	 * 		<p class="heading"> Options for iPhone </p>
	 * 			<b>text: </b> String <br />
	 * 			<b>bounceAnimation: </b> Boolean. Show a bounce animation when the busy indicator is displayed. Default: false. <br />
	 * 			<b>opacity: </b> Float. Number in the range 0 - 1. <br />
	 * 			<b>textColor: </b> String. Color name or color notation, such as "00FF00" or "green". Default: white. <br />
	 * 			<b>strokeOpacity: </b> Float.<br />
	 * 			<b>fullScreen: </b> Boolean. Show the overlay over the entire screen. Default: false.<br />
	 * 			<b>boxLength: </b> Float. Height and width of the overlay, when fullScreen is false. <br />
	 * 			<b>duration: </b> Double. Duration in seconds.<br />
	 * 			<b>minDuration: </b> Integer. Minimum duration in seconds. <br />
	 * 		<p class="heading">Options for Windows Phone 8</p>
	 * 			None.
	 * 		<p class="heading">Options for Other Environments</p>
	 * 			<b>text: </b> String.<br />
	 * @name WL.BusyIndicator
	 * @ilog.undocumented.jsFile
     */
    initialize : function (containerId, options){
    },
    
    /**
	 *To show the busy indicator.
	 *To test whether the busy indicator is visible:
	 *@example if (busyInd.isVisible()) {...};
	 *@methodOf WL.BusyIndicator#
	 *@name WL.BusyIndicator#show
	 */
    show : function (){
    },
    
    /**
	 *To hide the busy indicator.
	 *To test whether the busy indicator is visible:
	 *@example if (busyInd.isVisible()) {...};
	 *@methodOf WL.BusyIndicator#
	 *@name WL.BusyIndicator#hide
	 */
    hide : function (){
    }
};	