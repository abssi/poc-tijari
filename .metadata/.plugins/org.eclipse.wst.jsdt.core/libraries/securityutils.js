/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/**
 * @class
 * Security Utilities
 * 
 * @name WL.SecurityUtils
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 */
__SecurityUtils = function() {
  
  /**
   * Generates a key by using the PBKDF2 algorithm.
   * 
   * @param {object} options Required.
   * @param {string} options.password Required. Password that is used to generate the key.
   * @param {string} options.salt Required. Salt that is used to to generate the key.
   * @param {number} options.iterations Required. Number of iterations that is used for the key generation algorithm.
   *
   * @return {Promise} Resolved when the operation succeeds, first parameter is the hex encoded key.
   *   Rejected when there is a failure.
   *   
   * @methodOf WL.SecurityUtils#
   */
  this.keygen = function (options) {};
  
  /**
   * Encrypts text with a key.
   * 
   * @param {object} options Required.
   * @param {string} options.key Required. Text to encrypt.
   * @param {string} options.text Required. Key that is used for encryption.
   *
   * @return {Promise} Resolved when the operation succeeds, first parameter is an object which includes the cipher text.
   *   Rejected when there is a failure.
   *   
   * @methodOf WL.SecurityUtils#
   */
  this.encrypt = function (options) {};
  
  /**
   * Decryption function.
   * 
   * @param {object} options Required.
   * @param {string} options.key Required. Key.
   * @param {string} options.ct Required. Cipher Text.
   * @param {string} options.iv Required. Initialization Vector.
   * @param {string} options.src Required. Source ('obj' = iOS, 'java' = Android, 'js' = Web).
   * @param {number} options.v Required. Version.
   *
   * @return {Promise} Resolved when the operation succeeds, first parameter is the decrypted text.
   *   Rejected when there is a failure.
   *   
   * @methodOf WL.SecurityUtils#
   */
  this.decrypt = function (options) {};

  /**
   * Generates a random hex string locally.
   * 
   * @param {number} [bytes] Optional. Number of bytes that is used to generate the string. Default is 32 bytes.
   *
   * @return {Promise} Resolved when the operation succeeds, first parameter is the random hex string.
   *   Rejected when there is a failure.
   *   
   * @methodOf WL.SecurityUtils#
   */
  this.localRandomString = function (bytes) {};
  
  /**
   * Generates a random hex string by contacting a random generator on the IBM Worklight Server.
   * 
   * @param {number} [bytes] Optional. Number of bytes that is used to generate the string. Default is 20 bytes, maximum is 64 bytes.
   *
   * @return {Promise} Resolved when the operation succeeds, first parameter is the random hex string.
   *   Rejected when there is a failure.
   *   
   * @methodOf WL.SecurityUtils#
   */
  this.remoteRandomString = function (bytes) {};
  
  /**
   * Encodes input as base64 string.
   * 
   * @param {string} input Required. Input string.
   *
   * @return {Promise} Resolved when the operation succeeds, first parameter is the input string encoded.
   *   Rejected when there is a failure.
   *   
   * @methodOf WL.SecurityUtils#
   */
  this.base64Encode = function (input) {};
  
  /**
   * Decodes input base64 string to a non base64 encoded string.
   * 
   * @param {string} input Required. Input base64 encoded string.
   *
   * @return {Promise} Resolved when the operation succeeds, first parameter is the input string decoded.
   *   Rejected when there is a failure.
   *   
   * @methodOf WL.SecurityUtils#
   */
  this.base64Decode = function (input) {};
  
};

__WL.prototype.SecurityUtils = new __SecurityUtils;
