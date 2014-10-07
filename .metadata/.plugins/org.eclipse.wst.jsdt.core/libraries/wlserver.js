/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/**
 * WLServer documentation
 * @name WL.Logger
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 * @class
 */
__WLLogger = function() {

	/**
	 * Writes a debug message to the
	 * <code><Worklight Root Directory>/server/log/server/server.log</code>>
	 * file.
	 * 
	 * @param value Mandatory. A string containing the message to be written to
	 *            the log file.
	 * @methodOf WL.Logger#
	 */
	this.debug = function(value) {
	};

	/**
	 * @deprecated Use <code>WL.Logger.info</code> instead.
	 * @methodOf WL.Logger#
	 */
	this.log = function(value) {
	};

	/**
	 * Writes an info message to the
	 * <code><Worklight Root Directory>/server/log/server/server.log</code>>
	 * file.
	 * 
	 * @param value
	 *            Mandatory. A string containing the message to be written to
	 *            the log file.
	 * @methodOf WL.Logger#
	 */
	this.info = function(value) {
	};

	/**
	 * Writes a warning message to the
	 * <code><Worklight Root Directory>/server/log/server/server.log</code>>
	 * file.
	 * 
	 * @param value
	 *            Mandatory. A string containing the message to be written to
	 *            the log file.
	 * @methodOf WL.Logger#
	 */
	this.warn = function(value) {
	};

	/**
	 * Writes an error message to the
	 * <code><Worklight Root Directory>/server/log/server/server.log</code>>
	 * file.
	 * 
	 * @param value
	 *            Mandatory. A string containing the message to be written to
	 *            the log file.
	 * @methodOf WL.Logger#
	 */
	this.error = function(value) {
	};

};

/**
 * @class
 * The IBM&reg; Worklight&reg; server-side JavaScript API comprises these methods and objects.<br />
 * <dl class="detailList">
 * 	<dt class="heading">Quick Reference</dt>
 * 	<dd>
 * 		<ul>
 * 			<li>Accessing a web service.<br />
 * 				<ul>
 * 					<li>WL.Server.invokeHttp</li>
 * 					<li>WL.Server.signSoapMessage</li>
 * 				</ul>
 * 			</li>
 * 			<li>Accessing a JDBC database.<br />
 * 				<ul>
 * 					<li>WL.Server.invokeSQLStoredProcedure</li>
 * 					<li>WL.Server.createSQLStatement</li>
 * 					<li>WL.Server.invokeSQLStatement</li>
 * 				</ul>
 * 			</li>
 * 			<li>Accessing a JMS-enabled messaging provider.<br />
 * 				<ul>
 * 					<li>WL.Server.readSingleJMSMessage</li>
 * 					<li>WL.Server.readAllJMSMessages</li>
 * 					<li>WL.Server.writeJMSMessage</li>
 * 					<li>WL.Server.requestReplyJMSMessage</li>
 * 				</ul>
 * 			</li>
 * 			<li>Calling other procedures.<br />
 * 				<ul>
 * 					<li>WL.Server.invokeProcedure</li>
 * 				</ul>
 * 			</li>
 * 			<li>Accessing an HttpServletRequest object.<br />
 * 				<ul>
 * 					<li>WL.Server.getClientRequest</li>
 * 				</ul>
 * 			</li>
 * 			<li>Accessing user details.<br />
 * 				<ul>
 * 					<li>WL.Server.getActiveUser</li>
 * 					<li>WL.Server.setActiveUser</li>
 * 				</ul>
 * 			</li>
 * 			<li>Subscribing to push notifications.<br />
 * 				<ul>
 * 					<li>WL.Server.createEventSource</li>
 * 					<li>WL.Server.createDefaultNotification</li>
 * 					<li>WL.Server.getUserNotificationSubscription</li>
 * 					<li>WL.Server.notifyAllDevices</li>
 * 					<li>WL.Server.notifyDeviceToken</li>
 * 					<li>WL.Server.notifyDeviceSubscription</li>
 * 					<li>WL.Server.sendMessage</li>
 * 				</ul>
 * 			</li>
 * 			<li>Accessing Server configuration.<br />
 * 				<ul>
 * 					<li>WL.Server.configuration</li>
 * 				</ul>
 * 			</li>
 * 			<li>Getting the user's current location information.<br />
 * 				<ul>
 * 					<li>WL.Server.getClientDeviceContext</li>
 * 				</ul>
 * 			</li>
 * 			<li>Handling events sent by the client.<br />
 * 				<ul>
 * 					<li>WL.Server.createEventHandler</li>
 * 					<li>WL.Server.setEventHandlers</li>
 * 				</ul>
 * 			</li>
 * 			<li>Recording data for auditing or reporting.<br />
 * 				<ul>
 * 					<li>WL.Server.logActivity</li>
 * 					<li>WL.Server.setApplicationContext</li>
 * 				</ul>
 * 			</li> 
 * 			<li>Debugging.<br />
 * 				<ul>
 * 					<li>WL.Logger.debug, error, and log</li>
 * 				</ul>
 * 			</li>
 * 			<li>Accessing a SAP Netweaver Gateway Backend Service<br />
 * 				<ul>
 * 					<li>WL.Server.fetchNWBusinessObject</li>
 * 					<li>WL.Server.createNWBusinessObject</li>
 * 					<li>WL.Server.deleteNWBusinessObject</li>
 * 					<li>WL.Server.updateNWBusinessObject</li>
 * 				</ul>
 * 			</li>
 * 		</ul>
 * 	</dd>
 * </dl>
 * @name WL.Server
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 * 
 */
