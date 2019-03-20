/** ****************************************************************************************************
 * File: index.js
 * Project: boilerplate-leaflet-map
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 23-Jan-2019
 *******************************************************************************************************/
'use strict';

import '@babel/polyfill';
import 'leaflet/dist/leaflet.css';
import './css/main.scss';
import $ from 'jquery';

import Map from './Map';

$( document ).ready(
	() => {
		Map.init();
	}
);
