/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/


/**
 * @class
 * @ilog.undocumented.jsFile
 * @ilog.undocumented.constructor
 * @name WL.Geo
 */
__WLGeo = function() {
		
	/**
	 * Calculates the distance between two coordinates.
	 * <p>
	 * The distance between two coordinates is calculated. The result is returned in meters, using a spherical model of the Earth.
	 * </p>	 
	 * @param {object} coordinate1 The first coordinate.
	 * @param {number} coordinate1.longitude The longitude, as a decimal number.
	 * @param {number} coordinate1.latitude The latitude, as a decimal number.
	 * @param {object} coordinate2 The second coordinate. 
	 * @param {number} coordinate2.longitude The longitude, as a decimal number.
	 * @param {number} coordinate2.latitude The latitude, as a decimal number.
	 * @methodOf WL.Geo#
	 */	
	this.getDistanceBetweenCoordinates = function(coordinate1, coordinate2) {};
	
	//-------------------------------------------------------------------------------------------
	// Circle related functions 
	
	/**
	 * Calculates the distance of a coordinate from a circle.
	 * 
	 * 
	 * @param {object} coordinate The coordinate.
	 * @param {number} coordinate.longitude The longitude, as a decimal number.
	 * @param {number} coordinate.latitude The latitude, as a decimal number.
	 * @param {object} circle The circle. 
	 * @param {number} circle.longitude The longitude of the circle's center, as a decimal number.
	 * @param {number} circle.latitude The latitude of the circle's center, as a decimal number.
	 * @param {number} circle.radius  The radius, in meters.
	 * @param {object} [options] Optional parameters.
	 * @param {object} [options.bufferZoneWidth] The buffer zone width is measured in meters. It enlarges the radius of the circle by this amount. Negative values make the circle smaller. The default value is 0.
	 * @returns The distance, in meters, to the circle, taking into account the buffer zone. The distance is positive for coordinates outside the circle, and negative for coordinates within the circle.
	 * @methodOf WL.Geo#
	 */	
	 this.getDistanceToCircle = function(coordinate, circle, options) {};
	
	/**
	 * Returns a Boolean value based on whether a coordinate lies within a circle, based on a given level of confidence.
	 * 
	 * 
	 * @param {object} coordinate The coordinate.
	 * @param {number} coordinate.longitude The longitude, as a decimal number.
	 * @param {number} coordinate.latitude The latitude, as a decimal number.
	 * @param {number} [coordinate.accuracy]  The accuracy of the coordinate. The default value is 0.
	 * @param {object} circle The circle. 
	 * @param {number} circle.longitude The longitude of the circle's center, as a decimal number.
	 * @param {number} circle.latitude The latitude of the circle's center, as a decimal number.
	 * @param {number} circle.radius  The radius, in meters.
	 * @param {object} [options] Optional parameters.
	 * @param {string} [options.confidenceLevel] Has three possible values:
	 *            		<ul>
	 *            			<li><code>low</code> -  The coordinate lies within the circle. Accuracy is not taken into account.</li>
	 *            			<li><code>medium</code> -  The coordinate lies within the circle at approximately a 70% confidence interval. Accuracy is taken into account.</li>
	 *            			<li><code>high</code> -  The coordinate lies within the circle at approximately a 95% confidence interval. Accuracy is taken into account.</li>            		
	 *            		</ul>
	 *            		<br>
	 *            		The default value is <code>low</code>.
	 * @param {object} [options.bufferZoneWidth] The buffer zone width is measured in meters. It enlarges the radius of the circle by this amount. Negative values make the circle smaller. The default value is 0.
	 * @returns The value <code>true</code> is returned if the coordinate lies within the circle, at the given level of confidence. The dimensions of the circle used in this check incorporate any changes specified for the <code>options.bufferZoneWidth</code> parameter.
	 * @methodOf WL.Geo#
	 */	
	this.isInsideCircle = function(coordinate, circle, options) {};
	
	/**
	 * Returns a Boolean value based on whether a coordinate lies outside of a circle, based on a given level of confidence.
	 * 
	 * 
	 * @param {object} coordinate The coordinate.
	 * @param {number} coordinate.longitude The longitude, as a decimal number.
	 * @param {number} coordinate.latitude The latitude, as a decimal number.
	 * @param {number} [coordinate.accuracy]  The accuracy of the coordinate. The default value is 0.
	 * @param {object} circle The circle. 
	 * @param {number} circle.longitude The longitude of the circle's center, as a decimal number.
	 * @param {number} circle.latitude The latitude of the circle's center, as a decimal number.
	 * @param {number} circle.radius  The radius, in meters.
	 * @param {object} [options] Optional parameters.
	 * @param {string} [options.confidenceLevel] Has three possible values:
	 *            		<ul>
	 *            			<li><code>low</code> -  The coordinate lies outside the circle. Accuracy is not taken into account.</li>
	 *            			<li><code>medium</code> -   The coordinate lies outside the circle at approximately a 70% confidence interval. Accuracy is taken into account.</li>
	 *            			<li><code>high</code> -   The coordinate lies outside the circle at approximately a 95% confidence interval. Accuracy is taken into account.</li>            		
	 *            		</ul>
	 *            		<br>
	 *            		The default value is <code>low</code>.
	 * @param {object} [options.bufferZoneWidth] The buffer zone width is measured in meters. It enlarges the radius of the circle by this amount. Negative values make the circle smaller. The default value is 0.
	 * @returns The value <code>true</code> is returned if the coordinate lies outside the circle, at the given level of confidence. The dimensions of the circle used in this check incorporate any changes specified for the <code>options.bufferZoneWidth</code> parameter.
	 * @methodOf WL.Geo#
	 */		
	this.isOutsideCircle = function(coordinate, circle, options) {};
	
	
	//-------------------------------------------------------------------------------------------
	// Polygon related functions 
	/**
	 * Calculates the distance of a coordinate from a polygon.
	 * @param {object} coordinate The coordinate.
	 * @param {number} coordinate.longitude The longitude, as a decimal number.
	 * @param {number} coordinate.latitude The latitude, as a decimal number.
	 * @param {object[]} polygon The <code>polygon</code> parameter consist of an array of coordinates. Each coordinate has the following properties:
	 *            <ul>
	 *            	<li><code>longitude</code> -  The longitude, as a decimal number.</li>
	 *            	<li><code>latitude</code> -  The  latitude, as a decimal number.</li>            	
	 *            </ul>     
	 * @param {object} [options] Optional parameters.
	 * @param {number} [options.bufferZoneWidth]  The buffer zone width is measured in meters. It increases the size of the polygon in all directions by this amount. Negative values decrease the polygon's size. The default value is 0.
	 * @returns The distance, in meters, to the polygon, taking into account the buffer zone. The distance is positive for coordinates outside the polygon, and negative for coordinates within the polygon.
	 * @methodOf WL.Geo#
	 */	
	this.getDistanceToPolygon = function(coordinate, polygon, options) {};
	

	/**
	 * Returns a Boolean value based on whether a coordinate lies within a polygon, based on a given level of confidence.
	 * 
	 * 
	 * @param {object} coordinate The coordinate.
	 * @param {number} coordinate.longitude The longitude, as a decimal number.
	 * @param {number} coordinate.latitude The latitude, as a decimal number.
	 * @param {number} [coordinate.accuracy]  The accuracy of the coordinate. The default value is 0.
	 * @param {object[]} polygon The <code>polygon</code> parameter consist of an array of coordinates. Each coordinate has the following properties:
	 *            <ul>
	 *            	<li><code>longitude</code> -  The longitude, as a decimal number.</li>
	 *            	<li><code>latitude</code> -  The latitude, as a decimal number.</li>            	
	 *            </ul>     
	 * @param {object} [options] Optional parameters.
	 * @param {string} [options.confidenceLevel] Has three possible values:
	 *            		<ul>
	 *            			<li><code>low</code> -  The coordinate lies within the polygon. Accuracy is not taken into account.</li>
	 *            			<li><code>medium</code> -   The coordinate lies within the polygon at approximately a 70% confidence interval. Accuracy is taken into account.</li>
	 *            			<li><code>high</code> -   The coordinate lies within the polygon at approximately a 95% confidence interval. Accuracy is taken into account.</li>            		
	 *            		</ul>
	 *            		<br>
	 *            		The default value is <code>low</code>.
	 * @param {number} [options.bufferZoneWidth]  The buffer zone width is measured in meters. It increases the size of the polygon in all directions by this amount. Negative values decrease the polygon's size. The default value is 0.
	 * @returns The value <code>true</code> is returned if the coordinate lies within the polygon, at the given level of confidence. The dimensions of the polygon used in this check incorporate any changes specified for the <code>options.bufferZoneWidth</code> parameter.
	 * @methodOf WL.Geo#
	 */	
	this.isInsidePolygon = function(coordinate, polygon, options) {};
	
	/**
	 * Returns a Boolean value based on whether a coordinate lies outside a polygon, based on a given level of confidence.
	 * 
	 * 
	 * @param {object} coordinate The coordinate.
	 * @param {number} coordinate.longitude The longitude, as a decimal number.
	 * @param {number} coordinate.latitude The latitude, as a decimal number.
	 * @param {number} [coordinate.accuracy]  The accuracy of the coordinate. The default value is 0.
	 * @param {object[]} polygon The <code>polygon</code> parameter consist of an array of coordinates. Each coordinate has the following properties:
	 *            <ul>
	 *            	<li><code>longitude</code> -  The longitude, as a decimal number.</li>
	 *            	<li><code>latitude</code> -  The  latitude, as a decimal number.</li>            	
	 *            </ul>     
	 * @param {object} [options] Optional parameters.
	 * @param {string} [options.confidenceLevel] Has three possible values:
	 *            		<ul>
	 *            			<li><code>low</code> -  The coordinate lies outside the polygon. Accuracy is not taken into account.</li>
	 *            			<li><code>medium</code> -   The coordinate lies outside the polygon at approximately a 70% confidence interval. Accuracy is taken into account.</li>
	 *            			<li><code>high</code> -   The coordinate lies outside the polygon at approximately a 95% confidence interval. Accuracy is taken into account.</li>            		
	 *            		</ul>
	 *            		<br>
	 *            		The default value is <code>low</code>.
	 * @param {number} [options.bufferZoneWidth]  The buffer zone width is measured in meters. It increases the size of the polygon in all directions by this amount. Negative values decrease the polygon's size. The default value is 0.
	 * @returns The value <code>true</code> is returned if the coordinate lies outside the polygon, at the given level of confidence. The dimensions of the polygon used in this check incorporate any changes specified for the <code>options.bufferZoneWidth</code> parameter.
	 * @methodOf WL.Geo#
	 */		
	this.isOutsidePolygon = function(coordinate, polygon, options) {};
};

__WL.prototype.Geo = new __WLGeo;

WL.Geo = new __WLGeo;