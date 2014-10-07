/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/**
 * wlcommon contains code which is used by widgets and welcome pages. 
 *  
 * @author Itai Erner
 * @requires busy.js
 * @requires xilinus/window.js 
 */
 
/*
 * Validators are responsible for validating method arguments in development mode.
 */
WL.Validators = {
    // Validation should be disabled by default - so Welcome pages do not validate in production.
    // If we want validation for the welcome page we must add a solution to turn it off in production.
    isValidationEnabled : false,

   	// True when 'o' is set, the native JavaScript event is defined, and 'o' has an event phase   
    isEvent : function (obj){
    	return obj && obj.type;
    },
       		
    logAndThrow : function (msg, callerName){
        // Logger is not be available in public resources (welcome page).
        if (WL.Logger){ 
        	if (callerName){
        		msg = "Invalid invocation of method " + callerName + "; " + msg;
        	}
            WL.Logger.error(msg);
        }
        throw new Error(msg);
    },

    enableValidation : function (){
        this.isValidationEnabled = true;    
    },

    disableValidation : function () {
        this.isValidationEnabled = false;
    },

    validateArguments : function (validators, args, callerName) {
        if (validators.length < args.length){
        	// More arguments than validators ... accept only if last argument is an Event.
        	if ((validators.length !== (args.length - 1)) || 
        	     ! this.isEvent(args[args.length - 1])){
				this.logAndThrow("Method was passed " + args.length + " arguments, expected only " + validators.length + " " + Object.toJSON(validators) + ".", callerName);        		        		
        	}            
        }
        this.validateArray(validators, args, callerName);
    },

    /*
     * Validates each argument in the array with the matching validator.
     * @Param array - a JavaScript array.
     * @Param validators - an array of validators - a validator can be a function or 
     *                     a simple JavaScript type (string).
     */
    validateArray : function (validators, array, callerName){
        if (! this.isValidationEnabled){
            return;
        }
        for (var i = 0; i < validators.length; ++i ){
            this.validateArgument(validators[i], array[i], callerName);
        }
    },

    /*
     * Validates a single argument.
     * @Param arg - an argument of any type.
     * @Param validator - a function or a simple JavaScript type (string).
     */
    validateArgument : function (validator, arg, callerName){
        if (! this.isValidationEnabled){
            return;
        }
        switch (typeof validator){
            // Case validation function.
            case 'function':
                 validator.call(this, arg);
                 break;                
            // Case direct type. 
            case 'string':
                if (typeof arg !== validator){
                    this.logAndThrow("Invalid value '" + Object.toJSON(arg) + "' (" + (typeof arg) + "), expected type '" + validator + "'.", callerName);
                }
                break;
            default:
                // This error can be caused only if worklight code is bugged.
                this.logAndThrow("Invalid or undefined validator for argument '" + Object.toJSON(arg) + "'", callerName);
        }            
    }, 

    /*
     * Validates that each option attribute in the given options has a valid name and type.
     * @Param options - the options to validate.
     * @Param validOptions - the valid options hash with their validators:
     * validOptions = {
     *        onSuccess : 'function',
     *        timeout : function(value){...}
     * }
     * 
     */
    validateOptions : function (validOptions, options, callerName){
        if (! this.isValidationEnabled || typeof options === 'undefined'){
            return;
        }
        for (var att in options){
            // Check that the attribute exists in the validOptions.
            if (! validOptions[att]){
                this.logAndThrow("Invalid options attribute '" + att + "', valid attributes: " + Object.toJSON(validOptions), callerName);
            }
            try {
                // Check that the attribute type is valid.
                this.validateArgument(validOptions[att], options[att], callerName);
            }
            catch (e){
                this.logAndThrow("Invalid options attribute '" + att + "'. " + (e.message || e.description), callerName);
            }
        }    
    },

    validateStringOrNull : function (arg, callerName) {
        if (! this.isValidationEnabled){
            return;
        }        
        if ((typeof arg !== 'undefined') && (arg !== null) && (typeof arg !== 'string')){            
            this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'string'.", callerName);
        }
    }
};
 

/**
 * A Wrapper for a javascript dialog 
 * The current implementation uses xilinus dialog, http://prototype-window.xilinus.com/download.html
 * 
 * required libraries:
 * 
 * 
 * @author Benny Weingarten
 * @require xilinus/debug.js
 * @require xilinus/effects.js
 * @require xilinus/extended_debug.js
 * @require xilinus/tooltip.js
 * @require xilinus/window_effect.js
 * @require xilinus/window_ext.js
 * @require xilinus/window.js
 */
