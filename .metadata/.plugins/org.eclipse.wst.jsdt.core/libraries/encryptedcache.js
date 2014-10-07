/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/**
 * @class
 * 		<p>Encrypted offline cache is a mechanism for storing sensitive data on the client application.<br />
 * 		You can also use the JSONStore feature to obtain reliable secure on-device storage of data. If you previously used the Encrypted offline cache (EOC) feature, 
 * 		you can now use this improved on-device storage method for offline access. In addition, the JSONStore allows to populate and update data from an adapter on the server. 
 * 		technique provides a better alternative for storing adapter data offline and synchronizing with a server the changes that were done when offline. 
 * 		If you are developing a Worklight&reg; hybrid app to target both iOS and Android, consider using JSONStore rather than EOC. HTML5 cache, as used in EOC, 
 * 		is not guaranteed to be persistent on future iOS versions. JSONStore uses the same encryption form and security mechanisms as EOC (PBKDF2 for key derivation from user password and AES 256). 
 * 		EOC continues to be supported as a cross-platform on-device data store mechanism for various mobile client OS platforms, but no major technical updates will be made to the EOC feature set.</p>
 * 		
 * 		<p>The cache uses HTML5 local storage to store user data. HTML5 imposes a limit of 5 MB, which is equivalent to approximately 1.3 MB of unencrypted text. 		
 * 		If you exceed this limit, the behavior is undefined. If you use a large amount of cache, you might experience delays in processing it.</p>
 *
 *    <p>The HTML5 LocalStorage specification does not require methods to wait until the data has been physically written to the disk to execute the next line of
 *    code. The only requirement is consistency in what different scripts that access the same underlying list of key-value pairs see. Thus, you might run into
 *    cases when the success or failure callback is executed before data is changed on the disk.</p>
 * 		
 * 		<p>Data is stored in key-value pairs. Data is encrypted by using a 256-bit encryption key. The encryption key is itself encrypted, using a separate 256-bit encryption key. 
 * 		That key is generated from the user’s password by using the PKCS #5 PBKDF2 function.</p>
 * 
 * 		<p>The encrypted offline cache is available for mobile, desktop, and web environments that support HTML5.</p>
 * 		
 * 		<p>As an alternative to encrypted offline cache, you can use a JSONStore object.</p>
 * 
 * @exception The following exceptions can be thrown by WL.EncryptedCache methods:
 * 		<ul>
 * 			<li><b>WL.EncryptedCache.ERROR_NO_EOC</b><br>
 * 				Thrown when create_if_none is false but no encrypted cache was previously initialized.</li>
 * 			<li><b>WL.EncryptedCache.ERROR_LOCAL_STORAGE_NOT_SUPPORTED</b><br />
 * 				Thrown when the HTML5 local storage interface is unavailable.</li>
 * 			<li><b>WL.EncryptedCache.ERROR_KEY_CREATION_IN_PROGRESS</b><br />
 * 				Thrown when the encrypted storage is processing an open or changeCredentials request.</li>
 * 			<li><b>WL.EncryptedCache.ERROR_EOC_CLOSED</b><br>
 * 				Thrown when the encrypted cache was not properly initialized by using WL.EncryptedCache.open.</li>
 * 		</ul>
 * 
 * @name WL.EncryptedCache
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__EncryptedCache = function() {
	/**
	 * Close encrypted cache.
	 * @description Closes the cache. The cache must be reopened with the user’s credentials to be used again.
	 * @param onCompleteHandler Mandatory. Function. A callback method that is invoked when the encrypted cache is ready for use. <br />
	 * 		Signature: <code>successCallback (status)</code>, where status can be <code>WL.EncryptedCache.OK</code>.
	 * @param onFailureHandler Mandatory. Function. A callback method that is invoked when the action fails.<br />
	 * 			Signature: <code>failureCallback(status)</code>, where status can be <code>WL.EncryptedCache.ERROR_KEY_CREATION_IN_PROGRESS</code>.
	 *@methodOf WL.EncryptedCache#
	 */

	this.close = function(onCompleteHandler, onFailureHandler) {
	};
	
	/**
	 * Deletes encrypted cache.
	 * @description Completely deletes the encrypted cache and its storage. The cache does not need to be opened before it is destroyed.
	 * @param successCallback Mandatory. Function. A callback method that is invoked when the action succeeds.<br />
	 * 		Signature: <code>successCallback (status)</code>, where status can be <code>WL.EncryptedCache.OK</code>.
	 * @param failureCallback Mandatory. Function. A callback method that is invoked when the action fails.<br />
	 * 			Signature: <code>failureCallback(status)</code>, where status can be <code>WL.EncryptedCache.ERROR_KEY_CREATION_IN_PROGRESS</code>.
	 * @returns <b>WL.EncryptedCache.OK</b><br />
	 * 			The encryption data was successfully removed from memory.
	 *@methodOf WL.EncryptedCache#
	 * @name WL.EncryptedCache#destroy
	 */
	this.destroy = function(onCompleteHandler, onFailureHandler) {
	};
	/**
	 * Open an existing cache, or create a cache.
	 * @description Opens an existing cache, or creates a cache, which is encrypted using the provided credentials. This method runs asynchronously because the key generation process is a lengthy process.<br />
	 * 		The process of creating a cache involves obtaining a random number from the Worklight&reg; Server. Hence, the action of creating a cache requires that the app is connected to the Worklight Server. 
	 * 		After a cache is created, it can then be opened without a connection.
	 * @param credentials Mandatory. String. The credentials that are used to encrypt the stored data.
	 * @param create_if_none Mandatory. Boolean. Whether to create an encrypted cache if one does not exist.
	 * @param onCompleteHandler Mandatory. Function. A callback method that is invoked when the encrypted cache is ready for use.<br />
	 * 		The signature of this method is <code>onCompleteHandler(status)</code>. The possible value for status is <code>WL.EncryptedCache.OK</code>.
	 * @param onErrorHandler Mandatory. Function. A callback method that is invoked when the action fails.<br />
	 * 			The signature of this method is <code>onErrorHandler(status)</code>. Possible values for status are:<br />
	 * 			<code>WL.EncryptedCache.ERROR_KEY_CREATION_IN_PROGRESS, WL.EncryptedCache.ERROR_LOCAL_STORAGE_NOT_SUPPORTED</code>,<br />
	 * 			<code>WL.EncryptedCache.ERROR_NO_EOC, WL.EncryptedCache.ERROR_COULD_NOT_GENERATE_KEY</code>, <br />
	 * 			<code>WL.EncryptedCache.ERROR_CREDENTIALS_MISMATCH</code>
	 * 		
	 *@methodOf WL.EncryptedCache#
	 */
	this.open = function(credentials, create_if_none, onCompleteHandler, onErrorHandler) {
	};
	
	/**
	 * Decrypts the value that is associated with the specified key.
	 * @param key Mandatory. String. The key whose value needs to be decrypted.
	 * @param successCallback Mandatory. Function. A callback method that is invoked when the action succeeded.<br />
	 * 			Signature: <code>successCallback (value)</code>, where value is the result of the read action.
	 * @param onFailureHandler Mandatory. Function. A callback method that is invoked when the action fails.<br />
	 * 		Signature: <code>failureCallback(status)</code>, where status can be <code>WL.EncryptedCache.ERROR_EOC_CLOSED</code>.
	 * @returns Decrypted value of the specified key.
	 * @methodOf WL.EncryptedCache#
	 */
	this.read = function(key, successCallback, failureCallback) {
	};
	
	/**
	 * Removes a key-value pair from the cache.
	 * @description Removes the key-value pair that is associated with <code>key</code>. Same as <code>WL.EncryptedCache.write(key, null)</code>.
	 * @param Key Mandatory. String. The key to remove.
	 * @param successCallback Mandatory. Function. A callback method that is invoked when the action succeeded.<br />
	 * 		Signature: <code>successCallback (status)</code>, where status can be <code>WL.EncryptedCache.OK</code>.
	 * @param failureCallback Mandatory. Function. A callback method that is invoked when the action fails.<br />
	 * 			Signature: <code>failureCallback(status)</code>, where <code>status</code> can be <code>WL.EncryptedCache.ERROR_EOC_CLOSED</code>.
	 *@methodOf WL.EncryptedCache#
	 * @name WL.EncryptedCache#remove
	 */
	this.remove = function(key, successCallback, failureCallback) {
	};
	
	/**
	 * Store a key-value pair in the cache.
	 * @description Stores the key-value pair, encrypting value and associating it with <code>key</code> for later retrieval.
	 * @param key Mandatory. String. The key to associate the data (<code>value</code>) with.
	 * @param value Mandatory. String. The data to encrypt. When set to <code>null</code>, the key is removed.
	 * @param successCallback Mandatory. Function. A callback method that is invoked when the action succeeds.<br />
	 * 			Signature: <code>successCallback (status)</code>, where status can be <code>WL.EncryptedCache.OK</code>.
	 * @param failureCallback Mandatory. Function. A callback method that is invoked when the action fails.<br />
	 * 				Signature: <code>failureCallback(status)</code>, where <code>status</code> can be <code>WL.EncryptedCache.ERROR_EOC_CLOSED</code>.
	 *@methodOf WL.EncryptedCache#
	 */
	this.write = function(key, value, successCallback, failureCallback) {
	};
	this.OK = 0;
	this.ERROR_NO_EOC = 1;
	this.ERROR_CREDENTIALS_MISMATCH = 2;
	this.ERROR_EOC_TO_BE_DELETED = 3;
	this.ERROR_EOC_DELETED = 4;
	this.ERROR_UNSAFE_CREDENTIALS = 5;
	this.ERROR_EOC_CLOSED = 6;
	this.ERROR_NO_SUCH_KEY = 7;
	this.ERROR_LOCAL_STORAGE_NOT_SUPPORTED = 8;
	this.ERROR_KEY_CREATION_IN_PROGRESS = 9;
	

};

__WL.prototype.EncryptedCache = new __EncryptedCache;
