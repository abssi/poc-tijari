/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/**
 * @class 
 * <p>Module that wraps various loggers in order to provide a unified interface for logging that works in every environment.</p>
 *
 * <p>In most environments <code>console.debug</code>, <code>console.log</code>, <code>console.info</code>, 
 * <code>console.warn</code> and <code>console.error</code> are wrapped. The Android environment uses a cordova 
 * plugin that calls the native Android logger, log messages are shown in logcat with the appropiate colors. 
 * In the Adobe Air environment <code>air.Introspector.Console</code> is used, log messages are shown in Adobe 
 * Air Introspector if enabled. The BlackBerry environment will try to use the console methods and fallback to 
 * <code>worklight.utils.log</code> which implements a BlackBerry compatible logger.</p>
 * 
 * <p>Provides various features such as:</p> 
 *
 *<ul><li>Package names.</li> 
 * <li>Filtering by log level, package names using black or white lists.
 * <li>Log instances.</li>
 * <li>Multiple argument support.</li>
 * <li>Callback for doing work after a log message has been sent to the console.</li> 
 * <li>And others.</li>
 *
 * @example
 * //The logger is configured inside initOption.js, example configuration:
 * // ...
 * //logger : {enabled: true, level: 'debug', stringify: true, pretty: false,
 * //      tag: {level: false, pkg: true}, whitelist: [], blacklist: []},
 * // ... 
 *
 * //Make sure the MyNamespace variable exists.
 * var MyNamespace = MyNamespace || {};
 *
 * //Define a module using the Module Pattern
 * MyNamespace.MyModule = (function () {
 *
 *   //Create a logger "instance" specific to this module.
 *   //This is the recommended approach for logging.
 *   var logger = WL.Logger.create({pkg: 'mynamespace.mymodule'});
 *
 *   //Example usage:
 *   logger.trace('trace', 'another mesage');
 *	 logger.debug('debug', [1,2,3], {hello: 'world'});
 *   logger.log('log', 'another message');
 *   logger.info('info', 1, 2, 3);
 *   logger.warn('warn', undefined);
 *   logger.error('error', new Error('oh no'));
 *   logger.fatal('fatal', 'another message');
 *  
 *
 * }());
 *
 * //Alternatively, you can use the "static" version.
 * //You probably want to use variables instead of duplicating 
 * //the package name and other good programming practices.
 * //This is the recommended approach if you don't have modules.
 * WL.Logger.ctx({pkg: 'wl.whatever'}).trace('trace', 'another message');
 * WL.Logger.ctx({pkg: 'wl.whatever'}).debug('debug', [1,2,3], {hello: 'world'});
 * WL.Logger.ctx({pkg: 'wl.whatever'}).log('log', 'another message');
 * WL.Logger.ctx({pkg: 'wl.whatever'}).info('info', 1, 2, 3);
 * WL.Logger.ctx({pkg: 'wl.whatever'}).warn('warn', undefined);
 * WL.Logger.ctx({pkg: 'wl.whatever'}).error('error', new Error('oh no'));
 * WL.Logger.ctx({pkg: 'wl.whatever'}).fatal('fatal', 'another message');
 *
 * //Alternatively, you do not have to pass a context.
 * //This is the least recommended approach.
 * WL.Logger.trace('trace', 'another message');
 * WL.Logger.debug('debug', [1,2,3], {hello: 'world'});
 * WL.Logger.log('log', 'another message');
 * WL.Logger.info('info', 1, 2, 3);
 * WL.Logger.warn('warn', undefined);
 * WL.Logger.error('error', new Error('oh no'));
 * WL.Logger.fatal('fatal', 'another message');
 *
 * @name WL.Logger
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__WLLogger = function(){
	/**
   *
   * @deprecated since version 6.2. WL.Logger.on is now a NOP. WL.Logger is always enabled.
   *	Use WL.Logger.config with {'level': 'FATAL'} to reduce verbosity.
	 * 
	 * @returns {this} Returns the current instance.
	 * 
	 * @methodOf WL.Logger#
	 */
	this.on = function (options) {};

	/**
	 *
	 * Configures the logger.
	 *
	 * @example
	 * WL.Logger.config()
	 *
	 * Merge the passed object parameter with the current configuration, which can be retrieved using WL.Logger.status()
	 *
	 * @param {object} [object] Defines the logger's behavior.
	 * @param {boolean} [options.stringify] Turns arguments to strings and concatenates them (<code>true</code>) or leaves arguments as an array (<code>false</code>). Default is true.
	 * @param {function} [options.callback] Called after a log message is sent to the console with the following parameters:<br />
	 * 					<ul>
	 * 						<li><code>message (string or array)</code> The log message. String if <code>stringify</code> is true, array otherwise.</li>
	 * 						<li><code>priority (string)</code> Log priority.</code>
	 * 						<li><code>package (string)</code> Package that is associated with the log or empty string.</li>
	 * 					</ul>
	 * @param {string} [options.pkg] Associates log messages with a package. By default does not associate (includes an empty string).
	 * @param {object} [options.tag] Contains keys: <code>level</code> and <code>tag</code>.
	 * @param {boolean} [options.tag.level] Appendslog <code>level</code> tag to the string log message (true) or does nothing (false). Default is false.
	 * @param {boolean} [options.tag.pkg] Appends <code>package name</code> string message (true) or does nothing (false). Default is false.
	 * @param {string[]} [options.whitelist] List of packages from which to log messages. By default logs all messages (empty array).  DEPRECATED since V6.2; use filters instead.
	 * @param {string[]} [options.blacklist] List of packages to ignore log messages from. By default does not ignore any packages (empty array).  DEPRECATED since V6.2; use filters instead.
	 * @param {object[]} [options.filters] Object with key/value pairs like {'package': 'LEVEL'} for packages to log.  This is treated as a whitelist; only log
	 *     calls for instances matching pkg will be logged.  Default is to log all messages (empty object).  Explicitly pass an empty object or null (not undefined) to remove filters.
	 * @param {boolean} [options.capture] Turn log capture on or off.  This is meaningful in hybrid environments only.
	 * @param {boolean} [options.autoSendLogs]  Set behavior to auto send logs on connect and invokeProcedure success cases.
	 * @param {boolean} [options.autoUpdateConfig]  Set behavior to auto retrieve configuration from the server on connect and invokeProcedure success cases.  Default is true.
	 * @param {integer} [options.maxFileSize] Maximum amount of data (in bytes) to store in the file when capture is on.  This is meaningful in hybrid environments only.  Default is true.
	 * @param {string[]|string|number} [options.level] A list of one or more of the following items:<br />
	 * 					<ul>
	 * 						<li>the log levels to show.</li>
	 * 						<li>the name of the log level at which to set the logger.</li>
	 * 						<li>the Numeric Priority Level at which to set the logger.</li>
	 * 					</ul>
	 * 					Default: Show all logs (empty array).
	 * 
	 * @returns {this} Returns the current instance.
	 * 							 
	 * @methodOf WL.Logger#
	 */
	 this.config = function(options) {};

	/**
	 * @deprecated since version 6.2. WL.Logger.off is now a NOP. WL.Logger is always enabled.
	 *	Use WL.Logger.config with {'level': 'FATAL'} to reduce verbosity.
	 *
	 * @returns {this} Returns the current instance.
	 * 
	 * @methodOf WL.Logger#
	 */
	this.off = function () {};

	/**
	 * Shows the status (current configuration) of the logger.
	 *
	 * @example
	 * WL.Logger.status()
	 *
	 * .then(function (state) {
	 * //{ enabled : true, stringify: true, filters : {},
	 * // level : [], pkg : '', tag: {level: false, pkg: true} }
	 * })
	 *
	 * .fail(function (errMsg) {
	 *   //errMsg = error message
	 * });
	 *
	 * @returns {Promise} Resolved with current status, rejected with an error message.
	 *
	 * @methodOf WL.Logger#
	 */
	this.status = function () {};
	
	/**
	 * Updates the state (also called context or status) of the logger.
	 *
	 * @example
	 * WL.Logger.debug('Hello world'); //No context passed
	 * //Hello world
	 *
	 * WL.Logger.ctx({pkg: 'hello'}).debug('Hello world'); //Package name context passed
	 * //[hello] Hello world
	 *
	 * Caution: filters, maxFileSize, capture, and level returned from this call may not accurately reflect the current behavior
	 *    in hybrid applications if the native codebase has modified these settings in the native application layer.
	 * 
	 * @param {object} [options] See arguments defined for <code>WL.Logger.config</code> for information about the object that can be passed.
	 * 
	 * @returns {this} Returns the current instance.
	 * 
	 * @methodOf WL.Logger#
	 */
	this.ctx = function (options) {};

	/**
	 * Prints arguments to the console. Has a priority of <code>600</code> and a level of <code>TRACE</code>.
	 *
	 * @example
	 * WL.Logger.trace('Hello world');
	 * //Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf WL.Logger#
	 * @name WL.Logger#trace
	 */
	 this.trace = function(message) {};

	/**
	 * Prints arguments to the console. Has a priority of <code>500</code> and a level of <code>DEBUG</code>.
	 *
	 * @example
	 * WL.Logger.debug('Hello world');
	 * //Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf WL.Logger#
	 * @name WL.Logger#debug
	 */
	this.debug = function (message) {};
	
	/**
	 * Prints arguments to the console. Has a priority of <code>400</code> and a level of <code>LOG</code>.
	 *
	 * @example
	 * WL.Logger.log('Hello world');
	 * //Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf WL.Logger#
	 * @name WL.Logger#log
	 */
	this.log = function (message) {};
	
	/**
	 * Prints arguments to the console. Has a priority of <code>300</code> and a level of <code>INFO</code>.
	 *
	 * @example
	 * WL.Logger.info('Hello world');
	 * //Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf WL.Logger#
	 * @name WL.Logger#info
	 */
	this.info = function (message) {};
	
	/**
	 * Prints arguments to the console. Has a priority of <code>200</code> and a level of <code>WARN</code>.
	 *
	 * @example
	 * WL.Logger.warn('Hello world');
	 * //Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf WL.Logger#
	 * @name WL.Logger#warn
	 */
	this.warn = function (message) {};
	
	/**
	* Prints arguments to the console. Has a priority of <code>100</code> and a level of <code>ERROR</code>.
	*
	* @example
	* WL.Logger.error('Hello world');
	* //Hello world
	*
	* @param message One or more messages of any data type.
	* 
	* @methodOf WL.Logger#
	* @name WL.Logger#error
	 */
	this.error = function (message) {};

	/**
	 * Prints arguments to the console. Has a priority of <code>50</code> and a level of <code>FATAL</code>.
	 *
	 * @example
	 * WL.Logger.fatal('Hello world');
	 * //Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf WL.Logger#
	 * @name WL.Logger#fatal
	 */
	 this.fatal = function(message) {};

	/**
	* Creates an instance of a logger with its own context (also called status or state).
	* 
	* @example
	* var logger = WL.Logger.create({pkg: 'mypackage'});
	*
	* logger.trace('Hello world');
	* //[mypackage] Hello world
	*
	* logger.debug('Hello world');
	* //[mypackage] Hello world
	*
	* logger.log('Hello world');
	* //[mypackage] Hello world
	*
	* logger.info('Hello world');
	* //[mypackage] Hello world
	*
	* logger.warn('Hello world');
	* //[mypackage] Hello world
	*
	* logger.error('Hello world');
	* //[mypackage] Hello world
	*
	* logger.fatal('Hello world');
	* //[mypackage] Hello world
	* 
	* @param {Object} [options] See arguments defined for <code>WL.Logger.config</code> for information about the object that can be passed.
	*
	* @returns {LogInstance} Has the following methods from <code>WL.Logger</code>: <code>.trace</code>, <code>.debug</code>, <code>.log</code>, 
	* <code>.info</code>, <code>.warn</code>, <code>.error</code>, and <code>.fatal</code>.
	* @methodOf WL.Logger#
	 */
	this.create = function (options) {};
	
	/**
	*
	* @deprecated since version 6.2.  Use WL.Logger.config instead.
	*
	* Sets options in native application layer (iOS and Android only)
	* 
	* @example
	* WL.Logger.setNativeOptions(
	*     {
	*         maxFileSize : 100000,              // allow persistent storage of up to 100k of log data
	*         level : 'debug',                   // at debug (and above) level
	*         capture : true,                    // capture data passed to log API calls into persistent storage
	*         filters : { jsonstore : 'debug' }  // establish whitelist filters at native
	*     }
	* );
	* 
	* @param {Object} [options] an object that optionally contains any of the following key/value pairs:
	* 
	* <ul>
	*     <li>maxFileSize: integer (minimum allowed is 10000 (in bytes))</li>
	*     <li>level: String (any of the following values: 'trace', debug', 'log', 'info', 'warn', 'error', 'fatal')</li>
	*     <li>capture: boolean</li>
	*     <li>autoSendLogs: boolean</li>
	*     <li>autoUpdateConfig: boolean</li>
	* </ul>
	* 
	* @methodOf WL.Logger#
	* @name WL.Logger#setNativeOptions
	*/
	this.setNativeOptions = function (options) {};
	
  /**
  * Attach additional metadata to the next logger instance call.
  * 
  * @example
  * WL.Logger.metadata(
  *     {
  *         userRealName : 'Robert Paulson'
  *     }
  * );
  * 
  * @example
  * WL.Logger.metadata( { hi : 'world' } ).info('hello');
  * 
  * @param {Object} [options] an object to attach to the next logger instance call
	* 
	* @methodOf WL.Logger#
	* @name WL.Logger#metadata
	*/
	this.metadata = function () {};
	
	/**
	*
	* Send any logs collected up to this point to the IBM Worklight server.
	* 
	* @methodOf WL.Logger#
	* @name WL.Logger#send
	*/
	this.send = function () {};

  /**
  * Retrieves and applies any matching configuration profile from the IBM Worklight Server.
  * A matching configuration profile acts as an override of the local configuration.
  * Configuration profiles are defined by the IBM Worklight administrator in the Worklight
  * admin console.  Restores to original settings when the server indicates that no
  * matching configuration profile exists.
  *
  * This API call is only applicable in Android and IOS environments.  It is a safe, but no-op,
  * call in other environments.
  *
  * @methodOf WL.Logger#
  * @return promise
  */
  this.updateConfigFromServer = function() {};
	
};

