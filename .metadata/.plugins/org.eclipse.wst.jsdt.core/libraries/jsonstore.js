/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @class 
 *
 * <p>Descriptions and reference information for the JSONStore API functions.</p>
 *
 * <p>For an overview and more descriptive information, see the JSONStore overview section in the IBM® Worklight® user documentation.</p>
 *
 * @name WL.JSONStore
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__JSONStore = function () {

	/**
	* Starts one or more collections.
	* 
	* @param {object} collections Metadata about the collections.
	*	@param {string} collections.collectionName Name of the the collection, must be an alphanumeric string ([a-z, A-Z, 0-9]) that starts with a letter. 
	*	@param {object} collections.collectionName.searchFields The key value pairs in the data that will be indexed, by default nothing is indexed.
	*	@param {object} [collections.collectionName.additionalSearchFields] The additional key value pairs that will be indexed, by default nothing is indexed.
	*	@param {object} [collections.collectionName.adapter] Metadata about the adapter that will be linked to the collection.
	*	@param {string} collections.collectionName.adapter.name Name of the Adapter.
	*	@param {string} [collections.collectionName.adapter.add] Name of the add procedure.
	*	@param {string} [collections.collectionName.adapter.remove] Name of remove procedure.
	*	@param {object} [collections.collectionName.adapter.load] Metadata about the load procedure.
	*	@param {string} collections.collectionName.adapter.load.procedure Name of the load procedure.
	*	@param {array}  collections.collectionName.adapter.load.params Parameters that are sent to the load procedure.
	*	@param {string} collections.collectionName.adapter.load.key Key in the response object containing objects to add.
	*	@param {function} [collections.collectionName.adapter.accept] Called after push with the response from the adapter, must return a boolean.
	*	@param {integer} [collections.collectionName.adapter.timeout] Timeout for the adapter call.
	*
	* @param {object} [options] Options that apply to the store.
	*	@param {string} [options.username] Name of the file that is created to store data for the collections, 
	*			must be an alphanumeric string ([a-z, A-Z, 0-9]) and start with a letter. The default one is 'jsonstore'.
	*	@param {string} [options.password] Password that is used to secure the contents of the store, by default there is no data encryption.
	*	@param {boolean} [options.clear] Clears accessors without removing its contents from the store.
	*	@param {boolean} [options.localKeyGen] Flag that determines if key generation uses a local (false) or remote (true) random number generator.
	*
	* @return {Promise} Resolved when all collections have been initialized. 
	*		Rejected when there is a failure (no accessors created).
	*
	* @methodOf WL.JSONStore#
	*/
	this.init = function (collections, options) { };

	/** 
	* Provides an accessor to the collection if the collection exists, otherwise it returns undefined.
	*
	* @param {string} collectionName Name of the collection.
	*
	* @return {WL.JSONStore.JSONStoreInstance} Allows access to the collection by name.
	*
	* @methodOf WL.JSONStore#
	*/
	this.get = function (collectionName) { };

  /**
  * Returns information about the file that is used to persist data in the store. The following key value pairs are returned: 
  * name - name of the store, 
  * size - the total size, in bytes, of the store, 
  * and isEncrypted - boolean that is true when encrypted and false otherwise.
  *
  * @return {Promise} Resolved when the operation succeeds.
  *   Rejected when there is a failure.
  *
  * @methodOf WL.JSONStore#
  */
	this.fileInfo = function () { };
	
	/**
	* Locks access to all the collections until <code>WL.JSONStore.init</code> is called.
	*
	* @param {object} [options] 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds.
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore#
	*/
	this.closeAll = function (options) { };

	/** 
	* Takes an <code>_id</code> and a JSON object and creates a JSONStore document.
	*
	* @param {integer} id <code>_id</code> for the Document
	* @param {object} data JSON data for the Document
	*
	* @return {object} JSONStore document.
	*
	* @deprecated Since IBM® Worklight® V6.2.0.
	* @methodOf WL.JSONStore#
	*/
	this.documentify = function (id, data) { };

	/**
	* Changes the password for the internal storage. 
	* @description You must have an initialized collection before calling <code>WL.JSONStore.changePassword</code>.
	* @param {string} oldPassword The old password. Must be alphanumeric ([a-z, A-Z, 0-9]), begin with a letter and have least 1 character.
	*
	* @param {string} newPassword The new password Must be alphanumeric ([a-z, A-Z, 0-9]), begin with a letter and have least 1 character.
	*
	* @param {string} [username] Default user name is 'jsonstore'. Must be alphanumeric ([a-z, A-Z, 0-9]), begin with a letter and have least 1 character.
	*
	* @param {object} [options] 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds. 
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore#
	*/
	this.changePassword = function (oldPassword, newPassword, username) { };

	/**
	* Completely wipes data for all users, destroys the internal storage, and clears security artifacts.
	* 
	* @param {object} [options] 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds. 
	*  Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore#
	*/
	this.destroy =  function (options) { };

	/**
	* Returns the message that is associated with a JSONStore error code.
	* 
	* @param {integer} errorCode The error code.
	*
	* @return {string} The Error Message that is associated with the status code or <code>'Not Found'</code>
	*        if you pass an invalid value (non-integer) or a nonexistent status code.
	* @methodOf WL.JSONStore#
	*/
	this.getErrorMessage = function (statusCode) { };

	/**
	* Initiates a transaction.
	* 
	* @return {Promise} Resolved when the operation succeeds, returns an integer.
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore#
	*/
	this.startTransaction = function () { };

	/**
	* Commit a transaction.
	* 
	* @return {Promise} Resolved when the operation succeeds, returns an integer.
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore#
	*/
	this.commitTransaction = function () { };

	/**
	* Roll back a transaction.
	* 
	* @return {Promise} Resolved when the operation succeeds, returns an integer.
	*		Rejected when there is a failure.
	*
	*
	* @methodOf WL.JSONStore#
	*/
	this.rollbackTransaction = function () { };

	/** 
	* Removes the password from memory. 
	* 
	* @return {boolean} Returns true if the password that is stored in memory was set to null, false if there was no password 
	* in memory or if it was not set to null.
	*
	* @deprecated Since IBM® Worklight® V5.0.6, it is no longer needed if you use <code>WL.JSONStore.init</code>
	* @methodOf WL.JSONStore#
	*/
	this.clearPassword = function () { };

	/** 
	* Returns an accessor (also known a JSONStoreInstance) to a single collection. 
	* 
	* @param {string} name Name of the the collection, must be an alphanumeric string ([a-z, A-Z, 0-9]) that starts with a letter.   
	* @param {object} searchFields The key value pairs in the data that will be indexed, by default nothing is indexed.
	* @param {options} options Options that you can pass to <code>WL.JSONStore.init</code>.
	*
	* @return {WL.JSONStore.JSONStoreInstance} Accessor to a single collection.
	*
	* @deprecated Since IBM® Worklight® V5.0.6, it is no longer needed if you use <code>WL.JSONStore.init</code>
	* @methodOf WL.JSONStore#
	*/
	this.initCollection = function (name, searchFields, options) { };

	/** 
	* Sets the password that is used to generate keys to encrypt data that is stored locally on the device.
	*
	* @param {string} pwd String that contains the password.
	*
	* @return {boolean} Returns true if the password is a valid string, false otherwise.
	*
	* @deprecated Since IBM® Worklight® V5.0.6, it is no longer needed if you use <code>WL.JSONStore.init</code>
	* @methodOf WL.JSONStore#
	*/
	this.usePassword = function (pwd) { };

	/** 
	* Creates a query for advanced find. See {@link WL.JSONStore.QueryPart} for more information.
	*
	* @example
	* WL.JSONStore.QueryPart();
	*
	* @methodOf WL.JSONStore#
	*/
	this.QueryPart = function () {};

};

