/** ****************************************************************************************************
 * File: LayerControl.js
 * Project: boilerplate-leaflet-map
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 23-Jan-2019
 *******************************************************************************************************/
'use strict';

import L from 'leaflet';

class LayerControl
{
	constructor( map, position = LayerControl.POSITION.TL )
	{
		if( !( position === LayerControl.POSITION.TL ||
			position === LayerControl.POSITION.TR ||
			position === LayerControl.POSITION.BL ||
			position === LayerControl.POSITION.BR ) ) {
			throw new Error( 'Position must be typeof LayerControl.POSITION' );
		}
		
		this.map = map;
		
		this.baseLayers    = {};
		this.overlayLayers = {};
		
		this.control = L.control.layers(
			this.baseLayers,
			this.overlayLayers,
			{
				position,
				collapsed: true
			}
		);
		
		this.control.addTo( this.map );
	}
	
	addBaseLayer( name, layer, addToMap = false )
	{
		this.baseLayers[ name ] = layer;
		this.control.addBaseLayer( layer, name );
		
		if( addToMap ) {
			layer.addTo( this.map );
		}
	}
}

LayerControl.POSITION = {
	TL: 'topleft',
	TR: 'topright',
	BL: 'bottomleft',
	BR: 'bottomright'
};

export default LayerControl;
