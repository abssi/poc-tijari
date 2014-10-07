/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @class
 * <p>The simple dialog box object.<br />
 * <code>WL.SimpleDialog</code> implements a common API for showing a dialog with buttons for the application. 
 * 	The implementation depends on the environment. On iPhone, Android, BlackBerry 6 and 7, and Windows 8, <code>WL.SimpleDialog</code> opens a native dialog box. In other environments, it opens an HTML dialog box.<br />
 * 	<code>WL.SimpleDialog</code> supports up to three buttons.
 * </p>
 * @name WL.SimpleDialog 
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 *
*/
__SimpleDialog = function(){
 
	/**
	 * Displays a dialog box.
	 * @note {Note}  The dialog is displayed without blocking the JavaScript thread.
	 * @param title Mandatory string. The title of the dialog box.
	 * @param text Mandatory string. The text to show in the dialog box.
	 * @param buttons Mandatory array of JSON objects, each corresponding to a button. The array must have at least one item and no more than three items. Each array item contains the following properties:<br />
	 * 		<p class="heading">text</p>
	 * 		<p> Mandatory string. The text of the button.</p>
	 * 		<p class="heading">handler</p>
	 * 		<p> Optional function. The function that is invoked when the button is pressed.</p>
	 * @param options Ignored on iPhone and Android.<br />
	 * 			Optional. An object of the following form:
	 * <p class="code">
	 * {
	 *	title: string,
	 *	text: string,
	 * }
	 * </p>
	 * @example 
	 * WL.SimpleDialog.show(
	 * 	"My Title", "My Text", 
	 * 	[{text: "First Button", handler: function() {WL.Logger.debug("First button pressed"); }}]
	 * );
	 *@methodOf WL.SimpleDialog#
	 *@name WL.SimpleDialog#show
	 */
	this.show = function (title, text, buttons, options) { };
	
};

__WL.prototype.SimpleDialog = new __SimpleDialog; 