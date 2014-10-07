

/**
 * ================================================================= 
 * Source file taken from :: fipshttp.js
 * ================================================================= 
 */

/**
 * @license
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

var WL = WL || {};

WL._FIPSHttpImpl = (function (jQuery) {

    var $ = jQuery;
	var logger = WL.Logger.create({pkg: "wl.fipshttp"});
    var originalXMLHttpRequest = window.XMLHttpRequest;
    var _isFIPSEnabled = false;
    
    function ocXMLHttpRequest() {
        this.original = new originalXMLHttpRequest;
        if (window.XMLHttpRequest.isNormalizedObject) {
            this.original = new originalXMLHttpRequest();
        }
        else {
            this.original = new window.XMLHttpRequest();
        }
        this.handlers = [];
    }


    function FIPSHttpRequest() {
        return new ocXMLHttpRequest;
    }

    FIPSHttpRequest.isNormalizedObject            = true;

    FIPSHttpRequest.onreadystatechange            = null;
    FIPSHttpRequest.onopen                        = null;
    FIPSHttpRequest.onsend                        = null;
    FIPSHttpRequest.onabort                       = null;

	FIPSHttpRequest.prototype = ocXMLHttpRequest.prototype;

    FIPSHttpRequest.UNSENT                        = 0;
    FIPSHttpRequest.prototype.UNSENT              = FIPSHttpRequest.UNSENT;

    FIPSHttpRequest.OPENED                        = 1;
    FIPSHttpRequest.prototype.OPENED              = FIPSHttpRequest.OPENED;

    FIPSHttpRequest.HEADERS_RECEIVED              = 2;
    FIPSHttpRequest.prototype.HEADERS_RECEIVED    = FIPSHttpRequest.HEADERS_RECEIVED;

    FIPSHttpRequest.LOADING                       = 3;
    FIPSHttpRequest.prototype.LOADING             = FIPSHttpRequest.LOADING;

    FIPSHttpRequest.DONE                          = 4;
    FIPSHttpRequest.prototype.DONE                = FIPSHttpRequest.DONE;

    FIPSHttpRequest.prototype.priority            = "NORMAL";
    FIPSHttpRequest.prototype.readyState          = FIPSHttpRequest.UNSENT;
 
    FIPSHttpRequest.prototype.status              = 0;
    FIPSHttpRequest.prototype.statusText          = '';

    FIPSHttpRequest.prototype.responseText        = '';
    FIPSHttpRequest.prototype.responseXML         = null;

    FIPSHttpRequest.prototype.onreadystatechange  = null;


    FIPSHttpRequest.prototype.open = function(newMethod, newUrl, newAsync, newUser, newPass) {
        var lcMethod = newMethod.toLowerCase();
        if(lcMethod == "connect" || lcMethod == "trace" || lcMethod == "track") {
            throw new Error(18);
        }

        delete this.thisheaders;
        delete this.thismethod;
        delete this.thisurl;
        delete this.responseheaders;

        this.thisurl = newUrl;
        this.thismethod = newMethod.toUpperCase();

        if(arguments.length < 3) {
            newAsync = true;
        }

        var thisRequest = this;
        var currentState = this.readyState;
        if(FIPSHttpRequest.onopen) {
            FIPSHttpRequest.onopen.apply(this, arguments);
        }

        if(arguments.length > 4) {
            this.original.open(newMethod, newUrl, newAsync, newUser, newPass);
        }
        else if(arguments.length > 3) {
            this.original.open(newMethod, newUrl, newAsync, newUser);
        }
        else {
            this.original.open(newMethod, newUrl, newAsync);
        }

        this.readyState = FIPSHttpRequest.OPENED;
        stateChange(this);

        this.original.onreadystatechange = function() {
            thisRequest.readyState = thisRequest.original.readyState;
            synchronizeVariables(thisRequest);

            if(thisRequest.readyState == FIPSHttpRequest.DONE) {
                delete thisRequest._data;

                if (currentState != thisRequest.readyState) {
                    stateChange(thisRequest);
                }
                currentState  = thisRequest.readyState;
            }
        };
    };


    FIPSHttpRequest.prototype.abort = function() {
        if(FIPSHttpRequest.onabort) {
            FIPSHttpRequest.onabort.apply(this, arguments);
        }

        this.original.abort();
        this.readyState = FIPSHttpRequest.UNSENT;

        delete this._data;
    };


    FIPSHttpRequest.prototype.send = function(thisData) {
        if(FIPSHttpRequest.onsend) {
            FIPSHttpRequest.onsend.apply(this, arguments);
        }
 
        if(!arguments.length) {
            thisData = null;
        }

        if(thisData && thisData.nodeType) {
            thisData = window.XMLSerializer ? new window.XMLSerializer().serializeToString(thisData) : thisData.xml;
            if(!this.thisheaders["Content-Type"]) {
                this.original.setRequestHeader("Content-Type", "application/xml");
            }
        }
 
        this._data = thisData;
        sendData(this);
    };


    FIPSHttpRequest.prototype.setRequestHeader = function(headerName, headerValue) {
        if(!this.thisheaders) {
            this.thisheaders = {};
        }
        this.thisheaders[headerName] = headerValue;

        return this.original.setRequestHeader(headerName, headerValue);
    };


    FIPSHttpRequest.prototype.getResponseHeader = function(headerName) {
        if(this.responseheaders) {
            try {
                return this.responseheaders[headerName] || null;
            }
            catch(e) {
                return null;
            }
        }
        return this.original.getResponseHeader(headerName);
    };

 
    FIPSHttpRequest.prototype.getAllResponseHeaders = function() {
        if(this.responseheaders) {
            var headCnt = 0;
            var headStr = '';
            for(var i in this.responseheaders) {
                if(headCnt > 0) {
                    headStr = headStr + "\r\n";
                }
                headStr = headStr + i + ': ' + this.responseheaders[i];
                headCnt = headCnt + 1;
            }
            return headStr;
        }
        return this.original.getAllResponseHeaders();
    };


    FIPSHttpRequest.prototype.dispatchEvent = function(thisEvent) {
        var thisEventObj = {
            'type':             thisEvent.type,
            'target':           this,
            'currentTarget':    this,
            'eventPhase':       2,
            'bubbles':          thisEvent.bubbles,
            'cancelable':       thisEvent.cancelable,
            'timeStamp':        thisEvent.timeStamp,
            'stopPropagation':  function() {},
            'preventDefault':   function() {},
            'initEvent':        function() {}
        };

        if(thisEventObj.type == "DOMContentLoaded" && this.onreadystatechange) {
            (this.onreadystatechange.handleEvent || this.onreadystatechange).apply(this, [thisEventObj]);
        } else if(thisEventObj.type == "DOMContentLoaded" && this.onload) {
            (this.onload.handleEvent || this.onload).apply(this, [thisEventObj]);
        }

        for(var i = 0, thisListener; thisListener = this.handlers[i]; i++) {
            if(thisListener[0] == thisEventObj.type && !thisListener[2]) {
                (thisListener[1].handleEvent || thisListener[1]).apply(this, [thisEventObj]);
            }
        }
    };


    FIPSHttpRequest.prototype.addEventListener = function(thisName, thisHandler, useCapture) {
        for (var i = 0, thisListener; thisListener = this.handlers[i]; i++) {
            if(thisListener[0] == thisName && thisListener[1] == thisHandler && thisListener[2] == useCapture) {
                return;
            }
        }
        this.handlers.push([thisName, thisHandler, useCapture]);
    };


    FIPSHttpRequest.prototype.removeEventListener = function(thisName, thisHandler, useCapture) {
        for(var i = 0, thisListener; thisListener = this.handlers[i]; i++) {
            if(thisListener[0] == thisName && thisListener[1] == thisHandler && thisListener[2] == useCapture) {
                break;
            }
        }

        if (thisListener) {
            this.handlers.splice(i, 1);
        }
    };


    FIPSHttpRequest.prototype.toString  = function() {
        return '[' + "object" + ' ' + "FIPSHttpRequest" + ']';
    };


    FIPSHttpRequest.toString  = function() {
        return '[' + "FIPSHttpRequest" + ']';
    };


    FIPSHttpRequest.prototype.FIPSSendCallback = function(thisData) {
        logger.debug("FIPSHttpRequest.FIPSSendCallback");
        var i = thisData.indexOf("\r\n\r\n");
        var sep = [thisData.slice(0, i), thisData.slice(i+4)];
        var rawHead = sep[0];
        this.responseText = sep[1];
        var theseHeaders = {};

        sep = rawHead.split("\r\n");
        // If there was a response, parse it to get the headers and the status code.  For 
        // connection errors, the response will be the empty string.  In that case there will
        // be more information from FIPS and CURL in the device logs (iOS console, Android logcat).
        if (i !== -1) {
	        for(var header in sep) {
	            if(header == 0) {
	                var statusLine = sep[header];
	                var j = statusLine.indexOf(" ");
	                statusLine = statusLine.slice(j+1);
	                j = statusLine.indexOf(" ");
	                var statSplit = [statusLine.slice(0, j), statusLine.slice(j+1)];
	                this.status = parseInt(statSplit[0]);
	                this.statusText = statSplit[1];
	                logger.debug("FIPSHttpRequest.FIPSSendCallback status: " + this.status + 
	                    ", statusText: " + this.statusText);
	            }
	            else {
	                var j = sep[header].indexOf(": ");
	                var headSplit = [sep[header].slice(0, j), sep[header].slice(j+2)];
	                theseHeaders[headSplit[0]] = headSplit[1];
	            }
	        }
        } else {
        	logger.debug("FIPSHttpRequest.FIPSSendCallback: connection error.  Check device logs for more information");
        }

        this.responseheaders = theseHeaders;

        this.readyState = FIPSHttpRequest.DONE;
        this.dispatchEvent({
            'type':       "DOMContentLoaded",
            'bubbles':    false,
            'cancelable': false,
            'timeStamp':  new Date + 0
        });
    };

	function sendFIPSRequest(thisRequest) {
        logger.debug("FIPSHttpRequest.sendFIPSRequest to url: " + thisRequest.thisurl +
            ", method: " + thisRequest.thismethod);
        cordova.exec(function (msg) {
                        thisRequest.FIPSSendCallback(msg);
                   }, function (obj) {
                	   logger.error("FIPS HTTP send failed. Error is: " + obj.msg);
                   }, 'FIPSHttpPlugin', 'send',
                         [thisRequest.thisurl, thisRequest.thismethod, thisRequest.thisheaders, thisRequest._data]);
    }


	function sendData(thisRequest) {
        var enableFIPS = _isFIPSEnabled;
        if(typeof enableFIPS === 'undefined' || enableFIPS === false) {
           thisRequest.original.send(thisRequest._data);
        } else if(thisRequest.thisurl.indexOf("gap_exec") !== -1){
           thisRequest.original.send(thisRequest._data);
        } else if ((thisRequest.thisurl.indexOf("http:") == -1) && (thisRequest.thisurl.indexOf("https:") == -1)) {
            thisRequest.original.send(thisRequest._data);
        } else if(thisRequest.thismethod === "GET" || thisRequest.thismethod === "POST") {
            sendFIPSRequest(thisRequest);
        } else {
            thisRequest.original.send(thisRequest._data);
        }
	}


    function stateChange(thisRequest) {
        if (FIPSHttpRequest.onreadystatechange){
            FIPSHttpRequest.onreadystatechange.apply(thisRequest);
        } else if (FIPSHttpRequest.onload) {
            FIPSHttpRequest.onload.apply(thisRequest);
        }

        thisRequest.dispatchEvent({
            'type':         "DOMContentLoaded",
            'bubbles':      false,
            'cancelable':   false,
            'timeStamp':    new Date + 0
        });
    }


    function synchronizeVariables(thisRequest) {
        try { thisRequest.responseText  = thisRequest.original.responseText;    } catch (e) {}
        try { thisRequest.responseXML   = thisRequest.original.responseXML;     } catch (e) {}
        try { thisRequest.status        = thisRequest.original.status;          } catch (e) {}
        try { thisRequest.statusText    = thisRequest.original.statusText;      } catch (e) {}
    }

    function _enable() {
    	// This script is injected into all environments, but
    	// is applicable to Android and IOS only (WL 6.1) when
    	// cordova is present.
    	//
    	// FIPS is only enabled when native libs supporting the feature
    	// are also present.  The native cordova plugin will tell us
    	// if the developer turned on the FIPS 140-2 optional feature.

        var deferred = $.Deferred();

    	if (WL.Client.getEnvironment() === 'iphone' ||
    			WL.Client.getEnvironment() === 'ipad' ||
    			WL.Client.getEnvironment() === 'android') {
    		// we set the window.XMLHttpRequest override before the Cordova success callback because other
    		// users of window.XMLHttpRequest may get an instance before Cordova returns.
    		window.XMLHttpRequest = FIPSHttpRequest;
			_isFIPSEnabled = true;
    		cordova.exec(function() {
                var resObj = {enabled: true};
    			logger.debug("FIPS successfully enabled");

                setTimeout(function () {
                    deferred.resolve(resObj);
                }, 0);

    		}, function(obj) {
                var resObj = {enabled: false, msg: obj.msg};
    			window.XMLHttpRequest = originalXMLHttpRequest;
    			_isFIPSEnabled = false;
    			logger.error("FIPS could not be enabled.  Error is: " + obj.msg);

                setTimeout(function () {
                    deferred.reject(resObj);
                }, 0);

    		}, 'FIPSHttpPlugin', 'enable', []);
    	}

        return deferred;

    }
	
	return {
		_enable : _enable,
		_state : function() { return { isFIPSEnabled : _isFIPSEnabled }; }
	};

})(WLJQ);