__WL.prototype.JSONStore = new __JSONStore;

	/**
	* @class 
	*
	* @name WL.JSONStore.JSONStoreInstance
 	* @ilog.undocumented.jsFile
	* @ilog.undocumented.constructor
	*/
	__JSONStoreInstance = function () {

	/**
	* Stores data as documents inside a collection.
	*
	* @param {array|object} data Data to be added the collection.
	* @param {object} [options] 
	* @param {object} [options.additionalSearchFields] Search fields that are not part of the data passed.
	* @param {boolean} [options.markDirty] Default value is true, determines if the data will be marked as dirty.
	* @param {boolean} [options.push] Deprecated. Default value is true, determines if the data will be marked as needed to be pushed to an adapter.
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns the number of documents added.
	*		Rejected when there is a failure.
	*
	* 
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.add = function (data, options) { };

	/**
	* Returns the number of documents inside a collection. 
	* 
	* @param {object} [query] Defines what to search for in the collection. If it is not passed, it will count everything in the collection.
	* @param {object} [options] 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns an integer. 
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.count = function (query, options) { };

	/**
	* The enhance function allows developers to extend the core API to better fit their needs.
	* 
	* @param {string} name Function name.
	* @param {function} fn Function to add to the JSONStoreInstance prototype for a specific collection.
	*
	* @return {integer} 0 return code for success or an error code for failure.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.enhance = function (name, fn) { };

	/**
	* Locates a document inside a collection using a query.
	* 
	* @param {array|object} query Defines what to search for in the collection.
	* @param {object} [options] 
	* @param {boolean} [options.exact] Default is false and will do fuzzy searches, true will do exact searches.
	* @param {integer} [options.limit] Maximum amount of documents to return, the default behavior is to return everything.
	* @param {integer} [options.offset] Amount of documents to skip from the results, depends on the limit.
	* @param {array} [options.filter] Return only the specified search fields, by default return <code>_id</code> and <code>json</code>.
	* @param {array} [options.sort] Sort documents based on their search fields, either ascending or descending.
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns an array of results.
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.find = function (query, options) { };

	/**
	* Locates a document inside a collection by using query parts. 
	* @description
	* <p>The ability to search using between, inside, lessThan, greaterThan, etc. in your query search. Consider using the following helper
	* <code>WL.JSONStore.QueryPart</code>.</p>
	*
	* @param {array} query Defines what to search for in the collection.
	* @param {object} [options] 
	* @param {integer} [options.limit] Maximum number of documents to return, the default behavior is to return everything.
	* @param {integer} [options.offset] Number of documents to skip from the results, depends on the limit.
	* @param {array} [options.filter] Return only the specified search fields, by default return <code>_id</code> and <code>json</code>.
	* @param {array} [options.sort] Sort documents based on their search fields, either ascending or descending.
	*
	* @return {Promise} Resolved when the operation succeeds, returns an array of results.
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.advancedFind = function (query, options) { };

	/**
	* Returns all of the documents stored in a collection.
	*
	* @param {object} [options] 
	* @param {integer} [options.limit] Maximum amount of documents to return, the default behavior is to return everything.
	* @param {integer} [options.offset] Amount of documents to skip from the results, depends on the limit.
	* @param {array} [options.filter] Filter and select document's specified searchfields. If no filter array is passed, all searchfields are returned.
	* @param {array} [options.sort] Sort documents based on their searchfields, either ascending or descending.
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns an array of results. 
	*		Rejected when there is a failure.
	*
	* 
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.findAll = function (options) { };

	/**
	* Returns one or more documents that match the <code>_id</code> that is supplied to the function.
	*
	* @param {object} [options] 
	* @param {array} [options.filter] Return only the specified search fields, by default return <code>_id</code> and <code>json</code>.
	* @param {array} [options.sort] Sort documents based on their search fields, either ascending or descending.
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns an array of results. 
	*		Rejected when there is a failure.
	*
	* 
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.findById = function (data, options) { };

	/**
	* Returns all documents that are marked dirty. This function was previously called <code>JSONStoreIntance.getPushRequired</code>.
	*
	* @param {object} [options] 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns array of documents. 
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.getAllDirty = function (options) { };

	/**
	* Returns a boolean that is true if the document is dirty, false otherwise. 
	* This function was previously called JSONStoreIntance.isPushRequired.
	*
	* @param {object|integer} doc JSONStore style document or <code>_id</code>
	* @param {object} [options] 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, return a boolean. 
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.isDirty = function (doc, options) { };

	/**
	* Gets data that is defined in the load portion of the adapter.
	*
	* @param {object} [options] 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns number of documents loaded. 
	*		Rejected when there is a failure.
	*
	* 
	* @deprecated Since IBM® Worklight® V6.2.0.
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.load = function (options) { };

	/**
	* Pushes documents inside the collection that have local-only changes to an IBM® Worklight® adapter 
	* that is linked during the init function.
	* 
	* @param {array|object|integer} [options] Options object, array of documents, single document or an <code>_id</code>.
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns an array.
	*   Array returned is either empty (everything worked) or full of error responses.
	*		Rejected when there is a failure.
	*
	* @deprecated Since IBM® Worklight® V6.2.0.
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.push = function (options) { };

	/**
	* Returns the number of documents with local-only changes (that is, dirty documents).
	* This function was previously called JSONStoreIntance.pushRequiredCount.
	* 
	* @param {object} [options] 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns an integer.
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.countAllDirty = function (options) { };

	/**
	* Marks a document as deleted inside a collection.
	* 
	* @param {array|object|integer} doc Document, array of documents, query object or <code>_id</code>.
	* @param {object} [options] 
	* @param {boolean} [options.markDirty] Default value is true, determines if the data will be marked as dirty. 
	* @param {boolean} [options.push] Deprecated. Default value is true, determines if the data will be marked as needed to be pushed to an adapter.
    * @param {boolean} [options.exact] Default is false and will do fuzzy searches, true will do exact searches.
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.remove = function (doc, options) { };

	/**
	* Deletes all the documents that are stored inside a collection.
	*
	* @param {object} [options] 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds.
	*		Rejected when there is a failure.
	*
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.removeCollection = function (options) { };

	/**
	* Clears a collection for reuse.
	* 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds.
	*		Rejected when there is a failure.
	*
	* 
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.clear = function () { };
	
	/**
	* Marks an array of documents as clean. Takes input from JSONStoreIntance.getAllDirty, 
	* which returns documents that have: _operation, _dirty, _id, 
	* json, and _deleted.
	* 
	* @param {array} docs array of documents
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns number of clean documents.
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.markClean = function (docs) { };

	/**
	* Overwrites a document with a given document.
	* 
	* @param {array|object} doc Document or array of documents.
	* @param {object} [options] 
	* @param {boolean} [options.markDirty] Default value is true, determines if the data will be marked as dirty.
	* @param {boolean} [options.push] Deprecated. Default value is true, determines if the data will be marked as needed to be pushed to an adapter.
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns an integer.
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.replace = function (doc, options) { };

	/**
	* Used to load data when existing data exists in the store. Internally it is an alias for a targeted replace and add.
	* 
	* @param {array|object} data Data to be added the collection.
	* @param {object} [options] 
	* @param {boolean} [options.addNew] Default value is false, determines if the data will added if data is not in collection.
	* @param {boolean} [options.markDirty] Default value is false, determines if the data will be marked as dirty.
	* @param {array} [options.replaceCriteria] Determines which documents will be replaced based on the given search field or search fields.
	* If the parameter is not specified or is an empty array, then the data will not be replaced.
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds, returns the number of documents replaced or added.
	*		Rejected when there is a failure.
	*
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.change = function (doc, options) { };

	/**
	* Prints the contents of the collection by using  WL.Logger.debug asynchronously.
	* 
	* @param {integer} [limit] Maximum amount of documents to show. Use 0 for no documents, 
	*	if limit is missing it will print up to the first 100 documents.
	*	@param {integer} [offset] Number of documents to skip. Requires a valid limit.
	*
	* @return {Promise} Resolved when the operation succeeds, returns an integer.
	*		Rejected when there is a failure.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.toString = function (limit, offset) { };

	/** 
	* Pushes only the selected documents.
	* 
	* @param {object|array} doc Document or array of documents.
	*
	* @param {object} [options] 
	* @param {function} [options.onSuccess] Deprecated. Success callback.
	* @param {function} [options.onFailure] Deprecated. Failure callback.
	*
	* @return {Promise} Resolved when the operation succeeds.
	*   Rejected when there is a failure.
	*
	* @deprecated Since IBM Worklight v5.0.6, it is no longer needed if you use <code>WL.JSONStore.JSONStoreInstance.push</code>.
	* @methodOf WL.JSONStore.JSONStoreInstance#
	*/
	this.pushSelected = function (doc, options) { };

	/**
	* Deletes a document from the collection.
	* 
	* @param {array|object|integer} doc Document, array of documents, query object or <code>_id</code>.
	* @param {object} [options] 
	* @param {boolean} [options.push] Default value is false, determines if the data will be marked as needed to be pushed to an adapter.
	* @param {function} [options.onSuccess] Success callback.
	* @param {function} [options.onFailure] Failure callback.
	* 
	* @methodOf WL.JSONStore.JSONStoreInstance#
	* @deprecated Since IBM® Worklight® V5.0.6, it is no longer needed if you use <code>WL.JSONStore.JSONStoreInstance.remove</code> 
	* with <code>{push: false}</code>.
	*/
	this.erase = function (doc, options) { };

	/**
	* Writes data to a collection.
	* 
	* @param {object|array} data Data to store in the collection.
	* @param {object} [options]
	* @param {object} [options.additionalSearchFields] Search fields that are not part of the data that is passed.
	* @param {boolean} [options.push] Default value is false, determines if the data will be marked as needed to be pushed to an adapter.
	* @param {function} [options.onSuccess] Success callback.
	* @param {function} [options.onFailure] Failure callback.
	*
	* 
	* @methodOf WL.JSONStore.JSONStoreInstance#
	* @deprecated Since IBM® Worklight® V5.0.6, it is no longer needed if you use <code>WL.JSONStore.JSONStoreInstance.add</code> 
	* with <code>{push: false}</code>.
	*/
	this.store = function (doc, options) { };

	/**
	* Replaces a document with another document.
	* 
	* @param {array|object} doc Document or array of documents.
	* @param {object} [options] 
	* @param {boolean} [options.push] Default value is false, determines if the data will be marked as needed to be pushed to an adapter.
	* @param {function} [options.onSuccess] Success callback.
	* @param {function} [options.onFailure] Failure callback.
	*
	* @methodOf WL.JSONStore.JSONStoreInstance#
	* @deprecated Since IBM® Worklight® V5.0.6, it is no longer needed if you use <code>WL.JSONStore.JSONStoreInstance.replace</code> 
	* with <code>{push: false}</code>.
	*/
	this.refresh = function (doc, options) { };

};