__WL.prototype.WLLogger = new __WLLogger;

/**
 * @class
 *
 * <p>Logger with its own context (also called status or state). New instances are created with <code>WL.Logger.create</code>.</p> 
 *
 * @example
 * var logger = WL.Logger.create({pkg: 'myapp'});
 * logger.debug('Hello world');
 * //[myapp] Hello world
 * 
 * @name LogInstance
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 *
*/
__LogInstance = function(){
 
 	/**
	 * Prints arguments to the console. Has a priority of <code>600</code> and a level of <code>TRACE</code>.
	 *
	 * @example
	 * var logger = WL.Logger.create({pkg: 'myapp'});
	 * logger.trace('Hello world');
	 * //[myapp] Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf LogInstance#
	 * @name LogInstance#trace
	 */
	 this.trace = function(message){};

	/**
	 * Prints arguments to the console. Has a priority of <code>500</code> and a level of <code>DEBUG</code>.
	 *
	 * @example
	 * var logger = WL.Logger.create({pkg: 'myapp'});
	 * logger.debug('Hello world');
	 * //[myapp] Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf LogInstance#
	 * @name LogInstance#debug
	 */
	this.debug = function(message){};
	
	/**
	 * Prints arguments to the console. Has a priority of <code>400</code> and a level of <code>LOG</code>.
	 *
	 * @example
	 * var logger = WL.Logger.create({pkg: 'myapp'});
	 * logger.log('Hello world');
	 * //[myapp] Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf LogInstance#
	 */
	this.log = function(message){};
	
	/**
	 * Prints arguments to the console. Has a priority of <code>300</code> and a level of <code>INFO</code>.
	 *
	 * @example
	 * var logger = WL.Logger.create({pkg: 'myapp'});
	 * logger.info('Hello world');
	 * //[myapp] Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf LogInstance#
	 * @name LogInstance#info
	 */
	this.info = function(message){};
	
	/**
	 * Prints arguments to the console. Has a priority of <code>200</code> and a level of <code>WARN</code>.
	 *
	 * @example
	 * var logger = WL.Logger.create({pkg: 'myapp'});
	 * logger.warn('Hello world');
	 * //[myapp] Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf LogInstance#
	 * @name LogInstance#warn
	 */
	this.warn = function(message){};
	
	/**
	 * Prints arguments to the console. Has a priority of <code>100</code> and a level of <code>ERROR</code>.
	 *
	 * @example
	 * var logger = WL.Logger.create({pkg: 'myapp'});
	 * logger.error('Hello world');
	 * //[myapp] Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf LogInstance#
	 * @name LogInstance#error
	 */
	this.error = function(message){};

	/**
	 * Prints arguments to the console. Has a priority of <code>50</code> and a level of <code>FATAL</code>.
	 *
	 * @example
	 * var logger = WL.Logger.create({pkg: 'myapp'});
	 * logger.fatal('Hello world');
	 * //[myapp] Hello world
	 *
	 * @param message One or more messages of any data type.
	 * 
	 * @methodOf LogInstance#
	 * @name LogInstance#fatal
	 */
	 this.fatal = function(message){};
	
};
__WL.prototype.LogInstance = new __LogInstance;
