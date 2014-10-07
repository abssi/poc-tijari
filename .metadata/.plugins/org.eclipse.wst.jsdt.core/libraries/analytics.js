/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @class 
 * <p>The IBM® Worklight® Analytics API provides the ability to enable, disable, and log analytics data.</p>
 *
 * <p>The default settings is enabled, meaning data passed to the WL.Analytics.log API call by both the framework code and your code are
 * persisted.  You can explicitly enable or disable persistent data capture by calling <code>WL.Analytics.enable</code>
 * or <code>WL.Analytics.disable</code>.</p>
 *
 * <p>Starting in IBM® Worklight® V6.2.0, the enabling of Analytics capture by declaring it in <code>initOptions.js</code> is deprecated.  For backward
 * compatibility, when Analytics is enabled using <code>initOptions.js</code>, the event <code>WL/ANALYTICS/READY</code>
 * is triggered.  It is no longer necessary to wait for this event in order to use the <code>WL.Analytics</code> API.</p>
 *
 * <p>Starting with IBM® Worklight® V6.2.0, the <code>WL.Analytics</code> API is available for use with no extra configuration or feature enablement required.
 * Persistent collection of <code>WL.Analytics.log</code> data is enabled by default, and sent to the IBM® Worklight® server by default on
 * successful network init.</p>
 *
 * <p>Note: the data collected via the <code>WL.Analytics</code> API, after sending it to the IBM Worklight server, is made available in the Operational
 * Analytics engine console on the "Search" tab, and only the "Search" tab.</p>
 *
 * @name WL.Analytics
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__Analytics = function () {

	/**
	 * <p>Turns on the capture of analytics data.</p>
	 *
	 * <p>The <code>Promise</code> returned by enable must be resolved prior to any <code>WL.Analytics</code> API call.</p>
	 *
	 * <p>Starting with IBM® Worklight® V6.2.0, <code>WL.Analytics.enable</code> no longer takes any parameter arguments and it
   * is no longer necessary to wait for the returned <code>Promise</code> to be resolved to continue using the
   * <code>WL.Analytics</code> API.</p>
	 *
	 * @example
	 * WL.Analytics.enable()
	 *
	 * .then(function () {
	 *   //Capture of analytics data is fully enabled.
	 * })
	 *
	 * .fail(function (errObj) {
	*   //errObj.src = function that failed
	*   //errObj.res = error message
	 * });
	 *
	 *
	 * @returns {Promise} Resolved with no parameters, rejected with an error object.
	 * @methodOf WL.Analytics#
	 */
	this.enable = function () { };

	/**
	 * @deprecated since version 6.2. WL.Analytics.restart is now a NOP.
	 *
	 * @example
	 * WL.Analytics.restart()
	 *
	 * .then(function () {
   *   //nop
	 * })
	 *
	 * .fail(function (errObj) {
	 *   //errObj.src = function that failed
	 *   //errObj.res = error message
	 * });
	 *
	 *
	 * @returns {Promise} Resolved with no parameters, rejected with an error object.
	 * @methodOf WL.Analytics#
	 */
	this.restart = function () { };

	/**
	 * <p>Turns off the capture of analytics data.</p>
	 *
	 * @example
	 * WL.Analytics.disable()
	 *
	 * .then(function () {
	 *   //Capture of analytics data is fully disabled.
	 * })
	 *
	 * .fail(function (errObj) {
	 *   //errObj.src = function that failed
	 *   //errObj.res = error message
	 * });
	 *
	 * @returns {Promise} Resolved with no parameters, rejected with an error object.
	 * @methodOf WL.Analytics#
	 */
	this.disable = function () { };

	/**
	 *
	 * <p>Logs a message with additional contextual information.</p>
	 *
	 * <p>Log messages are automatically added to a persistent queue.  The accumulated data is automatically sent
   * to IBM® Worklight® server on the next successful network init or explicit <code>WL.Analytics.send</code>
   * function call.</p>
	 *
	 * @example
   * WL.Analytics.log('my record');
   * // or
	 * WL.Analytics.log({data: [1,2,3]});
	 * // or
	 * WL.Analytics.log({data: [1,2,3]}, 'MyData');
	 *
	 * @param {string or object} [message] The message to log.
	 * @param {string} [name] The name of the message to log.
	 *
   * @returns {Promise} Resolved with no parameters, rejected with an error object.
	 * @methodOf WL.Analytics#
	 * @name WL.Analytics#log
	 */
	this.log = function(message, name) { };

	/**
	 * <p>Get the current state of <code>WL.Analytics</code>.</p>
	 *
	 * <p>The state object is kept by <code>WL.Analytics</code> and contains the following key:
	 * <ul>
	 *   <li>enabled (boolean) - Value is true if capture is enabled, false otherwise.</li>
	 * </ul></p>
	 *
	 * <p>Changing the state object that is returned does not affect the state object that is kept internally.</p>
	 *
   * WL.Analytics.state()
   *
   * .then(function (state) {
   *   // {enabled: true}
   * })
   *
   * .fail(function (errObj) {
   *   //errObj.src = function that failed
   *   //errObj.res = error message
   * });
	 *
	 * @returns {Promise} Resolved with state object parameters, rejected with an error object.
	 * @methodOf WL.Analytics#
	 */
	this.state = function() { };
	
	/**
	 *
	 * Send any analytics data collected up to this point to the IBM Worklight server.
	 * 
	 * @methodOf WL.Analytics#
	 * @name WL.Analytics#send
	 */
  this.send = function () {};
	
};

__WL.prototype.Analytics = new __Analytics; 