__WL.prototype.JSONStore.JSONStoreInstance = new __JSONStoreInstance;

	/**
	* @class 
	*
	* <p>Descriptions and reference information for the WL.JSONStore.QueryPart API functions.</p>
	*
	* <p>For an overview and more descriptive information, see the JSONStore overview section in the IBM® Worklight® user documentation.</p>
	*
	* @name WL.JSONStore.QueryPart
	* @ilog.undocumented.jsFile
	* @ilog.undocumented.constructor
	*/

	QueryPart = function () {

	/**
	* Add a like clause to a query for advanced find.
	* @description
	* <p>Behaves like the fuzzy option in <code>WL.JSONStore.JSONStoreInstance.find</code>. See <code>WL.JSONStore.JSONStoreInstance.find</code> for more information.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {string} value Determines what string value to use to compare in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().like('name', 'ca');
	*	//arr = [{$like: [{ name : 'ca' }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.like = function (searchField, value) { };

	/**
	* Add a not like clause to a query for advanced find.
	* @description
	* <p>The negative of like. See <code>WL.JSONStore.QueryPart.like</code> for more information.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {string} value Determines what string value to use to compare in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().notLike('name', 'ca');
	*	//arr = [{$notLike: [{ name : 'ca' }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.notLike = function (searchField, value) { };

	/**
	* Add a left clause to a query for advanced find.
	* @description
	* <p>Similar to <code>WL.JSONStore.QueryPart.like</code> except only use input from the left.
	* See <code>WL.JSONStore.Query.like</code> for more information.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {string} value Determines what string value to use to compare in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().leftLike('name', 'ca');
	*	//arr = [{$leftLike: [{ name : 'ca' }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.leftLike = function (searchField, value) { };

	/**
	* Add a not left clause to a query for advanced find.
	* @description
	* <p>The negative of left like. See <code>WL.JSONStore.QueryPart.leftLike</code> for more information.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {string} value Determines what string value to use to compare in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().notLeftLike('name', 'ca');
	*	//arr = [{$notLeftLike: [{ name : 'ca' }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.notLeftLike = function (searchField, value) { };

	/**
	* Add a right clause to a query for advanced find.
	* @description
	* <p>Similar to <code>WL.JSONStore.QueryPart.like</code> except only use input from the right.
	* See <code>WL.JSONStore.QueryPart.like</code> for more information.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {string} value Determines what string value to use to compare in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().rightLike('name', 'ca');
	*	//arr = [{$rightLike: [{ name : 'ca' }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.rightLike = function (searchField, value) { };

	/**
	* Add a not right clause to a query for advanced find.
	* @description
	* <p>The negative of right like. See <code>WL.JSONStore.QueryPart.rightLike</code> for more information.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {string} value Determines what string value to use to compares in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().notRightLike('name', 'ca');
	*	//arr = [{$notRightLike: [{ name : 'ca' }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.notRightLike = function (searchField, value) { };


	/**
	* Add an equal to clause to a query for advanced find.
	* @description
	* <p>Behaves like the exact option in <code>WL.JSONStore.JSONStoreInstance.find</code>. See <code>WL.JSONStore.JSONStoreInstance.find</code> for more information.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {string|integer|number} value Determines what value to use to compare in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().equal('age', 35);
	*	//arr = [{$equal: [{ age : 35 }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.equal = function (searchField, value) { };

	/**
	* Add a not equal to clause to a query for advanced find.
	* @description
	* <p>The negative of equal. See <code>WL.JSONStore.QueryPart.equal</code> for more information.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {string} value Determines what string value to use in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().notEqual('name', 'ca');
	*	//arr = [{$notEqual: [{ name : 'ca' }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.notEqual = function (searchField, value) { };

	/**
	* Add a less than clause to a query for advanced find.
	* @description
	* <p>The less than clause will make comparisons between the query and the document in the collection and return document(s) if
	* the selected search field or additional search field value are less than the value given by the query.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {integer|number} value Determines what value to use in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().lessThan('age', 40);
	*	//arr = [{$lessThan: [{ age : 40 }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.lessThan = function (searchField, value) { };

	/**
	* Add a less or equal than clause to a query for advanced find.
	* @description
	* <p>The less than equal clause will make comparisons between the query and the document in the collection and return document(s) if
	* the selected search field or additional search field value are less than or equal to the value given by the query.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {integer|number} value Determines what value to use in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().lessOrEqualThan('age', 40);
	*	//arr = [{$lessOrEqualThan: [{ age : 40 }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.lessOrEqualThan = function (searchField, value) { };


	/**
	* Add a greater than clause to a query for advanced find.
	* @description
	* <p>The greater than clause will make comparisons between the query and the document in the collection and return document(s) if
	* the selected search field or additional search field values are greater than the value given by the query.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {integer|number} value Determines what value to use in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().greaterThan('age', 40);
	*	//arr = [{$greaterThan: [{ age : 40 }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.greaterThan = function (searchField, value) { };

	/**
	* Add a greater or equal thanclause to a query for advanced find.
	* @description
	* <p>The greater than equal clause will make comparisons between the query and the documents in the collection and return document(s) if
	* the selected search field or additional search field values are greater than or equal to the value given by the query.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {integer|number} value Determines what value to use in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().greaterOrEqualThan('age', 40);
	*	//arr = [{$greaterOrEqualThan: [{ age : 40 }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.greaterOrEqualThan = function (searchField, value) { };

	/**
	* Add a between clause to a query for advanced find.
	* @description
	* <p>The between clause will make comparisons between the query and the documents in the collection and return documents(s) if
	* the selected search field or additional search field values are between the range given by the query.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {array} value The range of values, integer or number, to use in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().between('gpa', [3.0, 4.0]);
	*	//arr = [{$between: [{ gpa : [3.0, 4.0] }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.between = function (searchField, value) { };

	/**
	* Add a not between clause to a query for advanced find.
	* @description
	* <p>The negative of between. See <code>WL.JSONStore.QueryPart.between</code> for more information.</p>
	* 
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {array} value The range of values, integer or number, to use in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().notBetween('gpa', [3.0, 4.0]);
	*	//arr = [{$notBetween: [{ gpa : [3.0, 4.0] }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.notBetween = function (searchField, value) { };

	/**
	* Add an in clause to a query for advanced find.
	* @description
	* <p>The in clause with make comparisons between the query and the documents in the collection and return document(s) if
	* the selected search field or additional search field values given by the query are contained in the document.</p>
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {array} value The range of values to use in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().inside('gpa', [3.0, 4.0]);
	*	//arr = [{$inside: [{ gpa : [3.0, 4.0] }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.inside = function (searchField, value) { };

	/**
	* Add a not in clause to a query for advanced find.
	* @description
	* <p>The negative of in. See <code>WL.JSONStore.QueryPart.inside</code> for more information.</p> 
	*
	* @param {string} searchField Determines what search field or additional search field to use in the query.
	* @param {array} value The range of values to use in the query.
	*
	* @return {array} Returns a formatted query array.
	*
	* @example
	* var arr = WL.JSONStore.QueryPart().notBetween('gpa', [3.0, 4.0]);
	*	//arr = [{$notBetween: [{ gpa : [3.0, 4.0] }]}]
	*
	* @methodOf WL.JSONStore.QueryPart#
	*/
	this.notInside = function (searchField, value) { };

};

__WL.prototype.JSONStore.QueryPart = new QueryPart;