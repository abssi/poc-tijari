/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/* Copyright (C) Worklight Ltd. 2006-2012.  All rights reserved. */

/**
  * @class
  * This collection of topics lists the public methods of the IBM&reg; Worklight&reg; runtime client API for mobile apps, desktop, and web.
  * <code>WL.Client</code> is a JavaScript client library that provides access to IBM Worklight capabilities. You can use <code>WL.Client</code> to perform the following types of functions:<br />
  * 	<ul>
  * 		<li>Initialize and reload the application</li>
  * 		<li>Manage authenticated sessions</li>
  * 		<li>Obtain general application information</li>
  * 		<li>Retrieve and update data from corporate information systems</li>
  * 		<li>Store and retrieve user preferences across sessions</li>
  * 		<li>Internationalize application texts</li>
  * 		<li>Specify environment-specific user interface behavior</li>
  * 		<li>Store custom log lines for auditing and reporting purposes in special database tables</li>
  * 		<li>Use functions specific to iPhone, iPad, Android, BlackBerry 6 and 7, and Windows Phone 8 devices</li>
  * 	</ul>
  * 			<dl class="detailList">
  * 				<dt class="heading">Calls to the Worklight Server</dt>
  * 				<dd>
  * 					WLClient uses asynchronous JavaScript calls, which accept an options parameter. Success and failure handlers receive a response parameter. The API consists of many calls, listed here.<br />
  * 					WLClient uses asynchronous JavaScript calls to access the IBM Worklight Server. Each asynchronous method accepts an options parameter, 
  * 					which includes success and failure handlers to communicate the results of the call. If you want to be notified when an asynchronous function returns, 
  * 					you must supply these callback functions within the options parameter when you call the function.<br />
  * 				<dl class="detailList">
  * 					<dt class="heading">Augmented Options</dt>
  * 					<dd>
  * 						The options parameter often contains additional properties applicable to the specific method that is being called. 
  * 						These additional properties are detailed in the description of the specific method.
  * 					</dd>
  * 				</dl>
  * 				<dl class="detailList">
  * 					<dt class="heading">Augmented Response</dt>
  * 					<dd>
  * 						The success and failure handlers of all asynchronous calls always receive a response parameter that contains a common set of properties. 
  * 						Some calls pass additional properties in the response object of the success and failure handlers. 
  * 						In such cases, these additional properties are detailed in the description of the specific method.
  * 					</dd>
  * 				</dl>
  * 				<dl class="detailList">
  * 					<dt class="heading">Quick Reference</dt>
  * 					<dd>The Worklight Client API consists of the following API methods:<br />
  * 						<ul>
  * 							<li>General application methods
  * 								<ul>
  * 									<li>Lifecycle: WL.Client.init, WL.Client.reloadApp</li>
  * 									<li>Connectivity: WL.Client.setHeartBeatInterval, WL.Client.connect, Connectivity-related JavaScript Events</li>
  * 									<li>Session management methods: WL.Client.getUserName, WL.Client.getLoginName, WL.Client.login, WL.Client.logout, WL.Client.isUserAuthenticated, WL.Client.getUserInfo, WL.Client.updateUserInfo</li>
  * 									<li>Data access methods: WL.Client.invokeProcedure</li>
  * 									<li>Activity logging methods: WL.Client.logActivity</li>
  * 									<li>User preference methods: WL.Client.setUserPref, WL.Client.getUserPref(key)</li>
  * 									<li>Application properties methods: WL.Client.getEnvironment, WL.Client.getAppProperty</li>
  * 									<li>Error handling: WL.App.getErrorMessage</li>
  * 									<li>Debugging: The WL.Logger object</li>
  * 								</ul><br />
  * 							</li>
  * 							<li>Mobile functionality and UI
  * 								<ul>
  * 									<li>Push notification API: WL.Client.Push.isPushSupported, WL.Client.Push.isPushSMSSupported, WL.Client.Push.onReadyToSubscribe, WL.Client.Push.registerEventSourceCallback, 
 * 										WL.Client.Push.subscribe, WL.Client.Push.subscribeSMS, WL.Client.Push.unsubscribe, WL.Client.Push.unsubscribeSMS, WL.Client.Push.enableBroadcast, 
 * 										WL.Client.Push.disableBroadcast, WL.Client.Push.subscribeToTag, WL.Client.Push.unsubscribeFromTag, WL.Client.Push.isTagSubscribed, WL.Client.Push.registerBroadcastCallback, 
 * 										WL.Client.Push.registerTagCallback</li>
  * 									<li>Network details: WL.Device.getNetworkInfo</li>
  * 									<li>Opening a URL: WL.App.openURL</li>
  * 									<li>Options menu: WL.OptionsMenu</li>
  * 									<li>Tab bar: Tab Bar API</li>
  * 									<li>Badge: WL.Badge.setNumber</li>
  * 									<li>Toast: WL.Toast.show</li>
  * 									<li>Globalization: WL.App.getDeviceLocale, WL.App.getDeviceLanguage</li>
  * 									<li>Back button: WL.App.overrideBackButton, WL.App.resetBackButton</li>
  * 									<li>Dialog box: WL.SimpleDialog</li>
  * 									<li>Busy indicator: WL.BusyIndicator (constructor)</li>
  * 									<li>Closing an app: WL.App.close: Deprecated</li>
  * 									<li>Accessing native pages on mobile apps: WL.NativePage.show</li>
  * 									<li>Switching between HTML Pages: WL.Fragment.load,Class WL.Page: Both deprecated</li>
  * 									<li>Encrypted offline cache: WL.EncryptedCache</li>
  * 									<li>Clipboard: WL.App.copyToClipboard</li>
  * 								</ul><br />
  * 							</li>
  * 							<li>Web and desktop widget methods
  * 								<ul>
  * 									<li>Desktop window state:, WL.Client.close, WL.Client.minimize</li>
  * 									<li>Globalization: WL.Client.getLanguage</li>
  * 								</ul><br />
  * 							</li>
  * 							<li>Mechanisms used by the WLClient methods
  * 								<ul>
  * 									<li>The Options Object, Timeout</li>
  * 								</ul>
  * 							</li>
  * 						</ul>
  * 					</dd>
  * 				</dl>
  * 				</dd>
  * 			</dl>
  * @note {Note}  Although JavaScript does not support encapsulation, do not use any method or member not listed in this document. 
  * 			Their semantics or existence is not guaranteed in future versions of the IBM Worklight Client API.
  * @name WL.Client
  * @ilog.undocumented.jsFile
  * @ilog.undocumented.constructor
  * @requires prototype.js
  * @requires gadgetCommunicationAPI.js
  * @requires wlcommon.js
  * @requires messages.js
  * @requires worklight.js
  */