__WLServer = function() {
	/**
	 * Invokes a procedure exposed by a Worklight&reg; adapter.
	 * 
	 * @param invocationData
	 *            The invokeProcedure function accepts the following JSON block
	 *            of parameters:<br />
	 *            <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>adapter</td>
	 * 			    <td>Mandatory. A string that contains the name of the adapter as specified when the adapter was defined.</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>procedure</td>
	 * 			    <td>Mandatory. A string that contains the name of the procedure as specified when the adapter was defined.</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>parameters</td>
	 * 			    <td>Optional. An array of parameter values that are passed to the back-end procedure. A parameter can be a scalar or an object.</td>
	 * 			  </tr>
	 * 			</table>
	 * 			Example of a JSON block of Parameters.</br.
	 * <pre class="code">
	 * {
	 * 	adapter : "AcmeBank",
	 * 	procedure : " getTransactions",
	 * 	parameters : [accountId, fromDate, toDate],
	 * };
	 * </pre>
	 *
	 * @returns The returned object has the following structure:
	 * <pre class="code">
	 * {
	 * 	isSuccessful: Boolean,
	 * 	errorMessages: ["Error Msg1", ...],
	 * 	// Application object returned by procedure
	 * }
	 * </pre>
	 * 			The invocation results object contains the following properties:<br />
	 * 			<table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>isSuccessful</td>
	 * 			    <td>Identifies whether the method invocation succeeded or failed. Valid values are:
	 * 				<b>true: </b> The method invocation succeeded. This is the default value. <br />
	 * 				<b>false: </b> The method invocation failed.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>errorMessages</td>
	 * 			    <td>Optional. An array of strings that contain error messages. If no errors are provided, the returned array is empty.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>Application object</td>
	 * 			    <td>Any object that is returned by the procedure.</td>
	 * 			  </tr>
	 * 			</table>
	 * @methodOf WL.Server#
	 */
	this.invokeProcedure = function(invocationData) {
	};

	/**
	 * Call an HTTP service.
	 * @description The method can be used only inside a procedure declared within an HTTP adapter. It calls a back-end HTTP service and converts the results to JSON.
	 * @param options
	 *            The invokeHttp function accepts the following JSON block of parameters:<br />
	 *            <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>method</td>
	 * 			    <td>Mandatory. Defines the HTTP method. Valid values are <code>get, post, put, </code>and <code>delete</code>.</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>returnedContentType</td>
	 * 			    <td>Optional. Defines the type of the content that is returned by the called HTTP service, overriding the HTTP response’s mime type.<br>
	 * 					If this parameter is not provided, the Worklight® Server handles the response according to the mime type. <br />
	 * 					If it is provided, the Worklight Server handles the response according to the indicated value. The field can receive the following values:<br />
	 * 			    <ul>
	 * 			    <li> <code>css, csv, html, javascript, json, plain,</code> and <code>xml</code>. 
	 * 			    If the invocation failed, the failure handler for the request is called.</li>
	 * 			    <li>Any mime type that includes one of these values (note that any response with mime type that contains javascript or json is considered to contain JSON objects).</li>
	 * 			    </ul>
	 * 			    </td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>returnedContentEncoding</td>
	 * 			    <td>Optional. Defines the encoding of the returned content. Default is <code>utf-8</code>.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			  <td>path</td>
	 * 			    <td>Mandatory. Defines the path of the URL defining the HTTP service.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>parameters</td>
	 * 			    <td>Optional. Defines the set of parameters that need to be passed to the HTTP service.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			  <td>headers</td>
	 * 			    <td>Optional. Defines the headers for the HTTP request.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			  <td>cookies</td>
	 * 			    <td>Optional. Defines cookies to be passed with the HTTP request.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 				<td>body</td>
	 * 			    <td>Defines the content of the request body.<br />
	 * 					<ul>
	 * 					<li>When the method is GET, this property is not allowed.</li>
	 * 					<li>When the method is POST, this property is optional.</li>
	 * 					</ul>
	 * 					<b>Note: </b> body.content must be a string. If you are explicitly creating a DOM object, such as in: 
	 * 					<code>var request = <soap:Envelope … </soap:Envelope>;</code>, you must convert the object to string before you assign it to body.content, for example: <code>request.toString();</code>
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			  <td>transformation</td>
	 * 			    <td>Optional. If defined, the response of the service undergoes the defined XSL transformation. 
	 * 					If the service returns HTML, the Worklight Server first converts the response to XHTML, and then runs the XSL transformation on the XHTML response.</td>
	 * 			  </tr>
	 * 			</table>
	 * 
	 * @returns The method returns the response of the HTTP service, after the
	 *         following processing:<br>
	 *		   <ol>
	 *         <li> If the service returns HTML, the Worklight Server converts the
	 *         HTML response to XHTML. If the service returns XML, the Worklight
	 *         Server keeps it as is.</li>
	 *         <li> If an XSL transformation has been defined in transformation
	 *         property, the Worklight Server executes the transformation on the
	 *         result of Step 1. The transformation should convert its XML input
	 *         to JSON. If no transformation was defined, the Worklight Server
	 *         automatically converts the result of Step 1 to JSON.</li>
	 *         </ol>
	 * @note {Note}  Since IBM Worklight V5.0.6, the path is no longer modified when you make the actual request. 
	 * 		You might therefore face an issue if you use the <b>parameters</b> property in the <code>WL.Server.invokeHttp</code> options with a query parameter specified in the path. You might end up with two ? signs on the request. 
	 * 		To avoid this, do not use query parameters in the path along with the parameters property in <code>WL.Server.invokeHttp</code> when using the method GET.
	 * @example 
	 * var response = WL.Server.invokeHttp(invocationData);
	 * response.responseHeader; // responseHeader property contains HTTP response headers
	 * response.statusCode; // statusCode property contains HTTP response status code
	 * @methodOf WL.Server#
	 */
	this.invokeHttp = function(options) {
	};
	
	 /**
	 * Sign a fragment of a SOAP envelope.
	 * @description The method can be used only inside a procedure that is declared within an HTTP adapter. 
	 * 		It signs a fragment of the specified envelope with ID wsId, by using the key in the specified keystoreAlias, inserting the digital signature into the input document.<br />
	 * 		To use <code>WL.Server.signSoapMessage()</code> API when IBM&reg; Worklight&reg; runs on IBM WebSphere&reg; Application Server you might need to add a JVM argument that instructs WebSphere to use a specific SOAPMessageFactory implementation instead of a default one. 
	 * 		To do this, you must go to <b>Application servers {server_name} > Process definition > Java Virtual Machine</b> and provide the following argument under Generic JVM arguments, typing in the code phrase exactly as it is presented here:<br />
	 * 		<code>-Djavax.xml.soap.MessageFactory=com.sun.xml.internal.messaging.saaj.soap.ver1_1.SOAPMessageFactory1_1Impl</code><br />
	 * 		Then, you must restart the JVM.<br />
	 * 		<b>Important: </b>This workaround is only for IBM WebSphere.
	 * 	
	 * @param envelope
	 * 		   Mandatory. The SOAP envelope that contains the fragment to sign.
	 *
	 * @param wsId
	 *		   Mandatory. The value of the wsu:Id attribute, within the envelope, which identifies the fragment to be signed.	
	 * 
	 * @param keystoreAlias
	 *		   Mandatory. The alias of the certificate or key entry in the keystore that is to be used for the signature.
	 * @example 
	 * var myEnvelope =
	 * &lt;soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"&gt;
	 * &lt;soapenv:Header &gt;
	 * ...
	 * &lt;/soapenv:Header &gt;
	 * &lt;soapenv:Body wsu:Id="an-element-id" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" &gt;
	 * ...
	 * &lt;/soapenv:Body&gt;
	 * &lt;/soapenv:Envelope&gt ;
	 * 		
	 * WL.Server.signSoapMessage(myEnvelope , "an-element-id", keystoreAlias);
	 * @methodOf WL.Server#
	 */
	this.signSoapMessage = function(envelope, wsId, keystoreAlias) {
	};
	
	/**
	 * Create a prepared SQL statement.
	 * @description The method can be used only inside a procedure declared within an SQL adapter. It must be used outside of the scope of any JavaScript function.<br />
	 * 			Creates a prepared SQL statement to be later invoked with <code>WL.Server.invokeSQLStatement</code>.
	 * @param statement
	 *            Mandatory string. An SQL statement with one of the following verbs: select,
	 *            insert, delete, update. Use question marks ("?") as parameter
	 *            placeholder.
	 * @returns An object representing the prepared statement.
	 * @example 
	 * // Outside any function scope
	 * var procedure1Statement = WL.Server.createPreparedStatement("select COLUMN1, COLUMN2 from TABLE1 where COLUMN3 = ?");
	 * @methodOf WL.Server#
	 */
	this.createSQLStatement = function(statement) {
	};
	
	/**
	 * Calls a remote Cast Iron Orchestration.
	 * @description The method can be used only inside a procedure declared within a CastIron adapter and is used to call a back-end CastIron Orchestration.<br />
	 * 		
	 * @param input
	 *           <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 
	 * 			  <tr>
	 * 			    <td>appName</td>
	 * 			    <td>Mandatory. Name of the orchestration that the CastIron Adapter will attempt to connect to.</td>
	 * 			  </tr>
	 *  		  <tr>
	 * 			    <td>headers</td>
	 * 			    <td>Optional. Additional headers to be added that my be required by the Cast Iron orchestration</td>
	 * 			  </tr>
	 * 
	 * 			</table>
	 * @returns An object returned from the Cast Iron orchestration.
	 * @example 
	 * var response = WL.Server.invokeCastIron(invocationData);
	 * @methodOf WL.Server#
	 */
	this.invokeCastIron = function(input) {
	};

	/**
	 * Calls a prepared SQL statement.
	 * @description The method can be used only inside a procedure that is declared within an SQL adapter.<br />
	 * 		It calls a prepared SQL statement that was created with WL.Server.createSQLStatement.
	 * @param options
	 * <pre class="code">
	 * {
	 * 		//Mandatory
	 * 		preparedStatement : prepared-statement-variable,
	 * 
	 * 		//Optional
	 * 		parametrers: [value-1, value-2, .... ]
	 * }
	 * </pre>
	 *            The invokeSQLStatement function accepts the following JSON
	 *            block of parameters:
	 *            <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>preparedStatement</td>
	 * 			    <td>Mandatory. The prepared statement that was defined previously with createSQLStatement.</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>parameters</td>
	 * 			    <td>Optional. An array of parameters to the prepared statement.</td>
	 * 			  </tr>
	 * 			</table>
	 *            
	 * 
	 * @returns The method returns the result set of the prepared statement.
	 *         This returned value is formatted as a JSON array, 
	 * 		   in which each element corresponds to a row in the result set of the prepared statement.
	 * <pre class="code">
	 * // Outside of the function scope
	 * var procedure1Statement = WL.Server.createPreparedStatement("select COLUMN1, COLUMN2 from TABLE1 where COLUMN3 = ?");
	 * function procedure1(param) {
	 * return WL.Server.invokePreparedStatement({
	 * 	preparedStatement : procedure1Statement,
	 * 	parameters : [param]
	 * });
	 * }
	 * </pre>
	 *
	 * @methodOf WL.Server#
	 */
	this.invokeSQLStatement = function(options) {
	};

	/**
	 * The method can only be used inside a procedure declared within an SQL
	 * adapter. Calls a stored procedure on a database.
	 * @description The method can be used only inside a procedure that is declared within an SQL adapter.<br />
	 * 			It calls a stored procedure on a database.
	 * @param options
	 *            The invokeSQLStoredProcedure function accepts the following
	 *            JSON block of parameters:
	 * <pre class="code">
	 * {
	 * 	//Mandatory
	 * 	procedure : procedure-name,
	 * 		
	 * 	//Optional
	 *	parametrers: [value-1, value-2, ... ] 
	 * }
	 * </pre>
	 * 
	 * @returns The method returns the result set of the SQL stored procedure. 
	 *		   This returned value is formatted as a JSON array, in which each 
	 * 		   element corresponds to a row in the result set of the SQL stored procedure.
	 *
	 * @methodOf WL.Server#
	 */
	this.invokeSQLStoredProcedure = function(options) {
	};
	/**
	 * Read a single message from the given destination.
	 * @description The method attempts to read a single message from the given destination.<br />
	 * 		If the destination is a queue, this method also removes the message from the queue.<br />
	 * 		IBM&reg; Worklight&reg; does not support reading from a topic in JMS adapters. The destination specified must be a queue.
	 * @param options
	 *            The readSingleJMSMessage function accepts the following 
	 *            JSON block of parameters:
	 * <pre class="code">
	 * {
	 * 		//Mandatory
	 * 		destination : jndi-name-of-the-destination,
	 * 
	 * 		//Optional
	 * 		timeout : wait-timeout-in-milliseconds,
	 * 		filter : jms-filter-string
	 * }
	 * </pre>
	 *			The JSON block contains the following properties:<br />
	 *			
	 *            <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>destination</td>
	 * 			    <td>Mandatory. The name of the administered destination object, held in the JNDI repository, that the message will be received from. 
	 * 					For example: If the administered destination object is a JEE container managed object, the value may be <code>java:comp/env/....</code></td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>timeout</td>
	 * 			    <td>Optional. The time, in milliseconds, that the method will wait for a message, if a message is not immediately available. 
	 * 						If timeout is not specified, the method will not wait for a message.<br />
	 * 						<b>Special values for this parameter:</b><br />
	 * 						<b>0</b> for wait indefinitely.<br />
	 * 						<b>&lt;0</b> for do not wait.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>filter</td>
	 * 			    <td>Optional. The JMS selector string applied to the wait call. The filter follows the standard JMS selector syntax rules.</td>
	 * 			  </tr>
	 * 			</table>
	 * @returns The method returns the received message. 
	 * 		   If no message is immediately available on the destination, the method waits for the specified millisecond timeout. 
	 *		   If no message is available after the specified timeout, the method returns successfully but with no message.<br />
	 *		 	The message must be of type JMSText. If the message is not of type JMSText, 
	 *			it is read from the destination and written to the warnings element of the response using the <code>javax.jms.Message.toString()</code> method.<br />
	 *			The returned object has the following structure:
	 * <pre class="code">
	 * {
	 * 	isSuccessful: Boolean,
	 * 	errors      : optional-error-messages,
	 * 	warnings    : optional-warnings-messages
	 * 	message     : { body : body of the message,
	 * 		properties : properties: of the message 
	 * 	}
	 * }
	 * </pre>
	 *			The invocation results object contains the following properties:<br />
	 *			 <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>isSuccessful</td>
	 * 			    <td>Identifies whether the method invocation succeeded or failed. Valid values are:
	 * 				<b>true: </b> The method invocation succeeded. This is the default value. Also set to true if there is no message on the destination and the method returns without error.<br />
	 * 				<b>false: </b> The method invocation failed.
	 * 				</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>errors</td>
	 * 			    <td>Optional. Any errors during processing will appear here.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>warnings</td>
	 * 			    <td>Optional. Any warnings during processing will appear here. This includes warnings about any messages not of a supported JMS Message Type.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>message</td>
	 * 			    <td>Optional. The message, the message body, and the message properties are all optional.<br />
	 * 				<b>body</b> The message body. If no message is returned, this will not be available.<br />
	 * 				<b>properties</b> An array of message properties which follow the JMSMessage property rules. The following message properties can be returned:<br />
	 * 				<ul>
	 * 					<li>JMS* properties. For example: <code>JMSCorrelationID</code>.</li>
	 * 					<li>JMS_Provider_* properties. For example: <code>JMS_IBM_Format</code>.</li>
	 * 					<li>user properties. For example: <code>my_user_property</code>.</li>
	 * 				</ul>
	 * 				</td>
	 * 			  </tr>
	 * 			</table>
	 *
	 * @methodOf WL.Server#
	 */
	this.readSingleJMSMessage = function(options) {
	};
	
	/**
	 * Read all messages from the given destination.
	 * @description The method attempts to read all messages from the given destination.<br />
	 * If the destination is a queue, this method also removes the messages from the queue.<br />
	 * IBM&reg; Worklight&reg; does not support reading from a topic in JMS adapters. The destination specified must be a queue.
	 * @param options
	 *            The readAllJMSMessages function accepts the same set of parameters as readSingleJMSMessage.
	 * 
	 * @returns The method returns all available messages on the destination. If no messages are immediately available on the destination, the method waits for the specified millisecond timeout. 
	 * 			If no messages are available after the specified timeout, the method returns successfully but with no messages.<br />
	 * 			The messages must be of type JMSText. If an individual message is not of type JMSText, it is read from the destination and added to the warnings element of the response. 
	 * 			The method then continues to attempt to read messages from the destination. If there is an error processing the messages, an optional error parameter is returned in the result.<br />
	 * 			The returned object is a list of received messages. Each individual message holds the same body type and property list as <code>readSingleJMSMessage</code>.
	 * <pre class="code">
	 * //Example of a returned object:
	 * {
	 * 	isSuccessful : Boolean,
	 * 	messages : [
	 * 		{ 
	 *			body : body of the message,
	 * 			properties : {properties: of the message,
	 * 			...}
	 * 		},
	 * 		{ 
	 * 			body : body of the next message,
	 * 			properties  : {properties: of the next message,
	 * 			...}
	 * 		}
	 * 	]
	 * }
	 * </pre>
	 * @note {Note}  The timeout is applied per message. If a message is available within the timeout period, it is added to the list of received messages. The method then performs
	 * another wait with the same timeout for the next available message.
	 * @methodOf WL.Server#
	 */
	this.readAllJMSMessages = function(options) {
	};
	
	/**
	 * Write a single JMSText message to the given destination.
	 * @description The method writes a single JMSText message to the given destination.<br />
	 * 		The method options include write options, the message body, and message properties.
	 * @param options
	 *            The writeJMSMessage  function accepts the following 
	 *            JSON block of parameters:
	 * <pre class="code">
	 * {
	 * 		//Mandatory
	 * 		destination : jndi-name-of-the-destination,
	 *
	 * 		//Optional
	 *		message : {
	 * 			body : message body,
     * 			 properties : { message-properties }
     * 		}, 
	 * 		ttl : time-to-live-in-milliseconds
	 * }
	 * </pre>
	 *
	 * @returns If the method is successful, the JMSMessageID of the sent message is returned. The returned object has the following structure:
	 * <pre class="code">
	 * {
	 * 		isSuccessful : Boolean,
	 * 		errors : optional-error-messages,
	 * 		JMSMessageID : ID:jms-message-id
	 * }
	 * </pre>
	 *			The invocation results object contains the following properties:<br />
	 *			<table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>isSuccessful</td>
	 * 			    <td>Identifies whether the method invocation succeeded or failed. Valid values are:
	 * 				<b>true: </b> The method invocation succeeded. This is the default value. 
	 * 				<b>false: </b> The method invocation failed.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>errors</td>
	 * 			    <td>Optional. Any errors during processing will appear here.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>JMSMessageID</td>
	 * 			    <td>Optional. If the message was sent successfully, this is the message ID of the sent message. The message ID uses the standard of the underlying JMS Message provider.
	 * 					For example: JMSMessageID : <code>ID:414d234e132a43c123d2b3c1e5a4a4b32132c</code>.</td>
	 * 			  </tr>
	 * 			</table>
	 * @methodOf WL.Server#
	 */
	this.writeJMSMessage = function(options) {
	};
	
	/**
	 * Write a single JMSText message to the given destination and wait for the response.
	 * @description This method is designed for use when a service is called that uses the replyTo destination in the originating message to send the response to.<br />
	 * 		The IBM&reg; Worklight&reg; server creates a temporary JMS destination for the reply to be received on. The temporary JMS destination is deleted using the underlying JMS provider cleaning up rules. 
	 * 			The temporary destination that is created is of the same type as the specified destination.<br /> 
	 * 			For example: If the specified destination is a queue, then a temporary queue is created as the replyTo destination.
	 * @param options
	 *            The requestReplyJMSMessage   function accepts the following 
	 *            JSON block of parameters:
	 * <pre class="code">
	 * {
	 * 	//Mandatory
	 *	destination : jndi-name-of-the-destination,
	 *		
	 * 	//Optional
	 *	message : { 
	 * 		body : message body,
     * 		properties : { message-properties }
     * 	},
	 * 	timeout : wait-timeout-in-milliseconds,
	 * 	ttl : time-to-live-in-milliseconds
	 * }
	 * </pre>
	 *				The JSON block contains the following properties:<br />
	 *			   <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>destination</td>
	 * 			    <td>Mandatory. The name of the administered destination object, held in the JNDI repository, that the message is written to. The administered object can be defined as a queue or a topic. 
	 * 					For example: If the administered destination object is a JEE container managed object, the value might be  <code>java:comp/env/....</code></td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>message</td>
	 * 			    <td>Optional. The message to write to the destination. The message, the message body, and the message properties are all optional. 
	 * 					If there is no message body or message properties, an empty message is sent. The properties follow the same property naming and setting rules as standard JMS messages.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>timeout</td>
	 * 			    <td>Optional. The time, in milliseconds, that the method will wait for a message, if a message is not immediately available. 
	 * 						If timeout is not specified, the method will not wait for a message.<br />
	 * 						<b>Special values for this parameter:</b><br />
	 * 						<b>0</b> for wait indefinitely.<br />
	 * 						<b>&lt;0</b> for do not wait.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>ttl</td>
	 * 			    <td>Optional. The message time-to-live. The time is in milliseconds. If not specified, the time-to-live is set to infinite.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>filter</td>
	 * 			    <td>Optional. The JMS selector string applied to the wait call. The filter follows the standard JMS selector syntax rules.</td>
	 * 			  </tr>
	 * 			</table>
	 * @returns The requestReplyJMSMessage function follows the same syntax and rules as readSingleJMSMessage.
	 *
	 * @methodOf WL.Server#
	 */
	this.requestReplyJMSMessage  = function(options) {
	};
	
	 
	 /**
	 * This method returns a reference to the Java&trade; HttpServletRequest object that was used to invoke an adapter procedure.
	 * @description Returns a reference to the Java HttpServletRequest object that was used to invoke an adapter procedure. This method can be used in any adapter procedure.<br />
	 * 		Use this method to return headers or other information stored in an HttpServletRequest object.
	 *
	 * @retrun A reference to an HttpServletRequest object.
	 * @example 
	 * var request = WL.Server.getClientRequest();
	 * var userAgent = request.getHeader("User-Agent");
	 *
	 * @methodOf WL.Server#
	 */
	this.getClientRequest = function() {
	};
	
	/**
	 * Return a copy of the client device context.
	 * @description The latest copy of the client device context is returned. See {@link WL.Device.getContext}. When this method is called in the context of an invoke procedure call, the copy is at least as recent as when that call was made. 
	 * 			When this method is called in the context of an event handler, the copy is at least as recent as when the event was transmitted to the server.<br />
	 * 			This copy is synchronized transparently between the client and the server. Calling this method does not result in communications with the client.
	 *
	 * @return The method returns a copy of the client device context, as would be obtained from the <code>WL.Device.getContext</code> API function.
	 *
	 * @methodOf WL.Server#
	 */
	this.getClientDeviceContext = function() {
	};
	
	/**
	 * A map that contains all the server properties that are defined in the file <code>worklight.properties</code>.
	 * @description Both syntaxes are equivalent. When the property name contains a period ('.'), for example <code>local.IPAddress</code>, the array index syntax must be used.
	 * @example var addr = WL.Server.configuration["local.IPAddress"];
	 * @methodOf WL.Server#
	 */
	this.configuration = function() {
	};
	
	/**
	 * Returns an object with the user identity properties.
	 * @description Returns an object with the user identity properties, according to the following rules:<br />
	 * 			<ul>
	 * 				<li>If no realm is defined on the adapter, the method returns null (active user is unknown).</li>
	 * 				<li>If a realm is defined on the adapter:<br />
	 * 				<ul>
	 * 					<li>If there is no strong identity associated with the user (the user was authenticated in this session or in a previous session), the method returns <code>null</code>.</li>
	 * 					<li>If there is a strong identity associated with the user (from the current session or a previous one), the method returns the strong identity.</li>
	 * 				</ul>
	 * 				</li>
	 * 			</ul>
	 *
	 * @returns An object with the user identity properties, as defined by the
	 *         login module, with the following structure:
	 * <p>
	 * <ul>
	 * <li>userId - The login ID, mandatory. </li>
	 * <li>displayName - Optional. </li>
	 * <li>credentials - Optional. A string with the user's credentials, such as password.</li>
	 * <li>attributes - Optional. Custom user attributes. There are no constraints on the structure of the object.</li>
	 * </ul>
	 * </p>
	 * @example 
	 * {
	 * 	userId: "38017840288"
	 * 	displayName: "John Doe",
	 * 	attributes: {lastLogin: "2010-07-13 19:25:08.0 GMT"}
	 * }
	 * @methodOf WL.Server#
	 */
	this.getActiveUser = function() {
	};

	/**
	 * Create a user identity in a specified realm.
	 * @description Used in authenticator adapters at the end of the login sequence. Creates a user identity in the specified realm with the properties in the specified <code>identity</code> parameter. 
	 * 			As a result of this method, the user's session is considered authenticated. 
	 * @param realm
	 * 			Mandatory. The realm to log in to (as defined in the <code>authenticationConfig.xml</code> file).
	 * @param identity
	 *          Mandatory. A user identity object, as returned by WL.Server.getActiveUser, with the following structure:
	 * <p>
	 * <ul>
	 * <li>userId - The login ID, mandatory. </li>
	 * <li>displayName - Optional. </li>
	 * <li>credentials - Optional. A string with the user's credentials, such as password.</li>
	 * <li>attributes - Optional. Custom user attributes.</li>
	 * </ul>
	 * </p>
	 * @example 
	 * WL.Server.setActiveUser ("ACMERealm", {
	 * 	userId: "38017840288",
	 * 	displayName: "John Doe",
	 * 	attributes: {
	 * 	"firstName": "John",
	 * 	"lastName": "Doe",
	 * 	"lastLogin": "2010-07-13 19:25:08.0 GMT",
	 * 	}
	 * })
	 * @methodOf WL.Server#
	 */
	this.setActiveUser = function(realm, identity) {
	};
	
	/**
	 * Create an event handler.
	 * @description An event handler is created. To set the event handler, to implement callbacks for received events, see WL.Server.setEventHandlers.
	 * @param {object} aFilter An object that is used to filter incoming events. Events that match the filter are passed to aHandler 
	 * @param {function} aHandler  A function that is used to handle incoming events. Use a named function such as <code>function name(event)</code> in order for name to appear in reports and analytic output.
	 * @returns An event handler is returned, which is defined as:
	 * <pre><code>
	 * {
	 *    filter: aFilter
	 *    handler: aHandler
	 * }
	 * </code></pre>
	 * @methodOf WL.Server#
	 */
	this.createEventHandler = function(aFilter, aHandler){};
	
	/**
	 * Set event handlers, to implement callbacks for received events.
	 * @description Event handlers are set, to implement callbacks for received events. To disable all event handlers, pass an empty array to the WL.Server.setEventHandlers method.<br />
	 * 			For information on creating an event handler, see WL.Server.createEventHandler.
	 * @param {object[]} eventHandlers
	 * 		     An array, where each handler consists of an object that contains a filter and a handler function. 
	 * 			 Only events that match the filter are passed to the handler function. Each event handler has the format: <code>{filter: filterObject, handler: handlerFunction}</code>.
	 *
	 * @methodOf WL.Server#
	 */
	this.setEventHandlers = function(eventHandlers){};
	
	/**
	 * Report user activity.
	 * @description This method is used to report user activity for auditing or reporting purposes.<br />
	 * 		The IBM&reg; Worklight&reg; server maintains a separate database table to store application statistics.
	 * @param {string} activityType
	 * 		     A string that identifies the activity.
	 * @param {object} [deviceContext]
	 * 			 A device context object that contains information about the device, such as its geo location. 
	 * 			 If a value is not provided, then <code>WL.Server.getClientDeviceContext</code> is used. You can use deviceContext when handling events with <code>event.deviceContext</code>.
	 * @note {Note}  To ensure that the activity is stored in the database, set <code>reports.exportRawData</code> to true in the <code>worklight.properties</code> file.
	 *
	 * @methodOf WL.Server#
	 */
	this.logActivity = function(activityType, deviceContext){};
	
	/**
	 * Submit a notification to all a specified user's device subscriptions
	 * @description Submits a notification to all the device subscriptions of the specified user, according to the specified options.<br />
	 * 			For SMS notifications, the text property of the <b>notificationOptions</b> parameter contains the SMS text. A text message is sent as a single message if the text message length is less than or equal to 160 characters. 
	 * 			If the text message length is greater than 160 characters, the message is either split into multiple messages of 160 characters or less, or it is rejected. 
	 * 			The action that is taken depends on the configured SMS gateway. All other properties of <b>notificationOptions</b> are ignored.<br />
	 * 			In IBM Worklight V5.0.6, the JSON block for the notificationOptions parameter has changed. The JSON block that was used in IBM Worklight V5.0.5 and earlier is deprecated in IBM Worklight V5.0.6. 
	 * 			Support might be removed in any future version.<br />
	 * <p class="heading"><b> Parameters for IBM Worklight V5.0.5 and earlier</b> </p>
	 * The JSON block that was used in IBM Worklight V5.0.5 and earlier is deprecated in IBM Worklight V5.0.6. Support might be removed in any future version. 
	 * If the deprecated JSON block structure is used in IBM Worklight V5.0.6, a deprecation warning message is printed to the console.
	 * A notification message is still submitted to all supported environments, however, the notification message that is sent to a Windows Phone 8 device is sent as two notifications:
	 * <ul>
	 * 	<li> A tile message, which contains the badge, or count, and an alert, or title</li>
	 * 	<li> A raw message, which contains the payload </li>
	 * </ul>
	 * 
	 * <table border="1">
	 *	<tr>
	 *	<th><b>Property</b></th>
	 * 	<th><b>Description</b></th>
	 * 	</tr>
	 * 	<tr>
	 * 	<td>userSubscription</td>
	 * 	<td>Mandatory. A user subscription object, obtained by calling WL.Server.getUserNotificationSubscription</td>
	 * 	</tr>
	 * 	<tr>
	 * 	<td>notificationOptions</td>
	 * 	<td>Mandatory. The JSON block contains the following properties:
	 * 		<p>
	 * 			<dl class="detailList">
	 * 				<dt class="heading">badge</dt>
	 * 					<dd>Mandatory. An integer value to be displayed in a badge on the application icon.</dd>
	 * 			</dl>
	 * 			<dl class="detailList">
	 * 				<dt class="heading">sound</dt>
	 * 					<dd>Optional. The name of a file to play when the notification arrives.</dd>
	 * 			</dl>
	 * 			<dl class="detailList">
	 * 				<dt class="heading">alert</dt>
	 * 					<dd>Optional. A string to be displayed in the alert.</dd>
	 * 			</dl>
	 * 			<dl class="detailList">
	 * 				<dt class="heading">activateButtonLabel</dt>
	 * 					<dd>Optional. The label of the dialog box button that allows the user to open the app upon receiving the notification.</dd>
	 * 			</dl>
	 * 			<dl class="detailList">
	 * 				<dt class="heading">payload</dt>
	 * 					<dd>Optional. A JSON block that is transferred to the application if the application is opened by the user when the notification is received, or if the application is already open.</dd>
	 * 			</dl>
	 * 		</p>
	 * </td>
	 * 	</tr>
	 * </table>
	 * 
	 * @param userSubscription
	 * 		     Mandatory. A user subscription object, obtained by calling WL.Server.getUserNotificationSubscription.
	 * @param notificationOptions
	 * 			 Mandatory. The JSON block contains the following properties:
	 * 	<p>
	 * 		<dl class="detailList">
	 * 				<dt class="heading">APNS</dt>
	 * 				<dd>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">alert</dt>
	 * 						<dd>Optional. A string to be displayed in the alert.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">badge</dt>
	 * 						<dd>Mandatory. An integer value to be displayed in a badge on the application icon.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">sound</dt>
	 * 						<dd>Optional. The name of a file to play when the notification arrives.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">actionKey</dt>
	 * 						<dd>Optional. The label of the dialog box button that allows the user to open the app upon receiving the notification.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">payload</dt>
	 * 						<dd>Optional. A JSON block that is transferred to the application if the application is opened by the user when the notification is received, or if the application is already open.</dd>
	 * 					</dl>
	 * 				</dd>
	 * 		</dl>
	 * 		<dl class="detailList">
	 * 				<dt class="heading">GCM</dt>
	 * 				<dd>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">alert</dt>
	 * 						<dd>Optional. A string to be displayed in the alert.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">sound</dt>
	 * 						<dd>Optional. The name of a file to play when the notification arrives.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">payload</dt>
	 * 						<dd>Optional. A JSON block that is transferred to the application if the application is opened by the user when the notification is received, or if the application is already open.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">delayWhileIdle</dt>
	 * 						<dd>Optional. A Boolean value that indicates that the message should not be sent if the device is idle. The server waits for the device to become active before the message is sent. 
	 * 							Default value is <code>false</code>.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">timeToLive</dt>
	 * 						<dd>Optional. How long, in seconds, the message should be kept on GCM storage if the device is offline. Default value is 4 weeks, and must be set as a JSON number.</dd>
	 * 					</dl>
	 * 				</dd>
	 * 		</dl>
	 * 		<dl class="detailList">
	 * 				<dt class="heading">SMS</dt>
	 * 				<dd>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">text</dt>
	 * 						<dd>Mandatory. A string to be displayed in the alert.</dd>
	 * 					</dl>
	 * 				</dd>
	 * 		</dl>
	 * 		<dl class="detailList">
	 * 				<dt class="heading">MPNS</dt>
	 * 				<dd>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">raw</dt>
	 * 						<dd>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">payload</dt>
	 * 								<dd>Optional. A JSON block that is transferred to the application only if the application is already open.</dd>
	 * 							</dl>
	 * 						</dd>
	 * 					</dl>
	 * 				</dd>
	 * 				<dd>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">toast</dt>
	 * 						<dd>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">text1</dt>
	 * 								<dd>Optional. Toast notification title.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">text2</dt>
	 * 								<dd>Optional. Toast notification content.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">param</dt>
	 * 								<dd>Optional. The screen to navigate to when the app is opened. The following options are allowed:
	 * 									<ul>
	 * 										<li>Screen to navigate to</li>
	 * 										<li>Screen to navigate to, plus name-value pairs of information</li>
	 * 										<li>Name-value pairs of information to be passed to the default start screen</li>
	 * 									</ul>
	 * 									Default is the app default start screen.
	 * 								</dd>
	 * 							</dl>
	 * 						</dd>
	 * 					</dl>
	 * 				</dd>
	 * 				<dd>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">tile</dt>
	 * 						<dd>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">id</dt>
	 * 								<dd>Optional. Tile ID.<br />
	 * 									If your app uses secondary Tiles, the ID attribute designates which Tile is updated. 
	 * 									You can omit the ID attribute if you are updating the default Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">count</dt>
	 * 								<dd>Optional. An integer value from 1 to 99. If the value of count is not set or 
	 * 									it is set to 0, the circle image and value do not display in the Tile. count is also known as badge.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">title</dt>
	 * 								<dd>Optional. A string that indicates the title of the application. The title fits on a single line of text and should not be wider than the Tile.
	 * 										 Approximately 15 characters can fit in the title before it is truncated.
	 * 								</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">backgroundImage</dt>
	 * 								<dd>Optional. URL of the front image on a medium flip Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">smallBackgroundImage</dt>
	 * 								<dd>Optional. URL of the image on a small flip Tile or a small cycle Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">wideBackgroundImage</dt>
	 * 								<dd>Optional. URL of the front image on a wide flip Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">wideBackBackgroundImage</dt>
	 * 								<dd>Optional. URL of the back image on a wide flip Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">wideBackContent</dt>
	 * 								<dd>Optional. Content that displays on the back of a wide flip Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">backBackgroundImage</dt>
	 * 								<dd>Optional. URL of the back image on a medium flip Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">backTitle</dt>
	 * 								<dd>Optional. Title that displays on the back of a flip Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">backContent</dt>
	 * 								<dd>Optional. Content that displays on the back of a medium flip Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">smallIconImage</dt>
	 * 								<dd>Optional. URL of the image on a small iconic Tile, a wide iconic Tile, or both.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">iconImage</dt>
	 * 								<dd>Optional. URL of the image on a medium iconic Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">wideContent1</dt>
	 * 								<dd>Optional. Row 1 content that displays on a wide iconic Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">wideContent2</dt>
	 * 								<dd>Optional. Row 2 content that displays on a wide iconic Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">wideContent3</dt>
	 * 								<dd>Optional. Row 3 content that displays on a wide iconic Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">backgroundColor</dt>
	 * 								<dd>Optional. Background color of an iconic Tile.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">cycleImage1</dt>
	 * 								<dd>Optional. Image 1 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">cycleImage2</dt>
	 * 								<dd>Optional. Image 2 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">cycleImage3</dt>
	 * 								<dd>Optional. Image 3 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">cycleImage3</dt>
	 * 								<dd>Optional. Image 4 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">cycleImage5</dt>
	 * 								<dd>Optional. Image 5 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">cycleImage6</dt>
	 * 								<dd>Optional. Image 6 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">cycleImage7</dt>
	 * 								<dd>Optional. Image 7 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">cycleImage8</dt>
	 * 								<dd>Optional. Image 8 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">cycleImage9</dt>
	 * 								<dd>Optional. Image 9 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 							</dl>
	 * 						</dd>
	 * 					</dl>
	 * 				</dd>
	 * 		</dl>
	 *
	 * @returns This method returns a value of type long that is a number between 0 and any number above 0. 
	 * 			This value is a timeout that indicates, in milliseconds, the time you must wait before you submit a notification again.
	 * @note {Note} 
	 * 			<ul>
	 * 				<li>If a notification to a specific Windows Phone 8 device subscription fails, the notification is dismissed and not resubmitted.</li>
	 * 				<li>Windows Phone 8 Tile images can be local or remote. Store a local image, for example, myImage.jpg, as a web resource in the images folder. 
	 * 					The URL of the image is then www/default/images/myImage.jpg. 
	 * 					To use a remote image, you must declare the remote image domain in the &lt;allowedDomainsForRemoteImages&gt; subelement of <windowsPhone8> in the application-descriptor.xml file.<br />
	 * 					To clear a Windows Phone 8 Tile property, set it to an empty string for texts and URLs, or to zero for the count property, when you send a notification.</li>
	 * 				<li>If you submit a notification to MPNS and none of the appropriate properties are set, then the notification is not sent; for example, 
	 * 					a raw notification is not sent if payload is not set; a toast notification is not sent if <b>text1</b>, <b>text2,</b> and <b>param</b> are not set.</li>
	 * 				<li>If you submit a notification to Windows Phone 8 with Tile properties that do not match the Tile template declared in the WMAppManifest.xml file, the Tile notification is ignored by the device OS.</li>
	 * 				<li>If you declare a Windows Phone 8 Tile as cycle in the WMAppManifest.xml file and the notification comprises only the title and count properties, then the notification is ignored by the device OS. 
	 * 						As a workaround, add one of the notificationOptions cycle properties.</li>
	 * 				<li>If you declare a Windows Phone 8 Tile as iconic in the WMAppManifest.xml file and the notification comprises only the title and count properties, then the notification is ignored by the device OS. 
	 * 						As a workaround, add one of the notificationOptions iconic properties.</li>
	 * 			</ul>
	 * 			Use the following process to create a notification that can be sent to all devices:<br />
	 * 			<ol>
	 * 				<li>Call WL.Server.createDefaultNotification to create a default notification.</li>
	 * 				<li>Individually set or change any property in the returned default notification.</li>
	 * 				<li>Call WL.Server.notifyAllDevices with the updated notification.</li>
	 * 			</ol>
	 * @example 
	 * <code>
	 * userSubscription = WL.Server.getUserNotificationSubscription ("MyEventSource", userID);
	 * var notification = WL.Server.createDefaultNotification("You have " + numCoupons + " coupons.", numCoupons, {foo: "bar"});
	 * // change the sound for APNS
	 * notification.APNS.sound = mySound;
	 * // change the alert for GCM
	 * notification.GCM.alert = myAndroidAlert;
	 * // change the payload for MPNS
	 * notification.MPNS.raw.payload = myRawPayload;
	 * // set toast notification properties for MPNS
	 * notification.MPNS.toast = {};
	 * notification.MPNS.toast.text1 = "Toast title”;
	 * notification.MPNS.toast.text2 = "Toast content”;
	 * // set a local image for MPNS
	 * notification.MPNS.tile.backgroundImage = “www/default/images/myImage.jpg”;
	 * // set a remote image for MPNS
	 * notification.MPNS.tile.backBackgroundImage = “http://icons.aniboom.com/Animators/00e45896-68c6-446a-8d9f-471dd6d577f9.jpg”;
	 *
	 * var delayTimeout = WL.Server.notifyAllDevices(userSubscription, notification);
	 * </code> 
	 * @methodOf WL.Server#
	 */
	this.notifyAllDevices = function(userSubscription, notificationOptions){};
	
	/**
	 * Submit a notification based on the specified target parameters.
	 * 
	 * @description Submits a notification to all of the devices of an application (broadcast) or subset of devices based on specified target property.<br />
	 * 
	 * @param  applicationId Mandatory. The name of the worklight application
	 * @param notificationOptions
	 * 			 Mandatory. The JSON block contains the following properties:
	 * 	<p>
	 * 		<dl class="detailList">
	 * 				<dt class="heading">message</dt>
	 * 				<dd>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">alert</dt>
	 * 						<dd>Mandatory. A string to be displayed in the alert. On Windows Phone 8 this string is displayed in the application tile title. </dd>
	 * 					</dl>
	 * 				</dd>
	 * 		</dl>
	 * 		<dl class="detailList">
	 * 				<dt class="heading">target</dt>
	 * 				<dd>
	 * 					Optional. A JSON block that contains the information about target recipients of the notification. Only one of the following target options can be specified. If target is not specified, its a broadcast message.
	 * 					<dl class="detailList">
	 * 						<dt class="heading">deviceIds</dt>
	 * 						<dd>Optional. JSON array of device ids. Devices with these ids should receive the notification.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">userIds</dt>
	 * 						<dd>Optional. JSON array  of user ids. Devices with these user ids should receive the notification.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">tagNames</dt>
	 * 						<dd>Optional. JSON array of tags. Devices subscribed to these tags should receive the notification.</dd>
	 * 					</dl>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">platforms</dt>
	 * 						<dd>Optional. JSON array of platforms. Devices running on these platforms should receive the notification. Supported values are A, G, and M.</dd>
	 * 					</dl>
	 * 				</dd>
	 * 		</dl> 
	 * 		<dl class="detailList">
	 * 				<dt class="heading">settings</dt>
	 * 				<dd>
	 * 					<dl class="detailList">
	 * 						<dt class="heading">apns</dt>
	 * 						<dd>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">badge</dt>
	 * 								<dd>Optional. An integer value to be displayed in a badge on the application icon.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">sound</dt>
	 * 								<dd>Optional. The name of a file to play when the notification arrives.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">actionKey</dt>
	 * 								<dd>Optional. The label of the dialog box button that allows the user to open the app upon receiving the notification.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">payload</dt>
	 * 								<dd>Optional. A JSON block that is transferred to the application if the application is opened by the user when the notification is received, or if the application is already open.</dd>
	 * 							</dl>
	 * 						</dd>
	 * 					</dl>
	 * 
	 * 					<dl class="detailList">
	 * 						<dt class="heading">gcm</dt>
	 * 						<dd>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">sound</dt>
	 * 								<dd>Optional. The name of a file to play when the notification arrives.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">payload</dt>
	 * 								<dd>Optional. A JSON block that is transferred to the application if the application is opened by the user when the notification is received, or if the application is already open.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">delayWhileIdle</dt>
	 * 								<dd>Optional. A Boolean value that indicates that the message should not be sent if the device is idle. The server waits for the device to become active before the message is sent. 
	 * 								Default value is <code>false</code>.</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">timeToLive</dt>
	 * 								<dd>Optional. How long, in seconds, the message should be kept on GCM storage if the device is offline. Default value is 4 weeks, and must be set as a JSON number.</dd>
	 * 							</dl>
	 * 						</dd>
	 * 					</dl>
	 * 
	 * 					<dl class="detailList">
	 *  					<dt class="heading">mpns</dt>
	 * 						<dd>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">raw</dt>
	 * 								<dd>
	 * 									<dl class="detailList">
	 * 										<dt class="heading">payload</dt>
	 * 										<dd>Optional. A JSON block that is transferred to the application only if the application is already open.</dd>
	 * 									</dl>
	 * 								</dd>
	 * 							</dl>
	 * 							<dl class="detailList">
	 * 								<dt class="heading">toast</dt>
	 * 								<dd>
	 * 									<dl class="detailList">
	 * 										<dt class="heading">text1</dt>
	 * 										<dd>Optional. Toast notification title.</dd>
	 * 									</dl>
	 * 									<dl class="detailList">
	 * 										<dt class="heading">text2</dt>
	 * 										<dd>Optional. Toast notification content.</dd>
	 * 									</dl>
	 * 									<dl class="detailList">
	 * 										<dt class="heading">param</dt>
	 * 										<dd>Optional. The screen to navigate to when the app is opened. The following options are allowed:
	 * 											<ul>
	 * 												<li>Screen to navigate to</li>
	 * 												<li>Screen to navigate to, plus name-value pairs of information</li>
	 * 												<li>Name-value pairs of information to be passed to the default start screen</li>
	 * 											</ul>
	 * 											Default is the app default start screen.
	 * 										</dd>
	 * 									</dl>
	 * 								</dd>
	 * 							</dl>
	 * 						<dl class="detailList">
	 * 							<dt class="heading">tile</dt>
	 * 							<dd>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">id</dt>
	 * 									<dd>Optional. Tile ID.<br />
	 * 										If your app uses secondary Tiles, the ID attribute designates which Tile is updated. 
	 * 										You can omit the ID attribute if you are updating the default Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">count</dt>
	 * 									<dd>Optional. An integer value from 1 to 99. If the value of count is not set or 
	 * 										it is set to 0, the circle image and value do not display in the Tile. count is also known as badge.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">title</dt>
	 * 									<dd>Optional. A string that indicates the title of the application. The title fits on a single line of text and should not be wider than the Tile.
	 * 											 Approximately 15 characters can fit in the title before it is truncated.
	 * 									</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">backgroundImage</dt>
	 * 									<dd>Optional. URL of the front image on a medium flip Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">smallBackgroundImage</dt>
	 * 									<dd>Optional. URL of the image on a small flip Tile or a small cycle Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">wideBackgroundImage</dt>
	 * 									<dd>Optional. URL of the front image on a wide flip Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">wideBackBackgroundImage</dt>
	 * 									<dd>Optional. URL of the back image on a wide flip Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">wideBackContent</dt>
	 * 									<dd>Optional. Content that displays on the back of a wide flip Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">backBackgroundImage</dt>
	 * 									<dd>Optional. URL of the back image on a medium flip Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">backTitle</dt>
	 * 									<dd>Optional. Title that displays on the back of a flip Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">backContent</dt>
	 * 									<dd>Optional. Content that displays on the back of a medium flip Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">smallIconImage</dt>
	 * 									<dd>Optional. URL of the image on a small iconic Tile, a wide iconic Tile, or both.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">iconImage</dt>
	 * 									<dd>Optional. URL of the image on a medium iconic Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">wideContent1</dt>
	 * 									<dd>Optional. Row 1 content that displays on a wide iconic Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">wideContent2</dt>
	 * 									<dd>Optional. Row 2 content that displays on a wide iconic Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">wideContent3</dt>
	 * 									<dd>Optional. Row 3 content that displays on a wide iconic Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">backgroundColor</dt>
	 * 									<dd>Optional. Background color of an iconic Tile.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">cycleImage1</dt>
	 * 									<dd>Optional. Image 1 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">cycleImage2</dt>
	 * 									<dd>Optional. Image 2 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">cycleImage3</dt>
	 * 									<dd>Optional. Image 3 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">cycleImage4</dt>
	 * 									<dd>Optional. Image 4 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">cycleImage5</dt>
	 * 									<dd>Optional. Image 5 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">cycleImage6</dt>
	 * 									<dd>Optional. Image 6 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">cycleImage7</dt>
	 * 									<dd>Optional. Image 7 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">cycleImage8</dt>
	 * 									<dd>Optional. Image 8 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 								</dl>
	 * 								<dl class="detailList">
	 * 									<dt class="heading">cycleImage9</dt>
	 * 									<dd>Optional. Image 9 URL on a medium cycle Tile, a wide cycle Tile, or both.</dd>
	 * 								</dl>
	 * 							</dd>
	 * 						</dl>
	 *  				</dd>
	 * 				</dl>
	 * 			</dd>
	 * 		</dl>		
	 *
	 * @returns This method returns a value of type long that is a number between 0 and any number above 0. 
	 * 			This value is a timeout that indicates, in milliseconds, the time you must wait before you submit a notification again.
	 * @note {Note} 
	 * 			<ul>
	 * 				<li>If a notification to a specific Windows Phone 8 device subscription fails, the notification is dismissed and not resubmitted.</li>
	 * 				<li>Windows Phone 8 Tile images can be local or remote. Store a local image, for example, myImage.jpg, as a web resource in the images folder. 
	 * 					The URL of the image is then www/default/images/myImage.jpg. 
	 * 					To use a remote image, you must declare the remote image domain in the &lt;allowedDomainsForRemoteImages&gt; subelement of <windowsPhone8> in the application-descriptor.xml file.<br />
	 * 					To clear a Windows Phone 8 Tile property, set it to an empty string for texts and URLs, or to zero for the count property, when you send a notification.</li>
	 * 				<li>If you submit a notification to MPNS and none of the appropriate properties are set, then the notification is not sent; for example, 
	 * 					a raw notification is not sent if payload is not set; a toast notification is not sent if <b>text1</b>, <b>text2,</b> and <b>param</b> are not set.</li>
	 * 				<li>If you submit a notification to Windows Phone 8 with Tile properties that do not match the Tile template declared in the WMAppManifest.xml file, the Tile notification is ignored by the device OS.</li>
	 * 				<li>If you declare a Windows Phone 8 Tile as cycle in the WMAppManifest.xml file and the notification comprises only the title and count properties, then the notification is ignored by the device OS. 
	 * 						As a workaround, add one of the notificationOptions cycle properties.</li>
	 * 				<li>If you declare a Windows Phone 8 Tile as iconic in the WMAppManifest.xml file and the notification comprises only the title and count properties, then the notification is ignored by the device OS. 
	 * 						As a workaround, add one of the notificationOptions iconic properties.</li>
	 * 			</ul>
	 * @example 
	 * <code>
	 * var notification = {};
	 * 
	 * notification.message = {};
	 * notification.message.alert = "notification text";
	 * 		
	 * notification.target = {};
	 * notification.target.tagNames = ['Tag1','Tag2'];
	 * 
	 * // set notification properties for GCM
	 * notification.settings = {};
	 * notification.settings.gcm = {};
	 * notification.settings.gcm.payload = {"custom":"data"};
	 * 
	 * // set notification properties for APNS
	 * notification.settings.apns = {};
	 * notification.settings.apns.sound = mySound;
	 * 
	 * // set raw notification properties for MPNS
	 * notification.settings.mpns = {};
	 * notification.settings.mpns.raw = {};
	 * notification.settings.mpns.raw.payload = {"custom":"data"}
	 * 
	 * // set toast notification properties for MPNS
	 * notification.settings.mpns.toast = {};
	 * notification.settings.mpns.toast.text1 = "Toast title";
	 * notification.settings.mpns.toast.text2 = "Toast content";
	 * 
	 * // set tile notification properties for MPNS
	 * notification.settings.mpns.tile = {};
	 * notification.settings.mpns.tile.title = "notification text";
	 * notification.settings.mpns.tile.count = 1;
	 * // set a local image for MPNS
	 * notification.settings.mpns.tile.backgroundImage = “www/default/images/myImage.jpg”;
	 * // set a remote image for MPNS
	 * notification.settings.mpns.tile.backBackgroundImage = “http://icons.aniboom.com/Animators/00e45896-68c6-446a-8d9f-471dd6d577f9.jpg”;
	 * 
	 * var delayTimeout = WL.Server.sendMessage(applicationId, notificationOptions);
	 * </code> 
	 * @methodOf WL.Server#
	 */
	this.sendMessage = function(applicationId, notificationOptions) {};
	
	/**
	 * Submit a notification to a specified user and a specified device.
	 * @description Submits a notification to the specified user with the specified device ID according to the specified options.<br />
	 * 	If the device ID does not exist, the server outputs an error to the log and returns.<br />
	 * 	Push notifications are supported on iOS, Android, and Windows Phone 8 devices. iOS apps use the Apple Push Notification Service (APNS), 
	 * 	Android apps use Google Cloud Messaging (GCM), and Windows Phone 8 apps use the Microsoft Push Notification Service (MPNS).
	 * @param userSubscription Mandatory. A user subscription object, obtained by calling WL.Server.getUserNotificationSubscription
	 * @param device Mandatory. The device ID that is used to identify the device by the Worklight Server. 
	 * @param options Mandatory. See Method WL.Server.notifyAllDevices.
	 * 				
	 * @returns This method returns a value of type <code>long</code> that is a number between 0 and any number above 0. 
	 * 			This value is a timeout that indicates, in milliseconds, the time you must wait before you submit a notification again.
	 *
	 * @note {Note}  If a notification to a specific Windows Phone 8 device subscription fails, the notification is dismissed and not resubmitted.
	 * 		SMS push notifications are supported on iOS, Android, Windows Phone 8, and BlackBerry devices that support SMS functions.<br />
	 * 		Useful when the notifications are generated by a back-end system, and directs them to specific device IDs.<br />
	 * 		For SMS notifications, the text property of the options parameter contains the SMS text. A text message is sent as a single message if the text message length is less than or equal to 160 characters. 
	 * 		If the text message length is greater than 160 characters, the message is either split into multiple messages of 160 characters or less, or it is rejected. The action that is taken depends on the configured SMS gateway. 
	 * 		All other properties of <code>options</code> are ignored.
	 * @example 
	 * userSubscription = WL.Server.getUserNotificationSubscription ("MyEventSource", userID);
	 * var notification = WL.Server.createDefaultNotification("You have " + numCoupons + " coupons.", numCoupons, {foo: "bar"});
	 * var delayTimeout = WL.Server.notifyDevice( userSubscription, userSubscription.getDeviceSubscriptions()[0].token, notification);
	 * @methodOf WL.Server#
	 */
	this.notifyDevice = function(userSubscription, device, options){};
	
	
	/**
	 * Submit a notification to the specified device of a subscribed user.
	 * @description This method replaces the deprecated method WL.Server.submitNotification.<br />
	 * 		You can submit a notification to the specified device of a subscribed user, according to the specified options.<br />
	 * 		Push notifications are supported on iOS, Android, and Windows Phone 8 devices. iOS apps use the Apple Push Notification Service (APNS), 
	 * 		Android apps use Google Cloud Messaging (GCM), and Windows Phone 8 apps use the Microsoft Push Notification Service (MPNS).
	 * @param deviceSubscription
	 * 		     Mandatory. The device subscription, obtained by calling getDeviceSubscriptions on the user subscription object.
	 * @param notificationOptions
	 * 			Mandatory. See Method <code>WL.Server.notifyAllDevices</code>. 
	 * 				
	 * @returns This method returns a value of type long that is a number between 0 and any number above 0. 
	 * 			This value is a timeout that indicates, in milliseconds, the time you must wait before you submit a notification again.
	 *
	 * @note {Note}  If a notification to a specific Windows Phone 8 device subscription fails, the notification is dismissed and not resubmitted.
	 * 		SMS push notifications are supported on iOS, Android, Windows Phone 8, and BlackBerry devices that support SMS functions.<br />
	 * 		For SMS notifications, the text property of the <b>notificationOptions</b> parameter contains the SMS text. A text message is sent as a single message if the text message length is less than or equal to 160 characters. 
	 * 		If the text message length is greater than 160 characters, the message is either split into multiple messages of 160 characters or less, or it is rejected.<br />
	 * 		The action that is taken depends on the configured SMS gateway. All other properties of <b>notificationOptions</b> are ignored.
	 * @example 
	 * userSubscription = WL.Server.getUserNotificationSubscription ("MyEventSource", userID);
	 * var notification = WL.Server.createDefaultNotification("You have " + numCoupons + " coupons.", numCoupons, {foo: "bar"});
	 * var delayTimeout = WL.Server.notifyDeviceSubscription(
	 * 	userSubscription.getDeviceSubscriptions()[0], notification
	 * 	);
	 * @methodOf WL.Server#
	 */
	this.notifyDeviceSubscription = function(deviceSubscription, notificationOptions){};
	
	/**
	 * @deprecated
	 * This method is deprecated.
	 * @description Submits a notification to the specified device of a subscribed user, according to the specified options.<br />
	 * 		It is possible to submit notifications only to iOS and Android devices.
	 * @param deviceSubscription Mandatory. The device subscription, obtained by calling getDeviceSubscriptions on the user subscription object.
	 * @param notificationOptions Mandatory. See Method <code>WL.Server.notifyAllDevices</code>. 
	 * @note {Note} This method is deprecated as of version 4.1.3, and should be replaced by <b>WL.Server.notifyDeviceSubscription</b>, which has the same signature. 
	 * @methodOf WL.Server#
	 */
	this.submitNotification  = function(deviceSubscription, notificationOptions){};
	
	/**
	 * Creates an event source. 
	 * @description Creates an event source according to the parameters in the parameter block. 
	 * @param options The JSON block contains the following properties: 
	 * 		<table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>name</td>
	 * 			    <td>Mandatory. A string that contains the name of the event source.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>onUserSubscribe</td>
	 * 			    <td>Optional. The name of the JavaScript function (in the adapter file) that is called when the user subscribes to this event source for the first time, on first device subscription. 
	 * 					The callback function receives the user subscription object as an input parameter.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>onUserUnsubscribe</td>
	 * 			    <td>Optional. The name of the JavaScript function (in the adapter file) that is called when the user unsubscribes from this event source for the first time,
	 * 					on first device subscription. The callback function receives the user subscription object as an input parameter.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>onDeviceUnsubscribe</td>
	 * 			    <td>Optional. The name of the JavaScript function that is called when the device subscription is removed by a client request or by the cleanup task. 
	 * 					The callback function receives the device subscription as an input parameter.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>onUserChange</td>
	 * 			    <td>Optional. The name of the JavaScript function that is called when a subscription from this device exists for a different user.<br />
	 * 					The callback function receives the options sent to the createEventSource function.<br />
	 * 					The callback function must return a JSON block that must contain at least an <b>isSuccessful</b> property, indicating whether the subscription should be created. 
	 * 					The returned JSON block can contain other custom properties, and it is transferred back to the client app.</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>poll</td>
	 * 			    <td>Optional. If the method of getting the notification data from the back-end is polling, provide the following properties:<br />
	 * 					<ul>
	 * 						<li><b>interval:</b> Mandatory. The interval in seconds between the polls.</li>
	 * 		`				<li><b>onPoll:</b> Mandatory. The name of JavaScript function which is called on each poll.</li>
	 * 					</ul>
	 * 			  </td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>securityTest</td>
	 * 			    <td>Mandatory. Declares the appropriate securityTest from <code>authenticationConfig.xml</code> to be used for this event source. </td>
	 * 			  </tr>
	 * 			</table>	
	 * @example 
	 * WL.Server.createEventSource({
	 * 	name: 'newCoupons',
	 * 	onUserSubscribe: 'subscribeUser',
	 * 	onUserUnsubscribe: 'unsubscribeUser',
	 * 	onUserChange: 'onUserChange',
	 * 	poll : {
	 * 	interval: 2,
	 * 	onPoll: 'produceNotifications'
	 * 	}
	 * });	
	 * @methodOf WL.Server#
	 */
	this.createEventSource = function(options){};
	
	/**
	 * Return a default notification JSON block structure. 
	 * @description The method creates and returns a notification JSON block for the supplied values, for all supported environments:<br />
	 * 		<ul>
	 * 			<li>Push notifications on iOS, Android, and Windows Phone 8</li>
	 * 			<li>SMS push notifications on iOS, Android, Windows Phone 8, and BlackBerry devices that support SMS functions</li>
	 * 		</ul>

	 * @param notificationText Optional. The string that is displayed in the alert. On Windows Phone 8 the string is displayed in the application tile title.
	 * @param badge Optional. An integer value that is displayed in a badge on the application icon. On Windows Phone 8 the value is displayed as the application tile count.
	 * @param payload Optional. A JSON block that is transferred to the application. 
	 * 			      On iOS and Android, the payload is transferred to the application if the application is opened by the user when the notification is received, 
	 * 				  or if the application is already open. On Windows Phone 8, the payload is transferred to the application as a raw notification only if the application is already open.
	 *
	 * @returns The returned JSON block has the following structure:<br />
	 * <pre class="code">
	 * APNS: {
	 * 	badge: badge,
	 * 	alert: notificationText,
	 * 	payload: payload,
	 * 	sound: "",
	 * 	actionKey: null
	 * },
	 * GCM: {
	 * 	alert: notificationText,
	 * 	payload: payload
	 * },
	 * SMS: {
	 * 	text: notificationText
	 * },
	 * MPNS: {
	 * 	raw: {
	 * 	payload: payload
	 * 	},
	 * 	toast: null,
	 * 	tile: {
	 * 	title: notificationText,
	 * 	count: badge 
	 * 	}
	 * }
	 * @example <code>var notification = WL.Server.createDefaultNotification("You have " + numCoupons + " coupons.", numCoupons, {foo: "bar"})</code>;
	 *
	 * @methodOf WL.Server#
	 */
	this.createDefaultNotification = function(notificationText, badge, payload){};
	
	/**
	 * Returns a subscription object for a user.
	 * @description Returns a subscription object for the user with the specified ID to the specified event source.
	 * @param eventSource Mandatory. A string containing the name of the event source. 
	 * @param userId Mandatory. A string containing the user ID, created during the login process. The user ID can be obtained by calling <code>WL.Server.getActiveUser</code>.
	 * @returns The method returns a subscription object that contains the user ID and the mutable subscription state.<br />
	 * 		<b>Example:</b> <code>{userId: 'bjones', state: {numCoupons: 3}}</code>
	 * @note {Note}  All subscription object fields are read-only, except for the user subscription state. You can modify the user subscription state in your JavaScript code, and then
	 * must use the save method to save it to the IBM&reg; Worklight&reg; database.
	 * @methodOf WL.Server#
	 */
	this.getUserNotificationSubscription = function(eventSource, userId){};

	/**
	 * Used to set the application's context for auditing or reporting purposes.
	 * @description The application context that you set is saved in the raw data reports database. 
	 * @param applicationContext Mandatory. The application context to set. Call with null to clear.
	 *
	 * @methodOf WL.Server#
	 */
	this.setApplicationContext = function(applicationContext){};
	/**
	 * Creates an SMS event handler.
	 * @description This method creates an SMS event handler. To set the event handler, to implement callbacks for received SMS events, see {@link WL.Server#setEventHandlers}.
	 * @param aFilter Mandatory. An object that is used to filter incoming SMS messages from the SMS gateway. The parameters provided
	 * by the SMS gateway are used to compare with the filter.
	 * @param aHandler Mandatory. A function that is used to handle incoming SMS messages. Use a named function such as <code>functionname(event)</code> 
	 * so that the name will appear in reports and analytic output. The event object contains all parameters sent from the SMS gateway.
	 * @param gatewayId Mandatory. A gateway ID that is specified in the <b>SMSConfig.xml</b> file, which is used to receive SMS messages.
	 * @returns A specified event handler is returned.
	 * @example 
	 * WL.Server.createSMSEventHandler(
	 * 	{keyword: WL.Server.configuration['sms.keyword.myKeyword]},
	 * 	callbackFunction,
	 * 	WL.Server.configuration['sms.gateway.myGateway]
	 * );
	 * 
	 * /*worklight.properties will contain the following properties
	 * sms.keyword.myKeyword=myKeyword
	 * sms.gateway.myGateway=myGateway
	 * *&#047;
	 * @methodOf WL.Server#
	 */
	this.createSMSEventHandler = function(aFilter, aHandler, gatewayId){};
	/**
	 * Creates an USSD event handler.
	 * @description The event handler maps the USSD request to an adapter procedure. This API creates an event handler. To set the event handler, to implement callbacks for received events, see {@link WL.Server#setEventHandlers}.
	 * @param aFilter Mandatory. JSON object that is used to filter incoming events. The filtering can be done based on the USSD request parameters, headers and path.
	 * Suppose if the USSD request contains the shortCode as unique request parameter or header with value *123#, then aFilter can be like this {'shortCode': '*123#'}. 
	 * If the USSD URL is configured like this http://dummyhost/worklight/ussd/gateway1, then aFilter can be link this {'__wlpath': '\/gateway1'. 
	 * @param aHandler Mandatory. A java script function that will be called on each USSD request. Developer is responsible to parse the input and set the response data. 
	 * To this javascript function the event handler will pass the request JSON object, which contains params, headers and body fields.
	 * @returns An event handler is returned, which is defined as:
	 * <pre><code>
	 * {
	 *    filter: aFilter
	 *    handler: aHandler
	 * }
	 * </code></pre>
	 * @methodOf WL.Server#
	 */
	this.createUSSDEventHandler = function(aFilter, aHandler){};
	/**
	 * Creates the USSD response.
	 * @description This is used to the set response to the USSD request.
	 * @param content Mandatory. String content that needs to be sent to the Gateway. 
	 * @param contentType Optional. String representing the content-type needs to set when sending the response. 
	 * For example application/json; charset=UTF-8. Default value is: text/plain; charset=UTF-8. 
	 * @param isLastMsg Optional: Boolean to identify if the message send to gateway is the last message or not. Default value is false.
	 * @returns An USSD input object is returned, which is defined as:
	 * <pre><code>
	 * {
	 *    content: aContent
	 *    contentType: aContentType
	 *    isLastMsg: aIsLastMsg
	 * }
	 * </code></pre>
	 * @methodOf WL.Server#
	 */
	this.createUSSDResponse = function(content, contentType, isLastMsg){};
	/**
	 * Unsubscribes the phone number from the specified event source.
	 * @description This method unsubscribes a specified phone number from the specified event source.
	 * @param eventsource Mandatory. The event source from which the phone number must be unsubscribed.
	 * @param phoneNumber Mandatory. The phone number of the user.
	 * @methodOf WL.Server#
	 */
	this.unsubscribeSMS = function(eventsource, phoneNumber){};
	/**
	 * Subscribe a phone number to the specified event source.
	 * @description This method subscribes a specified phone number to the specified event source.
	 * @param eventsource Mandatory. The event source to which the phone number must be subscribed.
	 * @param phoneNumber Mandatory. The phone number of the user.
	 * @param gatewayID Mandatory. The gateway ID specified in the  <b>SMSConfig.xml</b> file, which is used to send SMS messages.
	 * @returns If the subscription is successful, this method returns an SMS subscription object, which is equivalent to a device subscription object. 
	 * The subscription object can be used along with <code>WL.Server.notifyDeviceSubscription()</code> to send an SMS message to the specified phone number.
	 * @methodOf WL.Server#
	 */
	this.subscribeSMS = function(eventsource, phoneNumber, gatewayId){};
	/**
	 * Returns an SMS subscription object for a phone number.
	 * @description This method returns an SMS subscription object with a specified phone number and specified event source.
	 * @param eventsource Mandatory. The event source to which the phone number is subscribed.
	 * @param phoneNumber Mandatory. The phone number of the user.
	 * @returns This method returns SMS subscription object, which is equivalent to device subscription object. 
	 * This subscription can be used, along with <code>WL.Server.notifyDeviceSubscription()</code>, to send an SMS message to the specified phone number.
	 * @methodOf WL.Server#	 */
	this.getSMSSubscription = function(eventsource, phoneNumber){};
	
	/**
	 * Read Business Objects of a collection from the SAP Netweaver Gateway Server. <br />
	 * @description The method attempts to fetch Business Objects from the SAP Netweaver Gateway server.
	 * @param options
	 *            The fetchNWBusinessObject function accepts the following JSON block of parameters:
	 * <pre class="code">
	 * {
	 * 		//Mandatory
	 * 		Object : business object type to fetch,
	 * 		Filters: Filters used on returned business objects,
	 * 		CollectionName : Name of the Business Object Collection,
	 * 		Keys	: keys used to fetch the business objects
	 * }
	 * </pre>
	 *			The JSON block contains the following properties:<br />
	 *			
	 *            <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>Object</td>
	 * 			    <td>Mandatory. The type of the business object that you're trying to fetch. such as: "TravelAgency".
	 *			  </td>
	 * 			  </tr>
	 * 			<tr>
	 * 			    <td>Filters</td>
	 * 			    <td>Mandatory. Input for Odata filter string.  Put your Odata filter string in here. Empty [] when not using filter. Sample input could be like this:
	 *				<pre class="code">
	 *  	[
	 *		"City+eq+'Rochester'"
	 *	]
     *				</pre>
	 * 				</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>CollectionName</td>
	 * 			    <td>Mandatory. Name of the Business Object Collection.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>Keys</td>
	 * 			    <td>Mandatory. Primary keys used to select the desired business objects, formatted as JSON array. Sample input could be like this:
	 *				<pre class="code">
	 *	[
	 *			{Name:"TravelAgencyID",value:TravelAgencyID}
	 *			.....
	 *	]
	 *				</pre>
	 *				</td>
	 * 			  </tr>
	 * 			</table>
	 * @returns <br>The method returns the fetched business objects as JSON object.</br>
	 *			<br>The returned object has the following structure:
	 * <pre class="code">
	 *{
	 *	   "City": "Rochester",
	 *	   "Country": "US",
	 *	   "LanguageCode": "E",
	*	   "LocalCurrencyCode": "USD",
	*	   "MimeType": "text\/html",
	*	   "Name": "Sunshine Travel",
	*	   "POBox": "",
	*	   "PostalCode": "54323",
	*	   "Region": "NY",
	*	   "Street": "134 West Street",
	*	   "TelephoneNumber": "+1 901-632-5640",
	*	   "TravelAgencyID": "00000000",
	*	   "URL": "http:\/\/www.sunshine-travel.sap",
	*	   "__metadata": {
	*	      "type": "RMTSAMPLEFLIGHT_2.TravelAgency",
	*	      "uri": "http:\/\/siccp157.isicc.de.ibm.com:8320\/sap\/opu\/odata\/iwbep\/RMTSAMPLEFLIGHT_2\/TravelAgencyCollection('00000000')"
	*	   },
	*	   "isSuccessful": true
	*}
	 * </pre>
	 * </br>
	 *			The invocation results object contains the following properties:<br />
	 *			 <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>BusinessObject</td>
	 * 			    <td>The fetched Business Object/Objects containing all the fields
	 * 				</td>
	 * 			  </tr>
	 * 			    <td>__metadata</td>
	 * 			    <td>Metadata of the request. It containes the following properties <br />
	 * 					<b>type</b> Type of the business object fetched <br />
	 * 					<b>uri</b> URI of the actual request to Netweaver Gateway server. <br />
	 *				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>isSuccessful</td>
	 * 			    <td>Identifies whether the request succeeded or failed</td>
	 * 			  </tr>
	 * 			</table>
	 *
	 * @methodOf WL.Server#
	 */
	this.fetchNWBusinessObject = function(options){};
	
	/**
	 * Create a Business Object in a collection from SAP Netweaver Gateway Server.<br />
	 * @description The method attempts to connects to SAP Netweaver Gateway server to create a Business Object a collection.
	 * @param options
	 *            The createNWBusinessObject function accepts the following JSON block of parameters:
	 * <pre class="code">
	 * {
	 * 		//Mandatory
	 * 		Object : business object type to create,
	 * 		Filters: Filters used on returned business objects,
	 * 		CollectionName : Name of the Business Object Collection,
	 * 		Keys	: keys used to get the business object to create
	 * 		Content : content of the business object to be created
	 * }
	 * </pre>
	 *			The JSON block contains the following properties:<br />
	 *			
	 *            <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>Object</td>
	 * 			    <td>Mandatory. The type of the business object that you're trying to create. such as: "TravelAgency".
	 *			  </td>
	 * 			  </tr>
	 * 				<tr>
	 * 			    <td>Filters</td>
	 * 			    <td>Mandatory. Input for Odata filter string. Empty array [] for creation.
	 * 				</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>CollectionName</td>
	 * 			    <td>Mandatory. Name of the Business Object Collection.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>Keys</td>
	 * 			    <td>Mandatory. Primary keys used to select the desired business objects, formatted as JSON array. The structure would be like this:
	 *				<pre class="code">
	 *	[
	 *		{Name:"TravelAgencyID",value:TravelAgencyID}
	 *		.....
	 *	]
	 *				</pre>
	 *				</td>
	 * 			  </tr>
	 * 				<tr>
	 * 			    <td>Content</td>
	 * 			    <td>Mandatory. The content of the business object to create. The structure would be like this:
	 * <pre class="code">
	 *{
	 *	   "City": "Rochester",
	 *	   "Country": "US",
	 *	   "LanguageCode": "E",
	*	   "LocalCurrencyCode": "USD",
	*	   "MimeType": "text\/html",
	*	   "Name": "Sunshine Travel",
	*	   "POBox": "",
	*	   "PostalCode": "54323",
	*	   "Region": "NY",
	*	   "Street": "134 West Street",
	*	   "TelephoneNumber": "+1 901-632-5640",
	*	   "TravelAgencyID": "00000000",
	*	   "URL": "http:\/\/www.sunshine-travel.sap",
	*	   "__metadata": {
	*	      "type": "RMTSAMPLEFLIGHT_2.TravelAgency",
	*	      "uri": "http:\/\/siccp157.isicc.de.ibm.com:8320\/sap\/opu\/odata\/iwbep\/RMTSAMPLEFLIGHT_2\/TravelAgencyCollection('00000000')"
	*	   },
	*	   "isSuccessful": true
	*}
	 * </pre>
	 * 				</td>
	 * 			  </tr>
	 * 			</table>
	 * @returns <br>The method returns the created business object.</br>
	 *			<br>The returned object has the following structure:
	 * <pre class="code">
	 *{
	 *	   "City": "Rochester",
	 *	   "Country": "US",
	 *	   "LanguageCode": "E",
	*	   "LocalCurrencyCode": "USD",
	*	   "MimeType": "text\/html",
	*	   "Name": "Sunshine Travel",
	*	   "POBox": "",
	*	   "PostalCode": "54323",
	*	   "Region": "NY",
	*	   "Street": "134 West Street",
	*	   "TelephoneNumber": "+1 901-632-5640",
	*	   "TravelAgencyID": "00000000",
	*	   "URL": "http:\/\/www.sunshine-travel.sap",
	*	   "__metadata": {
	*	      "type": "RMTSAMPLEFLIGHT_2.TravelAgency",
	*	      "uri": "http:\/\/siccp157.isicc.de.ibm.com:8320\/sap\/opu\/odata\/iwbep\/RMTSAMPLEFLIGHT_2\/TravelAgencyCollection('00000000')"
	*	   },
	*	   "isSuccessful": true
	*}
	 * </pre>
	 * </br>
	 *			The invocation results object contains the following properties:<br />
	 *			 <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>BusinessObject</td>
	 * 			    <td>The content of the created Business Object</td>
	 * 			  </tr>
	 * 			    <td>__metadata</td>
	 * 			    <td>Metadata of the request. It containes the following properties <br />
	 * 					<b>type</b> Type of the business object created <br />
	 * 					<b>uri</b> URI of the actual request to Netweaver Gateway server. <br />
	 *				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>isSuccessful</td>
	 * 			    <td>Identifies whether the request succeeded or failed</td>
	 * 			  </tr>
	 * 			</table>
	 *
	 * @methodOf WL.Server#
	 */
	this.createNWBusinessObject = function(options){};
	
	/**
	 * Delete a Business Object of from a collection from the SAP Netweaver Gateway Server. <br />
	 * @description The method attempts to connects to SAP Netweaver Gateway server to delete a Business Object from a collection.
	 * @param options
	 *            The deleteNWBusinessObject function accepts the following JSON block of parameters:
	 * <pre class="code">
	 * {
	 * 		//Mandatory
	 * 		Object : business object type to delete,
	 * 		Filters: Filters used on returned business objects,
	 * 		CollectionName : Name of the Business Object Collection,
	 * 		Keys	: keys used to get the business object to delete
	 * }
	 * </pre>
	 *			The JSON block contains the following properties:<br />
	 *			
	 *            <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>Object</td>
	 * 			    <td>Mandatory. The type of the business object that you're trying to delete. such as: "TravelAgency".
	 *			  </td>
	 * 			  </tr>
	 * 				<tr>
	 * 			    <td>Filters</td>
	 * 			    <td>Mandatory. Input for Odata filter string. Empty array [] for deletion.
	 * 				</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>CollectionName</td>
	 * 			    <td>Mandatory. Name of the Business Object Collection.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>Keys</td>
	 * 			    <td>Mandatory. Primary keys used to select the desired business objects formatted as JSON array. The structure would be like this:
	 *				<pre class="code">
	 *  	[
	 *		{Name:"TravelAgencyID",value:TravelAgencyID}
	 *		.....
	 *  	]
	 *  			</pre>
	 *				</td>
	 * 			  </tr>
	 * 			</table>
	 * @returns <br>The method returns the status for the deletion.</br>
	 *			<br>The returned object has the following structure:
	 *<pre class="code">{
	 *  "isSuccessful": true,
	 * "responseHeaders": {
	 *   "content-length": "0",
	 *    "dataserviceversion": "2.0",
	 *    "server": "SAP NetWeaver Application Server \/ ABAP 731"
	 * },
	 * "statusCode": 204,
	 * "statusReason": "No Content"
	 * }</pre>
	 * </br>
	 *			The invocation results object contains the following properties:<br />
	 *			 <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>isSuccessful</td>
	 * 			    <td>Identifies whether the request succeeded or failed</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>responseHeaders</td>
	 * 			    <td>Header of the response generated by the SAP Netweaver Gateway server</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 					<td>statusCode</td> 
	 * 					<td>Status code of the SAP Netweaver Gateway response</td>
	 * 			 </tr>
	 * 			 <tr>
	 * 					<td>statusReason</td> 
	 * 				<td>
	 * 					Reason for the status code
	 *				</td>
	 * 			  </tr>
	 * 			</table>
	 *
	 * @methodOf WL.Server#
	 */
	this.deleteNWBusinessObject = function(options){};
	
	/**
	 * Update a Business Objects in a given collection using the SAP Netweaver Gateway Server. <br />
	 * @description The method attempts to update a Business Objects from the SAP Netweaver Gateway server.
	 * @param options
	 *            The updateNWBusinessObject function accepts the following JSON block of parameters:
	 * <pre class="code">
	 * {
	 * 		//Mandatory
	 * 		Object : business object type to update,
	 * 		Filters: Filters used on returned business objects,
	 * 		CollectionName : Name of the Business Object Collection,
	 * 		Keys	: keys used to get the business object to update,
	 * 		Content : contents of the business object to be updated
	 * }
	 * </pre>
	 *			The JSON block contains the following properties:<br />
	 *			
	 *            <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>Object</td>
	 * 			    <td>Mandatory. The type of the business object that you're trying to update. such as: "TravelAgency".
	 *			  </td>
	 * 			  </tr>
	 * 				<tr>
	 * 			    <td>Filters</td>
	 * 			    <td>Mandatory. Input for Odata filter string. Empty array [] for update.
	 * 				</td>
	 * 			  </tr>
	 * 			   <tr>
	 * 			    <td>CollectionName</td>
	 * 			    <td>Mandatory. Name of the Business Object Collection.
	 * 				</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>Keys</td>
	 * 			    <td>Mandatory. Primary keys used to select the desired business objects, formatted as JSON array. The structure would be like this:
	 *				<pre class="pre codeblock"><code>
	 *  	[
	 *		{Name:"TravelAgencyID",value:TravelAgencyID}
	 *		.....
	 *  	]
	 *				</td>
	 * 			  </tr>
	 * 			</table>
	 * @returns <br>The method returns the status for the update.</br>
	 *			<br>The returned object has the following structure:
	 *<pre class="code">{
	 *  "isSuccessful": true,
	 *  "responseHeaders": {
	 *   "content-length": "0",
	 *   "dataserviceversion": "2.0",
	 *   "server": "SAP NetWeaver Application Server \/ ABAP 731"
	 * },
	 * "statusCode": 204,
	 * "statusReason": "No Content"
	 * }</pre>
	 * </br>
	 *			The invocation results object contains the following properties:<br />
	 *			 <table border="1">
	 * 			  <tr>
	 * 			    <th><b>Property</b></th>
	 * 			    <th><b>Description</b></th>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>isSuccessful</td>
	 * 			    <td>Identifies whether the request succeeded or failed</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 			    <td>responseHeaders</td>
	 * 			    <td>Header of the response generated by the SAP Netweaver Gateway server</td>
	 * 			  </tr>
	 * 			  <tr>
	 * 					<td>statusCode</td> 
	 * 					<td>Status code of the SAP Netweaver Gateway response</td>
	 * 			 </tr>
	 * 			 <tr>
	 * 					<td>statusReason</td> 
	 * 				<td>
	 * 					Reason for the status code
	 *				</td>
	 * 			  </tr>
	 * 			</table>
	 *
	 * @methodOf WL.Server#
	 */
	this.updateNWBusinessObject = function(options){};
};
__WL.prototype.Server = new __WLServer;
__WL.prototype.Logger = new __WLLogger;