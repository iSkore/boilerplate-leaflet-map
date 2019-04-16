/** ****************************************************************************************************
 * File: Map.js
 * Project: boilerplate-leaflet-map
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 19-Feb-2019
 *******************************************************************************************************/
'use strict';

import L from 'leaflet';
import $ from 'jquery';

import LayerControl from './LayerControl';

class Map
{
	constructor()
	{
		this.map = L.map( 'map', {
			renderer: L.svg(),
			minZoom: 0,
			maxZoom: 25
		} );

		this.map.setView( [ 0, 0 ], 2 );

		this.layerControl = new LayerControl( this.map, LayerControl.POSITION.TR );
	}

	init()
	{
		this.registerEvents();
		this.addBasemap();
	}

	registerEvents()
	{
		this.map.on( 'click', e => {
			const latlng = this.map.mouseEventToLatLng( e.originalEvent );
			alert( `Lat: ${ latlng.lat }\nLng: ${ latlng.lng }` );
		} );
	}

	addBasemap()
	{
		this.layerControl
			.addBaseLayer(
				'OpenStreetMap',
				L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' ),
				false
			);

		this.layerControl
			.addBaseLayer(
				'Google Street',
				L.tileLayer( 'http://www.google.com/maps/vt?x={x}&y={y}&z={z}' ),
				false
			);

		this.layerControl
			.addBaseLayer(
				'Google Satellite',
				L.tileLayer( 'http://www.google.com/maps/vt?lyrs=s&x={x}&y={y}&z={z}', {
					maxZoom: 25,
					maxNativeZoom: 20
				} ),
				true
			);
	}
}

export default new Map();