__WLClient = function() {


  /**
    * This method adds an HTTP header to be used in server requests issued by an IBM Worklight framework.
    * @description 
    * The HTTP header is used in all requests until removed by the <code>WL.Client.removeGlobalHeader</code> API call.
    * 
    * @example 
    * WL.Client.addGlobalHeader("MyCustomHeader","abcdefgh");
    * @param headerName Mandatory. The name of the header to be added.
    * @param headerValue Mandatory. The value of the header to be added.
    * @methodOf WL.Client#
    */
  this.addGlobalHeader = function (headerName, headerValue) {};

  /**
    * Close a widget on Adobe AIR.
    * @note {Note} This method is only applicable to widgets that are running on Adobe AIR.<br />
    * Closes the AIR widget (making it exit).
    * @methodOf WL.Client#
    * @name WL.Client#close
    */
  this.close = function () {};

  /**
    * This method establishes a connection to the Worklight Server.
    * @description
    * <p>
    * The connect() method tries to establish a connection to the Worklight Server. 
    * You must call this method before calling any other WL.Client method that communicates with the Worklight Server.
    * </p>
    * @param options Optional. A JSON block with the following additional properties:
    * <p class="heading">onSuccess </p>
    *		A callback function invoked when the connection to the Worklight Server is established. 
    * <p class="heading">onFaiure </p>
    * 		A Callback function invoked when the <code>WL.Client.connect</code> method fails to establish connection with the Worklight server.
    *  	The callback receives one parameter of type <code>WL.FailResponse</code>,
    *   	which might be null if connect is called while a previous call to connect has not yet returned.
    * <p class="heading">timeout</p>
    * 		Number of milliseconds to wait for the server response before failing with a request timeout.
    * @note {Note} 
    * <dl class="detailList">
    * 	<dt class="heading">Connectivity-related JavaScript Events</dt>
    * 	<dd>
    * 		The IBM Worklight runtime framework fires two events, to which you can listen to capture changes in connectivity. The events are fired only on change of connectivity state.
    * 		<ul>
    * 			<li><code>WL.Events.WORKLIGHT_IS_CONNECTED</code>: fired when the application connects to the Worklight Server.</li>
    * 			<li><code>WL.Events.WORKLIGHT_IS_DISCONNECTED</code>: fired when loss of connectivity to Worklight Server is detected. </li>	
    * 		</ul>	<br />
    * 		<code>document.addEventListener(WL.Events.WORKLIGHT_IS_CONNECTED , handleConnectionUp, false);</code><br />
    * 		<code>document.addEventListener(WL.Events.WORKLIGHT_IS_DISCONNECTED, handleConnectionDown, false);</code>
    * 	</dd>
    * </dt>
    * @methodOf WL.Client#
    */
  this.connect = function (options) {};
  
  /**
    * Delete a user preference key.
    * @description 
    * An asynchronous function that deletes a specified user preference key.<br />
    * @note {Note} The local user preferences in the application are updated only when a successful response is received from the server.
    * 
    * @param key Mandatory. The user preference key. Can be up to 128 characters long.
    * @param options Optional. A standard options object.
    * @methodOf WL.Client#
    */
  this.deleteUserPref = function (key, options) {};

  /**
    * Returns the value of the specified property.
    * @description 
    * @param property Mandatory. One of the following values:<br />
    * <ul>
    * <li><b>WL.AppProperty.AIR_ICON_16x16_PATH</b><br />
    * For AIR widgets only; the relative path to the AIR icon.</li>
    * <li><b>WL.AppProperty.AIR_ICON_128x128_PATH</b><br />
    * For AIR widgets only; the relative path to the AIR icon.</li>
    * <li><b>WL.AppProperty.DOWNLOAD_APP_LINK</b><br />
    * For desktop widgets only; the URL for downloading an updated version of the application.</li>
    * <li><b>WL.AppProperty.APP_DISPLAY_NAME</b><br />
    * The application display name, as defined in the application descriptor.</li>
    * <li><b>WL.AppProperty.APP_LOGIN_TYPE</b><br />
    * The application login type, as defined in the application descriptor: never, onstartup, or ondemand</li>
    * <li><b>WL.AppProperty.APP_VERSION</b><br />
    * The application version, as defined in the application descriptor (a newer version might be available on the Worklight Server)</li>
    * <li><b>WL.AppProperty.LATEST_VERSION</b><br />
    * The latest application version available on the Worklight Server.</li>
    * <li><b>WL.AppProperty.MAIN_FILE_PATH</b><br />
    * For web environments only; the absolute URL to the main application file.</li>
    * <li><b>WL.AppProperty.SHOW_IN_TASKBAR</b><br />
    * For AIR widgets only; a Boolean stating whether the Air application shows in the taskbar, as defined in the descriptor.</li>
    * <li><b>WL.AppProperty.THUMBNAIL_IMAGE_URL</b><br />
    * An absolute URL for the thumbnail image for the application.</li>
    * </ul>
    * @methodOf WL.Client#
    */
  this.getAppProperty = function (property) {};

  /**
    * Identifies the type of environment in which the application is running. Such as iPhone, Android, or Windows.
    * @description 
    * @returns A constant that identifies the type of environment. The valid values are defined in the WL.Environment variable in the worklight.js file, and are as follows:
    * <ul>
    * <li>WL.Environment.ADOBE_AIR</li>
    * <li>WL.Environment.ANDROID</li>
    * <li>WL.Environment.EMBEDDED</li>
    * <li>WL.Environment.IPAD</li>
    * <li>WL.Environment.IPHONE</li>
    * <li>WL.Environment.MOBILE_WEB</li>
    * <li>WL.Environment.PREVIEW (when the application runs in Preview mode)</li>
    * <li>WL.Environment.WINDOWS_PHONE_8</li>
    * <li>WL.Environment.WINDOWS8</li>
    * </ul>
    * <br />
    * When an app is running in Preview mode, this method returns WL.Environment.PREVIEW, regardless of the previewed environment. 
    * There are two reasons for this behavior:
    *<ul>
    *<li> Environment - specific code can fail when invoked from the browser (because the environment might support features that are not available in the browser).</li>
    *<li><code>WL.Client</code> behaves differently in different environments (for example, cookie management).</li>
    *</ul> <br />
    *A good practice is to rely on the IBM Worklight UI optimization framework and separate environment-dependent JS to separate files rather than using the WL.Client.getEnvironment() function.
    * @methodOf WL.Client#
    */
  this.getEnvironment = function () {};

  /**
    * Returns the login name of the user who is currently logged in.
    * @description
    * @note {Note} This method is applicable only to applications that support login.<br />
    * This method returns the login name of the user who is logged in. The login name is the name that the user entered when logging in.
    * 
    * @param realm Optional. The name of a realm that is defined in the <i>authenticationConfig.xml</i> file.<br />
    * If no value is specified, the method returns the login name in the resource realm that is assigned to the application when it was deployed.
    * 
    * @returns The login name of the user who is logged in, or NULL if the login name is unknown.
    * @methodOf WL.Client#
    */
  this.getLoginName = function (realm) {};

  /**
    * This method returns a user property.
    * @description
    * This method returns a user property with the specified key in the specified authentication realm.
    * 
    * @param realm Mandatory. The name of a realm that is defined in the <i>authenticationConfig.xml</i> file.
    * @param key Mandatory. The name of the key that is present in the specified realm.
    * @methodOf WL.Client#
    */
  this.getUserInfo = function (realm, key) {};

  /**
    * This method returns the user name of the user who is currently logged in.
    * @description <p>This method returns the user name of the user who is currently logged in, as defined by the login module used to authenticate the user.</p>
    * @note {Note} This method is only applicable to applications that support login.
    * @param realm The name of a realm defined in the <i>authenticationConfig.xml</i> file.<br />
    * If no value is specified, the method returns the user name in the resource realm assigned to the application when it was deployed.
    * 
    * @returns The user name of the user who is currently logged in, or <i>NULL</i> if the user name is unknown.
    * @methodOf WL.Client#
    */
  this.getUserName = function (realm) {};
  
  /**
   * Obtains an oauth 2.0 access token from the Worklight server. The token is required in order to send a request
   * to an external server which uses this Worklight authentication method.
   * @description
   * @param scope Optional. The name of the security test protecting the external resource. If the scope is <code>null</code>, a token
   * for the application's default security test will be obtained.
   * @param onSuccess The success callback. Note that there is no need to parse the response. Instead, use WL.Client.getLastAccessToken(scope)
   * in order to get the last obtained token.
   * @param onFailure The failure callback.
   * @methodOf WL.Client#
   */
  this.obtainAccessToken = function(scope, onSuccess, onFailure) {};
  
  /**
   * Determines whether an access token is requested by the server, and returns the required scope.
   * @description
   * @param status The status code of the response.
   * @param header The value of the <code>WWW-Authenticate</code> header of the response.
   * @return The scope requested by the server, or null if the response is not related to Worklight access tokens.
   * @methodOf WL.Client#
   */
  this.getRequiredAccessTokenScope = function(status, headerValue) {};
  
  /**
   * Gets the last obtained access token for a given scope, or the last access token for any scope, of none is provided.
   * @description
   * @param scope Optional. The scope of the requested token, if the scope is <code>null</code>, the last obtained access token will be returned.
   * @return The token, or <code>null</code> if no token was previously obtained for the requested scope.
   * @methodOf WL.Client#
   */
  this.getLastAccessToken = function(scope){};

  /**
    * Returns the local value of a specified user preference.
    * 
    * @description 
    * @param key Mandatory. The user preference key.
    * @returns The value of the user preference or <i>NULL</i> if there is no user preference with the specified key.
    * @throws An exception is thrown when invalid parameters are passed to the function.
    * @methodOf WL.Client#
    */
  this.getUserPref = function (key) {};

  /**
    * Checks whether a user preference is defined locally in the application.
    * @description 
    * @param key Mandatory. The user preference key.
    * @returns Returns <i>true</i> if the preference exists, <i>false </i>otherwise.
    * @throws An exception is thrown when invalid parameters are passed to the function.
    * 
    * @methodOf WL.Client#
    */
  this.hasUserPref = function (key) {};

  /**
    * This method initializes the WL.Client object. The options of this method reside in the <i>initOptions.js</i> file.
    * @description
    * @param options An optional options object augmented with the following additional optional properties:
    * <table border="1">
    * 	<tr>
    * 		<th><b>Property</b></th>
    * 		<th><b>Description</b></th>
    * 	</tr>
    * 	<tr>
    * 		<td>Timeout</td>
    * 		<td><p>An integer value, denoting the timeout in milliseconds. 
    * 		The timeout affects all calls from the app to the Worklight Server. If not specified, a timeout of 30,000 milliseconds (30 seconds) is used.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>enableLogger</td>
    * 		<td><i>The use of enableLogger flag is deprecated since V6.2.  Use WL.Logger.config function with an object specifying the level instead.</i>
    * 		</td>
    * 	</tr>
    * 	<tr>
    * 		<td>messages</td>
    * 		<td><p>A dictionary object for localizing texts, located in the <i>messages.js</i> file. If not specified, the default object <i>Messages</i> (in the same file) is used.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>authenticator</td>
    * 		<td><p>An object that implements the Authenticator API. If not specified, Authenticator is used.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>heartBeatIntervalInSecs</td>
    * 		<td><p>An integer value, denoting the interval in seconds between heartbeat messages automatically sent by <i>WLClient</i> to the Worklight Server. The default value is 420 (7 minutes).</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>connectOnStartup</td>
    * 		<td><p>
    * 			<b>Deprecated:</b> The connectOnStartup init option is deprecated. Worklight applications by default are configured to not connect to the Worklight Server. If you would like your application to connect to the Worklight Server, use WL.Client.connect().
    * 			</p>
    * 		</td>
    * 	</tr>
    * 	<tr>
    * 		<td>onConnectionFailure</td>
    * 		<td><p>
    * 			A failure-handling function invoked when connection to the Worklight Server, performed on initialization by default, or if the <i>connectOnStartup</i> flag is true, fails.
    * 			</p>
    * 		</td>
    * 	</tr>
    * 	<tr>
    * 		<td>onUnsupportedVersion</td>
    * 		<td><p>A failure-handling function invoked when the current version of the application is no longer supported (a newer application has been deployed to the server). For more information about the signature of failure-handling functions, see <i>The Options Object.</i></p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>onRequestTimeout</td>
    * 		<td><p>A failure-handling function invoked when the <i>init()</i> request times out. For more information about the signature of failure-handling functions, see <i>The Options Object</i>.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>onUnsupportedBrowser</td>
    * 		<td><p>A failure-handling function invoked when the application is running in an unsupported browser. For more information about the signature of failure-handling functions, see <i>The Options Object</i>.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>onDisabledCookies</td>
    * 		<td><p>A failure-handling function invoked when cookies are displayed in the user's browser. 
    * 		For more information about the signature of failure-handling functions, see <i>The Options Object</i>.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>onUserInstanceAccessViolation</td>
    * 		<td><p>A failure-handling function invoked when the user is trying to access an application that was provisioned to a different user. 
    * 		For more information about the signature of failure-handling functions, see <i>The Options Object</i>.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>onErrorRemoteDisableDenial</td>
    * 		<td><p>A failure-handling function invoked when the server denies access to the application, according to rules defined in the IBM Worklight Console. 
    * 		If this function is not provided, the application opens a dialog box, which displays an error message defined in the IBM Worklight Console. 
    * 		When used, the function can provide an application-specific dialog box, or can be used to implement additional behavior in situations where the server denies access to the application. 
    * 		It is important to ensure that the application remains offline (not connected).</p>
    * 		<b>Parameters:</b><br />
    * 		<code>message:</code> This parameter contains the notification text that you defined in the Worklight Console, which indicates that an application is denied access to the Worklight Server.<br />
    * 		<code>downloadLink:</code> This parameter contains the URL that you defined in the Worklight Console to download the new version of the application, that users can find in the appropriate application store.
    * 	
    * 		<p><b>Example</b> <br />
    * <pre class="code">
    * var wlInitOptions = {
    * 	connectOnStartup : true,
    * 	onErrorRemoteDisableDenial : function (message, downloadLink) {
    * 	WL.SimpleDialog.show(
    * 		"Application Disabled",
    * 		message,
    * 		[{text: "Close application", handler: function() {WL.App.close();}},
    * 		{text: "Download new version", handler: function() {WL.App.openURL(downloadLink, "_blank");}}]
    * 		);
    * 	}
    * };
    * </pre></p>
    * 		</td>
    * 	</tr>
    * 	<tr>
    * 		<td>onErrorAppVersionAccessDenial</td>
    * 		<td><p>A failure-handling function invoked when the server denies access to the application, according to rules defined in the IBM Worklight Console. 
    * 			If this function is used, the developer takes full ownership of the implementation and handling if Remote Disable took place. 
    * 			If the failure-handling function is not provided, the application opens a dialog box, which displays an error message defined in the IBM Worklight Console.<br />
    * 			<b>Note: </b><i>onErrorAppVersionAccessDenial</i> is deprecated since V5.0.6. Instead, use <i>onErrorRemoteDisableDenial</i>.
    *  		</p>
    *  	</td>
    * 	</tr>
    * 	<tr>
    * 		<td>validateArguments</td>
    * 		<td><p>A Boolean value, indicating whether the IBM Worklight Client runtime library validates the number and type of method parameters. The default is true.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>updateSilently</td>
    * 		<td><p>A Boolean value, indicating whether Direct Update is performed without notifying the user before downloading new application resources. Default is false.</p></td>
    * 	</tr>
    *   <tr>
    * 		<td>autoHideSplash</td>
    * 		<td><p>A Boolean value, indicating whether the IBM Worklight splash-screen will be auto-hidden. To disable automatic hiding of the splash screen set this property to false. Default is true.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>onGetCustomDeviceProvisioningProperties</td>
    * 		<td><p>A callback function invoked during the provisioning process of the device ID created by the app on the device. 
    * 			Typical implementation collects an out-of-band provisioning token from the user.<br />
    * 			The function receives a function argument <b>resumeDeviceProvisioningProcess</b>, which must be called to resume the provisioning process, 
    * 			and transfers the custom provisioning data as a JSON hash map.</p>
    * 			<b>Example:</b>
    * <pre class="code">
    * In initOptions.js:
    * var wlInitOptions = {
    * 	...
    * 	...
    * 	onGetCustomDeviceProvisioningProperties: collectCustomProvisioningProperties,
    * 	...
    * }
    * 
    * In application JavaScript file:
    * function collectCustomProvisioningProperties (
    *	resumeDeviceProvisioningProcess) { 
    *		// Collect provisioning token from user resumeDeviceProvisioningProcess(
    *		{
    *			token: token
    *		}
    *	);
    * } 
    * </pre>
    * 			</td>
    *	</tr>
    * </table>
    * @note {Note} The <i>onSuccess</i> function is used to initialize the application.<br />
    * 	If an <i>onFailure</i> function is not passed, a default <i>onFailure</i> function is called. If onFailure is passed, it overrides any specific failure-handling function.
    * @methodOf WL.Client#
    * @name WL.Client#init
    */
  this.init = function (initOptions) {};

  /**
    *  This method invokes a procedure that is exposed by an IBM Worklight adapter. Prior to invoking a procedure, a connect request to the Worklight Server is first initiated.
    * @description
    * @param invocationData Mandatory. A JSON block of parameters. For a description of the structure of the parameter block.<br />
    * The <code>WL.Client invokeProcedure </code>function accepts the following JSON block of parameters:
    * <pre class="code">
    * {
    * 	adapter : 'adapter-name',
    *	procedure : 'procedure-name',
    *	parameters : [],
    *	compressResponse : true/false
    * }
    * </pre>
    * <table border="1">
    * 	<tr>
    * 		<th><b>Property</b></th>
    * 		<th><b>Description</b></th>
    * 	</tr>
    * 	<tr>
    * 		<td>adapter</td>
    * 		<td><p>Mandatory. A string that contains the name of the adapter as specified when the adapter was defined.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>procedure</td>
    * 		<td><p>Mandatory. A string that contains the name of the procedure as specified when the adapter was defined.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>parameters</td>
    * 		<td><p>Optional. An array of parameters that is passed to the back-end procedure.</p></td>
    * 	</tr>
    * 	<tr>
    * 		<td>compressResponse</td>
    * 		<td><p>Optional. A string that requests the response from the server to be sent in a compressed format to
    *		reduce the amount of data that is transferred between Worklight Server and the device.
    *		The default value, if <i>compressResponse</i> is not specified, is <i>false</i>.<br />
    *		<b>Note:</b><br /> This option is applicable for Android, iOS, Windows Phone 8, BlackBerry 10, Mobile Web, and Adobe AIR.
    *		For Mobile Web applications, compression is supported only when the device browser can decompress <i>GZIP</i> data.<br />
    *		If the size of the payload is larger than the compress.response.threshold property set on the server, this option is ignored.
    *		</p></td>
    *	</tr>
    * </table>
    * 
    * @param options Optional. A standard options object, augmented with the following property:
    * <ul>
    * <li>
    * The <b>success handler</b> response object can contain the following properties:
    * <table border="1">
    * 	<tr>
    * 		<th><b>Property</b></th>
    * 		<th><b>Description</b></th>
    * 	</tr>
    * 	<tr>
    * 		<td>invocationContext</td>
    * 		<td><p>The <i>invocationContext</i> object that was originally passed to the Worklight Server in the callback object.</p></td>
    * 	</tr>
    *	<tr>
    *		<td>invocationResult</td>
    * 		<td><p>An object that contains the data that is returned by the invoked procedure, and the invocation status. Its format is as follows:<br />
    * <pre class="code">
    * invocationResult = {
    * 	isSuccessful: Boolean,
    * 	errors : "Error Message"
    * 	// Procedure results go here
    * }
    * </pre>
    * 		 Where: <br />
    * 		<ul>
    * 			<li>isSuccessful – Contains <code>true</code> if the procedure invocation succeeded, <code>false</code> otherwise.
    * 			If the invocation failed, the failure handler for the request is called.
    * 			<li>errors – An optional array of strings containing error messages.
    * 		</ul>
    * 		</p></td>
    * 	</tr>
    * 		<tr>
    * 			<td>parameters</td>
    * 			<td><p>Optional. An array of parameters that is passed to the back-end procedure.</p></td>
    * 		</tr>
    * </table>
    * </li>
    *<li><b>timeout:</b> Integer. Number of milliseconds to wait for the server response before failing with a request timeout.</li>
    *<li>The <b>failure handler</b> of this call is called in two cases:</li>
    *<ul>
    *<li>The procedure was called but failed. In this case, the <i>invocationResult</i> property is added to the response received by the failure handler.
    * This property has the same structure as the <i>invocationResult</i> property returned to the success handler,
    *  but the value of the <i>isSuccessful</i> attribute is <i>false</i>. For the structure of the <i>invocationResult</i> property, see invocationResult.</li>
    * <li>A technical failure resulted in the procedure not being called. In this case, the failure handler receives a standard response object.</li>
    *</ul>
    *</ul>
    *
    * @return {Promise} Resolved when the operation is successful. Rejected when there is a failure.
    *
    *
    * @methodOf WL.Client#
    */
  this.invokeProcedure = function (invocationData, options) {};

  /**
   * This method is deprecated.
   * @deprecated This method is deprecated.
   * @note {Note} This method is deprecated since IBM Worklight V4.1.3. Use <b>WL.Device.getNetworkInfo</b> instead.<br />
   * 		Returns true if the application is connected to the IBM Worklight Server.
   * 
   * @methodOf WL.Client#
   */
 this.isConnected = function () {};
  
  
  /**
    * This method checks whether the user is authenticated.
    * @description Checks whether the user is authenticated in a specified resource realm, or in the resource realm that was assigned to the application when it was deployed.
    * @param realm Optional. The name of a realm name defined in the authenticationConfig.xml file.<br />
    * 		If no value is specified, the method uses the resource realm assigned to the application when it was deployed.
    * @returns 
    * <ul>
    * 	<li> <code>true</code> if the user is authenticated in the realm.
    * 	<li> <code>false</code> otherwise.
    * </ul>
    * @methodOf WL.Client#
    */
  this.isUserAuthenticated = function (realm) {};

  /**
    * Report user activity.
    * @description <p>This method is used to report user activity for auditing or reporting purposes.<br />
    * The IBM Worklight Server maintains a separate database table to store application statistics.</p>
    * @note {Note} To ensure that the activity is stored in the database, set <b>reports.exportRawData</b> to true in the <b>worklight.properties</b> file.
    * @param activityType Mandatory. A string that identifies the activity.
    * @methodOf WL.Client#
    */
  this.logActivity = function (activityType) {};

  /**
    * This method logs in to a specific realm.
    * @description An asynchronous function. Logs in to a specific realm.
    * @param realm Mandatory. A realm that defines how the login process is performed. The realm is the one defined in the application descriptor.
    * @param options Optional. A standard options object.
    * @methodOf WL.Client#
    */
  this.login = function (realm, options) {};

  /**
    * This method logs out to a specific realm.
    * @description An asynchronous function that logs out of a specified realm.
    * @param realm Optional. The realm to be logged out of.<br />
    * 			Specify NULL to log out of the resource realm assigned to the application when it was deployed.<br />
    * @param options Optional. A standard options object.
    * @methodOf WL.Client#
    */
  this.logout = function (realm, options) {};

  /**
    * Minimize a widget on Adobe Air.
    * @description This method minimizes the AIR widget to the taskbar, or to the tray, as defined in the application descriptor.
    * @note {Note} This method is only applicable to widgets that are running on Adobe AIR.
    * @methodOf WL.Client#
    */
  this.minimize = function () {};

  /**
    * This method reloads the application
    * @description It can be used to recover an application from errors. It is preferable to avoid using it and to use alternative error handling mechanisms instead. 
    *  		The method is mainly available for compatibility with earlier versions. 
    * @methodOf WL.Client#
    */
  this.reloadApp = function () {};

  /**
    * This method removes the global HTTP header added by the <i>WL.Client.addGlobalHeader</i> API call
    * @description 
    * @param headerName Mandatory. The name of the header to be removed.
    * @example
    * WL.Client.removeGlobalHeader("MyCustomHeader");
    * @methodOf WL.Client#
    * @name WL.Client#removeGlobalHeader
    */
  this.removeGlobalHeader = function (headerName) {};

  /**
    * This method sets the interval of the heartbeat signal.
    * @description Sets the interval of the heartbeat signal sent to the Worklight Server to the specified number of seconds. 
    * 		The heartbeat is used to ensure that the session with the server is kept alive when the app does not issue any call to the server (such as <i>invokeProcedure</i>).
    * @param interval Mandatory. An integer value, denoting the interval in seconds between heartbeat messages automatically sent by WLClient to the Worklight Server.<br />
    * 			An interval value of -1 disables the heartbeat:<br />
    * 			<code>WL.Client.setHeartBeatInterval(-1)</code>
    * @methodOf WL.Client#
    */
  this.setHeartBeatInterval = function (interval) {};

  /**
    * This method removes the global HTTP header added by the <i>WL.Client.addGlobalHeader</i> API call
    * @description
    * @param headerName Mandatory. The name of the header to be removed.
    * @example
    * WL.Client.removeGlobalHeader("MyCustomHeader");
    * @methodOf WL.Client#
    */
  this.removeGlobalHeader = function (headerName) {};

  /**
    * This method creates a user preference, or updates the value of an existing user preference.
    * @description An asynchronous function that creates a user preference, or updates the value of an existing user preference, as follows:
    * <ul>
    * 	<li>If a user preference with the specified user key is already defined, the user preference value is updated.</li>
    * 	<li>If there is no user preference defined with the specified key, a new user preference is created with the specified key and value. However, 
    * 	if there are already 100 preferences, no preference is created, and the failure handler of the method is called.</li>
    * </ul>
    * @note {Note} The local user preferences in the application are updated only when a successful response is received from the server.
    * @param key Mandatory. The user preference key. Can be up to 128 characters long.
    * @param value Mandatory. The value of the user preference. Can be up to 3072 characters long.
    * @param options Optional. A standard options object.
    * 
    * @methodOf WL.Client#
    */
  this.setUserPref = function (key, value, options) {};

  /**
    * This method creates or updates one or more user preferences.
    * @description An asynchronous function that creates one or more new user preferences, 
    * 		updates the values of one or more existing user preferences, or both. For each user preference key and value pair provided, the following action occurs:
    * <ul>
    * 	<li>If a user preference with the specified user key is already defined, the user preference value is updated.</li>
    * 	<li> If there is no user preference defined with the specified key, a new user preference is created with the specified key and value.</li>
    * </ul>
    * If adding the new user preferences would result in the number of user preferences exceeding 100, then no user preferences are added or updated, and the failure handler of the method is called. 
    * @note {Note}  The local user preferences in the application are updated only when a successful response is received from the server.
    * @param userPrefsHash Mandatory. A hash object that contains user preference key and value pairs. The key can be up to 128 characters long. The value can be up to 3072 characters long.
    * @param options Optional. A standard options object.
    * 
    * @methodOf WL.Client#
    */
  this.setUserPrefs = function(userPrefsHash, options) {};

  /**
    * This method refreshes user data after an exception.
    * @description Use this method when the application receives an exception after calling the <code>invokeProcedure()</code> method. The method refreshes the data for the following methods:
    * <ul>
    * 	<li><code>WL.Client.getUserName(realm)</code></li>
    * 	<li><code>WL.Client.getLoginName(realm)</code></li>
    * 	<li><code>WL.Client.isUserAuthenticated(realm)</code></li>
    * </ul>
    * 	After such an exception, you can verify the user authentication status by calling this function first, and then the <code>isUserAuthenticated()</code> method. 
    * @param options Optional. A standard options object.
    * 
    * @methodOf WL.Client#
    */
  this.updateUserInfo = function(options) {};

  /**
    * Return the language code of the language being used.
    * @description  This method returns the language or dialect code of the language currently being used for the application.
    * @note {Note}  This method is not relevant for mobile operating systems. Use mobile locale methods instead.
    * @returns The language or dialect code of the currently set language, or NULL if no language is set. The language or dialect code has the format ll or ll-cc, 
    * 		where ll is a two-letter ISO 639-1 language code and cc is a two-letter ISO 3166-1-alpha-2 country or region code.
    * 
    * @methodOf WL.Client#
    */
  this.getLanguage = function() {};


  /**
    * Purges the internal event transmission buffer.
    * <p>
    * The internal event transmission buffer is purged, and all events awaiting transmission are permanently lost.		     
    * @methodOf WL.Client#
    */
  this.purgeEventTransmissionBuffer = function() {};

  /**
    * Configures the transmission of events from the client to the server, according to the provided transmission policy.
    * @param {object} policy The policy object.
    * @param {boolean} [policy.eventStorageEnabled] A Boolean value that determines where events are stored. If the value is <code>true</code>, events may be stored in HTML5 session storage. If the value is <code>false</code>, events that are waiting for transmission are stored in memory. The default value is <code>false</code>.
    * 				<br> The value <code>true</code> should be used only if the developer of the policy is not concerned about privacy issues involved in storing the events, which include the user's device context.
    * @param {number} [policy.interval] The transmission interval, in milliseconds. The default value is 60000 (one minute). Before events are transmitted, they are accumulated in storage.
    * @methodOf WL.Client#
    */
  this.setEventTransmissionPolicy = function(policy) {};

  /**
    * Transmits a provided event object to the server.
    * <p>
    * An event object is added to the transmission buffer. The event object is either transmitted immediately, 
    * if the immediate parameter is set to <code>true</code>, otherwise it is transmitted according to the transmission policy. 
    * For more information, see <code>WL.Client.setEventTransmissionPolicy</code>. One of the properties for the event object might be the device context, which comprises geo-location and WiFi data. 
    * If no device context is transmitted as part of the event, the current device context, as returned by <code>WL.Device.getContext</code>, is added automatically to the event during the transmission process.
    * 
    * @param {object} event The event object that is being transmitted. The event object is either a literal object, or a reference to an object.
    * @param {boolean} [immediate] A Boolean flag that indicates whether the transmission should be immediate (<code>true</code>), or should be based on the transmission policy's interval (<code>false</code>). 
    * 					If immediate is <code>true</code>, previously buffered events are transmitted, as well as the current event. The default value is <code>false</code>.
    * @methodOf WL.Client#
    */
  this.transmitEvent = function(event, immediate) {};

  /**
    * Creates a challenge handler object.A realm name must be supplied as a parameter.
    * @param realmName The realm name representing the challange, in configuration file (authenticationConfig.xml)
    * @methodOf WL.Client#
    */
  this.createChallengeHandler = function(realmName) {
    //				// Creates abstract challenge handler
    var challengeHandler = new AbstractChallengeHandler(realmName);

  };
  
  /**
   * This method creates a challenge handler object to handle challenges that are sent by the Worklight Server. 
   * A WLChallenge handler works only with an authentication realm that is based on the Worklight authentication protocol, 
   * that is, for which the server side authenticator instance extends one of the Worklight provided authenticators, 
   * such as WorklightProtocolAuthenticator or UsernamePasswordAuthenticator, or directly implements the WorklightAuthenticator interface.  
   * There must be only one challenge handler per realm. To comply with the Worklight authentication protocol, 
   * the challenge that the challenge handler receives must be a JSON object.
   * 
   * When you create a WLChallengeHandler, you must implement the following methods: 
   * handleChallenge() - This method is called when the Worklight Server returns a challenge for the realm.
   * processSuccess() - This method is called when the Worklight Server reports an authentication success.
   * handleFailure() - This method is called when the Worklight Server reports an authentication failure.
   * 
   * @param realmName – The realm name that represents the challenge, 
   * in the authenticationConfig.xml configuration file. Use this name to identify the realm that requires authentication. 
   * Used to identify which realm requires authentication. 
   * 
   * @methodOf WL.Client#
   * 
   */
  this.createWLChallengeHandler = function (realmName) {};

  /**
    * This method creates a new challenge handler instance responsible for a specified realm. 
    * In order for it to function developer must implement the following mandatory methods, 
    * as described in IBM Worklight InfoCenter. 
    * 
    * isCustomResponse() 
    * handleChallenge() 
    *<p>
    * NOTE: This method is for Device Provisioning only.
    * 
    * @param realm name must be supplied as a parameter. The realm name representing the challange, in configuration file (authenticationConfig.xml)
    * @methodOf WL.Client#
    */
  this.createProvisioningChallengeHandler= function (realmName) {};

  /**
    * Saves a key/value pair such that it is available to other applications participating in
    * simple shared data who are in the same application family, defined by the same family name
    * and same application signing key.
    *
    * This API call is only applicable in Android and IOS environments.  It is a safe, but no-op,
    * call in other environments.
    *
    * @methodOf WL.Client#
    * @param object containing the key/value pair to share, like {key: 'myKey', value: 'myValue'}
    * @return promise
    */
  this.setSharedToken = function(object) {};

  /**
    * Retrieves a previously saved value associated with key from application participating in
    * simple shared data who are in the same application family, defined by the same family name
    * and same application signing key.
    *
    * This API call is only applicable in Android and IOS environments.  It is a safe, but no-op,
    * call in other environments.
    *
    * @methodOf WL.Client#
    * @param object containing the key to retrieve, like {key: 'myKey'}
    * @return promise containing the retrieved value, or null if no value is found
    */
  this.getSharedToken = function(object) {};

  /**
    * Clears a previously saved value associated with key from applications participating in
    * simple shared data who are in the same application family, defined by the same family name
    * and same application signing key.
    *
    * This API call is only applicable in Android and IOS environments.  It is a safe, but no-op,
    * call in other environments.
    *
    * @methodOf WL.Client#
    * @param object containing the key to clear, like {key: 'myKey'}
    * @return promise
    */
  this.clearSharedToken = function(object) {};
  
  /**
    * Checks whether direct update is available.
    * @description An asynchronous function that checks if direct update is available. 
    * If direct update is available, then a challenge handler is triggered. 
    * If an onSuccess callback is received, then there is no direct update available on the server.
    * @param options Optional. A standard options object.
    * @methodOf WL.Client#
	*/
    
	this.checkForDirectUpdate = function(options){};
//  /**
//   * This function ...
//   * @methodOf WL.Client#
//   */
//  this.todo = function () {};
//
// /**
//   * This function ...
//   * @methodOf WL.Client#
//   */
//  this.todo = function() {};
  
			
  /**
    * @class 
    * 		Create challengeHandler object using <code>WL.Client.createChallengeHandler(realmName)</code> to call methods of this class.
    * @name WL.Client.AbstractChallengeHandler
    * @ilog.undocumented.jsFile
    * @ilog.undocumented.constructor
    */
  function AbstractChallengeHandler() {

    /**
      * If isCustomResponse returns TRUE, the Worklight framework calls handleChallenge(). This function is used to perform required actions, 
      * such as hiding the application screen, displaying the login screen, or other actions required to pass the challenge successfully.
      * @param challenge the challenge to handle
      * @methodOf WL.Client.AbstractChallengeHandler#
      * @name WL.Client.AbstractChallengeHandler#handleChallenge
      */
    this.handleChallenge = function (challenge) {};

    /**
      * This function is used to send collected credentials to a specific adapter procedure. It has the same signature as the WL.Client.invokeProcedure() API.
      * @param invocationData
      *            Mandatory. A JSON block of parameters. <br>
      *            <code>{<br>
      *            adapter : adapter-name.wlname,<br>
      *            procedure : adapter-name.procedure-name.wlname,<br>
      *            parameters : [],<br>
      *            }</code>
      * 
      * @param options
      *            Optional. Parameters hash.
      * @methodOf WL.Client.AbstractChallengeHandler#
      * @name WL.Client.AbstractChallengeHandler#submitAdapterAuthentication
      */
    this.submitAdapterAuthentication = function (invocationData, options) {};


    /**
      * This function is used to send collected credentials to a specific URL. The developer can also specify request parameters, headers, and callback.
      * @param reqURL The url to send data to
      * @param options Other options like timeout, extra headers
      * @param submitLoginFormCallback Callback method when opration is done
      * @methodOf WL.Client.AbstractChallengeHandler#
      * @name WL.Client.AbstractChallengeHandler#submitLoginForm
      */
    this.submitLoginForm = function (reqURL, options, submitLoginFormCallback) {};

    /**
      * Used to notify the Worklight framework that the authentication successfully finished. 
      * The Worklight framework then automatically issues the original request that triggered the authentication.
      * @methodOf WL.Client.AbstractChallengeHandler#
      * @name WL.Client.AbstractChallengeHandler#submitSuccess
      */
    this.submitSuccess = function() {};

    /**
      * This function notifies the Worklight framework that the authentication process completed with failure. 
      * The Worklight framework then disposes of the original request that triggered the authentication.
      * @param err Error message if available
      * @methodOf WL.Client.AbstractChallengeHandler#
      * @name WL.Client.AbstractChallengeHandler#submitFailure
      */
    this.submitFailure = function () {};

    /**
      * This function is called each time that a response is received from the server. 
      * It is used to detect whether the response contains data that is related to this challenge handler, and returns TRUE if so, and FALSE if not.
      * @param transport The response that arrived from the server
      * @return true If the response is a challange that this handler handles 
      * @methodOf WL.Client.AbstractChallengeHandler#
      * @name WL.Client.AbstractChallengeHandler#isCustomResponse
      */
    this.isCustomResponse = function(transport) {};
	
  };
  //ChallengeHandler.isCustomResponse = function(transport) {};
	        

};


__WL.prototype.Client = new __WLClient;

		
		
		
		