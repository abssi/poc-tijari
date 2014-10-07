/*
 * Licensed Materials - Property of IBM
 * 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @class 
 * <p>The IBM® Worklight® User Certificate Authentication API provides the ability to remove user certificates provisioned on the client device during the enrollment process.</p>
 *
 * @name WL.UserAuth
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__UserAuth = function () {

	/**
	 * Removes the user certificate installed by the user certificate authentication realm.
	 *
	 * @example
	 * WL.UserAuth.deleteCertificate();
	 *
	 * @param {string} [provisioningEntity] name of the certificate provisioning entity, either 'application' or the group name under which 
	 * the certificate was provisioned. By default it is 'application'.
	 *
	 * @returns {Promise} Resolved with no parameters, rejected with an error object.
	 * @methodOf WL.UserAuth#
	 */
	this.deleteCertificate = function (provisioningEntity) { };
	
};

__WL.prototype.UserAuth = new __UserAuth; 