WL.Dialog = Class.create();
WL.Dialog.prototype = {
        
    __SPACE_MARGIN : 30,
    __dialog : null,
    __options : {
        closable : true,
        type     : "alphacube",
        title    : "alert",
        text     : "",
        contentElement : null,
        height   : 150,
        width    : -1,
        zIndex   : 1000,
        resizable: false, 
        draggable: true,
        opacity  : 1,
        destroyOnClose: true
    },
    
    /**
	 * The constructor creates the dialog but does not display it. You must call
	 * the hide() method to display the dialog.
	 * 
	 * @param containerId
	 *            Mandatory. The name of the HTML element in which the dialog
	 *            should be displayed. The dialog will be centered horizontally
	 *            and vertically within the element.
	 * 
	 * @param options
	 *            Optional. An object of the following form: { closable:
	 *            Boolean, title: string, text: string, contentElement: object,
	 *            height: number, width: number, resizable: Boolean, draggable:
	 *            Boolean, destroyOnClose: Boolean }
	 */
    initialize: function(containerId, options) {
        WL.Validators.validateOptions({
            closable : 'boolean',
            type     : 'string',
            title    : 'string',
            text     : 'string',
            contentElement : 'object',
            height   : 'number',
            width    : 'number',
            zIndex   : 'number',
            resizable: 'boolean', 
            draggable: 'boolean',
            opacity  : 'number',
            destroyOnClose: 'boolean'            
        }, options, 'new WL.Dialog');
        
        Object.extend(this.__options, options || {});
        
        var container = $(containerId);

        // calculate the dialog's width, if not specified
        if (this.__options.width < 0) {
            this.__options.width = container.getWidth() - this.__SPACE_MARGIN;
        }
        
        // All options are documented in http://prototype-window.xilinus.com/documentation.html
        __dialog = new WL.XilinusWindow({
            className: this.__options.type, 
            width:  this.__options.width,
            height: this.__options.height, 
            title:  this.__options.title,
            zIndex: this.__options.zIndex,  
            closable : this.__options.closable,
            resizable: this.__options.resizable, 
            draggable: this.__options.draggable,
            opacity:   this.__options.opacity, 
            minimizable: false,
            maximizable: false,
            wiredDrag:   false,
            parent: container, 
            destroyOnClose: this.__options.destroyOnClose});
                                
        if (this.__options.contentElement !== null) {
            this.setContentElement(this.__options.contentElement);
        } else {
            this.setText(this.__options.text);
        }
    },
    
    /**
     * Sets the title of the dialog.
     * @param titleText the title of the dialog.
     */
    setTitle : function (titleText) {
        __dialog.setTitle(titleText);                        
    },
    
    /**
     * Sets text within the dialog.
     * @param text text within the dialog.
     */
    setText : function (text) {
        __dialog.setHTMLContent(text);                        
    },

    /**
     * Specify an HTML element to be displayed within the dialog.
     * @param contentElement an HTML element to be displayed within the dialog.
     */
    setContentElement : function (contentElement) {
        __dialog.setContent(contentElement, false, false);
    },
    
    /**
     * Shows the dialog.
     */
    show : function() {
        __dialog.showCenter();
    },

    /**
     * Hides the dialog.
     */
    hide : function() {
        __dialog.hide();
    },

    /**
     * Destroys the dialog.
     */
    destroy : function() {
        __dialog.destroy();
    }
};


/**
 * Browser Detect
 * <p>
 * 
 * you can query three properties of the BrowserDetect object:<br>
 * Browser name: BrowserDetect.browser<br>
 * Browser version: BrowserDetect.version<br>
 * OS name: BrowserDetect.OS<br>
 * <p>
 * Copied from: http://www.quirksmode.org/js/detect.html
 */
WL.BrowserDetect = {
    init: function () {
        // Browser Data
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || 
                       this.searchVersion(navigator.appVersion)|| 
                       "an unknown version";

        // OS Version
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
                 
        this.isWindows7 = this.OS === "Windows" && this.versionSearchString === "6.1";
        this.isVista    = this.OS === "Windows" && this.versionSearchString === "6.0";
        this.isXP       = this.OS === "Windows" && this.versionSearchString === "5.1";
        this.isExplorer = this.browser === "Explorer";
        this.isFirefox  = this.browser === "Firefox";
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++)    {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) !== -1){
                    return data[i].identity;
                }
            }
            else if (dataProp){
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1){
             return;
        }
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {     string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {        // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {         // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS : [
        {
            string: navigator.userAgent,
            subString: "Windows NT 6.1",
            versionSearch : "6.1",
            identity: "Windows"
        },
        {
            string: navigator.userAgent,
            subString: "Windows NT 6.0",
            versionSearch : "6.0",
            identity: "Windows"
        },
        {
            string: navigator.userAgent,
            subString: "Windows NT 5.1",
            versionSearch : "5.1",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
               string: navigator.userAgent,
               subString: "iPhone",
               identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]

};
WL.BrowserDetect.init();